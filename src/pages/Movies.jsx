import { useEffect, useState } from "react"
import Form from "../component/Form"
import axios from "axios"
import { Link } from "react-router-dom"

const Movies = () => {
  const [movies, setMovies] = useState([])
  const [moviesToSearch, setMoviesToSearch] = useState("Superman")

  const resultFromApi = async () => {
    const { data } = await axios.get(
      `http://www.omdbapi.com/?s=${moviesToSearch}&apikey=152fcc9e`
    )

    setMovies(() => data)
  }

  useEffect(() => {
    try {
      resultFromApi()
    } catch (error) {
      console.log(error)
    }
  }, [moviesToSearch])

  return (
    <div>
      <h2>Movies</h2>
      <Form setMoviesToSearch={setMoviesToSearch} />

      {movies.Search?.map((movie) => {
        return (
          <Link to={`${movie.imdbID}`}>
            <p>
              {" "}
              {movie.Title} - {movie.Year}
            </p>
          </Link>
        )
      })}
    </div>
  )
}

export default Movies
