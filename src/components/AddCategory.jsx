import React, { useState } from 'react'

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setinputValue] = useState('One Punch')

    const onInputChange = ({ target }) => {
        setinputValue(target.value)
    }
    const onSubmit = (e) => {
        e.preventDefault()
        const cleanValue = inputValue.trim()
        if (!cleanValue) return
        onNewCategory(cleanValue)
        setinputValue('')
    }

    return (
        <>
            <form onSubmit={onSubmit}>
                <input className='px-5 py-2 text-black w-full '
                    type="text"
                    placeholder='Buscar gift'
                    value={inputValue}
                    onChange={onInputChange}
                />
            </form>
 
        </>
    )
}


