import styled from 'styled-components';
import { StyledButton } from '../../styles/globalStyle';

export const StyledReviews = styled.section`
  display: flex;
  overflow-x: hidden;
  position: relative;
  min-height: 100%;
  max-width: ${({ theme }) => theme.smallMaxWidth};
  margin: 0 auto;
`;

export const StyledReviewArrowButton = styled(StyledButton)`
  padding: 0;
  position: absolute;
  top: 20%;
  font-size: 1.5rem;
  background-color: ${({ theme }) => theme.colors.primaryDarkBlue};
  color: ${({ theme }) => theme.colors.white};
  &:hover {
    background-color: ${({ theme }) => theme.colors.brown};
  }
  &.left {
    left: 0;
    margin-left: 30px;
  }
  &.right {
    right: 0;
    margin-right: 30px;
  }
`;
