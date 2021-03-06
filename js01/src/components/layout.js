import React from "react";
import styled from "styled-components";
import "modern-css-reset";
import Logo from "../images/common/logo.gif";
import BackTitle from "../images/common/back_title.gif";

const Page = styled.div`
  margin: -8px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-image: url(${BackTitle});
`;

const Header = styled.header`
  height: 50px;
  background: linear-gradient(to bottom, #003b9d, #003b9d 56%, #3782ff 56%);
  display: flex;
  justify-content: center;

  & > img {
    height: 100%;
  }
`;

const Main = styled.main`
  flex: 1;
  margin: 0 auto;
  max-width: 642px;
  width: 100%;
  border-bottom: 1px solid #666;
`;

const Footer = styled.footer`
  height: 20px;
  display: flex;
  justify-content: center;
  padding: 20px 0;
`;

const Layout = ({ children }) => {
  return (
    <Page>
      <Header>
        <img src={Logo} alt="logo" />
      </Header>
      <Main>{children}</Main>
      <Footer>&copy;本郷あきよし・東映アニメーション</Footer>
    </Page>
  );
};

export default Layout;
