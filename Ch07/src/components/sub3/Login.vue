<template>
  <h4>Login</h4>
  <form @submit.prevent="loginProc">
    <table border="1">
      <tr>
        <td>아이디</td>
        <td><input type="text" v-model="user.uid" /></td>
      </tr>
      <tr>
        <td>비밀번호</td>
        <td><input type="password" v-model="user.pass" /></td>
      </tr>
      <tr>
        <td colspan="2" align="right">
          <input type="submit" value="로그인" />
        </td>
      </tr>
    </table>
  </form>
</template>

<script setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import axios from "axios";

const store = useStore();
const router = useRouter();

const user = reactive({
  uid: "",
  pass: "",
});

// (비동기 기준) dispatch(함수명, 전달인자)으로 actions 내 함수 호출
const loginProc = () => {
  store.dispatch("login", user);
  console.log("2");
  //console.log(store.getters.getUser);
  // 요청 전 화면 전환
  router.push("/jwt/loginSuccess");
};
</script>

<style scoped></style>
