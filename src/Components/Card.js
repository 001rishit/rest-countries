import { Link } from "react-router-dom";
const commaNumber = require('comma-number')


export default function Card({ country, countries }) {
	console.log(encodeURIComponent(country.name.trim()));

	return (
		<Link to={{pathname: `/country/${encodeURIComponent(country.name.trim())}`, singleCountry: country, countries: countries}}  >
			<div className="grid-card">
				<div className="card">
					<div className="card-image">
						<figure className="image is-3by2">
							<img src={country.flag} alt="Flag"></img>
						</figure>
					</div>
					<div className="card-content">
					   <div className="content">
							<h3><strong>{country.name}</strong></h3>
						</div>
						<div className="content">
							<h4><strong>Population: </strong>{commaNumber(country.population)}</h4>
							<h4><strong>Region: </strong>{country.region}</h4>
							<h4><strong>Capital: </strong>{country.capital}</h4>
						</div>
					</div>
				</div>
			</div>
		</Link>
	);
    }