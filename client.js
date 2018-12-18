// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import { Location, ReactInstance } from 'react-360-web';

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    ...options,
  });

  // Render your app content to the default cylinder surface
  r360.renderToSurface(
    r360.createRoot('ReactVRPlayground', { /* initial props */ }),
    r360.getDefaultSurface()
  );

  r360.renderToLocation(
    r360.createRoot('CaptainFalcon', { /* initial props */ }),
    r360.getDefaultLocation(),
  );

  r360.renderToLocation(
    r360.createRoot('Kirby', { /* initial props */ }),
    r360.getDefaultLocation(),
  );

  r360.renderToLocation(
    r360.createRoot('Doggo', { /* initial props */ }),
    r360.getDefaultLocation(),
  );

  r360.renderToLocation(
    r360.createRoot('KirbyStage', { /* initial props */ }),
    // r360.getDefaultLocation(),
    new Location([ 250, -100, 0]),
  );

  r360.renderToLocation(
    r360.createRoot('Pupper', { /* initial props */ }),
    // r360.getDefaultLocation(),
    new Location([ 0, 0, 0]),
  );

  r360.renderToLocation(
    r360.createRoot('ReactNYCView', { /* initial props */ }),
    r360.getDefaultLocation(),
  );

  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL('cliffs.jpg'));
  // r360.compositor.setBackground(r360.getAssetURL('360_world.jpg'));
}

window.React360 = { init };
