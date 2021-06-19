import React from "react";
import Pageview from "../../lib/layout/dashboard/Pageview";
import "../../lib/style/dashboard/pending-games.scss";

import pearl from "../../lib/assets/stones/pearl.png";
import silver from "../../lib/assets/stones/silver.png";
import diamond from "../../lib/assets/stones/diamond.png";

import CHE from "../../lib/assets/clubes/CHE.png";
import MAN from "../../lib/assets/clubes/MAN.png";
import BAR from "../../lib/assets/clubes/BAR.png";
import ARS from "../../lib/assets/clubes/ARS.png";

import util from '../../lib/service/utils'
function PendingGames() {
	const PendingGames = [
		{
			groupId: 1,
			category: 3,
			name: "Pearl",
			amount: 500.0,
			icon: pearl,
			teamA: {
				icon: CHE,
				name: "CHE",
				seleted: true,
			},
			teamB: {
				icon: MAN,
				name: "MAN",
				seleted: false,
			},
		},
		{
			groupId: 2,
			category: 3,
			name: "Diamond",
			amount: 1000.0,
			icon: diamond,
			teamA: {
				icon: BAR,
				name: "BAR",
				seleted: false,
			},
			teamB: {
				icon: ARS,
				name: "ARS",
				seleted: true,
			},
		},
		{
			groupId: 3,
			category: 5,
			name: "Silver",
			amount: 500.0,
			icon: silver,
			teamA: {
				icon: CHE,
				name: "CHE",
				seleted: true,
			},
			teamB: {
				icon: MAN,
				name: "MAN",
				seleted: false,
			},
		},
	];

	return (
		<Pageview title="Pending Games" data-aos="flip-left">
			<div className="pending-games">
				{PendingGames.map((item) => {
					return (
						<div className="games" key={item.groupId}>
							<div className="package-details">
								<img
									src={item.icon}
									alt="team Logo"
									width=""
									width="45"
									height="45"
								/>
								<div>
									<h5>{item.name}</h5>
									<h6>{item.category} Users</h6>
								</div>
							</div>

							<div className="team-details">
								<h5>N{util.numberFormat(item.amount)}</h5>
								<div className="teams">
									<div
										className={
											item.teamA.seleted ? "team-name selected" : "team-name"
										}>
										<img
											src={item.teamA.icon}
											alt="TeamA Logo"
											width="20"
											height="20"
										/>
										<span>{item.teamA.name}</span>
									</div>
									<span className="ml-1 mr-1">-</span>
									<div
										className={
											item.teamB.seleted ? "team-name selected" : "team-name"
										}>
										<img
											src={item.teamB.icon}
											alt="TeamB Logo"
											width="20"
											height="20"
										/>
										<span>{item.teamB.name}</span>
									</div>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</Pageview>
	);
}

export default PendingGames;
