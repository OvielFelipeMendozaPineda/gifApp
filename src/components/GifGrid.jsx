import { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifts'
import { GifGridItem } from './GifGridItem'
import { useFetchGifs } from '../hooks/useFetchGifs'


export const GifGrid = ({ category }) => {
    const { images, isLoading } = useFetchGifs(category)

    return (
        <>
            <h3 className='mx-5 my-10 font-medium text-5xl text-white'>{category}</h3>
            {
                <ol className='flex flex-wrap justify-between'>
                    {images.map(img => (
                        <GifGridItem
                            key={img.id}
                            {...img}
                        />
                    ))}
                </ol>
            }
        </>
    )
}
