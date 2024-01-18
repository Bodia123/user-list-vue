<template>
  <div class="listContainer">
    <TransitionGroup name="list" tag="ul" class="userList">
      <UserItem
        v-for="user in users"
        :key="user.id"
        :user="user"
        @deleteUser="deleteUser" />
    </TransitionGroup>
  </div>
</template>

<script>
import UserItem from "./UserItem.vue";

export default {
  name: "UserList",
  emits: {
    deleteUser: null,
  },
  props: {
    users: Array,
  },

  components: { UserItem },

  methods: {
    deleteUser(id) {
      this.$emit("deleteUser", id);
    },
  },
};
</script>

<style scoped>
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.listContainer {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
.userList {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
@media (min-width: 768px) {
  .listContainer {
    display: flex;
    justify-content: start;
    margin: 0 auto;
    margin-bottom: 20px;
  }
}
@media (min-width: 1024px) {
  .listContainer {
    width: 1024px;
    margin: 0 auto;
    margin-bottom: 20px;
  }
}
</style>
