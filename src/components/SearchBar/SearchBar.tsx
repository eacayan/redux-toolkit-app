import { ChangeEvent } from 'react';

interface SearchBarProps {
	handleSearch: (e: ChangeEvent<HTMLInputElement>) => void;
}

function SearchBar({ handleSearch }: SearchBarProps) {
	return (
		<input
			type="text"
			id="searchUsers"
			placeholder="Search for users"
			onChange={handleSearch}
			className="placeholder:text-slate-400 text-slate-800 p-1.5 w-full"
		/>
	);
}

export default SearchBar;
