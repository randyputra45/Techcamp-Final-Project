import {Chart, ArcElement, RadialLinearScale } from 'chart.js'
import { PolarArea } from 'react-chartjs-2'

Chart.register(ArcElement);
Chart.register(RadialLinearScale);



function ChartHealth(props) {
  const data = {
    labels: [
      'Depresi',
      'Stres',
      'Cemas'
    ],
    datasets: [{
      data: [props.depresi, props.stres, props.cemas],
      backgroundColor: [
        '#43A5AA',
        '#5BCDD3',
        '#A7E4E8'
      ]
    }]
  };

    return (
        <div>
          <PolarArea
              data={data}
          />
        </div>
    )
}

export default ChartHealth
