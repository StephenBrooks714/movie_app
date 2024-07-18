import data from "./movies.cjs";
import {useEffect, useState} from "react";

export default function MovieCard() {
    const [images] = useState([]);
    useEffect(() => {
        for(let i = 0; i < data.length; i++) {
            data[i].image = `https://image.tmdb.org/t/p/w500${data[i].image}`
            images.push(data[i]);
            console.log(images);
        }
    }, [images]);
    function addToQueue() {
        document.getElementById("list").innerHTML += `<li>${images.title}</li>`
    }

    return (
        <>
            {data.map((images) => {
                return (
                    <>
                        <div className={"col-lg-3 fadeIn"} onClick={addToQueue} key={images.id} style={{margin: "10px"}}>
                            <div className={"card hover-zoom p-3"}>
                                <img
                                    src={images.image}
                                    className={"card-img"}
                                    alt={images.title}
                                />
                                <div className={"card-body"}>
                                    <h5 className={"card-title"}>{images.title}</h5>
                                    <p className={"card-text mb-2"}>{images.year}</p>
                                </div>
                            </div>
                        </div>
                    </>
                );
            })}
        </>
    )
}