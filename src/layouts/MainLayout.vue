<template>
  <q-layout view="hHh Lpr lff" class="shadow-2 rounded-borders bg-accent">
    <q-header elevated class="bg-white text-black"> </q-header>

    <q-drawer
      v-model="drawerLeft"
      show-if-above
      :width="120"
      :breakpoint="700"
      elevated
      content-class="bg-white "
      class="full-height text-blue-grey-10 print-hide"
    >
      <div class="text-h6 items-center justify-center q-gutter-y-sm">
        <div class="text-subtitle2 items-center q-pt-lg q-gutter-y-md">
          <div v-for="(nav, key) in navItem" :key="key">
            <span class="cursor-pointer" @click="routeChange(nav.link)">
              <q-item
                active
                clickable
                v-ripple
                :class="$route.path == nav.routeName ? 'active' : 'text-dark'"
                class="column items-center justify-center"
              >
                <q-icon :name="nav.icon" size="25px" />
                <q-item-section> {{ nav.title }}</q-item-section>
              </q-item>
            </span>
          </div>
        </div>
      </div>
    </q-drawer>
    <q-page-container>
      <q-page padding cla>
        <DashboardNav />
        <Budget />
        <router-view />
      </q-page>
    </q-page-container>
  </q-layout>
</template>
<script>
import DashboardNav from 'src/components/modules/Dashboard/DashboardNav.vue';
export default {
  name: 'DashboardLayout',
  data() {
    return {
      //routes for sidebars
      navItem: [
        {
          title: 'Dashboard',
          link: '/',
          name: 'dashboard',
          code: 'dashboard',
          icon: 'dashboard'
        },
        {
          title: 'Training',
          link: '/training',
          name: 'training',
          code: 'training',
          icon: 'model_training'
        },
        {
          title: 'Budget',
          link: '/budget',
          name: 'budget',
          code: 'budget',
          icon: 'attach_money'
        },
        {
          title: 'Users',
          link: '/users',
          name: 'users',
          code: 'users',
          icon: 'person_outline'
        },
        {
          title: 'Study',
          link: '/study',
          name: 'study',
          code: 'study',
          icon: 'library_books'
        },
        {
          title: 'Technical',
          link: '/technical',
          name: 'technical',
          code: 'technical',
          icon: 'desktop_mac'
        },
        {
          title: 'Logout',
          link: '/logout',
          name: 'logout',
          code: 'logout',
          icon: 'logout'
        }
      ],
      drawerLeft: false
    };
  },
  computed: {
    getCurrentRoutes() {
      return this.$route.path;
    }
  },
  methods: {
    routeChange(routeName) {
      if (routeName === this.getCurrentRoutes) return;
      this.$router.push(routeName);
    },
    LOGOUT() {
      signOut(auth).then(() => {
        this.$router.push('/');
      });
    }
  },
  components: { DashboardNav }
};
</script>

<style scoped>
.active {
  color: black;
  background: black;
}
</style>
