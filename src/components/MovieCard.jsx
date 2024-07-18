import data from "./movies.cjs";

export default function MovieCard() {
    return (
        <>
            {data.map((content) => {
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