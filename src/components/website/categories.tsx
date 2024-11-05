export default function Categories() {
	return (
		<div className="max-w-7xl mx-auto flex justify-between items-center gap-4 py-8">
			{categoriesList.map((item) => {
				return (
					<div
						key={item.title + item.icon}
						className="flex justify-between gap-4 items-center p-2"
					>
						<img src={item.icon} />
						<span className="font-medium">{item.title}</span>
					</div>
				);
			})}
		</div>
	);
}

const categoriesList = [
	{ icon: "/math.png", title: "Math" },
	{ icon: "/data-analysis.png", title: "Data Analysis" },
	{ icon: "/computer-science.png", title: "Computer science" },
	{ icon: "/programming.png", title: "Programming & AI" },
	{ icon: "/science.png", title: "Science & Engineering" },
];
