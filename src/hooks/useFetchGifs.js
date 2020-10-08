import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs'

export const useFetchGifs = ( category ) => {
    
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    // para evitar que el componente completo se renderize
    // cada vez que hace un cambio
    // ES decir, para que no vuelva a consultar el endpoint
    // No pueden ser async
    useEffect( () => {
        getGifs( category )
            .then( imgs => {

                setState({
                        data: imgs,
                        loading: false
                  
                });

            } );
    }, [ category ])  // Areglo de dependencia es necesario para lograrlo

    return state;
}