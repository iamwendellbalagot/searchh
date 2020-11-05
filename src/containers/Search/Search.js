import React from 'react';
import './Search.css';

import Input from '../../components/Input/Input';
import {response as searchResults} from '../../response';

const Search = () => {
    return (
        <div className='search'>
            <div className='search__header'>
                <img src='logo.png' alt='Logo' />
                <div>
                    <Input />
                </div>
            </div>
            <div className='search__duration'>
                <span>About {searchResults.searchInformation.formattedTotalResults} results ({searchResults.searchInformation.formattedSearchTime}) seconds</span>
            </div>
            <div className='search__body'>
                {searchResults.items.map(link =>(
                    <div key={link.cacheId} className='search__item'>
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
