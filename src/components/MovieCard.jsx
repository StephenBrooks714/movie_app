import data from "./movies.cjs";

export default function MovieCard() {
    return (
        <>
            {data.map((images) => {
                return (
                    <>
                        <div className={"col-lg-3 fadeIn"} style={{margin: "10px"}}>
                            <div className={"card hover-zoom p-3"}>
                                <img
                                    src={images.image}
                                    className={"card-img"}
                                    alt={images.title}
                                />
                                <div className={"card-body"}>
                                    <h5 className={"card-title"}>{images.title}</h5>
                                    <p className={"card-text"}>{images.year}</p>
                                </div>
                            </div>
                        </div>
                    </>
                );
            })}
        </>
    )
}