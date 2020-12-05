import React from 'react';
import InlineSVG from 'svg-inline-react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';

import './Home.css';

const Home = ({ teams }) => {
	return (
		<main className="home">
			<h1 className="home__title">
				Bienvenidas a la <span className="home__highlight">Familia Rebelde</span>
			</h1>
			<p>Selecciona el equipo que quieres revisar</p>
			<section className="home_buttons">
				{teams.map((team) => (
					<Link to={team.link} key={team.id}>
						<button className="home__button">{team.id}</button>
					</Link>
				))}
				<img className="home__image" src={process.env.PUBLIC_URL + 'images/women.png'} />
			</section>
		</main>
	);
};

export default Home;
