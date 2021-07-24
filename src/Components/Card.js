import { Link } from "react-router-dom";
const commaNumber = require('comma-number')


export default function Card({ country, countries }) {
	//console.log(country.name);

	return (
		<Link to={{pathname: `/country/${country.name.trim().replaceAll("\\s", "%20")}`, singleCountry: country, countries: countries}}  >
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
							<h5><strong>Population: </strong>{commaNumber(country.population)}</h5>
							<h5><strong>Region: </strong>{country.region}</h5>
							<h5><strong>Capital: </strong>{country.capital}</h5>
						</div>
					</div>
				</div>
			</div>
		</Link>
	);
    }