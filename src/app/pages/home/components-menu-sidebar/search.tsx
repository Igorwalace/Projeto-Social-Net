import React from 'react'

//icons lucide
import { SearchIcon } from 'lucide-react';

const Search = () => {
    return (
        <div className="flex items-center gap-3" >
            <span><SearchIcon /></span>
            <div className="font-medium">
                <h1>Search</h1>
            </div>
        </div>
    )
}

export default Search
