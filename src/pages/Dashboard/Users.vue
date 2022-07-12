<template>
  <main class="row q-pa-md-lg q-col-gutter-x-lg ">
    <section class="col-md-8 row q-gutter-y-md ">
      <q-card
        class="my-card col-md-6 q-mr-md-md"
        v-for="(val, key) in userDetails"
        :key="key"
      >
        <div class="">
          <div
            class="text-right text-body1 q-pr-md-sm q-pt-md-sm cursor-pointer"
            @click="rejectPrompt = true"
          >
            X
          </div>
          <q-card-section class="row items-center q-col-gutter-x-xl q-py-md-md">
            <header class="column ">
              <div class="text-h5">
                {{ val.username }}
              </div>
              <div class="text-caption">
                {{ val.email }}
              </div>
              <div class="text-caption">
                {{ val.contact }}
              </div>
            </header>
            <q-space />
            <header>
              <q-btn color="primary" label="Accept" />
            </header>
          </q-card-section>
          <q-dialog v-model="rejectPrompt">
            <q-card>
              <q-card-section class="column q-pa-md-md q-gutter-y-sm ">
                <header class="text-primary text-h6 text justify-start">
                  Reject
                </header>

                <header>Are you sure you want to reject this user?</header>
                <header class="row">
                  <q-btn
                    class="text-primary border-red q-card"
                    label="No"
                    v-close-popup
                    flat
                  />
                  <q-space />
                  <q-btn
                    color="primary"
                    label="Yes"
                    v-close-popup
                    class="q-card text-white"
                  />
                </header>
              </q-card-section>
            </q-card>
          </q-dialog>
        </div>
      </q-card>
    </section>
    <section class="col-md-4">
      <UserDetails />
    </section>
  </main>
</template>

<script>
import UserDetails from 'src/components/modules/Dashboard/Users/UserDetails.vue';
export default {
  name: 'Users',
  data() {
    return {
      rejectPrompt: false,
      userDetails: [
        {
          username: 'Sagar Mishra',
          email: 'sagarmishra@gmail.com',
          contact: '9843444444'
        },
        {
          username: 'Sagar Mishra',
          email: 'sagarmishra@gmail.com',
          contact: '9843444444'
        },
        {
          username: 'Sagar Mishra',
          email: 'sagarmishra@gmail.com',
          contact: '9843444444'
        },
        {
          username: 'Sagar Mishra',
          email: 'sagarmishra@gmail.com',
          contact: '9843444444'
        },
        {
          username: 'Sagar Mishra',
          email: 'sagarmishra@gmail.com',
          contact: '9843444444'
        },
        {
          username: 'Sagar Mishra',
          email: 'sagarmishra@gmail.com',
          contact: '9843444444'
        }
      ]
    };
  },
  components: { UserDetails }
};
</script>

<style scoped>
.my-card {
  border-radius: 16px;
  width: 416px;
}
</style>
