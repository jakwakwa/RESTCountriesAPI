import Country from '../country/Country';

function Countries({countries}) {
  return (
    <main>
      <div className="countries">
        {countries.map(country => (
          <Country key={country.cca3} country={country} />
        ))}
      </div>
    </main>
  );
}

export default Countries;
