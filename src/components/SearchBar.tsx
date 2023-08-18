import { ChangeEvent, SyntheticEvent } from 'react';

interface SearchBarProps {
	handleSearch: (e: ChangeEvent<HTMLInputElement>) => void;
}

function SearchBar({ handleSearch }: SearchBarProps) {
	const handleSubmit = (e: SyntheticEvent) => e.preventDefault();

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				id="searchUsers"
				placeholder="Search for users"
				onChange={handleSearch}
				className="placeholder:text-slate-400 text-slate-800 p-1.5 w-full"
			/>
		</form>
	);
}

export default SearchBar;
