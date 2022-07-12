<template>
  <q-card flat>
    <q-card-section class="row items-center">
      <span class="q-ml-sm"
        >Are you sure you want to delete this {{ title }} ?</span
      >
    </q-card-section>
    <q-card-actions align="right">
      <q-btn flat label="Cancel" color="primary" @click="deleteData(false)" />
      <q-btn
        unelevated
        label="Confirm"
        color="primary"
        @click="deleteData(true)"
      />
    </q-card-actions>
  </q-card>
</template>
<script>
export default {
  name: 'Dialog',
  props: {
    title: {
      type: String,
      default: 'data'
    }
  },
  methods: {
    deleteData(val) {
      this.$emit('deleteData', val);
    }
  }
};
</script>
