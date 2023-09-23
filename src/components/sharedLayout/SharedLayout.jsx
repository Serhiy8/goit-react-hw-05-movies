import { Outlet } from 'react-router-dom';
import {
  List,
  StyledLink,
  HeaderStyled,
  Container,
} from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <Container>
      <HeaderStyled>
        <nav>
          <div>
            <List>
              <li>
                <StyledLink to="/">Home</StyledLink>
              </li>
              <li>
                <StyledLink to="/movies">Movies</StyledLink>
              </li>
            </List>
          </div>
        </nav>
      </HeaderStyled>
      <Outlet />
    </Container>
  );
};

export default SharedLayout;
