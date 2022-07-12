<template>
  <main class="q-pl-md-lg q-pt-md-lg q-pr-md-lg">
    <section class="">
      <header class="row  q-pb-md-md">
        <div class="text-body1 text-bold">
          Budget
        </div>
        <q-space />
        <div>
          <q-select
            v-model="defaultDropdown"
            :options="options"
            outlined
            dense
            class="outine-red"
          />
        </div>
      </header>
      <header class="row q-gutter-xs-sm q-py-xs-md ">
        <q-card class="my-card justify-center items-center col-md-3 shadow-1">
          <q-card-section class="column q-gutter-xs">
            <div class="text-caption">Total Allocated(Energy)</div>
            <div class="text-h5">Rs. 24 Crore</div>
            <div class="text-caption">Province(Bagmati Pradesh)</div>
          </q-card-section>
          <q-card-section>
            <q-icon name="backup_table" size="50px" />
          </q-card-section>
        </q-card>
        <q-space />
        <q-card class="my-card justify-center items-center col-md-3 shadow-1">
          <q-card-section class="column q-gutter-xs">
            <div class="text-caption">Total Allocated(CG)</div>
            <div class="text-h5">Rs. 24 Crore</div>
            <div class="text-caption">Province(Bagmati Pradesh)</div>
          </q-card-section>
          <q-card-section>
            <q-icon name="volunteer_activism" size="50px" />
          </q-card-section>
        </q-card>
        <q-space />
        <q-card class="my-card justify-center items-center col-md-3 shadow-1">
          <q-card-section class="column q-gutter-xs">
            <div class="text-caption">Total Expenses(Energy)</div>
            <div class="text-h5">Rs. 24 Crore</div>
            <div class="text-caption">LG(Bagmati Pradesh)</div>
          </q-card-section>
          <q-card-section>
            <q-icon name="attach_money" size="50px" />
          </q-card-section>
        </q-card>
        <q-space />
        <q-card class="my-card justify-center items-center col-md-3 shadow-1">
          <q-card-section class="column q-gutter-xs">
            <div class="text-caption">Total Expenses(CG)</div>
            <div class="text-h5">Rs. 24 Crore</div>
            <div class="text-caption">LG(Bagmati Pradesh)</div>
          </q-card-section>
          <q-card-section>
            <q-icon name="volunteer_activism" size="50px" />
          </q-card-section>
        </q-card>
      </header>
    </section>
  </main>
</template>

<script>
export default {
  name: 'Budget',
  data() {
    return {
      options: ['Bagmati Pradesh'],
      defaultDropdown: 'Bagmati Pradesh'
    };
  }
};
</script>

<style scoped>
.my-card {
  height: 121px;
  width: 300px;
  border-radius: 16px;
  display: flex;
}
</style>
