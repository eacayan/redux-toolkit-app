const nextJest = require('next/jest');
const createJestConfig = nextJest({
	// Provide the path to your Next.js app to load next.config.js and .env files in your test environment
	dir: './',
});

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const config = {
	// Add more setup options before each test is run
	setupFilesAfterEnv: ['<rootDir>/utility/jest/setup.ts'],

	testEnvironment: 'jest-environment-jsdom',
};

module.exports = async () => ({
	...(await createJestConfig(config)()),
	collectCoverage: true,
	coverageProvider: 'v8',
	collectCoverageFrom: [
		'**/*.{js,jsx,ts,tsx}',
		'!**/*.d.ts',
		'!**/node_modules/**',
		'!**/tailwind.config.ts',
		'!<rootDir>/out/**',
		'!<rootDir>/.next/**',
		'!<rootDir>/*.config.js',
		'!<rootDir>/coverage/**',
		'!<rootDir>/src/pages/*',
		'!<rootDir>/src/store.ts',
	],
	testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
	testEnvironment: 'jsdom',
	transformIgnorePatterns: ['/node_modules/', '^.+\\.module\\.(css|sass|scss)$'],
});

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
// export default createJestConfig(config);
