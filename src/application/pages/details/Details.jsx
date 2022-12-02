import React from 'react';
import {useParams, Link} from 'react-router-dom';
import styled from '@emotion/styled';
import {FaSpinner} from 'react-icons/fa';
import Header from '../../../ui/components/header/Header';
function Details() {
  const [data, setData] = React.useState();
  const [status, setStatus] = React.useState('idle');

  const {ccn3} = useParams();

  let jsonData;
  const fetchCountries = async () => {
    const response = await fetch('https://restcountries.com/v3.1/all')
      .then(response => {
        const data = response.json();
        return data;
      })
      .then(data => {
        const d = data.filter(country => country.ccn3 === ccn3);
        return d;
      })
      .then(d => {
        jsonData = d.filter(country => country.ccn3 === ccn3);
        return jsonData;
      })
      .then(() => {
        setData(jsonData);
        setStatus('resolved');
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
    const {
      name,
      flags,
      region,
      subregion,
      capital,
      population,
      languages,
      currencies,
      borders,
      tld,
    } = data[0];
    return (
      <>
        <Header />

        <div className="DetailsContainer">
          <div className="DetailsInfo">
            <Link to="/">
              <button className="backButton">Back</button>
            </Link>
            <div className="Details">
              <div className="DetailsFlag">
                <img src={flags.png} alt={name.official} />
              </div>

              <div className="DetailsInfo">
                <h1>{name.official}</h1>
                <div className="Details_Inner">
                  <div className="left">
                    <p>
                      Native Name:{' '}
                      {name.nativeName[Object.keys(name.nativeName)[0]].common}
                    </p>
                    <p>Population: {population}</p>
                    <p>Region: {region}</p>
                    <p>Sub Region: {subregion}</p>
                    <p>Capital: {capital}</p>
                  </div>

                  <div className="right">
                    <p>Top Level Domain: {tld}</p>
                    <p>
                      Currencies: {currencies[Object.keys(currencies)[0]].name}{' '}
                    </p>
                    <p>
                      Languages: {languages[Object.keys(languages)[0]]}{' '}
                      {languages[Object.keys(languages)[1]] &&
                        ` , ${languages[Object.keys(languages)[1]]}`}{' '}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
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

export default Details;
