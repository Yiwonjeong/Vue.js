import { createRouter, createWebHistory } from "vue-router";
import User1Main from "../components/user1/Main.vue";
import User1List from "../components/user1/List.vue";
import User1Reigster from "../components/user1/Register.vue";
import User1Modify from "../components/user1/Modify.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/user1",
      name: "User1Main",
      component: User1Main,
      children: [
        { path: "", component: User1List },
        { path: "list", name: "User1List", component: User1List },
        { path: "register", name: "User1Reigster", component: User1Reigster },
        {
          path: "modify",
          name: "User1Modify",
          component: User1Modify,
          props: true,
        },
      ],
    },
  ],
});

export default router;
