'use client'
import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

export default function LineChart1() {
    const canvasEl = useRef(null);

    const colors = {
        purple: {
            default: "rgba(149, 76, 233, 1)",
            half: "rgba(149, 76, 233, 0.5)",
            quarter: "rgba(149, 76, 233, 0.25)",
            zero: "rgba(149, 76, 233, 0)"
        },
        indigo: {
            default: "rgba(80, 102, 120, 1)",
            quarter: "rgba(80, 102, 120, 0.25)"
        }
    };

    useEffect(() => {
        const ctx = canvasEl.current.getContext("2d");

        const gradient = ctx.createLinearGradient(0, 16, 0, 600);
        gradient.addColorStop(0, colors.purple.half);
        gradient.addColorStop(0.65, colors.purple.quarter);
        gradient.addColorStop(1, colors.purple.zero);

        const weight = ["$0", "$10,000", "$20,000", "$30,000", "$40,000"];

        const labels = [
            "Jan",
            "Mar",
            "May",
            "Jul",
            "Sep",
            "Nov"
        ];
        const data = {
            labels: labels,
            datasets: [
                {
                    backgroundColor: gradient,
                    data: weight,
                    fill: true,
                    borderWidth: 2,
                    borderColor: colors.blue.default,
                    lineTension: 0.2,
                    pointBackgroundColor: colors.white.default,
                    pointRadius: 3
                }
            ]
        };
        const config = {
            type: "line",
            data: data
        };
        const LineChart1 = new Chart(ctx, config);

        return function cleanup() {
             LineChart1.destroy();
        };
    });

    return (
        <div className="App">
            <span>Chart.js Demo</span>
            <canvas id="myChart" ref={canvasEl} height="100" />
        </div>
    );
}
