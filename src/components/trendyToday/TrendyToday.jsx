import { List, ListItem, StyledLink, TextTitle, TextVote, Thumb } from "./trendyToday.styled";

const TrendyToday = ({loading, data, location}) => {
     return (
    <>
      {loading ? (
        <>
          <h1>Trending today</h1>
          {data ? (
            <List>
              {data.map(el => (
                <ListItem key={el.id}>                  
                  <StyledLink to={`movies/${el.id}`} state={{ from: location }}>
                  <img src={`https://image.tmdb.org/t/p/w200/${el.backdrop_path}`} alt="" width='208px'/>
                  <Thumb>                    
                    <TextTitle>{el.title}</TextTitle>
                    <TextVote>Vote Everage: {el.vote_average ? `${el.vote_average}` : 'Unknown'}</TextVote>
                  </Thumb>            
                  </StyledLink>
                </ListItem>
              ))}
            </List>
          ) : (
            <div>Something went wrong. Try to reload.</div>
          )}
        </>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
}

export default TrendyToday;