import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import data, { teams } from './data/data';
import './App.css';
import Team from './views/Team/Team';

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<h1>:)</h1>
				</Route>

				{teams.map((team) => {
					return (
						<Route exact to={`/${team.link}`} key={team.id}>
							<Team people={data} teams={teams} />
						</Route>
					);
				})}
			</Switch>
		</Router>
	);
}

export default App;
