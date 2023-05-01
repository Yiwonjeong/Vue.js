<template>
  <h4>FormResult1</h4>
  <p>
    name: {{ user.name }} <br />
    age: {{ user.age }}<br />
    addr: {{ user.addr }}<br />
  </p>
</template>

<script setup>
import { useRoute } from "vue-router";

// route 생성 및 query 데이터 수신 const
user = useRoute().query;
</script>

<style scoped></style>
