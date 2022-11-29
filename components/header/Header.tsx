import { StyledHeader, StyledHero } from './Header.style';

export default function Header() {
  return (
    <StyledHeader>
      <span className="header__slash">/</span>
      <StyledHero>Reviews</StyledHero>
    </StyledHeader>
  );
}
