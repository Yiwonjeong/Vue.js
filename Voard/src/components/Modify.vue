<template>
  <v-app>
    <v-app-bar>
      <v-app-bar-title>글보기</v-app-bar-title>
      <v-btn @click="btnLogout">로그아웃</v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <v-card max-width="800" class="mx-auto">
          <v-card-title class="font-weight-bold mb-3">제목입니다.</v-card-title>
          <span class="d-flex justify-end mr-5 mb-2"
            ><v-icon>mdi-account</v-icon>길동이</span
          >
          <v-sheet class="d-flex justify-end align-center">
            <v-card-subtitle>조회수 12</v-card-subtitle>
            <v-card-subtitle>23-04-24</v-card-subtitle>
          </v-sheet>
          <v-card-text>
            <v-spacer></v-spacer>
            <div>내용입니다.</div>
          </v-card-text>
          <v-divider></v-divider>
        </v-card>

        <!-- 댓글창 -->
        <v-card class="mx-auto mt-5" max-width="800">
          <v-card-title>코멘트</v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            <v-list>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>김유신</v-list-item-title>
                  <v-list-item-subtitle>23-04-24</v-list-item-subtitle>
                  <v-list-item-title class="mt-2">1빠.</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
            <v-divider></v-divider>
            <v-list>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>김춘추</v-list-item-title>
                  <v-list-item-subtitle>23-04-24</v-list-item-subtitle>
                  <v-list-item-title class="mt-2"
                    >감동적인 글입니다.</v-list-item-title
                  >
                </v-list-item-content>
              </v-list-item>
            </v-list>
            <v-divider></v-divider>
            <v-list>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>강감찬</v-list-item-title>
                  <v-list-item-subtitle>23-04-24</v-list-item-subtitle>
                  <v-list-item-title class="mt-2"
                    >헐 재미없네요.</v-list-item-title
                  >
                </v-list-item-content>
              </v-list-item>
            </v-list>
            <v-divider></v-divider>
          </v-card-text>

          <!-- 댓글 페이지 -->
          <div class="text-center">
            <v-pagination
              :length="auto"
              :total-visible="5"
              rounded="circle"
            ></v-pagination>
          </div>

          <v-card-actions>
            <v-textarea label="댓글 작성"></v-textarea>
            <v-btn color="primary" @click="btnComment">등록</v-btn>
          </v-card-actions>
        </v-card>

        <v-sheet max-width="800" class="mx-auto">
          <v-sheet class="text-right mt-6">
            <v-btn class="mr-2" @click="btnDelete">삭제</v-btn>
            <v-btn class="mr-2" @click="btnModify">수정</v-btn>
            <v-btn color="primary" @click="btnBack">목록</v-btn>
          </v-sheet>
        </v-sheet>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
const btnLogout = () => {
  router.push("/user/login");
};
const btnBack = () => {
  router.push("/list");
};
const btnModify = () => {
  router.push("/modify");
};
const btnDelete = () => {
  router.push("/delete");
};
const btnComment = () => {
  router.push("/comment");
};
</script>

<style scoped></style>
