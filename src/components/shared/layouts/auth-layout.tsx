export default function AuthLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="max-w-4xl mx-auto grid grid-cols-2 place-items-center h-screen">
			<div className="">
				<img src="/public/vite.svg" />
			</div>
			<div>{children}</div>
		</div>
	);
}
