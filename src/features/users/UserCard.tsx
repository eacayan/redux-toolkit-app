import { useDispatch } from 'react-redux';
import { deleteUser } from './userSlice';
import { UserProps } from './UserList';

function UserCard(details: UserProps) {
	const dispatch = useDispatch();
	const { id, name, email, phone, address } = details;

	const fullAddress = `${address.suite}, ${address.street}, ${address.city} ${address.zipcode}`;

	const handleClick = () => {
		dispatch(deleteUser(id));
	};

	return (
		<li className="border border-1 border-gray-300 rounded-md p-3">
			<p>Name: {name}</p>
			<p>Email: {email}</p>
			<p>Phone number: {phone}</p>
			<p>Address: {fullAddress}</p>

			<button onClick={handleClick} className="bg-red-600 text-white text-sm hover:bg-red-800 p-2 rounded-md mt-4">
				Delete
			</button>
		</li>
	);
}

export default UserCard;
