import { setSearchInput } from '@/features/users/userSlice';
import { useDispatch } from 'react-redux';

function SearchBar() {
	const dispatch = useDispatch();

	const handleSearch = (event: React.ChangeEvent<HTMLinput>) => {
		dispatch(setSearchInput(event.target.value));
	};

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
