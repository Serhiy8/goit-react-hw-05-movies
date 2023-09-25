import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
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
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default SharedLayout;
