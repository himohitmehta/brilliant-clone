import SearchBar from "./search";
import CoursesTabs from "./tabs";

export default function Courses() {
	return (
		<div className="mx-auto max-w-7xl ">
			<SearchBar />
			<CoursesTabs />
		</div>
	);
}
