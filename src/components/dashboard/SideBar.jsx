import React from "react";
import { PlusOutlined } from "@ant-design/icons";
import { ArrowBack, Close, SearchOutlined } from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";

import { Badge } from "@material-ui/core";
import SearchLogic from "../../lib/core/dashboard/side-bar/SearchLogic";
import util from "../../lib/service/utils";
import misc from "../../lib/service/misc";
import useWindow from "../../lib/service/UseWindowSize";
import "../../lib/style/dashboard/ongoing-game.scss";

function OngoingGames () {
	// const vp = useWindow();
	// const h = vp[1];
	// const h = vp[1];
	// console.log()
	
	const [
		searchTerm,
		handleSearch,
		inputRef,
		handleClear,
		isSearch,
		toggleSearch,
		searchResults,
	] = SearchLogic();

	const pathname = useLocation().pathname;
	

	return (
		<>
			{isSearch ? (
				<div className="search-bar">
					<ArrowBack
						className="arrow-back-icon"
						data-aos="flip-left"
						onClick={ toggleSearch }
					/>
					<input
						type="text"
						ref={ inputRef }
						value={ searchTerm }
						onChange={ handleSearch }
					/>
					{searchTerm !== "" && (
						<Close className="close-icon" onClick={ handleClear } />
					) }
				</div>
			) : (
				<div className="search-haeder">
					<div className="search-view">
						<div className="search-input" onClick={ toggleSearch }>
							<SearchOutlined />
							<span>Search</span>
						</div>
						{ pathname !== "/place-bet" && (
							<Link to="/place-bet">
								<PlusOutlined className="add-game" />
							</Link>
						) }
					</div>
				</div>
			) }

			{/* ongoing games */ }
			<div className="pb-pending-games" id="scroll-view" style={ { minHeight: misc.sideBarContent() - 60, maxHeight: misc.sideBarContent() - 60 }  } >
				{ searchResults.map((item, index) => {
					return (
						<Link
							to={ `/place-bet/${index + 1}` }
							className="link"
							key={ util.randomNumber() + index }>
							<div className="game-wrapper">
								<img src={ item.icon } alt="Game Icon" width="45" height="45" />
								<div className="game-info">
									<div className="game-description">
										<h5>{ item.name }</h5>
										<h6>{ item.amount } NGN</h6>
									</div>
									<div className="game-counter">
										<h5>Remaining</h5>
										<h6>
											<Badge badgeContent={ item.remaining } color="secondary" />
										</h6>
									</div>
								</div>
							</div>
						</Link>
					);
				}) }
			</div>
		</>
	);
}

export default OngoingGames;
