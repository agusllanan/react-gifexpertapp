import React, {useState} from 'react'
import { AddCategory } from './AddCategory';
import { GifGrid } from './GifGrid';

const GifExpertAPP = () => {

    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball']
    const [categories, setCategories] = useState(['Invincible']);

    // const handleAdd = () => {
    //     setcategories( cats =>[...cats, 'Hunter'] );
    // }
    

    return (
        <>
            <h2> GifExpertAPP </h2>
            <AddCategory setCategories = {setCategories} />
            <hr />

            
        <ol>
            { 
            categories.map( category => (
                <GifGrid
                    key = { category }
                    category = { category } />
                ))
            }
        </ol>


        </>
    )
}

export default GifExpertAPP
