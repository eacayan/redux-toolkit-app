import { UserProps } from '@/components/UserList';
import { createSlice } from '@reduxjs/toolkit';

type UserSliceState = { users: UserProps[] };
const initialState: UserSliceState = {
	users: [],
};

export const userSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		delete: (state, action) => {
			state.users = state.users.filter((user) => user.id !== action.payload);
		},
	},
});

export default userSlice.reducer;
