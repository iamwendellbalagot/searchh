import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {useStateValue} from '../../stateProvider';
import './Input.css';
const Input = () => {
    const history = useHistory();
    const [{query}, dispatch] = useStateValue();
    const [queryItem, setQueryItem] = useState('');

    const handleSubmit = (event) =>{
        event.preventDefault();
        if(history.location.pathname !== '/search'){
            history.push('/search');
            dispatch({
                type: 'SET_QUERY',
                query: queryItem
            });
            console.log('SEARCH')
            setQueryItem('')
        }else{
            dispatch({
                type: 'SET_QUERY',
                query: queryItem
            });
        }
        
    }

    return (
        <div className='input'>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='Search...' value={queryItem} onChange={(e) => setQueryItem(e.target.value)} />
                <button type='submit'>Search</button>
            </form>
        </div>
    )
}
export default Input;
