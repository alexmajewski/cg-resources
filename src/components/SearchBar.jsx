import React, { useState, useEffect } from 'react'

import "./SearchBar.css"
import {data} from '../online-resources.js'

export const SearchBar = ({setResults}) => {
    const [input, setInput] = useState("")

    const filterData = (value) => {
        // console.log(data)
        const keywords = value.toLowerCase().split(" ").filter(word => word)

        const includeWords = keywords.filter(word => !word.startsWith('^'))
        const excludeWords = keywords.filter(word => word.startsWith('^')).map(word => word.substring(1))

        const results = data.filter((item) => {
            const includesAll = includeWords.every(word => item.tags.some(tag => tag.includes(word)));
            const excludesAll = excludeWords.every(word => !item.tags.some(tag => tag.includes(word)));

            return includesAll && excludesAll
            // return keywords.every(word => item.tags.includes(word))
        })
        setResults(results)
    }

    const handleChange = (value) => {
        setInput(value)
        filterData(value)
    }

    // Populate the page with results when it's first opened
    useEffect(() => {
        filterData("");
    }, []);

    return (
        <div>
            <div className="input-wrapper">
                <input 
                    placeholder="Type to filter..." 
                    value={input} 
                    onChange={(e) => handleChange(e.target.value)}></input>
            </div>
            <p className="mono hint">This search uses only tags. Search for things such as "vellum" or "vdb". To remove a tag/keyword add a ^ prefix (^redshift, ^simulation, etc..).</p>
        </div>
    )
}