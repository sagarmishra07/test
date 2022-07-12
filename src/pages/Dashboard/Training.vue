<template>
  <main class="q-pa-md-lg">
    <div class="row q-col-gutter-x-xl ">
      <section class="col-6 ">
        <article class="row  q-card">
          <h5>Training</h5>
          <q-space />
          <p class="q-pr-xl">Add</p>
        </article>
        <q-separator />
      </section>

      <section class="col-6 ">
        <article class="row  q-card">
          <h5>Training</h5>
          <q-space />
          <button>Add</button>
        </article>
      </section>
    </div>
  </main></template
>

<script>
export default {
  name: 'Training',
  data() {
    return {
      trainingType: [
        {
          type: 'Technological'
        },
        {
          type: 'Economical'
        },
        {
          type: 'Social'
        }
      ],
      trainingData: [
        {
          trainingTitle: 'Solar Training (Province Level)',
          trainingType: 'Technological Training ',
          trainingDays: '30 Days',
          province: 'Province 3',
          date: '22/02/2022'
        }
      ]
    };
  }
};
</script>

<style></style>
