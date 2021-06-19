import React from "react";
import { Link } from "react-router-dom";
import Pageview from "../../lib/layout/dashboard/Pageview";
import "../../lib/style/dashboard/game-history.scss";

import pearl from "../../lib/assets/stones/pearl.png";
import silver from "../../lib/assets/stones/silver.png";
import diamond from "../../lib/assets/stones/diamond.png";

import CHE from "../../lib/assets/clubes/CHE.png";
import MAN from "../../lib/assets/clubes/MAN.png";
import BAR from "../../lib/assets/clubes/BAR.png";
import ARS from "../../lib/assets/clubes/ARS.png";

import util from "../../lib/service/utils";
import { Badge } from "@material-ui/core";
import misc from "../../lib/service/misc";

function GameHistory() {
	const gameHistory = [
		{
			groupId: 1,
			category: 3,
			name: "Pearl",
			amount: 500.0,
			icon: pearl,
			winning: misc.winning("Pending"),

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
			winning: misc.winning("Won"),

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
			winning: misc.winning("Lose"),

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
			groupId: 1,
			category: 3,
			name: "Pearl",
			amount: 500.0,
			icon: pearl,
			winning: misc.winning("Pending"),

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
			winning: misc.winning("Won"),

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
			winning: misc.winning("Lose"),

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
			groupId: 1,
			category: 3,
			name: "Pearl",
			amount: 500.0,
			icon: pearl,
			winning: misc.winning("Pending"),

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
			winning: misc.winning("Won"),

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
			winning: misc.winning("Lose"),

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
		<Pageview title="Game History" data-aos="flip-left">
			<div className="pending-games">
				{gameHistory.map((item) => {
					return (
						<Link to={`/game-details/${item.groupId}`}>
							<div className="game" key={item.groupId}>
								<div className="team-details">
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
										<span className="ml-1 mr-1 separator">-</span>
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
									<h6>
										N{util.numberFormat(item.amount)}{" "}
										<span className={item.winning.color}>
											{item.winning.win}
										</span>
									</h6>
								</div>
								<div className="package-details">
									<div>
										<h5>N{util.numberFormat(item.amount, 2)}</h5>
										<h6>
											<span className="mr-3">{item.name}</span>
											<Badge badgeContent={item.category} color="secondary" />
										</h6>
									</div>
								</div>
							</div>
						</Link>
					);
				})}
                
			</div>
		</Pageview>
	);
}

export default GameHistory;
