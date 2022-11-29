import styled from 'styled-components';
import { StyledContainer } from '../../styles/globalStyle';

export const StyledLayout = styled(StyledContainer)`
  min-height: 100vh;
  padding-top: 5rem;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  display: grid;
  grid-template-rows: auto 1fr;
`;
