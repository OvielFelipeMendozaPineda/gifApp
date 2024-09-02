import { useState } from "react"
import { AddCategory } from "./components/AddCategory"
import { GifGrid } from "./components/GifGrid"


export const GifApp = () => {

  const [categories, setCategories] = useState(['One Punch'])

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return
    setCategories(cat => [...categories, newCategory])
  }

  return (
    <div>
      <h1 className="w-full text-center text-4xl py-5 font-semibold text-white"> Gif Browser </h1>
      <AddCategory
        onNewCategory={onAddCategory}
      />
      {categories.map(cat => (
        <GifGrid
          key={cat}
          category={cat} />
      ))}
    </div>
  )
}
