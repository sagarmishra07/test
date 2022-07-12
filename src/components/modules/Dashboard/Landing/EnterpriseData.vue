<template>
  <main class="q-pa-md-lg">
    <q-card class="my-card shadow-1">
      <q-card-section>
        <header class="text-body1 text-bold">
          Enterprise Data

          <span class="text-caption">(Male & Female Count)</span>
          <article class="q-pt-md-md">
            <q-separator />
          </article>
        </header>
        <header class="row items-center justify-center justify-evenly">
          <article class="column items-center  q-gutter-md-y-md  q-py-md-xl">
            <div>
              <q-icon name="female" size="100px" class="customFemaleColor" />
            </div>
            <div class="text-h3 customText">
              105
            </div>
          </article>
          <article class="column items-center   q-gutter-md-y-md q-py-md-xl ">
            <div>
              <q-icon name="male" size="100px" class="customMaleColor" />
            </div>
            <div class="text-h3 customText">
              105
            </div>
          </article>
        </header>
      </q-card-section>
    </q-card>
  </main>
</template>

<script>
export default {};
</script>

<style scoped>
.customFemaleColor {
  color: #ed2e7e;

  /* Error / Default */
}
.customMaleColor {
  color: #0096b7;
}
.customText {
  width: 68px;
  height: 47px;
  color: #6e7191;
}
</style>
