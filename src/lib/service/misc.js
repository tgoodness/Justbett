import util from "./utils";
import emptyImage from "../assets/avater.jfif";
import { imgUrl } from "../http/url";

const misc = {
	accessToken () {
		const { accessToken } = util.getItem("accessToken", true);
		return accessToken;
	},
	registrationId () {
		const isLoggedIn = util.getItem("auth");
		if (isLoggedIn)
		{
			const data = util.getItem("user", true);
			return data.user.registrationId;
		}

		return "";
	},

	user () {
		const data = util.getItem("user", true);
		return data.user;
	},

	//set pageview height that fit the page
	pageview () {
		return util.getDocumentHeight() - 115;
	},

	//extract first letter of (substring)
	getFirtLetter (text) {
		text = text.substring(0, 1);
		return text.toUpperCase();
	},

	text (text) {
		if (text === null)
		{
			text = "---";
		} else
		{
			text = text.length > 15 ? text.substring(0, 20) + "..." : text;
		}

		return text;
	},

	userImage (userProfile) {
		const UserImage = userProfile === null ? emptyImage : imgUrl + userProfile;
		return UserImage;
	},

	numberOfWinner (category) {
		let message;
		if (category > 5)
		{
			message = `In this category only 3 users with the highest point win`;
		} else if (category === 5)
		{
			message = `In this category only 2 users with the highest point win`;
		} else
		{
			message = `In this category only 1 user with the highest point wins`;
		}
		return message;
	},

	winning (win) {
		win = win.toUpperCase();
		let type;
		switch (win)
		{
			case "WON":
				type = { win: "Won", color: "won" };
				break;
			case "LOSE":
				type = { win: "Lose", color: "lose" };
				break;
			default:
				type = { win: "---", color: "Pending" };
		}

		return type;
	},

	isMobileView () {
		const height = Math.max(
			document.documentElement.clientWidth || 0,
			window.innerWidth || 0
		);
		return height < 767 ? true : false;
	},

	sideBarContent () {
		const height = Math.max(
			document.documentElement.clientHeight || 0,
			window.innerHeight || 0
		);

		if (this.isMobileView())
			return height - 330;
		else
			return height - 150;
	},

	mainContent () {
		const height = Math.max(
			document.documentElement.clientHeight || 0,
			window.innerHeight || 0
		);

		if (this.isMobileView())
			return height - 50;
		else
			return height - 140;
	},
};

export default misc;
