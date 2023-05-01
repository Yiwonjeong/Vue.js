<template>
  <main>
    <ul>
      <Item></Item>
    </ul>
  </main>
</template>

<script>
import Item from "./Item.vue";

export default {
  name: "Main",
  components: {
    Item,
  },
  setup() {
    return {};
  },
};
</script>

<style>
main {
  width: 100%;
  height: auto;
  padding: 10px;
  box-sizing: border-box;
}
main > ul {
  width: 100%;
  height: auto;
  list-style: none;
  padding-left: 0;
  box-sizing: border-box;
}
main li {
  width: 100%;
  height: 40px;
  box-sizing: border-box;
  padding-left: 10px;
  margin-bottom: 5px;
  line-height: 40px;
  background-color: #fff;
}
main li > i {
  padding-right: 8px;
  color: #00bbfe;
}
main li > span {
}
main li > button {
  float: right;
  width: 70px;
  height: 40px;
  box-shadow: inset 0px 1px 0px 0px #ffffff;
  background: linear-gradient(to bottom, #ffffff 5%, #f6f6f6 100%);
  background-color: #ffffff;
  border: 1px solid #dcdcdc;
  color: #f2552c;
}
</style>
