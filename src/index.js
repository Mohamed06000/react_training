import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

//JSX
function Hello(){
    return <p>Hello World!</p>
}

ReactDOM.render(
    <React.StrictMode>
        <Hello/>
    </React.StrictMode>,
    document.getElementById('root')
);

//Props

function Hello2({adjectif = 'world'}){
    return <p>Hello {adjectif}!</p>
}

ReactDOM.render(
    <React.StrictMode>
        <Hello2 adjectif={'you!'}/>
    </React.StrictMode>,
    document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
