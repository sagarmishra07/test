<template>
  <main>
    <section class="col-md-12 full-height row fixed-center full-width ">
      <article
        class="col-md-6  bg-primary  flex  justify-center items-center   "
      >
        <img src="../assets/logo.png" alt="GIZ Logo" class="q-pl-xl" />
      </article>
      <article class="col-md-6 flex justify-center items-center column   ">
        <p class="text-primary text-h3 ">Log in</p>
        <div class="q-gutter-y-lg q-pt-lg customwidth">
          <q-input
            v-model="userDetails.username"
            type="text"
            label="Username"
            filled
          />
          <q-input
            v-model="userDetails.password"
            type="password"
            label="Password"
            filled
          />

          <header class="row full-width items-center justify-between">
            <div>
              <q-checkbox
                right-label
                label="Remember me"
                v-model="userDetails.rememberme"
              />
            </div>
            <div class="text-primary text-line">
              Forget Password ?
            </div>
          </header>
          <q-btn color="primary" label="Log in" class="customWidth" />
          <div class=" row justify-center items-center ">
            <p>
              Not a member ?
              <span
                class="text-primary underline cursor-pointer q-pt-md"
                @click="$router.push('/signup')"
                >Sign up</span
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

  password: '',
  rememberme: false
};
export default {
  name: 'Signin',
  data() {
    return {
      userDetails: { ...userDetailsDefault }
    };
  }
};
</script>

<style scoped>
.customTextSizes {
  font-size: 150px;
}
.customwidth {
  width: 400px;
}
</style>
