<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "UIButton",
};
</script>

<style scoped>
.btn {
  padding: 10px 15px;
  background: none;
  color: teal;
  border: 1px solid teal;
  border-radius: 10px;

  cursor: pointer;
}
</style>
