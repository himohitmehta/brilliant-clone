import useSearchQuery from "@/lib/hooks/use-search-query";
import SearchBar from "./search";
import CoursesTabs from "./tabs";
import { useEffect } from "react";

export default function Courses() {
	const { query, setQuery } = useSearchQuery({ title: "tab" });

	useEffect(() => {
		if (!query) {
			setQuery("new-courses");
		}
	}, [query, setQuery]);

	if (!query) return <div className="mx-auto max-w-6xl ">Loading</div>;

	return (
		<div className="mx-auto max-w-6xl ">
			<SearchBar />
			<CoursesTabs />
		</div>
	);
}
