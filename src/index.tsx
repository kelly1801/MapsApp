import React from 'react';
import ReactDOM from 'react-dom/client';
import MapsApp from './MapsApp';


if (!navigator.geolocation) {
alert('You need to enable the geolocation on your browser')
throw new Error("Your browser doesn't have the geolocation activated")
}
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <MapsApp />
  </React.StrictMode>
);

