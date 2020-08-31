<template>
  <div class="container">
    Month page
  </div>
</template>

<script>
import getDate from "@/services/index";
import { onMounted } from "vue";

export default {
  name: "MonthPage",
  setup() {
    onMounted(() => {
      getDate("year-month", "2020-7");
    });
  },
};
</script>

<style lang="less"></style>
