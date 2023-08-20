// Recommended approach by Redux
// https://redux.js.org/usage/writing-tests#setting-up-a-reusable-test-render-function
import React, { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { RenderOptions, render } from '@testing-library/react';
import { PreloadedState } from '@reduxjs/toolkit';
import { RootState, AppStore, setupStore } from '@/store';

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
	preloadedState?: PreloadedState<RootState>;
	store?: AppStore;
}

export function renderWithProviders(
	ui: React.ReactElement,
	{
		preloadedState = {},
		// Automatically create a store instance if no store was passed in
		store = setupStore(preloadedState),
		...renderOptions
	}: ExtendedRenderOptions = {},
) {
	function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
		/* istanbul ignore next */
		return <Provider store={store}>{children}</Provider>;
	}
	/* istanbul ignore next */
	return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
