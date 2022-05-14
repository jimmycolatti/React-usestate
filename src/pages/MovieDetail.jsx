import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"

const MovieDetail = () => {
  const { movieId } = useParams()
  const [movieData, setMovieData] = useState([])

  const getMovieDetails = async () => {
    const { data } = await axios.get(
      `http://www.omdbapi.com/?i=${movieId}&apikey=152fcc9e`
    )
    setMovieData(() => data)
  }

  useEffect(() => {
    try {
      getMovieDetails()
    } catch (error) {
      console.log(error)
    }
  }, [])

  return (
    <div key={movieData.imdbID}>
      <p>Actors: {movieData.Actors}</p>
      <p>Plot: {movieData.Plot}</p>
    </div>
  )
}

export default MovieDetail
