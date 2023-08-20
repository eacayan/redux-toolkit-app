import { fireEvent } from '@testing-library/react';
import { renderWithProviders } from '@/utils/test-utils';
import UserList from './UserList';

describe('TESTING the UserList component', () => {
	describe('GIVEN a fetch request to the api', () => {
		describe('WHEN the api is still loading data', () => {
			it('THEN shows a loading indicator', () => {
				const { queryByRole } = renderComponent();
				const loader = queryByRole('status');
				expect(loader).toBeInTheDocument();
			});
		});

		describe('WHEN the api returns data', () => {
			it('THEN returns list of users', async () => {
				const { findByText, queryByText, findAllByRole } = renderComponent();
				const items = await findAllByRole('listitem');
				const user1 = await findByText(/Test Name 1/i);
				const user2 = await findByText(/Test Name 2/i);
				const noUsersContent = queryByText('No users found');

				expect(user1).toBeInTheDocument();
				expect(user2).toBeInTheDocument();
				expect(noUsersContent).not.toBeInTheDocument();
				expect(items).toHaveLength(2);
			});
		});
	});

	describe('GIVEN a user is searched for', () => {
		describe('WHEN a user that does not exist is searched', () => {
			it('THEN it outputs an empty list', async () => {
				const { getByPlaceholderText, queryByText } = renderComponent();
				const input = getByPlaceholderText('Search for users');

				fireEvent.change(input, { target: { value: 'Nothing' } });
				expect(queryByText(/Test Name/i)).not.toBeInTheDocument();
			});
		});

		describe('WHEN a user that exists is searched', () => {
			it('THEN list outputs only the items that satisfy the search', async () => {
				const { getByPlaceholderText, queryByText, findAllByRole } = renderComponent();
				const input = getByPlaceholderText('Search for users');

				fireEvent.change(input, { target: { value: 'Test Name 2' } });
				const items = await findAllByRole('listitem');

				expect(items).toHaveLength(1);
				expect(queryByText(/Test Name 1/i)).not.toBeInTheDocument();
			});
		});
	});
});

function renderComponent() {
	return renderWithProviders(<UserList />);
}
