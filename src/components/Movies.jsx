// import id from "./MovieCard.jsx";
import {Link} from "react-router-dom";
export default function Movies(e) {
    const id = e.currentTarget.id

    function data(id) {
        return id
    }

    return (
        <>
            <div className={"col-lg-3 fadeIn"} key={id} style={{margin: "10px"}}>
                <Link to={"/movies/" + id} className={"text-decoration-none"}>
                    <div className={"card hover-zoom p-3"}>
                        <img
                            src={data[id].image}
                            className={"card-img"}
                            alt={data[id].title}
                        />
                        <div className={"card-body"}>
                            <h5 className={"card-title"}>{data[id].title}</h5>
                            <p className={"card-text"}>{data[id].year}</p>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )

}