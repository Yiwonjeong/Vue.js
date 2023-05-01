<!-- 
 * 날짜: 2023/04/17
 * 이름: 이원정
 * 내용: Voard
  -->
<template>
  <router-view></router-view>
</template>

<script setup>
import { onBeforeMount } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const router = useRouter();
const store = useStore();

onBeforeMount(() => {
  const accessToken = localStorage.getItem("accessToken");

  if (accessToken != null) {
    axios
      .get("/user", {
        headers: { "X-AUTH-TOKEN": accessToken },
      })
      .then((response) => {
        console.log(response);
        store.dispatch("setUser", response.data);
        router.push("/list");
      })
      .catch((error) => {
        console.log(error);
      });
  } else {
    router.push("/user/login");
  }
});
</script>

<style scoped></style>
