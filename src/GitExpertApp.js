import { useState } from "react"
import {AddCategory} from './components/AddCategory'
import { GifGrid } from "./components/GifGrid"

export const GitExpertApp = () => {

    const [Categories, setCategories] = useState(['Peru'])

   /*  const handleAdd = () =>{
        //setCategories( [...Categories, 'Colombia'])
        setCategories(cats => [...cats, 'Bolivia'])
    } */

    return (
            <>
            <h2>GitExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr/>

            <ul>
                {
                    Categories.map((category) => (
                            <GifGrid 
                                key={category}
                                category={category}
                            />
                    ))
                }
            </ul>
            </>
    )
}

//export default GitExpertApp