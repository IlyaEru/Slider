import styled from 'styled-components';
import { StyledButton, StyledContainer } from '../../styles/globalStyle';

export const StyledReviewView = styled(StyledContainer).attrs({
  as: 'article',
})`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 100%;
  position: absolute;
  opacity: 0;
  transition: all 0.3s ease-in-out;
  &.active-slide {
    opacity: 1;
  }
  &.prev-slide {
    transform: translateX(-100%);
  }
  &.next-slide {
    transform: translateX(100%);
  }
  .review-view__review-img {
    border-radius: 50%;
    object-fit: cover;
    box-shadow: ${({ theme }) => theme.darkShadow};
    border: 04px solid ${({ theme }) => theme.colors.primaryBlue};
    margin-bottom: 1rem;
  }
  .review-view__quote-icon {
    color: ${({ theme }) => theme.colors.brown};
    margin-top: 1rem;
    font-size: 3rem;
  }
`;

export const StyledReviewName = styled.h3`
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.brown};

  margin-bottom: 0.25rem;
`;
export const StyledReviewTitle = styled.h4`
  margin-bottom: 0.75rem;
  color: ${({ theme }) => theme.colors.blueGrey};
`;

export const StyledReviewQuote = styled.p`
  color: ${({ theme }) => theme.colors.darkGrey};
  line-height: 2;
  text-align: center;
  margin: 2rem 1rem 0;
`;
