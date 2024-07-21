import NavBar from "./components/NavBar"
// import MovieCard from "./components/MovieCard.jsx";
import {useState} from "react";
import MovieCard from "./components/MovieCard.jsx";
function App() {

    const [data, setData] = useState([])
    const {isFound} = useState(false)

    function findMovie() {
        fetch("http://localhost:5173/movies")
            .then(response => response.json())
            .then(data => {
                setData(data)
            })
            .catch(error => {
                console.log(error)
            })
    }

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
                    <div className={"form-search"}>
                        <form>
                            <input type="search" onChange={ (e) => console.log(e.target.value)} placeholder={"Enter movie title"} className={"form-control"}/>
                            <button onClick={findMovie} className={"form-btn btn-primary"}>search</button>
                        </form>
                    </div>
                </div>
                {isFound &&
                    data.map ((movie) => {
                        return (
                            <>
                                <h4>{movie.title}</h4>
                                <p>{movie.year}</p>
                            </>
                        )
                    })
                }
                {!isFound &&
                    <MovieCard/>
                }
            </section>
        </header>
    </>
  )
}

export default App
