import { useState } from "react"
import { AddCategory } from "./components/AddCategory"


export const GifApp = () => {

  const [categories, setCategories] = useState(['One Punch', 'Dragon Ball'])

  const onAddCategory = () => {
    setCategories([...categories, 'Valorant'])
  }

  return (
    <div>
      <h1> Gif Browser </h1>
      <AddCategory setCategories={ setCategories } />
      <ol>
        {categories.map(cat => (
          <li key={cat}> {cat} </li>
        ))}
      </ol>
    </div>
  )
}
