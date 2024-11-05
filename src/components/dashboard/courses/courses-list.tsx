import { courses } from "@/lib/data/courses";
import CourseCard from "./course-card";
import { useQueryState } from "nuqs";

export default function CoursesList({ isNew }: { isNew?: boolean }) {
	const [tab] = useQueryState("tab");
	const filteredCourses = isNew
		? courses.filter((item) => item.isNew)
		: courses.filter((course) => course.category.toLowerCase() === tab);
	console.log({ filteredCourses, isNew, tab });
	return (
		<div className="grid grid-cols-6 gap-4 ">
			{filteredCourses.map((course) => (
				<CourseCard data={course} key={course.id} />
			))}
		</div>
	);
}
