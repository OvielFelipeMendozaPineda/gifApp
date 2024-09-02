import { useEffect } from 'react'
import { getGifs } from '../helpers/getGifts'


export const GifGrid = ({ category }) => {

    useEffect(() => {

        getGifs(category)
    }, [])


    useEffect
    return (
        <>
            <h3 className='mx-5 my-10 font-medium text-5xl text-white'>{category}</h3>
            {

            }
        </>
    )
}
