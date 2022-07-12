<template>
  <main>
    <section class="row">
      <header class="col-md-6">
        <RenewableEnergyTechnology />

        <EnterpriseData />
      </header>
      <header class="col-md-6">
        <GreenHouseGas />
      </header>
    </section>
  </main>
</template>

<script>
import RenewableEnergyTechnology from 'src/components/modules/Dashboard/Landing/RenewableEnergyTechnology.vue';
import GreenHouseGas from '../../components/modules/Dashboard/Landing/GreenHouseGas.vue';
import EnterpriseData from 'src/components/modules/Dashboard/Landing/EnterpriseData.vue';

export default {
  name: 'Landing.vue',
  components: { RenewableEnergyTechnology, GreenHouseGas, EnterpriseData }
};
</script>

<style scoped></style>
