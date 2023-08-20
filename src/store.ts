import { PreloadedState, combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from '@/features/users/userSlice';

export const store = configureStore({
	reducer: {
		users: userReducer,
	},
});

const rootReducer = combineReducers({
	users: userReducer,
});

// Recommended approach by Redux
// https://redux.js.org/usage/writing-tests#setting-up-a-reusable-test-render-function
export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
	return configureStore({
		reducer: rootReducer,
		preloadedState,
	});
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
