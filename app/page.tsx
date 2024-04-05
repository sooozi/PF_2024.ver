'use client'

/* css import */
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import '/src/style/global.scss';
import '/src/style/theme.scss';

/* page import */
import RootLayout from './layout';
import Home from './main/page';

const GlobalStyle = createGlobalStyle`
  ${reset}
  /* 이곳에 추가적인 전역 스타일을 설정할 수 있습니다. */
`;

type Children = {
  children: React.ReactNode;
};

export default function Dashboard() {
  return (
    <RootLayout>
      <Home />       
    </RootLayout>
    // <div id="wrap">
    //   <HeaderLayout />
    //   <main className={style.bodyWrap}>
    //     <SideNavLayout />
    //   </main>
    //   <FooterLayout />
    // </div>
  );
}
