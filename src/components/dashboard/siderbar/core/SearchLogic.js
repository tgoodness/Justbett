import { useState, useRef, useEffect } from 'react';
import Pearl from '../../../../lib/assets/stones/pearl.png';
import Perridot from '../../../../lib/assets/stones/perridot.png';
import Ruby from '../../../../lib/assets/stones/ruby.png';
import Silver from '../../../../lib/assets/stones/silver.png';
import color from '../../../../lib/assets/stones/color.png';

function SearchLogic () {
	const [ isSearch, setIsSearch ] = useState(false);
	const toggleSearch = () => {
		setIsSearch(!isSearch);
	};

	const inputRef = useRef(null);
	useEffect(() => {
		if (isSearch) inputRef.current.focus();
	}, [ isSearch ]);

	const [ searchTerm, setSearchTerm ] = useState('');
	const handleSearch = (e) => {
		setSearchTerm(e.target.value);
		if (searchTerm === '')
		{
			inputRef.current.focus();
		}
	};

	const handleClear = () => {
		setSearchTerm('');
		inputRef.current.focus();
	};

	// search Result
	const games = [
		{
			name: 'Pearl',
			amount: '200',
			remaining: 1,
			icon: Pearl,
			type: 'soccer'
		},
		{
			name: 'Perridot',
			amount: '500',
			remaining: 2,
			icon: Perridot,
			type: 'soccer'
		},
		{
			name: 'Ruby',
			amount: '100',
			remaining: 2,
			icon: Ruby,
			type: 'soccer'
		},
		{
			name: 'Silver',
			amount: '100',
			remaining: 2,
			icon: Silver,
			type: 'soccer'
		},
		{
			name: 'Sapphire',
			amount: '50',
			remaining: 2,
			icon: color,
			type: 'color'
		},

		{
			name: 'Silver',
			amount: '100',
			remaining: 2,
			icon: color,
			type: 'color'
		},
		{
			name: 'Ruby',
			amount: '100',
			remaining: 2,
			icon: Ruby,
			type: 'soccer'
		}
		,
		{
			name: 'Ruby',
			amount: '100',
			remaining: 2,
			icon: Ruby,
			type: 'soccer'
		}
		,
		{
			name: 'Ruby',
			amount: '100',
			remaining: 2,
			icon: Ruby,
			type: 'soccer'
		}
		,
		{
			name: 'Ruby',
			amount: '100',
			remaining: 2,
			icon: Ruby,
			type: 'soccer'
		}

	];


	const [ searchResults, setSearchResults ] = useState([]);
	useEffect(() => {
		const result = games.filter(
			(game) =>
				game.name.toLowerCase().includes(searchTerm) ||
				game.amount.toLowerCase().includes(searchTerm) ||
				game.remaining.toString().includes(searchTerm)
		);
		setSearchResults(result);
	}, [ searchTerm ]);

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
