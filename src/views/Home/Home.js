import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';

import './Home.css';

const Home = ({ teams }) => {
	return (
		<main className="home fade-in" style={{ backgroundImage: `url("/images/women.svg")` }}>
			<Header />
			<h1 className="home__title">
				Bienvenidas a la <span className="home__highlight">Familia Rebelde</span>
			</h1>
			<p>Selecciona el equipo que quieres revisar</p>
			<section className="home__content">
				<div className="home__buttons">
					{teams.map((team) => (
						<Link to={team.link} key={team.id}>
							<button className="home__button">{team.id}</button>
						</Link>
					))}
				</div>
			</section>
		</main>
	);
};

export default Home;
