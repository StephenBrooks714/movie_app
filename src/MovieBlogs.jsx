import NavBar from "./components/NavBar"
import blogs from "./helpers/blogs.cjs";
function Apps() {

    return (
        <>
            <header className={"intro"}>
                <NavBar />
                <div className={"container"}>
                    <section className={"row justify-content-center align-items-center"} style={{paddingTop: "40px", paddingBottom: "20px"}}>
                        <div className={"col-lg-10 text-center"}>
                            <h1 className={"display-3 mb-2 fw-bold"}>Movie Articles</h1>
                            <p className={"lead fw-bold"}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquam cupiditate deserunt ducimus ea eos fuga fugit illo iusto, maxime nostrum omnis qui quibusdam ratione reiciendis rerum similique temporibus ullam.
                            </p>
                        </div>
                    </section>
                    <section className={"row justify-content-center text-center align-items-center"}>
                        {blogs.map ((blog) => (
                            <div className={"col-lg-3 fadeIn"} key={blog.title} style={{margin: "10px"}}>
                                <a href={blog.link} target={"_blank"}>
                                    <div className={"card"}>
                                        <div className={"card-body"}>
                                            <h5 className={"card-title"}>{blog.title}</h5>
                                            <p className={"card-text"}>{blog.description}</p>
                                            <img src={blog.image} className={"card-img"} alt={blog.title}/>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        ))}
                    </section>
                </div>
            </header>
        </>
    )
}

export default Apps
