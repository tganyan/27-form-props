import React from 'react';
import ReactDom from 'react-dom';
import App from './components/app/app';
import '../style/main.scss';

const root = document.createElement('div');
document.body.appendChild(root);
ReactDom.render(<App />, root);
