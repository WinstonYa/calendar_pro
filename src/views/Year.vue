<template>
  <div class="container">
    Year page
  </div>
</template>

<script>
import getDate from "@/services/index";
import { onMounted } from "vue";
export default {
  name: "YearPage",
  setup() {
    onMounted(() => {
      getDate("year", "2020");
    });
  },
};
</script>

<style lang="less"></style>
