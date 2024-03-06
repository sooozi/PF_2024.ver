'use client'

/* css import */
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import styles from '../src/style/common.module.scss';

/* icon import */
import FooterLayout from './components/layout/footer';
import HeaderLayout from './components/layout/header';

const GlobalStyle = createGlobalStyle`
  ${reset}
  /* 이곳에 추가적인 전역 스타일을 설정할 수 있습니다. */
`;

export default function Layout() {
  return (
    <div className={styles.bodyWrap}>
      <HeaderLayout />
      <h1>Layout by soozi</h1>
      <span>Layout by soozi</span>
      <span>Layout by soozi</span>
      <span>Layout by soozi</span>
      <span>Layout by soozi</span>
      <FooterLayout />
    </div>
  );
}
