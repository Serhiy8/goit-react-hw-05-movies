import { AiOutlineLeft } from 'react-icons/ai';
import { StyledBackLink } from './backLinkStyle.styled';

const BackLink = ({ to, children }) => {
  return (
    <StyledBackLink to={to}>
      <AiOutlineLeft size="20" />
      {children}
    </StyledBackLink>
  );
};

export default BackLink;
