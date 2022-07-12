<template>
  <main>
    <section>
      <q-card class="my-card row items-center q-py-md-md ">
        <q-card-section>
          <q-input type="text" label="Search User" outlined dense>
            <template v-slot:prepend>
              <q-icon name="search" class="q-pr-md-md" />
            </template>
          </q-input>
        </q-card-section>
        <q-space />
        <q-card-section
          class="text-primary cursor-pointer"
          @click="newUserPrompt = true"
        >
          + Add User
        </q-card-section>
        <section
          class="row items-center "
          v-for="(val, key) in userInformations"
          :key="key"
        >
          <q-card-section>
            <q-avatar>
              <img :src="val.image" />
            </q-avatar>
          </q-card-section>
          <q-card-section class="column">
            <article>
              {{ val.username }}
            </article>
            <article class="row">
              <div>
                <q-icon name="location_on" color="secondary" size="25" />
              </div>
              <div class="text-caption text-secondary">
                {{ val.address }}
              </div>
            </article>
          </q-card-section>
          <q-card-section> <q-separator /></q-card-section>
        </section>
      </q-card>
    </section>

    <!-- dialog for new user addition -->

    <section>
      <q-dialog v-model="newUserPrompt" persistent>
        <q-card>
          <q-card-section class="text-h5 row">
            <div>
              Login Credentials
            </div>
            <q-space />
            <div class="text-bold">
              X
            </div>
          </q-card-section>
          <q-card-section class="">
            <header>
              <div>
                <q-input
                  v-model="userData.username"
                  type="text"
                  label="Username"
                />
              </div>
              <div>
                <q-input v-model="userData.email" type="text" label="Email" />
              </div>
              <div>
                <q-input
                  v-model="userData.password"
                  type="password"
                  label="Password"
                />
              </div>
              <div>
                <span class="text-h5">Role</span>
                <q-select
                  v-model="userData.role"
                  :options="userRoleOptions"
                  label="User Role"
                  filled
                />
              </div>
              <div class="column">
                <span class="text-h5">Area</span>
                <div class="row">
                  <q-select
                    v-model="userData.area.province"
                    :options="provinceOptions"
                    label="User Role"
                    filled
                  />
                  <q-select
                    v-model="userData.role"
                    :options="userRoleOptions"
                    label="User Role"
                    filled
                  />
                </div>
              </div>
            </header>
          </q-card-section>
          <q-card-actions align="right">
            <q-btn
              flat
              label="Approve"
              class="text-white bg-primary"
              v-close-popup
            />
          </q-card-actions>
        </q-card>
      </q-dialog>
    </section>
  </main>
</template>

<script>
const userDataDefault = {
  username: '',
  email: '',
  password: '',
  role: '',
  area: {
    province: '',
    district: '',
    municipaity: []
  }
};
export default {
  name: 'UserDetails',
  data() {
    return {
      userData: { ...userDataDefault },
      userRoleOptions: ['Manager'],
      provinceOptions: [],
      newUserPrompt: false,
      userInformations: [
        {
          image: 'https://cdn.quasar.dev/img/avatar.png',
          username: 'Annette Black',
          address: 'Bagmati (Province 3), Kathmandu, Tokha'
        },
        {
          image: 'https://cdn.quasar.dev/img/avatar.png',
          username: 'Annette Black',
          address: 'Bagmati (Province 3), Kathmandu, Tokha'
        },
        {
          image: 'https://cdn.quasar.dev/img/avatar.png',
          username: 'Annette Black',
          address: 'Bagmati (Province 3), Kathmandu, Tokha'
        }
      ]
    };
  }
};
</script>
<style scoped>
.my-card {
  border-radius: 16px;
}
</style>
