let res = JSON.parse(localStorage.getItem("result"));

if (res != null) {
    let totalVotes = 0;
    let chartData = [];
for (let val of Object.values(res)) {
        totalVotes += val;
    }


    for (let key of Object.keys(res)) {
        const percentage = (res[key] / totalVotes) * 100;
        console.log(key, res[key], percentage);

        const progressBar = document.getElementById(`${key}p`);
        progressBar.style.width = `${percentage}%`;
        chartData.push(percentage);
    }

    console.log("Total Votes:", totalVotes);
    console.log("Chart Data:", chartData);


    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'horizontalBar',
        data: {
            labels: Object.keys(res),
            datasets: [{
                label: 'Votes',
                data: chartData,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                xAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}

console.log(res);
