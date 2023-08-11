const fetchData = async () => {
	const res = await fetch('./data.json');
	const data = await res.json();

	createStats(data);
	console.log(data[0]);
};

const createStats = (data: Array) => {
	const statsContainer = document.getElementById('stats-container');

	data.forEach((stat) => {
		const div = document.createElement('div');
		div.classList.add('single-stat');
		div.innerHTML = `
            		<div class="flex gap-2">
						<img src="${stat.icon}" alt="" />
						<h3>${stat.category}</h3>
					</div>
					<div class="font-semibold">
						<span>${stat.score}</span>
						<span class="text-neutral-darkGrayBlue"> / 100</span>
					</div>
        `;

		statsContainer?.appendChild(div);
	});
};

fetchData();
