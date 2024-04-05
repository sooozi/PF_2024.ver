'use client'

/* css import */
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import FooterLayout from './components/layout/footer';
import HeaderLayout from './components/layout/header';
import SideNavLayout from './components/layout/sideNav';
import style from '/src/style/common.module.scss';
import '/src/style/global.scss';
import '/src/style/theme.scss';

/* page import */

const GlobalStyle = createGlobalStyle`
  ${reset}
  /* 이곳에 추가적인 전역 스타일을 설정할 수 있습니다. */
`;

type Children = {
  children: React.ReactNode;
};

export default function Layout() {
  return (
    <div id="wrap">
      <HeaderLayout />
      <main className={style.bodyWrap}>
        <SideNavLayout />
      </main>
      <FooterLayout />
    </div>
  );
}
