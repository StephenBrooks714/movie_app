import NavBar from "./components/NavBar"
import MovieCard from "./components/MovieCard.jsx";
function App() {

  return (
    <>
        <header className={"intro"}>
            <NavBar />
            <section className={"row justify-content-center"}>
                <div className={"col-lg-10 mb-3 text-center"} style={{marginBottom: "3rem"}}>
                    <h1 className={"display-1 mb-2 fw-bold"}>Movie App</h1>
                    <p className={"lead fw-bold mb-3"}>
                        Create an account and explore our library of films that have been added
                        to our database. We made it easy for you to search for your favorite movies.
                    </p>
                </div>
                <MovieCard/>
            </section>
        </header>
    </>
  )
}

export default App
