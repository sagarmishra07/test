<template>
  <main class="q-pa-md-lg q-pa-xs-md">
    <section>
      <div class="text-body1 text-bold">
        Renewable Energy Technology
      </div>
    </section>
    <section class="q-pt-md-md">
      <q-separator />
    </section>
    <section class="row q-gutter-md-lg q-pt-md-lg q-pt-xs-md q-gutter-xs-xs  ">
      <q-card
        class="my-card justify-center items-center shadow-1"
        v-for="(val, key) in content"
        :key="key"
      >
        <q-card-section class="column q-gutter-xs">
          <div class="text-caption">{{ val.label }}</div>

          <div class="text-h5">{{ val.number }}</div>
        </q-card-section>
        <q-card-section>
          <q-icon :name="val.icon" size="30px" />
        </q-card-section>
      </q-card>
    </section>
    <section></section>
  </main>
</template>

<script>
export default {
  name: 'RenewableEnergyTechnology',
  data() {
    return {
      content: [
        {
          label: 'Power Station',
          number: '50',
          icon: 'precision_manufacturing'
        },
        {
          label: 'Cooking',
          number: '50',
          icon: 'precision_manufacturing'
        },
        {
          label: 'Irrigation',
          number: '50',
          icon: 'precision_manufacturing'
        },
        {
          label: 'Solar Home System',
          number: '50',
          icon: 'precision_manufacturing'
        },
        {
          label: 'Transformers ',
          number: '50',
          icon: 'precision_manufacturing'
        }
      ]
    };
  }
};
</script>

<style scoped>
.my-card {
  height: 78px;
  width: 190px;
  border-radius: 16px;
  display: flex;
}
</style>
