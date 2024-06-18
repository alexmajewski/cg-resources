import React from 'react'
import './SearchResult.css'

export const SearchResult = ({ result}) => {
    const tagsToShow = result.tags.slice(3) 

    return <div className="search-result">
        <h3><a href={result.link} target="_blank">{result.title}</a></h3>
        <p className="search-result-author">{result.author}</p>
        <p class="mono tags">{tagsToShow.join(', ')}</p>
        </div>
}