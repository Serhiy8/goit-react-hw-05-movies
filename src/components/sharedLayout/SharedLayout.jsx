import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import {
  List,
  StyledLink,
  HeaderStyled
} from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <>
      <HeaderStyled>
        <div className='container'>
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
        </div>
      </HeaderStyled>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
