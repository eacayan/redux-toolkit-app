import { UserProps } from './UserList';

function UserCard(details: UserProps) {
	const { id, name, email, phone, address } = details;
	const fullAddress = `${address.suite}, ${address.street}, ${address.city} ${address.zipcode}`;
	return (
		<li key={id} className="border border-1 border-gray-300 rounded-md p-3">
			<p>{name}</p>
			<p>{email}</p>
			<p>{phone}</p>
			<p>{fullAddress}</p>

			<button className="bg-red-600 text-white hover:bg-red-800 p-2 rounded-md mt-2">Delete</button>
		</li>
	);
}

export default UserCard;
