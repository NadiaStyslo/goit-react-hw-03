//import css from './SearchBox.module.css'
import { useId } from 'react'

const SearchBox = ({value, onChange}) => {
    const userId = useId();
    return (
        <div>
           <label htmlFor={userId}>Faind contacts by name</label>
            <input id={userId} value={value} onChange={evt => onChange(evt.target.value)}/>
        </div>
    );  
}

export default SearchBox