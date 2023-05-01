<template>
  <footer>
    <button @click="btnClear">CLEAR ALL</button>
  </footer>
</template>

<script>
import { useStore } from "vuex";

export default {
  name: "Footer",
  setup() {
    const store = useStore();

    const btnClear = () => {
      store.dispatch("clearTodo");
    };

    return { btnClear };
  },
};
</script>

<style scoped>
footer {
  width: 100%;
  height: auto;
  background-color: #f4f4f4;
  border: 1px solid #bbb;
  text-align: center;
}
footer > button {
  width: 100%;
  height: 30px;
  border: none;
  color: #424242;
}
footer > button:hover {
  color: red;
}
</style>
