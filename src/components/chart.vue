



<script>
  import { Line } from 'vue-chartjs'

  export default {
    extends: Line,
    props:{
      toys:Array,
    },
    data () {
      return {
        chartData: {
          labels: this.toys.map(toy => toy.name),
          datasets: [
            {
              label: 'Toy Prices',
              data: this.toys.map(toy => toy.price),
              fill: false,
              borderColor: '#2554FF',
              backgroundColor: '#2554FF',
              borderWidth: 1
            }
          ]
        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              },
              gridLines: {
                display: true
              }
            }],
            xAxes: [ {
              gridLines: {
                display: false
              }
            }]
          },
          legend: {
            display: true
          },
          responsive: true,
          maintainAspectRatio: false
        }
      }
    },
    mounted () {
      this.renderChart(this.chartData, this.options)
    }
  }
</script>

<style>
</style>