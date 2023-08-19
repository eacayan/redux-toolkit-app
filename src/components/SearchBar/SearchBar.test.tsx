import { fireEvent, render } from '@testing-library/react';
import SearchBar from './SearchBar';

describe('TESTING the SearchBar component', () => {
	describe('GIVEN an input', () => {
		it('THEN calls handleSearch when input value changes', () => {
			const handleSearchMock = jest.fn();
			const mockValue = 'test';
			const { getByPlaceholderText } = render(<SearchBar handleSearch={handleSearchMock} />);

			const input = getByPlaceholderText('Search for users') as HTMLInputElement;
			fireEvent.change(input, { target: { value: mockValue } });

			expect(handleSearchMock).toHaveBeenCalledTimes(1);
			expect(input.value).toBe(mockValue);
		});
	});
});
