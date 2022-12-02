import styled from '@emotion/styled';
import {Link, useParams} from 'react-router-dom';

function Country({country}) {
  return (
    <CountryStyles>
      <Link to={`/details/${country.ccn3}`}>
        <div>
          <img src={country.flags.png} alt={country.name.official} />
        </div>
        <CountryInfo>
          <h2>{country.name.official}</h2>
          <p>
            {' '}
            <strong>Population:</strong> {country.population}
          </p>
          <p>
            {' '}
            <strong>Region:</strong> {country.region}
          </p>
          <p> {country.capital}</p>
        </CountryInfo>
      </Link>
    </CountryStyles>
  );
}

const CountryStyles = styled.div`
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  padding: 1rem;
  height: 150px;
  width: 150px;
  text-align: left;
  p {
    font-size: 0.2rem;
    margin-bottom
  }
  img {
    width: 100%;
    height: 100%;
    min-height: 170px;
    max-height: 170px;
  }
`;

const CountryInfo = styled.div`
  box-sizing: border-box;
  color: ${props => props.theme.colors.darkBlue};
  background-color: ${props => props.theme.colors.white};
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  height: 180px;
  h2 {
    font-size: 1.2rem;
    line-height: 1.5rem;
    margin-bottom: 0.3rem;
  }
`;

export default Country;
