<template>
  <main class="q-pa-md-lg q-pa-xs-md" style="">
    <section>
      <q-card class="my-card  shadow-1">
        <q-card-section class="row justify-between items-center q-pt-md-lg">
          <div class="text-body1 text-bold">
            Green House Gas
            <span class="text-caption">(Carbon Emission)</span>
          </div>
          <div>
            <q-select
              v-model="selectedOptions"
              :options="options"
              label="Select Province"
              outlined
              dense
            />
          </div>
        </q-card-section>
      </q-card>
    </section>
    <section>
      <apexchart
        class="row q-pt-md"
        :options="chartOptions"
        :series="series"
        height="270"
        type="donut"
      ></apexchart>
    </section>
  </main>
</template>

<script>
export default {
  name: 'GreenHouseGas',
  data() {
    return {
      selectedOptions: 'Bagmati Province',
      options: ['Bagmati Province'],
      series: [100, 100, 200, 300, 400, 500, 600],
      chartOptions: {
        labels: [
          'Bagmati Pradesh',
          'Madesh Province',
          'Bagmati Province',
          'Gandaki Province',
          'Lumbini Province',
          'Karnali Province',
          'Sudurpaschim Province'
        ]
      }
    };
  }
};
</script>

<style></style>
