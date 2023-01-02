/* eslint-disable @typescript-eslint/prefer-ts-expect-error */
import Chart from 'react-apexcharts'

const LineChart = (): JSX.Element => {
  const series = [
    {
      name: 'date',
      data: [0, 2, 5, 3, 4, 6]
    }
  ]

  const options = {
    chart: {
      type: 'area',
      toolbar: {
        show: false
      }
    },
    dataLabels: {
      enabled: true
    },
    stroke: {
      curve: ['smooth', 'straight', 'stepline']
    },
    fill: {
      type: 'gradient'
    },
    xaxis: {
      type: 'number',
      categories: [1, 2, 3, 4, 5, 6]
    },

    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm'
      }
    }
  }
  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    <Chart options={options} series={series} type='area' height={350} />
  )
}

export default LineChart
