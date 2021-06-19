import React from "react";
import Pageview from "../../lib/layout/dashboard/Pageview";
import "../../lib/style/dashboard/game-details.scss";

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
function GameDetails() {
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
	];

	return (
		<Pageview title="Game Details" data-aos="flip-left">
			<div className="game-details">
				<div className="user-position">
					<div className="package-name">
						<h5>Diamond</h5>
						<h6>JB374558332</h6>
					</div>
					<img src={CHE} alt="Team Logo" width="50" height="50" />
					<div className="winning">
						<h5>N3,000.00</h5>
						<h6>Won</h6>
					</div>
				</div>

				<h5 className="result-header">Result</h5>
				<div className="result">
					<div className="user-info">
						<h5>TeeGoodness</h5>
						<h6>Osun, Nigeria</h6>
					</div>
					<div className="winning">
						<h6>1st</h6>
						<h5>N3,000.00</h5>
					</div>
					<div className="point">
						<h5>
							<span className="team">CHE</span>
							<span className="teams-result">0-5</span>
							<span className="team selected">MAN</span>
						</h5>
						<h6>5points</h6>
					</div>
				</div>
				<div className="result">
					<div className="user-info">
						<h5>TeeGoodness</h5>
						<h6>Osun, Nigeria</h6>
					</div>
					<div className="winning">
						<h6>1st</h6>
						<h5>N3,000.00</h5>
					</div>
					<div className="point">
						<h5>
							<span className="team">CHE</span>
							<span className="teams-result">0-5</span>
							<span className="team selected">MAN</span>
						</h5>
						<h6>5points</h6>
					</div>
				</div>
				<div className="result">
					<div className="user-info">
						<h5>TeeGoodness</h5>
						<h6>Osun, Nigeria</h6>
					</div>
					<div className="winning">
						<h6>1st</h6>
						<h5>N3,000.00</h5>
					</div>
					<div className="point">
						<h5>
							<span className="team">CHE</span>
							<span className="teams-result">0-5</span>
							<span className="team selected">MAN</span>
						</h5>
						<h6>5points</h6>
					</div>
				</div>
			</div>
		</Pageview>
	);
}

export default GameDetails;