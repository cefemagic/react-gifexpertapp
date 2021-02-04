import React, { useState } from 'react'
import PropTypes from 'prop-types'; 

export const AddCategory = ( { setCategories}) => {

    const [inputValue, setinputValue] = useState('')

    const handleInputChange = (e) =>{

       // console.log(e.target.value)
        setinputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        //console.log('submit hecho')
        console.log(1)
        //setCategories([...Categories,'piue'])

        if (inputValue.trim().length > 0){
            setCategories(cats => [inputValue, ...cats])
            setinputValue('')
        }
    }
    return (
        <form onSubmit={ handleSubmit }>
            <input
                type="text"
                value={ inputValue}
                onChange={ handleInputChange}
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
