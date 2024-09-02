import { useState } from "react"

export const GifApp = () => {

  const [categories, setcategories] = useState(['One Punch', 'Dragon Ball'])

  const onAddCategory = () => {
    setcategories([...categories, 'Valorant'])
  }

  return (
    <div>
      <h1> Gif Browser </h1>
      <button onClick={onAddCategory}> Agregar categoria</button>
      <ol>
        {categories.map(cat => (
          <li> {cat} </li>
        ))}
      </ol>
    </div>
  )
}
