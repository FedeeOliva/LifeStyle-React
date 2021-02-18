import React from 'react';
import Header from '../header/Header';
import Footer from '../footer';

const Layout = (props) => {
  return (
  	<div>
    	<Header />
    	{props.children}
    	<Footer/>
    </div>
  )
}

export default Layout;