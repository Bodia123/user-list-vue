<template>
  <div class="modal" v-if="showModal" @click.self="$emit('closeModal')">
    <div class="modal-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ["showModal"],
};
</script>

<style scoped>
.modal {
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  overflow: hidden;
}

.modal-content {
  background: #fff;
  border-radius: 20px;
  padding: 20px;
  width: 80%;
  max-width: 1024px;

  margin: auto;
}
</style>
