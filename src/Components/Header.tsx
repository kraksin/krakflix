import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';

const Header = styled.header`
  color: white;
  position: fixed;
  top:0;
  left:0;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  background-color: rgba(20, 20, 20, 0.8);
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
  z-index: 1;
`;

const HeaderListUl = styled.ul`
  display: flex;  
`;

const Item = styled.li<{ current: boolean }>`
  width: 80px;
  height: 50px;
  text-align: center;
  border-bottom: 3px solid ${props => (props.current ? '#3498db' : 'transparent')};
  transition: border-bottom .5s ease-in-out;
`;

const SLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
`;

export default withRouter(({ location: { pathname } }) => (
  <Header>
    <HeaderListUl>
      <Item current={pathname === '/'}>
        <SLink to='/'>Home</SLink>
      </Item>
      <Item current={pathname === '/tv'}>
        <SLink to='/tv'>Tv</SLink>
      </Item>
      <Item current={pathname === '/search'}>
        <SLink to='/search'>Search</SLink>
      </Item>
      <Item current={pathname === '/test'}>
        <SLink to='/test'>Test</SLink>
      </Item>
    </HeaderListUl>
  </Header>
));
