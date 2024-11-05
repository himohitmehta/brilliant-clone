import { Input } from "@/components/ui/input";
import { useQueryState } from "nuqs";
import { useDebouncedCallback } from "use-debounce";
export default function SearchBar() {
	const [name, setName] = useQueryState("name");

	const handleInput = useDebouncedCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			setName(e.target.value);
		},
		1000,
	);
	return (
		<div>
			<h1>Browse Courses</h1>
			<Input defaultValue={name!} onChange={handleInput} placeholder="Search..." />
		</div>
	);
}
