import NavBar from "./components/NavBar"
import googlePlay from "./assets/google_play.png"
function Apps() {

    return (
        <>
            <header className={"intro"}>
                <NavBar />
                <div className={"container"}>
                    <section className={"row justify-content-center align-items-center"} style={{paddingTop: "170px", paddingBottom: "190px"}}>
                        <div className={"col-lg-8 text-center"}>
                            <h1 className={"display-4 mb-2 fw-bold"}>Our App Store</h1>
                            <p className={"lead fw-bold mb-2"}>
                                We have launched our new app in the play store, download it now and watch movies on the go!!!
                            </p>
                            <a href="https://play.google.com/store/apps/details?id=com.google.android.apps.photos&hl=en_US&pli=1"
                               target={"_blank"}
                               className={"btn btn-primary"}>
                                <img src={googlePlay} height={"30"} width={"100"} alt="Google Play Store"/>
                            </a>
                        </div>
                    </section>
                </div>
            </header>
        </>
    )
}

export default Apps
