import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'
// import PropTypes from 'prop-types'

const GifExpertApp = () => {

    // No puedo agregar valores en un array
    // const categories = ['One Punch', 'Samurai X', 'Pokemon'];

    const [categories, setCategories] = useState(['One Punch'])

    // const handledAdd = () => {
    //     // setCategories( [...categories, 'X Men'] );
    //     setCategories( c => [...c, 'X Men'])
    // }

    return (
        <>
          <h2 className="animate__animated animate__bounce">GifExpertApp</h2>  
          <AddCategory setCategories={setCategories}/>
          <hr />

          <ol>
              { 
                // categories.map( (category, i) => {
                // return <li key={ i }>category</li>
                // } )  // No hace falta el index
                categories.map( (category) => (
                    <GifGrid
                        key={category}
                        category={category}
                    />
                ))
              }
          </ol>
        </>
    )
}



export default GifExpertApp
