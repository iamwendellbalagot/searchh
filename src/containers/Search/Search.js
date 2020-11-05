import React, {useEffect} from 'react';
import {useStateValue} from '../../stateProvider';
import {useHistory} from 'react-router-dom';
import request from '../../request';
import './Search.css';

import Input from '../../components/Input/Input';
// import {response as searchResults} from '../../response';

const Search = () => {
    const history = useHistory();
    const [{query, searchResults}, dispatch] = useStateValue();

    useEffect(() => {
        if(query){
            fetch(request(query))
            .then(res => res.json())
            .then(res =>{
                dispatch({
                    type: 'SET_RESULTS',
                    searchResults: res
                })
            }).catch(err => console.log(err))
        }else {
            fetch(request('google'))
            .then(res => res.json())
            .then(res =>{
                dispatch({
                    type: 'SET_RESULTS',
                    searchResults: res
                })
            }).catch(err => console.log(err))
        }
    }, [query])

    return (
        <div className='search'>
            <div className='search__header'>
                <img onClick={() => history.push('/')} src='logo.png' alt='Logo' />
                <div>
                    <Input />
                </div>
            </div>
            <div className='search__duration'>
                <span>About {searchResults?.searchInformation.formattedTotalResults} results ({searchResults?.searchInformation.formattedSearchTime}) seconds</span>
            </div>
            <div className='search__body'>
                {searchResults?.items.map(link =>(
                    <div key={link.cacheId + link.title} className='search__item'>
                        <a className='search__item__displayLink' href={link.displayLink}>{link.displayLink}</a>
                        <a className='search__item__link' href={link.formattedUrl}>{link.title}</a>
                        <p>{link.snippet}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Search;
