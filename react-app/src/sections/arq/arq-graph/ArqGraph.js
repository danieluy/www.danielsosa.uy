import React, { PureComponent } from 'react';
import './ArqGraph.css';

import Chart from 'chart.js';

class ArqGraph extends PureComponent {
  onCanvasReady(node) {
    new Chart(node.getContext("2d"), {
      type: 'doughnut',
      data: {
        labels: [this.props.title, ''],
        datasets: [{
          label: 'Proficiency',
          data: [
            this.props.proficiency,
            100 - this.props.proficiency
          ],
          backgroundColor: ['#FF3300', '#CCCCCC'],
          borderWidth: 0
        }]
      },
      options: {
        cutoutPercentage: 90,
        title: {
          display: false,
          text: this.props.title
        },
        legend: {
          display: false
        },
        tooltips: {
          enabled: false
        },
        scales: {
          xAxes: [{
            display: false,
            ticks: {
              beginAtZero: true,
            }
          }],
          yAxes: [{
            display: false,
            ticks: {
              beginAtZero: true,
            }
          }]
        },
      }
    });
  }
  render() {
    return (
      <div className="arq-graph" style={{ width: this.props.width }}>
        <div className="arq-graph-title">
          {this.props.title}
        </div>
        <canvas ref={this.onCanvasReady.bind(this)} />
      </div>
    );
  }
}

export default ArqGraph;