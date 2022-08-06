import { useState } from 'react';
import Proptypes from "prop-types";

export const AddCategory = ( { onNewCategory } ) => {

 const [inputValue, setInputValue] = useState('')  
 
 const onChangeInput = ({ target }) => {
        setInputValue(target.value);
 }

 const onSubmit = (event) => {
        event.preventDefault();

        if (inputValue.trim().length <= 1) return;

        onNewCategory( inputValue.trim() );
        setInputValue('');
 }
 
  return (
    <form onSubmit={ onSubmit } aria-label="form">
        <input 
            type="text" 
            placeholder="Buscar gif" 
            value={inputValue} 
            onChange={ onChangeInput }
        />  
    </form>
    
  )
}

AddCategory.propTypes = {
  onNewCategory: Proptypes.func.isRequired,
}
