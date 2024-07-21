// import data from helpers folder and import data from discoverMovies.cjs
import movieData from "../helpers/discoverMovies.cjs";
// import data from discoverMovies.cjs
import {useEffect} from "react";

export default function DataList() {
    // const baseImageUrl = 'https://image.tmdb.org/t/p/original';
    const apiUrl = import.meta.env.VITE_URLVITE_URL;
    const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;
    useEffect (() => {
        for (let i = 0; i < movieData.length; i++) {
            movieData[i].image = `${apiUrl}${movieData[i].image}${apiKey} `
        }
    })

    return (
        <>
            {movieData.map((content) => {
                return (
                    <>
                        <div className={"col-lg-3 fadeIn"} style={{margin: "10px"}}>
                            <div className={"card hover-zoom p-3"}>
                                <img
                                    src={content.image}
                                    className={"card-img"}
                                    alt={content.title}
                                />
                                <div className={"card-body"}>
                                    <h5 className={"card-title"}>{content.title}</h5>
                                    <p className={"card-text"}>{content.year}</p>
                                </div>
                            </div>
                        </div>
                    </>
                );
            })}
        </>
    )
}
