import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import axios from 'axios';

function Piechart({ api }) {
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        const getStudentData = async () => {
            try {
                const response = await axios.get(`http://localhost:4000/api/v1/project/${api}`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('auth')}`
                    }
                });

                const dataKeys = Object.keys(response.data);
                const dataValues = Object.values(response.data);

                const chartData = dataKeys.map((key, index) => ({
                    field: key,
                    value: dataValues[index]
                }));

                setChartData(chartData);
            } catch (error) {
                console.error("Error fetching student data:", error);
            }
        };

        getStudentData();
    }, [api]);

    return (
        <React.Fragment>
            <div className="container-fluid mb-3">
                <Chart
                    type="pie"
                    width={500}
                    height={500}
                    series={chartData.map(item => item.value)}
                    options={{
                        title: {
                            text: api === '/pichart' ? "Project Status" : "Budget Status",
                        },
                        noData: { text: "Empty Data" },
                        labels: chartData.map(item => item.field)
                    }}
                />
            </div>
        </React.Fragment>
    );
}

export default Piechart;
