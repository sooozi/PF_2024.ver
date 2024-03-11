'use client'

/* css import */
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import styles from '../src/style/common.module.scss';
import '../src/style/global.scss';

/* page import */
import FooterLayout from './components/layout/footer';
import HeaderLayout from './components/layout/header';
import SideNavLayout from './components/layout/sideNav';
import Home from './main/page';

const GlobalStyle = createGlobalStyle`
  ${reset}
  /* 이곳에 추가적인 전역 스타일을 설정할 수 있습니다. */
`;

export default function Layout() {
  return (
    <div className={styles.bodyWrap}>
      <HeaderLayout />
      <div id="wrap">
        <SideNavLayout />
        <Home />        
      </div>
      <FooterLayout />
    </div>
  );
}
