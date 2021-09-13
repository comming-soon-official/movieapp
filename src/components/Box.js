import React from 'react'

const Box = ({ data }) => {
    let dataTemp = data;
    delete dataTemp.Response
    delete dataTemp.Website

    if (dataTemp.Poster === "N/A") { data.Poster = "https://placeholder.pics/svg/250x300/DEDEDE/555555/Poster%20Not%20Found"; }
    return (
        <div className="text-light boxs">

            <div>
                {!data.Response ? Object.keys(dataTemp).map((e, i) => {
                    return <span key={i}>
                        {e !== "Poster" && e !== "Ratings" ? <p className="movie-Info-Container" key={i}>{e} : <span className="info">{Object.values(data)[i]}</span></p> : <></>}
                    </span>
                }) : <></>}
            </div>
        </div>
    )
}

export default Box
