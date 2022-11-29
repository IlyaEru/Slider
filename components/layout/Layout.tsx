import { ReactNode } from 'react';
import Header from '../header/Header';
import { StyledLayout } from './Layout.style';

interface Props {
  children?: ReactNode;
}

export default function Layout({ children, ...props }: Props) {
  return (
    <StyledLayout>
      <Header />
      <main {...props}>{children}</main>
    </StyledLayout>
  );
}
