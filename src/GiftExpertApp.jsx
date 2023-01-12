import { useState } from "react"
import { AddCategory } from "./components/AddCategory"
import { GifGrid } from "./components/GifGrid"

export const GiftExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch'])

  const onAddCategory = ( newCategory ) => {

    if( categories.includes(newCategory) ) return;
    //categories.push('valorant');
    setCategories([newCategory, ...categories ])
  }

  return (
    <> 
        <h1>GiftExpertApp</h1> 

        <AddCategory 
        /* setCategories={setCategories} */
        onNewCategory={onAddCategory}
     />

        { 
          categories.map( category => (         
            <GifGrid 
              key={category}
              category={category}
            />
          )) 
        }
    </>
  )
}
