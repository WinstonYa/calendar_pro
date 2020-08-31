<template>
  <div class="container">
    Day page
  </div>
</template>

<script>
import getData from "@/services/index";
import { onMounted } from "vue";

export default {
  name: "DayPage",
  setup() {
    onMounted(() => {
      getData("day", "2020-7-1");
    });
  },
};
</script>

<style lang="less"></style>
