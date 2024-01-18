<template>
  <li class="userContainer">
    <div class="imageContainer">
      <img :src="user.avatar" class="avatar" @click="openModal" />
    </div>
    <div class="userInfo">
      <p class="userName" @click="openModal">Name: {{ user.first_name }}</p>
      <p class="userEmail">Email: {{ user.email }}</p>
    </div>
    <div class="controllerBox">
      <UiButton @click="deleteUser(user.id)" class="deleteBTN">Delete</UiButton>
      <UiButton @click="openModal">Check details</UiButton>
    </div>
    <Teleport to="#app">
      <Transition>
        <TheModal
          v-if="showModal"
          :showModal="showModal"
          @closeModal="closeModal">
          <ModalItem :user="user" @closeModal="closeModal" />
        </TheModal>
      </Transition>
    </Teleport>
  </li>
</template>

<script>
import UiButton from "./ui/UiButton.vue";
import TheModal from "./TheModal.vue";
import ModalItem from "./ModalItem.vue";

export default {
  props: {
    user: Object,
  },
  emits: {
    deleteUser: null,
  },
  data() {
    return {
      showModal: false,
    };
  },
  methods: {
    deleteUser(id) {
      this.$emit("deleteUser", id);
    },
    openModal() {
      this.showModal = true;
      document.body.style.overflow = "hidden";
    },
    closeModal() {
      this.showModal = false;
      document.body.style.overflow = "";
    },
  },
  components: { UiButton, TheModal, ModalItem },
};
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.userContainer {
  width: 280px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  border: 2px solid green;
  border-radius: 10px;
  margin: 10px;
}
.userInfo {
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  justify-content: space-around;
  width: 100%;

  color: white;
  user-select: none;
}
.userName {
  cursor: pointer;
}

.imageContainer {
  margin-top: 10px;
  margin-bottom: 10px;
}
.avatar {
  border: 2px solid green;

  border-radius: 50%;
}
.controllerBox {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  margin: 10px 0;
}
.deleteBTN {
  color: red;
  border-color: red;
}
@media (max-width: 768px) {
  .userName {
    display: block;
    width: 100%;
  }
}
@media (min-width: 768px) {
  .userContainer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: 10px 5px 0;
  }
  .imageContainer {
    /* margin: 0; */
    margin-left: 5px;
    display: block;
    width: fit-content;
  }
  .userInfo {
    width: fit-content;
  }
  .userName,
  .userEmail {
    border-bottom: 1px solid green;
  }
  .userName {
    margin-right: 10px;
  }
  .controllerBox {
    width: fit-content;
    margin-right: 5px;
  }
  .deleteBTN {
    margin-right: 5px;
  }
}
@media (min-width: 1024px) {
}
</style>
