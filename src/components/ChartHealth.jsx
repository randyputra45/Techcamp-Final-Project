import {Chart, ArcElement, RadialLinearScale } from 'chart.js'
import { PolarArea } from 'react-chartjs-2'

Chart.register(ArcElement);
Chart.register(RadialLinearScale);

const data = {
    labels: [
      'Depresi',
      'Stres',
      'Cemas'
    ],
    datasets: [{
      data: [24, 12, 16],
      backgroundColor: [
        '#43A5AA',
        '#5BCDD3',
        '#A7E4E8'
      ]
    }]
  };

function ChartHealth() {
    return (
        <div>
          <PolarArea
              data={data}
          />
        </div>
    )
}

export default ChartHealth
