import { useEffect, useState } from 'react';
import LoadingSpinner from './LoadingSpinner';
import UserCard from './UserCard';
import SearchBar from './SearchBar';

export interface UserProps {
	id?: number;
	name: string;
	email: string;
	phone: string;
	address: {
		city: string;
		street: string;
		suite: string;
		zipcode: string;
	};
}

function UserList() {
	const [users, setUsers] = useState<UserProps[]>([]);
	const [searchResults, setSearchResults] = useState<UserProps[]>([]);
	const [loading, setLoading] = useState(false);

	const fetchUsers = async () => {
		try {
			setLoading(true);
			const res = await fetch('https://jsonplaceholder.typicode.com/users');
			const data = await res.json();

			setUsers(data);
			setSearchResults(data);
			setLoading(false);
		} catch (error) {
			setLoading(false);
			console.error(error);
		}
	};

	useEffect(() => {
		fetchUsers();
	}, []);

	if (loading) return <LoadingSpinner />;

	return (
		<>
			<h1 className="text-xl">Users List</h1>
			<SearchBar users={users} setSearchResults={setSearchResults} />
			{users.length ? (
				<ul className="flex gap-y-3 flex-col">{searchResults?.map((user) => <UserCard {...user} />)}</ul>
			) : (
				<h2>No matching users</h2>
			)}
		</>
	);
}

export default UserList;
