import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Red'],/* ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'], */
  datasets: [
    {
      label: '# of Votes',
      data: [12],/* [12, 19, 3, 5, 2, 3], */
      backgroundColor: [
          
        'rgba(55, 126, 184, 0.3)',
         'rgba(228, 26, 28, 0.2)',
        /*'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)', */
      ],
      borderColor: [
        'rgba(55, 126, 184, 1)',
         'rgba(228, 26, 28, 1)',
        /*'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)', */
      ],
      borderWidth: 1,
    },
  ],
};

export function Grafico(props) {
    data.labels = props.labels
    data.datasets[0].data = props.data
    
  return <Doughnut data={data} />;
}
