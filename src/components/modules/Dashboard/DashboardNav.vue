<template>
  <main>
    <section class="row justify-between q-pl-md-lg  q-pr-md-lg">
      <header>
        <p class="text-h5 text-dark">Welcome Admin</p>
        <p class="text-subtitle">
          Have a nice day and make sure to maintain record carefully
        </p>
      </header>
      <header class="q-gutter-lg">
        <q-icon
          name="person_add"
          size="22px"
          @click="$router.push('/users')"
          class="cursor-pointer"
        />
        <q-icon name="note_add" size="22px" />
        <q-icon name="category" size="22px" />
        <q-avatar>
          <q-img src="https://cdn.quasar.dev/img/avatar.png" />
        </q-avatar>
      </header>
    </section>
    <section class="q-pl-md-lg  q-pr-md-lg">
      <q-separator />
    </section>
  </main>
</template>

<script>
export default {
  name: 'DashboardNav'
};
</script>

<style></style>
