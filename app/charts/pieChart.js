'use client'
import { Doughnut} from "react-chartjs-2";
import Chart from "chart.js/auto";

const PieChart1 = () => {
    return (
        <div>
            <Doughnut
                data={{
                    labels: [
                        "Direct",
                        "Social",
                        "Referral",
                    ],
                    datasets: [
                        {
                            label: "# of vulnerabilities",
                            data: [55,30,15],
                            backgroundColor: ["#4e73df", "#1cc88a", "#36b9cc"],
                            borderColor: "white",
                            borderWidth: 5
                        },
                        // {
                        //   label: "Web Apps",
                        //   data: [20, 13, 6, 8, 9],
                        //   backgroundColor: "purple",
                        //   borderColor: "red",
                        //   borderWidth: 5
                        // }
                    ]
                }}
                height={300}
                width={500}
                options={{
                    maintainAspectRatio: false
                }}
            />
        </div>
    );
};

export default PieChart1;
