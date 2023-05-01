<!-- 
 * 날짜: 2023/04/13
 * 이름: 이원정
 * 내용: TodoApp
  -->
<template>
  <h4>TodoApp</h4>
  <Header v-on:addTodo="addTodoHandler"></Header>
  <Main></Main>
  <Footer></Footer>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Main from "./components/Main.vue";
import { useStore } from "vuex";

export default {
  name: "App",
  components: {
    Header,
    Main,
    Footer,
  },
  setup() {
    const store = useStore();

    const addTodoHandler = (todo) => {
      console.log("receive the event int App");

      store.dispatch("addTodo", todo);
    };

    return { addTodoHandler };
  },
};
</script>

<style scoped></style>
