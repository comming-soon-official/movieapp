import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Box from './Box';


const Search = () => {

    const [data, setData] = useState([])
    const [input, setInput] = useState("")
    const [single, setSingle] = useState(null)


    const Getdata = (e) => {
        e.preventDefault()
        fetch(`https://omdbapi.com/?s=${input}&apikey=74e9a1d2`)
            .then(res => res.json())
            .then(data => setData(data.Search))
            .catch(err => {
                console.log(err)
            })
    }



    const handleclick = (id) => {
        console.log(id)
        fetch(`https://omdbapi.com/?i=${id}&apikey=74e9a1d2`)
            .then(res => res.json())
            .then(data => setSingle(data))


    }



    return (
        <div className="search">

            <div className="d-flex jutify-content-center">
                <form className="form-group w-50" onSubmit={Getdata}>
                    <input type="text" name="name" onChange={e => setInput(e.target.value)} />
                    <button className="btn btn-primary" type="submit">Getdata</button>
                </form>
            </div>

            <div className="d-flex text-light">
                {data && data.map((e, i) => {
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

export default Search

