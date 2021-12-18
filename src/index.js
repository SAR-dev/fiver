import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ColorModeScript, ChakraProvider } from '@chakra-ui/react';
import { light } from './theme';
import './styles.css';
import './braft.css';

ReactDOM.render(
  <StrictMode>
    <ColorModeScript />
    <ChakraProvider theme={light}>
      <App />
    </ChakraProvider>
  </StrictMode>,
  document.getElementById('root')
);
