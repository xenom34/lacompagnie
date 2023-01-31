import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/style/index.css';
import App from './components/App';
import "./style/style.scss"
import "./style/all.min.css"
import "./style/bootstrap.min.css"
import "./style/custom.css"
import "./style/featherlight.gallery.min.css"
import "./style/featherlight.min.css"
import "./style/theme.css"
import "./style/themify-icons.css"
import "./style/utilities.css"
import "./style/vegas.min.css"


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);

