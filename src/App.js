import { useEffect, useState } from "react";
import Movies from "./components/Movies";

const MOVIES_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=02713d88eef086d879aacd9ec98c5aa3&page=1"

const SEARCH_API = "https://api.themoviedb.org/3/search/movie?&api_key=02713d88eef086d879aacd9ec98c5aa3&query="

function App() {

  const [movies, setMovies] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch(MOVIES_API)
      .then((res) => res.json())
      .then((response) => {
        setMovies(response.results)
        console.log(response.results)
      })
  }, [])

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch(SEARCH_API + search)
      .then((res) => res.json())
      .then((response) => {
        setMovies(response.results)
      })
  }

  return (
    <>

      <form className="search" onSubmit={handleSubmit}>
        <input
          type={"text"}
          placeholder="Search..."
          value={search}
          onChange={handleChange}
          
        />
      </form>

      <div className="App">
        {
          movies.length > 0 && movies.map((movie) => (
            <Movies movie={movie} key={movie.id} />
          ))
        }
      </div>
    </>
  );
}

export default App;
