import React, { Component } from 'react';
import Chart from 'react-apexcharts'

const DonutChart = (props) =>{

    let seriesValue = null;
    let labels = null;
    const data = props.data;
    
    if (data.length) {
        data.sort((a,b)=>{
            return (a.id - b.id)
          });
      
        seriesValue = data.map((item) => {
            return item.participation;
        });

        labels = data.map((item)=>{
            return item.firstName + " " + item.lastName
        })
    } else {
        seriesValue = [];
        labels = [];
    }
    
    let state = {
        options: {
            seriesValue,
            labels,
            chart: {
                type: 'donut',
            },
            legend: {
            show: true,
            position: 'right',
            fontSize: '13px',
            markers: {
                width: 25,
                height: 25,
                radius: 5,
                offsetY: 8,
                offsetX: -8,
            },
            labels: {
                useSeriesColors: true,
            },
            offsetY: -19,
            itemMargin: {
                vertical: 10,
            },
            },
            dataLabels: {
                enabled: false,
            },
            plotOptions: {
                pie: {
                    donut: {
                    labels: {
                        show: false,
                    },
                    size: '52%',
                    },
                },
            },
        },
        series: seriesValue,
      }

    return (
        <div className="donut my-10 flex justify-center">
            <Chart options={state.options} series={state.series} type="donut" width="600" />
      </div>
    )

}

export default DonutChart;