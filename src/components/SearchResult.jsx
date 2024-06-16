import React from 'react'
import './SearchResult.css'

export const SearchResult = ({ result}) => {
    return <div className="search-result">
        <h3><a href={result.link} target="_blank">{result.title}</a></h3>
        <p className="search-result-author">{result.author}</p>
        </div>
}