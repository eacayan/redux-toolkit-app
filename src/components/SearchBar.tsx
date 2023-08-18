import { ChangeEvent, Dispatch, SetStateAction, SyntheticEvent } from 'react';
import { UserProps } from './UserList';

interface SearchBarProps {
	users: UserProps[];
	setSearchResults: Dispatch<SetStateAction<UserProps[]>>;
}

function SearchBar({ users, setSearchResults }: SearchBarProps) {
	const handleSubmit = (e: SyntheticEvent) => e.preventDefault();
	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		if (!e.target.value) return setSearchResults(users);

		const filteredResults = users.filter((user) => {
			const fullAddress = `${user.address.suite}, ${user.address.street}, ${user.address.city} ${user.address.zipcode}`;

			return (
				user.name.toLowerCase().includes(value) ||
				user.email.toLowerCase().includes(value) ||
				user.phone.toLowerCase().includes(value) ||
				fullAddress.toLowerCase().includes(value)
			);
		});

		setSearchResults(filteredResults);
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				id="searchUsers"
				placeholder="Search for users"
				onChange={handleSearch}
				className="placeholder:text-slate-400 text-slate-800 p-1.5"
			/>
		</form>
	);
}

export default SearchBar;
