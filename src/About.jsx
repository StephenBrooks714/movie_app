import NavBar from "./components/NavBar"
function About() {

    return (
        <>
            <header className={"intro"}>
                <NavBar />
                <div className={"container"}>
                    <section className={"row justify-content-center align-items-center"} style={{paddingTop: "110px", paddingBottom: "110px"}}>
                        <div className={"col-lg-8 text-center"}>
                            <h1 className={"display-4 mb-2 fw-bold"}>About Movie App</h1>
                            <p className={"lead fw-bold"}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias dolor error
                                explicabo fugiat id, illo, ipsam ipsum laudantium minus mollitia nemo nobis officiis
                                possimus quaerat saepe sint, tempora veniam!
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos iste provident quasi
                                soluta ullam. Aliquam, delectus dignissimos error explicabo, facilis fuga iure
                                laudantium, libero nulla obcaecati praesentium provident soluta voluptas.
                            </p>
                        </div>
                    </section>
                </div>
            </header>
        </>
    )
}

export default About
