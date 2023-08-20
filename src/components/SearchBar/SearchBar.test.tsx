import { fireEvent } from '@testing-library/react';
import { setupStore } from '@/store';
import SearchBar from './SearchBar';
import { setSearchInput } from '@/features/users/userSlice';
import { renderWithProviders } from '@/utils/test-utils';

describe('TESTING the SearchBar component', () => {
	describe('GIVEN an input', () => {
		it('THEN calls handleSearch when input value changes', () => {
			const store = setupStore();
			const { getByPlaceholderText } = renderWithProviders(<SearchBar />, { store });

			const input = getByPlaceholderText('Search for users');
			fireEvent.change(input, { target: { value: 'test search' } });

			store.dispatch(setSearchInput('test search'));
			expect(input).toHaveDisplayValue('test search');
		});
	});
});
