'use client'
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import Footer from './components/layout/footer';
import Header from './components/layout/header';

const GlobalStyle = createGlobalStyle`
  ${reset}
  /* 이곳에 추가적인 전역 스타일을 설정할 수 있습니다. */
`;

export default function Layout() {
  return (
    <div>
      <Header />
      <h1>Layout by soozi ddd</h1>
      <Footer />
    </div>
  );
}
