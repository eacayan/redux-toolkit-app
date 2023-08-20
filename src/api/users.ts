import { AppDispatch } from '@/store';
import { setIsLoading, setUsers } from '@/features/users/userSlice';

export const fetchUsers = () => async (dispatch: AppDispatch) => {
	try {
		dispatch(setIsLoading(true));
		const res = await fetch('https://jsonplaceholder.typicode.com/users');
		const data = await res.json();

		dispatch(setUsers(data));
		dispatch(setIsLoading(false));

		return data;
	} catch (e) {
		return null;
	}
};
