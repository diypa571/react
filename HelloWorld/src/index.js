import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// First rendering part
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')


);




// The second rendering part...
class Hello extends React.Component {
  render() {
    return <h1>Hello World som text...</h1>
  }
}
ReactDOM.render(<Hello />, document.getElementById('mydiv'))





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
