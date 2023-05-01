<template>
  <v-app>
    <v-app-bar>
      <v-toolbar-title>글 쓰기</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <v-container>
        <v-sheet max-width="800" class="mx-auto">
          <v-text-field
            label="제목입력"
            variant="outlined"
            v-model="article.title"
          ></v-text-field>
          <v-textarea
            label="내용입력"
            variant="outlined"
            v-model="article.content"
          ></v-textarea>
          <v-file-input label="파일 첨부" variant="underlined"></v-file-input>
        </v-sheet>

        <v-sheet class="text-center py-4">
          <v-btn class="mr-2" @click="btnCancel">취소</v-btn>
          <v-btn color="primary" @click="btnWrite">글 등록</v-btn>
        </v-sheet>

        <v-dialog v-model="dialog" width="400">
          <v-card>
            <v-card-text>글 등록 완료</v-card-text>
            <v-card-actions>
              <v-btn color="primary" block @click="dialog = false">확인</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { useRouter } from "vue-router";
import { reactive, computed, ref } from "vue";
import axios from "axios";
import { useStore } from "vuex";

const router = useRouter();
const store = useStore();

const article = reactive({
  title: null,
  content: null,
  uid: null,
});
const dialog = ref(false);

const btnCancel = () => {
  router.push("/list");
};

const btnWrite = () => {
  const user = store.getters.user;
  article.uid = user.uid;

  axios
    .post("/write", article)
    .then((response) => {
      console.log(response);
      dialog.value = true;
    })
    .catch((error) => {
      console.log(error);
    });
};
</script>

<style scoped></style>
