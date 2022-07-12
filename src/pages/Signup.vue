<template>
  <main>
    <section class="col-md-12 full-height row fixed-center full-width ">
      <article
        class="col-md-6  bg-primary  flex  justify-center items-center   "
      >
        <img src="../assets/logo.png" alt="GIZ Logo" class="q-pl-xl" />
      </article>
      <article class="col-md-6 flex justify-center items-center column   ">
        <p class="text-primary text-h3 ">Sign Up</p>
        <div class="q-gutter-y-lg q-pt-lg customwidth">
          <q-input
            v-model="userDetails.username"
            type="text"
            label="Username"
            filled
          />
          <q-input
            v-model="userDetails.email"
            type="text"
            label="Email"
            filled
          />
          <q-input
            v-model="userDetails.contact"
            type="number"
            label="Contact"
            filled
          />
          <q-input
            v-model="userDetails.password"
            type="password"
            label="Password"
            filled
          />
          <q-input
            v-model="userDetails.confirmPassword"
            type="password"
            label="Confirm Password"
            filled
          />

          <q-btn color="primary" label="Register" class="customwidth" />
          <div class=" row justify-center items-center ">
            <p>
              Already hava an account ?
              <span
                class="text-primary underline cursor-pointer q-pt-md"
                @click="$router.push('/signin')"
                >Log in</span
              >
            </p>
          </div>
        </div>
      </article>
    </section>
  </main>
</template>

<script>
const userDetailsDefault = {
  username: '',
  email: '',
  contact: '',
  password: '',
  confirmPassword: ''
};
export default {
  name: 'Signup',
  data() {
    return {
      userDetails: { ...userDetailsDefault }
    };
  }
};
</script>

<style scoped>
.customTextSizes {
  font-size: 15px;
}
.customwidth {
  width: 400px;
}
</style>
