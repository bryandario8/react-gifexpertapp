import React, {useState, useEffect} from 'react'
import { GifGridItem } from './GifGridItem';
import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {

    // const [images, setImages] = useState([]);
    const { data:images, loading } = useFetchGifs();
    // console.log(state)
    

    
    return (
        <>
            <h3> { category } </h3>

            {/* { loading ? 'Cargando...' : 'Data cargada'} */}
            { loading && <q className="animate__animated animate__flash">Loading</q>}

            <div className="card-grid">
                
                {
                    images.map( img => (
                        <GifGridItem 
                            key={img.id}
                            // img={img}
                            {...img}
                        />
                    ))
                }
            </div>
        </>
    )
}
