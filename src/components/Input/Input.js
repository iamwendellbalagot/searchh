import React, {useState} from 'react';
import {useHistory, useLocation} from 'react-router-dom';
import './Input.css';
const Input = () => {
    const history = useHistory();
    const [query, setQuery] = useState('');

    const handleSubmit = (event) =>{
        event.preventDefault();
        if(history.location.pathname !== '/search'){
            history.push('/search');
            console.log('SEARCH')
            setQuery('')
        }
        
    }

    return (
        <div className='input'>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='Search...' value={query} onChange={(e) => setQuery(e.target.value)} />
                <button type='submit'>Search</button>
            </form>
        </div>
    )
}
export default Input;
