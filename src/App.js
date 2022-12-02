import React from 'react';
import styled from '@emotion/styled';
import {FaSpinner} from 'react-icons/fa';

import {ThemeProvider} from '@emotion/react';
import theme from './ui/components/theme/theme';
import Countries from './ui/components/countries/Countries';
import Header from './ui/components/header/header';
import Search from './ui/components/search/Search';

export function App() {
  const [data, setData] = React.useState();
  const [status, setStatus] = React.useState('idle');
  const fetchCountries = async () => {
    const response = await fetch('https://restcountries.com/v3.1/all')
      .then(response => {
        const data = response.json();
        return data;
      })
      .then(response => {
        setData(response);
      });
  };

  React.useEffect(() => {
    fetchCountries().then(() => setStatus('resolved'));
  }, [status]);

  if (status === 'idle') {
    return (
      <LoadingSpinner>
        <p>Loading Countries and Flags</p>
        <Spinner>
          <FaSpinner />
        </Spinner>
      </LoadingSpinner>
    );
  }
  if (status === 'resolved') {
    return (
      <div className="App">
        <ThemeProvider theme={theme}>
          <Header />
          <Search />
          <Countries countries={data} />
        </ThemeProvider>
      </div>
    );
  }
}

const LoadingSpinner = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  position: absolute;
  width: 100vw !important;
  color: white;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: #1a1a1a;
`;

const Spinner = styled.div`
  animation: spin 1s linear infinite;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
