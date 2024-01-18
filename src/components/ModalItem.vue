<template>
  <div>
    <div class="imageContainer">
      <img :src="user.avatar" class="image" />
    </div>
    <div class="userNativeInfo">
      <p>Name: {{ user.first_name }} {{ user.last_name }}</p>
      <p>Email: {{ user.email }}</p>
      <UiInput
        placeholder="phone number"
        class="inputModal"
        type="tel"
        :disabled="isReadyToChange" />
      <UiInput
        placeholder="user address"
        class="inputModal"
        type="tel"
        :disabled="isReadyToChange" />
    </div>
    <div class="controllers">
      <UiButton class="closeBtn" @click="$emit('closeModal')">Close</UiButton>
    </div>
  </div>
</template>

<script>
import UiButton from "./ui/UiButton.vue";
import UiInput from "./ui/UiInput.vue";
export default {
  props: {
    user: Object,
  },

  components: { UiButton, UiInput },
};
</script>

<style scoped>
.imageContainer {
  display: block;
}
.image {
  display: block;
  border-radius: 50%;
  margin: 0 auto;
}
.userNativeInfo {
  margin-top: 10px;
  text-align: center;
}
.inputModal {
  margin-top: 10px;
}
.inputModal:disabled {
  background: black;
}
.controllers {
  margin: 10px 0;
  display: flex;
  justify-content: space-evenly;
}
.closeBtn {
  border-color: grey;
}
.changeBtn {
  border-color: grey;
}
</style>
