import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory('/'),

  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('src/views/Home.vue'),
    },
    {
      path: '/params/:id?',
      name: 'Params',
      component: () => import('src/views/Params.vue'),
      props: true,
    },
    {
      path: '/composition',
      name: 'Composition',
      component: () => import('src/views/Composition.vue'),
      props: true,
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: { name: 'Home' },
    },
  ],
});

export default router;
