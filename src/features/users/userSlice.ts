import { UserProps } from '@/features/users/UserList/UserList';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type UserSliceState = {
	usersArray: UserProps[];
	searchInput: string;
	isLoading: boolean;
};

const initialState: UserSliceState = {
	usersArray: [],
	searchInput: '',
	isLoading: false,
};

export const userSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		setUsers: (state, action: PayloadAction<UserProps[]>) => {
			state.usersArray = action.payload;
			state.isLoading = false;
		},
		deleteUser: (state, action: PayloadAction<number>) => {
			state.usersArray = state.usersArray.filter((user) => user.id !== action.payload);
		},
		setSearchInput: (state, action: PayloadAction<string>) => {
			state.searchInput = action.payload;
		},
		setIsLoading: (state, action: PayloadAction<boolean>) => {
			state.isLoading = action.payload;
		},
	},
});

export const { setUsers, deleteUser, setSearchInput, setIsLoading } = userSlice.actions;

export const selectUsers = (state: { users: UserSliceState }) => state.users.usersArray;
export const selectSearchInput = (state: { users: UserSliceState }) => state.users.searchInput;
export const selectIsLoading = (state: { users: UserSliceState }) => state.users.isLoading;

export default userSlice.reducer;
