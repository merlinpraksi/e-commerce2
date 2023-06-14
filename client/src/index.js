import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { store, persistor } from './redux/store'
import { PersistGate } from 'redux-persist/integration/react';
import {app} from "./firebase.config"
import { Provider } from 'react-redux'
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Provider store={store} app={app}>
    <PersistGate loading={"loading"} persistor={persistor}>
<App />
</PersistGate  >
</Provider>
);
