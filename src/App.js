import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import Banner from './components/Banner'
import styled from 'styled-components'

function App() {


  return (
    <Container>
      <Banner />
      <Nav />
    </Container>
  );
}

const Container = styled.main`
  position: relatvie;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 clac(3.5vw + 5px);

  &:after {
    backgroud: url('/images/home-background.png') center center / cover no-repeat fixed;
    content: '';
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`

export default App;
