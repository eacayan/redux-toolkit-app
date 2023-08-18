import { store } from '@/store';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import UserList from './UserList';

describe('TESTING the UserList component', () => {
	describe('GIVEN no data loaded from the api', () => {
		it('THEN shows a loading indicator', () => {
			const { queryByRole } = renderComponent();

			expect(queryByRole('status')).toBeInTheDocument();
		});
	});
});

function renderComponent() {
	return render(
		<Provider store={store}>
			<UserList />
		</Provider>,
	);
}
