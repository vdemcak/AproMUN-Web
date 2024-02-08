import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/main.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from './pages/Home';
import { AboutUs } from './pages/AboutUs';
import { Committees } from './pages/Committees';
import { UNEP } from './pages/committees/UNEP';
import { UNW } from './pages/committees/UNW';
import { HRC } from './pages/committees/HRC';
import { ECOSOC } from './pages/committees/ECOSOC';
import { HDS } from './pages/committees/HDS';
import { SC } from './pages/committees/SC';
import { UNODC } from './pages/committees/UNODC';

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/about', element: <AboutUs /> },
  { path: '/committees', element: <Committees /> },
  { path: '/committees/ecosoc', element: <ECOSOC /> },
  { path: '/committees/hds', element: <HDS /> },
  { path: '/committees/hrc', element: <HRC /> },
  { path: '/committees/sc', element: <SC /> },
  { path: '/committees/unw', element: <UNW /> },
  { path: '/committees/unep', element: <UNEP /> },
  { path: '/committees/unodc', element: <UNODC /> },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
