import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Box from './Box';


const Action = () => {

    const [state, setstate] = useState([])
    const [single, setSingle] = useState(null)

    useEffect(() => {
        fetch("https://omdbapi.com/?s=Avengers&apikey=74e9a1d2")
            .then(res => res.json())
            .then(data => setstate(data.Search))
            .catch(err => {
                console.log(err)
            })
    }, [])




    const handleclick = (id) => {
        console.log(id)
        fetch(`https://omdbapi.com/?i=${id}&apikey=74e9a1d2`)
            .then(res => res.json())
            .then(data => setSingle(data))


    }



    return (
        <div>
            <div className="d-flex text-light">
                {state && state.map((e, i) => {

                    return (
                        <div onClick={() => handleclick(e.imdbID)} className="m-3" key={i}>
                            <img src={e.Poster} alt="[+]" />
                            <p>{e.Title}</p>
                            <small>{e.Year}</small>
                        </div>
                    )
                })}
            </div>
            {single && <Box className="text-light" data={single} />}
        </div>
    )
}

export default Action

