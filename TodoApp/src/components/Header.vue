<template>
  <header>
    <div>
      <input type="text" v-model="newTodo" placeholder="할 일을 입력하세요." />
      <button @click="btnAddTodo">등록</button>
    </div>
  </header>
</template>

<script>
import { ref } from "vue";

export default {
  name: "Header",
  setup(props, context) {
    const newTodo = ref("");

    const btnAddTodo = () => {
      console.log(newTodo.value);
      if (newTodo.value !== "") {
        // 상위 컴포넌트에 addTodo 이벤트 발생 시킴
        context.emit("addTodo", newTodo.value);

        console.log("emit the event");

        newTodo.value = "";
      }
    };
    return {
      newTodo,
      btnAddTodo,
    };
  },
};
</script>

<style scoped>
header {
  widows: 100%;
  height: 60px;
  background-color: #fff;
  padding: 10px;
  box-sizing: border-box;
}
header > div {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  position: relative;
}
header > div > input {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 6px;
  border: none;
  outline: none;
}
header > div > button {
  width: 40px;
  height: 40px;
  border: none;
  background-color: #44ba81;
  color: #fff;
  position: absolute;
  right: 0;
  top: 0;
}
</style>
