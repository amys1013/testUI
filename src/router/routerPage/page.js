export default [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/home.vue"),
    children: [
      {
        path: "",
        name: "button",
        component: () => import("/packages/button/doc.md"),
      },
      {
        path: "input",
        name: "input",
        component: () => import("/packages/input/doc.md"),
      },
    ],
  },
];
