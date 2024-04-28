// src/components/CircularProgressBar.js
import React from 'react';
import Chart from 'react-apexcharts';

const CircularProgressBar = ({ value, series }) => {
    var options = {
        chart: {
            height: 280,
            type: "radialBar",
        },

        series: [value],
        colors: ["#20E647"],
        plotOptions: {
            radialBar: {
                hollow: {
                    margin: 2,
                    size: "70%",
                    background: "#293450"
                },
                track: {
                    dropShadow: {
                        enabled: true,
                        top: 2,
                        left: 0,
                        blur: 4,
                        opacity: 0.15
                    }
                },
                dataLabels: {
                    name: {
                        offsetY: -10,
                        color: "#fff",
                        fontSize: "13px"
                    },
                    value: {
                        color: "#fff",
                        fontSize: "40px",
                        show: true
                    }
                }
            }
        },
        fill: {
            type: "gradient",
            gradient: {
                shade: "dark",
                type: "vertical",
                gradientToColors: ["#87D4F9"],
                stops: [0, 100]
            }
        },
        stroke: {
            lineCap: "round"
        },
        labels: ["Progress"]
    };


    return (
        <Chart options={options} series={options.series} type="radialBar" height="500" />
    );
};

export default CircularProgressBar;