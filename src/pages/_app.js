import './index.scss';
import React from 'react';
import { IntalnetProvider } from '../context/intalnetProvider';


function MyApp({ Component, pageProps }) {
    return (
    <IntalnetProvider>
       <Component {...pageProps} />
    </IntalnetProvider>)
  }
  
  export default MyApp


