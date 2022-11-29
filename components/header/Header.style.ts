import styled from 'styled-components';
import { StyledMainHeading } from '../../styles/globalStyle';

export const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 3rem;
  .header__slash {
    margin-right: 1rem;
    font-weight: 700;
    font-size: 1.8rem;
    color: ${({ theme }) => theme.colors.brown};
  }
`;

export const StyledHero = styled(StyledMainHeading)`
  font-size: 2rem;
  margin-bottom: 0.75rem;
  width: fit-content;
  margin-bottom: 0;
  color: ${({ theme }) => theme.colors.blueGrey};
  font-weight: 500;
`;
