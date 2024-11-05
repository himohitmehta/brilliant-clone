import { Input } from "@/components/ui/input";
import useSearchQuery from "@/lib/hooks/use-search-query";
import { useDebouncedCallback } from "use-debounce";
export default function SearchBar() {
	// const [name, setName] = useQueryState(
	// 	"name",
	// 	parseAsString.withDefault("").withOptions({
	// 		clearOnDefault: true,
	// 	}),
	// );
	const { query: name, setQuery: setName } = useSearchQuery({
		title: "name",
	});
	const { setQuery: setTab } = useSearchQuery({ title: "tab" });

	const handleInput = useDebouncedCallback(
		async (e: React.ChangeEvent<HTMLInputElement>) => {
			await setName(e.target.value);
			setTab("");
		},
		1000,
	);
	return (
		<div className="py-8">
			<h1 className="text-3xl font-bold mb-8">Browse all Courses</h1>
			<Input
				defaultValue={name!}
				onChange={handleInput}
				placeholder="Search..."
				className="rounded-full"
			/>
		</div>
	);
}
