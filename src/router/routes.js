const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/MainComponentPage.vue") },
      { path: "/count1", component: () => import("pages/PiniaPage1.vue") },
      { path: "/count2", component: () => import("pages/PiniaPage2.vue") },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
