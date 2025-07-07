import { ThumbForm, FormSearch, FormInput, FormButton } from './moviesLayout.styled'
import MoviesList from '../moviesList/MoviesList'

const MoviesLayout = ({inputValue, movies, notFound, onChange, onSubmit }) => {
    return(
    <ThumbForm>
      <FormSearch onSubmit={onSubmit}>
        <FormInput
          type="text"
          placeholder="Search"
          value={inputValue}
          onChange={onChange}
        />
        <FormButton type="submit">Search</FormButton>
      </FormSearch>
      {notFound ? (
        <div>Nothing was found for your request.</div>
      ) : (
        <MoviesList dataMovies={movies} />
      )}
    </ThumbForm>)
}

export default MoviesLayout;