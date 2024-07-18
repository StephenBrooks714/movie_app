import NavBar from "./components/NavBar";
import MovieCard from "./components/MovieCard";
function App() {

    function handleLogout(){
        localStorage.removeItem("token")
        window.location.href = "/"
    }

    return (
        <>
            <header className={"intro"}>
                <NavBar />
                <section className={"row justify-content-center align-items-center"}>
                    <div className={"col-lg-10 mb-4 text-center"}>
                        <h1 className={"display-3 fw-bold"}>Welcome to Dashboard</h1>
                        <button className={"btn btn-primary"} onClick={handleLogout}>Logout</button>
                    </div>
                    <MovieCard/>
                </section>
            </header>
        </>
    )
}

export default App
