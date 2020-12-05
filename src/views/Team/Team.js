import React, { useState, useMemo, useEffect } from 'react';
import { useLocation, withRouter, Redirect } from 'react-router-dom';
import { includes } from 'ramda';

import Spinner from '../../components/Spinner/Spinner';
import Member from '../../components/Member/Member';

import './Team.css';
import Header from '../../components/Header/Header';

const Team = ({ people, teams, onClick }) => {
	const [ currentTeam, setCurrentTeam ] = useState(null);
	const [ teamData, setTeamData ] = useState(null);
	const [ imageStatus, setImageStatus ] = useState('idle');
	const [ firstLoad, setFirstLoad ] = useState(false);
	const [ match, setMatch ] = useState(false);
	const location = useLocation();

	useMemo(
		() => {
			if (location) {
				const currentTeam = teams.filter((teamsItem) => `/${teamsItem.link}` === location.pathname);
				setCurrentTeam(currentTeam[0]);
			}
		},
		[ location, teams ]
	);

	useMemo(
		() => {
			if (location) {
				setImageStatus('pending');
			}
		},
		[ location ]
	);

	useEffect(() => {
		setFirstLoad(true);
	}, []);

	useEffect(
		() => {
			if (location && currentTeam) {
				if ('/' + currentTeam.link === location.pathname) {
					setMatch(true);
					const team = people.filter((person) => includes(currentTeam.id, person.equipos));
					setTeamData(team);
				} else {
					setMatch(false);
				}
			}
		},
		[ location, currentTeam ]
	);

	return (
		<div className="wrapper">
			{!match && firstLoad && imageStatus === 'pending' ? <Redirect to="/" /> : null}
			{currentTeam && teamData ? (
				<main>
					<Header />
					<h1 className="teamname">{currentTeam.id.toUpperCase()}</h1>
					{teamData.map((data) => (
						<Member
							data={data}
							imageStatus={imageStatus}
							setImageStatus={setImageStatus}
							key={data.apodo}
						/>
					))}
				</main>
			) : (
				<Spinner />
			)}
		</div>
	);
};

export default withRouter(Team);
