"use strict";
const loadingScreen = document.getElementById('loading-screen');
// Fetching JSON Data
const fetchData = async () => {
    // Show loading screen
    loadingScreen.classList.toggle('hidden');
    // Fetch data
    const res = await fetch('./data.json');
    const data = await res.json();
    // Hide loading screen
    loadingScreen.classList.toggle('hidden');
    createStats(data);
};
// Render output
const createStats = (data) => {
    const statsContainer = document.getElementById('stats-container');
    const totalPointsEl = document.getElementById('total-points');
    let total = data.reduce((acc, cur) => {
        return acc + cur.score;
    }, 0) / data.length;
    total = +total.toFixed(0);
    totalPointsEl.innerText = total.toString();
    data.forEach((stat) => {
        // Wrapper Div
        const wrapperDiv = document.createElement('div');
        wrapperDiv.classList.add('single-stat');
        // Flex Item One
        const innerDivOne = document.createElement('div');
        innerDivOne.classList.add('inner-div-one');
        wrapperDiv.appendChild(innerDivOne);
        // Flex Item One Content
        const statSvg = document.createElement('img');
        statSvg.setAttribute('src', stat.icon);
        innerDivOne.appendChild(statSvg);
        const statName = document.createElement('h3');
        statName.textContent = stat.category;
        // Conditional Styling
        conditionalStyling(stat.category, statName);
        innerDivOne.appendChild(statName);
        // Flex Item Two
        const innerDivTwo = document.createElement('div');
        innerDivTwo.classList.add('font-semibold');
        wrapperDiv.appendChild(innerDivTwo);
        // Flex Item Two Content
        const statScore = document.createElement('span');
        statScore.textContent = stat.score.toString();
        innerDivTwo.appendChild(statScore);
        const statMax = document.createElement('span');
        statMax.classList.add('text-neutral-darkGrayBlue');
        statMax.textContent = ' / 100';
        innerDivTwo.appendChild(statMax);
        statsContainer.appendChild(wrapperDiv);
    });
};
// Function for conditional styling summary categories
const conditionalStyling = (itemCategory, DOMElement) => {
    let color;
    switch (itemCategory) {
        case 'Reaction':
            color = 'hsl(0, 100%, 67%)';
            break;
        case 'Memory':
            color = 'hsl(39, 100%, 56%)';
            break;
        case 'Verbal':
            color = 'hsl(166, 100%, 37%)';
            break;
        case 'Visual':
            color = 'hsl(234, 85%, 45%)';
            break;
        default:
            color = '#000';
    }
    DOMElement.style.color = color;
};
window.addEventListener('DOMContentLoaded', fetchData);
//# sourceMappingURL=index.js.map