/**
 * Vuex 전역 스토어
 */
import axios from "axios";
import { createStore } from "vuex";
import { useRouter } from "vue-router";

const router = useRouter();

const store = createStore({
  // state: store에서 관리하는 상태(전역변수)를 정의
  // (공통으로 참조하기 위한 변수 선언)
  state: {
    user: null,
  },
  // mutations: store의 상태값을 변경하는 메서드를 정의
  // (동기 처리 기준, state 변경) -> 반드시 mutations를 통해 state 변경
  // mutations 내에 함수 작성
  mutations: {
    SET_USER: function (state, data) {
      state.user = data;
    },
  },
  // actions: 비동기 처리를 수행하고 mutations 메서드를 실행하는 메서드 정의
  // mutations trigger: commit(함수명, 전달인자)으로 mutations 내 함수 호출 및 실행
  actions: {
    setUser: function (context, data) {
      context.commit("SET_USER", data);
    },
    login: function (context, user) {
      axios
        .post("http://localhost:8080/Voard/user/login", user)
        .then((response) => {
          console.log(response);
          const token = response.data.accessToken;
          const user = response.data.user;
          console.log("actions user : " + user);

          localStorage.setItem("accessToken", token);
          context.commit("SET_USER", user);
          context.dispatch("navigateToPage");
        })
        .catch((error) => {
          console.log(error);
        });
    },
    navigateToPage: function () {
      router.push("/jwt/loginSuccess");
    },
  },
  // getters: 외부에 상태값을 반환하는 메서드 정의 (공통속성)
  // 각 컴포넌트의 계산된 속성 (computed) 의 공통 속성으로 정의
  getters: {
    getUser: function (state) {
      return state.user;
    },
  },
});

// store 내보내기 -> main.js 등록
export default store;
