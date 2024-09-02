import { useState, useEffect } from "react"
import { getGifs } from "../helpers/getGifts"

export const useFetchGifs = (category) => {

    const [images, setimages] = useState([])
    const [isLoading, setisLoading] = useState(true)

    useEffect(() => {
        getGifs(category).then(data => setimages(data))
    }, [])

    return {
        images,
        isLoading
    }
}
