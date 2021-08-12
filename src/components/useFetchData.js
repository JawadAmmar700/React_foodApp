
import React, { useState, useEffect } from 'react'

const useFetchData = (category) => {

    const [fetch_specific, setFetch_specific] = useState({});

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
            .then(res => res.json())
            .then(data => {
                setFetch_specific(data)
            })
            .catch(err => console.log(err))
    }, [])

    return fetch_specific
}


export default useFetchData;