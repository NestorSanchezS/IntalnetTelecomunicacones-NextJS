import './index.scss';
import React from 'react';
import { IntalnetProvider } from '../context/intalnetProvider';
import WhatsappButton from '../components/WhatsappButton';


function MyApp({ Component, pageProps }) {
    return (
    <IntalnetProvider>
       <Component {...pageProps} />
       <WhatsappButton />
    </IntalnetProvider>)
  }
  
  export default MyApp


