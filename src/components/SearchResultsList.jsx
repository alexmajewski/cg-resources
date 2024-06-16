import React from 'react'
import { SearchResult } from './SearchResult.jsx'
import './SearchResultsList.css'

export const SearchResultsList = ({ results }) => {
    return <div className="results-list">
        {
            results.map((result, index) => {
                return <SearchResult result={result} key={index}/>
            })
        } 
    </div>
}