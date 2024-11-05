export default function AuthSeparator() {
	return (
		<div className="flex items-center gap-8">
			<hr className="flex-grow" />
			<div className="font-semibold text-xs text-muted-foreground">
				OR
			</div>
			<hr className="flex-grow" />
		</div>
	);
}
