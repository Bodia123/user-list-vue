<script>
export default {
  props: ["modelValue"],
  emits: ["update:modelValue"],
};
</script>

<template>
  <input
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    class="input" />
</template>

<style scoped>
.input {
  box-sizing: border-box;
  width: 100%;
  border: 2px solid green;
  border-radius: 10px;
  padding: 10px 15px;
  font-size: 16px;
}
.input:focus {
  outline: none;
  border: 2px solid greenyellow;
}
</style>
