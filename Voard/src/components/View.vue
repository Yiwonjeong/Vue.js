<template>
  <v-app>
    <v-app-bar>
      <v-toolbar-title>글 보기</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <v-container>
        <v-sheet max-width="800" class="mx-auto">
          <v-text-field
            label="제목입력"
            variant="outlined"
            readonly
          ></v-text-field>
          <v-textarea label="내용입력" variant="outlined" readonly></v-textarea>
          <v-file-input
            label="파일 첨부"
            variant="underlined"
            readonly
          ></v-file-input>
        </v-sheet>
        <v-sheet class="text-center py-4">
          <v-btn color="primary" @click="btnList">글 목록</v-btn>
        </v-sheet>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
const btnList = () => {
  router.push("/list");
};
</script>

<style scoped></style>
