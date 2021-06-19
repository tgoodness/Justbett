import { useState, useRef, useEffect } from "react";
import Pearl from "../../../assets/stones/pearl.png";
import Perridot from "../../../assets/stones/perridot.png";
import Ruby from "../../../assets/stones/ruby.png";
import Silver from "../../../assets/stones/silver.png";
import Sapphire from "../../../assets/stones/sapphire.png";

function SearchLogic() {
	const [isSearch, setIsSearch] = useState(false);
	const toggleSearch = () => {
		setIsSearch(!isSearch);
	};

	const inputRef = useRef(null);
	useEffect(() => {
		if (isSearch) inputRef.current.focus();
	}, [isSearch]);

	const [searchTerm, setSearchTerm] = useState("");
	const handleSearch = (e) => {
		setSearchTerm(e.target.value);
		if (searchTerm === "") {
			inputRef.current.focus();
		}
	};

	const handleClear = () => {
		setSearchTerm("");
		inputRef.current.focus();
	};



    // search Result
    const games = [
		{
			name: "Pearl",
			amount: "200",
			remaining: 1,
			icon: Pearl,
		},
		{
			name: "Perridot",
			amount: "500",
			remaining: 2,
			icon: Perridot,
		},
		{
			name: "Ruby",
			amount: "100",
			remaining: 2,
			icon: Ruby,
		},
		{
			name: "Silver",
			amount: "100",
			remaining: 2,
			icon: Silver,
		},
		{
			name: "Sapphire",
			amount: "50",
			remaining: 2,
			icon: Sapphire,
		},

		{
			name: "Silver",
			amount: "100",
			remaining: 2,
			icon: Silver,
		},
		{
			name: "Sapphire",
			amount: "50",
			remaining: 2,
			icon: Sapphire,
		},
		{
			name: "Silver",
			amount: "100",
			remaining: 2,
			icon: Silver,
		},
		{
			name: "Sapphire",
			amount: "50",
			remaining: 2,
			icon: Sapphire,
		},

		{
			name: "Silver",
			amount: "100",
			remaining: 2,
			icon: Silver,
		},
		{
			name: "Sapphire",
			amount: "50",
			remaining: 2,
			icon: Sapphire,
		},
	];


	const [searchResults, setSearchResults] = useState([]);
	useEffect(() => {
		const result = games.filter(
			(game) =>
				game.name.toLowerCase().includes(searchTerm) ||
				game.amount.toLowerCase().includes(searchTerm) ||
				game.remaining.toString().includes(searchTerm)
		);
		setSearchResults(result);
	}, [searchTerm]);

	return [
		searchTerm,
		handleSearch,
		inputRef,
		handleClear,
		isSearch,
		toggleSearch,
        searchResults
	];
}

export default SearchLogic;
