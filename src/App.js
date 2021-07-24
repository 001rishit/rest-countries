import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { DarkMode } from "./Components/DarkMode";
import { GlobalStyles, lightTheme, darkTheme } from "./Components/globalStyles";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import CountryDetails from "./Components/CountryDetails";

const StyledApp = styled.div`
	color: ${props => props.theme.fontColor};
`;

function App() {
	const [theme, toggleTheme] = DarkMode();
	const themeMode = theme === "light" ? lightTheme : darkTheme;

	return (
		<ThemeProvider theme={themeMode}>
			<StyledApp>
				<GlobalStyles />
				<Router>
					<Navbar theme={theme} toggleTheme={toggleTheme} />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/country/:id">
							<CountryDetails />
						</Route>
					</Switch>
				</Router>
			</StyledApp>
		</ThemeProvider>
	);
}

export default App;
