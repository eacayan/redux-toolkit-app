import { UserSliceState } from '@/features/users/userSlice';

export const mockUserData = [
	{
		id: 1,
		name: 'Test Name 1',
		email: 'testemail1@test.com',
		phone: '111-11111',
		address: { city: 'QC', street: 'Street 1', suite: '111', zipcode: '1111' },
	},
	{
		id: 2,
		name: 'Test Name 2',
		email: 'testemail2@test.com',
		phone: '222-22222',
		address: { city: 'Makati', street: 'Street 2', suite: '222', zipcode: '2222' },
	},
];

export const mockStoreData: UserSliceState = {
	usersArray: mockUserData,
	searchInput: '',
	isLoading: false,
};
