import React from 'react';
import styled from '@emotion/styled';
import {FaSpinner} from 'react-icons/fa';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom';

import {ThemeProvider} from '@emotion/react';
import theme from './ui/components/theme/theme';

import Home from './application/pages/home/Home';
import Details from './application/pages/details/Details';

export function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </div>
  );
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />} />,
      <Route path="/details/:ccn3" element={<Details />} />
    </Route>,
  ),
);
