import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { selectIsLoading, selectSearchInput, selectUsers, setSearchInput } from '@/features/users/userSlice';
import LoadingSpinner from '@/components/LoadingSpinner';
import UserCard from './UserCard';
import SearchBar from '@/components/SearchBar';
import fetchUsers from '@/api/fetchUsers';

export interface UserProps {
	id: number;
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
	const dispatch = useDispatch();
	const appDispatch = useAppDispatch();
	const loading = useSelector(selectIsLoading);
	const users = useSelector(selectUsers);
	const searchInput = useSelector(selectSearchInput);

	const filteredUsers = users.filter((user) => {
		const fullAddress = `${user.address.suite}, ${user.address.street}, ${user.address.city} ${user.address.zipcode}`;

		return (
			user.name.toLowerCase().includes(searchInput.toLowerCase()) ||
			user.phone.toLowerCase().includes(searchInput.toLowerCase()) ||
			user.email.toLowerCase().includes(searchInput.toLowerCase()) ||
			fullAddress.toLowerCase().includes(searchInput.toLowerCase())
		);
	});

	useEffect(() => {
		appDispatch(fetchUsers());
	}, [dispatch]);

	const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(setSearchInput(event.target.value));
	};

	const userContent = (
		<>
			{filteredUsers.length ? (
				<ul className="flex gap-y-3 flex-col">
					{filteredUsers.map((user) => (
						<UserCard key={user.id} {...user} />
					))}
				</ul>
			) : (
				<h2>No users found</h2>
			)}
		</>
	);

	return (
		<section className="flex flex-col gap-y-5">
			<h1 className="text-3xl self-center">Users List</h1>
			<SearchBar handleSearch={handleSearch} />
			{loading ? <LoadingSpinner /> : userContent}
		</section>
	);
}

export default UserList;
