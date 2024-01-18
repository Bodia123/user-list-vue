<template>
  <TheHeader />

  <main class="mainContainer">
    <section class="filterContainer">
      <h2 class="title">User list</h2>
      <Uiinput v-model="filterByName" placeholder="Filter by name" />
    </section>
    <section>
      <UserList :users="filteredUsers" @deleteUser="deleteUser" />
      <UiButton
        v-if="currentPage === 1"
        class="nextPageBTN"
        @click="currentPage = 2"
        >LoadMore</UiButton
      >
    </section>
  </main>
</template>

<script>
import getUsers from "./api/getUsers";
import deleteUser from "./api/deleteUser";

import UserList from "./components/UserList.vue";
import TheHeader from "./components/TheHeader.vue";
import UiButton from "./components/ui/UiButton.vue";
import Uiinput from "./components/ui/UiInput.vue";
export default {
  name: "App",
  components: { TheHeader, UserList, UiButton, Uiinput },
  data() {
    return {
      currentPage: 1,
      users: [],
      filterByName: "",
    };
  },
  methods: {
    deleteUser(id) {
      deleteUser(id)
        .then(() => console.log(`delete ${id} success`))
        .catch(() => console.log("deletingError"));
    },
  },
  watch: {
    currentPage() {
      getUsers(2)
        .then((res) => {
          this.users = [...this.users, ...res.data.data];
        })
        .catch(console.log);
    },
  },
  computed: {
    filteredUsers() {
      return this.users.filter((user) => {
        return (
          user.first_name
            .toUpperCase()
            .indexOf(this.filterByName.toUpperCase()) !== -1
        );
      });
    },
  },

  mounted() {
    getUsers()
      .then((res) => {
        this.users = res.data.data;
      })
      .catch(console.log);
  },
};
</script>

<style scoped>
.mainContainer {
  margin-top: 20px;
}
.title {
  text-align: center;
  color: white;
  margin-bottom: 10px;
}
.filterContainer {
  max-width: 1024px;
  width: 100%;
  margin: 10px auto 0;
}

.nextPageBTN {
  display: block;
  margin: 10px auto;
}
</style>
