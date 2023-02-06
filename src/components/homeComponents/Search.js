import { useState } from 'react';
import './Search.css';
import { BiSearchAlt2 } from "react-icons/bi";

function Search (){
    const[search, setSearch] = useState('');
 
    const changeHandler = (e) => {
        setSearch(e.target.value)
    };
    return (
        <span className='search'>
            <BiSearchAlt2 size="2em" color="#DA7635" />
            <input
                type='text'
                value={search}
                onChange={changeHandler}
                placeholder='Search for a recipe!'
            />
        </span>
    )
}
export default Search;