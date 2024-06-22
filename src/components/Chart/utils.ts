import { faker } from '@faker-js/faker';

const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        x: {
            grid: {
                display: false,
                drawTicks: false
            },
            ticks: {
                font: {
                    family: "Poppins",
                    size: 10
                }
            }
        },
        y: {
            grid: {
                display: false,
                drawTicks: false
            },
            ticks: {
                font: {
                    family: "Poppins",
                    size: 10
                }
            }
        }
    },
    plugins: {
        tooltip: {
            callbacks: {
                label: (context: any) => {
                    if (context.dataset.label === "Income") {
                        return `You earned ${context.raw} this month`
                    }

                    return `You spent ${context.raw} this month`
                }
            },
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            titleFont: {
                size: 12,
                family: 'Poppins',
            },
            bodyFont: {
                size: 10,
                family: 'Poppins',
            },
            footerFont: {
                size: 10,
                family: 'Poppins',
            },
        },
        legend: {
            position: 'top' as const,
            labels: {
                font: {
                    family: "Poppins",
                    size: 12
                }
            }
        },
    },
};

export const data = {
    labels,
    datasets: [
        {
            label: 'Income',
            data: labels.map(() => faker.number.int({ min: 0, max: 500 })),
            backgroundColor: 'rgb(246, 55, 147,0.5)',
            borderRadius: 3,
            categoryPercentage: 1.0,
            barPercentage: 0.8,
        },
        {
            label: 'Expense',
            data: labels.map(() => faker.number.int({ min: 0, max: 500 })),
            backgroundColor: 'rgb(55, 124, 246,0.5)',
            borderRadius: 3,
            categoryPercentage: 1.0,
            barPercentage: 0.8,
        },
    ],
};