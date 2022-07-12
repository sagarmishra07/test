import { RouteConfig } from 'vue-router';

const routes = store => {
  return [
    {
      path: '/signup',
      name: 'signup',
      component: () => import('pages/Signup.vue')
    },
    {
      path: '/signin',
      name: 'signin',
      component: () => import('pages/Signin.vue')
    },
    {
      path: '/',
      component: () => import('layouts/MainLayout.vue'),
      meta: {
        requiresAuth: true
      },
      children: [
        {
          path: '',
          name: 'dashboard',
          component: () => import('pages/Dashboard/Landing.vue')
          // meta: {
          //   requiresAuth: true
          // },
          // beforeEnter: (to, from, next) => {
          //   next();
          // }
        },
        {
          path: 'training',
          name: 'training',
          component: () => import('pages/Dashboard/Training.vue'),

          beforeEnter: (to, from, next) => {
            next();
          }
        },
        {
          path: 'users',
          name: 'users',
          component: () => import('pages/Dashboard/Users.vue'),

          beforeEnter: (to, from, next) => {
            next();
          }
        }
      ]
    },
    {
      path: '*',
      component: () => import('pages/Error404.vue')
    }
  ];
};

// Always leave this as last one,
// but you can also remove it

export default routes;
