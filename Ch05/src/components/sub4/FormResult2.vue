<template>
  <h4>FormResult2</h4>
  <p>
    name: {{ params.name }} <br />
    age: {{ params.age }}<br />
    addr: {{ params.addr }}<br />
  </p>
</template>

<script setup>
import { useRoute } from "vue-router";

// route 생성
const route = useRoute();

// param 데이터 수신 --> 주소 파라미터 서식 설정
const params = route.params;
</script>

<style scoped></style>
