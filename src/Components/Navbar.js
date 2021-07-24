import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar({theme, toggleTheme}) {
	const [isChecked, setIsChecked] = useState(false);


	const handleOnChange = () => {
		setIsChecked(!isChecked);
	};

	return (
		<>
			<nav className="navbar " aria-label="main navigation">
				<Link className="nav-title has-text-weight-bold	is-size-4 has-text-white" to="/">
					Where in the world?
				</Link>
				<div className="toggle-container">
					<input type="checkbox" className="checkbox" id="check" checked={isChecked} onChange={handleOnChange} />
					<div >
					<label className="switch-container" htmlFor="check" onClick={toggleTheme}>
						<i className="fas fa-sun"></i>
						<i className="fas fa-moon"></i>
					</label>
					</div>
					<label htmlFor="check">
						<span className="d-mode has-text-weight-bold">{theme === "light" ? "Light Mode" : "Dark Mode"}</span>
					</label>
				</div>
			</nav>
		</>
	);
}