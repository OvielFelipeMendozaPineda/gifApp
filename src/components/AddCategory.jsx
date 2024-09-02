import React, { useState } from 'react'

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setinputValue] = useState('One Punch')

    const onInputChange = ({ target }) => {
        console.log(inputValue)
        setinputValue(target.value)
    }
    const onSubmit = (e) => {
        e.preventDefault()
        if (inputValue.trim().length < 1) return
        setCategories(categories => [...categories, inputValue])
        setinputValue('')
    }

    return (
        <>
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    placeholder='Buscar gift'
                    value={inputValue}
                    onChange={onInputChange}
                />
            </form>

        </>
    )
}


