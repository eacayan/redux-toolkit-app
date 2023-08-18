import { Inter } from 'next/font/google';
import UserList from '@/features/users/UserList';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	return (
		<main className={`flex min-h-screen flex-col items-center gap-y-6 p-24 ${inter.className}`}>
			<UserList />
		</main>
	);
}
