<template>
  <header class="container">
    <form class="card" @submit.prevent="submit">
      <h1 class="title">Create User</h1>

      <h3 v-if="error">{{ error }}</h3>

      <div
        class="form-control"
        :class="{ invalid: !form.email.valid && form.email.touched }">
        <label for="email">Email</label>
        <UiInput
          type="email"
          id="email"
          placeholder="Email"
          v-model="form.email.value"
          @blur="form.email.blur"
          :class="{ errorInput: !form.email.valid }" />
        <small
          class="errorStr"
          v-if="form.email.touched && form.email.errors.required"
          >Email field is required</small
        >
      </div>

      <div
        class="form-control"
        :class="{ invalid: !form.name.valid && form.name.touched }">
        <label for="name">Name</label>
        <UiInput
          type="name"
          id="name"
          placeholder="Name"
          v-model="form.name.value"
          @blur="form.name.blur"
          :class="{ errorInput: !form.name.valid }" />
        <small
          class="errorStr"
          v-if="form.name.touched && form.name.errors.required"
          >Name field is required</small
        >
        <small
          class="errorStr"
          v-else-if="form.name.touched && form.name.errors.minLength">
          Name length can't be less then 4. Now it is
          {{ form.name.value.length }}.
        </small>
      </div>

      <UiButton class="buttonSubmit" type="submit" :disabled="!form.valid">
        Create User
      </UiButton>
    </form>
  </header>
</template>

<script>
import { ref, onErrorCaptured } from "vue";
import { useForm } from "../hook/form";
import UiInput from "./ui/UiInput.vue";
import UiButton from "./ui/UiButton.vue";
import addUser from "../api/addUser";

const required = (val) => !!val;
const minLength = (num) => (val) => val.length >= num;

export default {
  setup() {
    const submitted = ref(false);
    const error = ref();
    const form = useForm({
      email: {
        value: "",
        validators: { required },
      },
      name: {
        value: "",
        validators: { required, minLength: minLength(4) },
      },
    });
    function submit() {
      console.log("Email:", form.email.value);
      console.log("name:", form.name.value);
      addUser({ name: form.name.value, email: form.email.value }).then(
        (res) => {
          console.log("Created: ", res.data);
          form.email.value = "";
          form.name.value = "";
        }
      );

      submitted.value = true;
      form.email.touched = false;
      form.name.touched = false;
    }
    onErrorCaptured((e) => {
      error.value = e.message;
    });
    return { form, submit, submitted, error };
  },
  components: { UiInput, UiButton },
};
</script>

<style scoped>
.container {
  max-width: 1024px;
  margin: 10px auto 0;
  color: white;
  /* background-color: white; */
}
.title {
  text-align: center;
}
.buttonSubmit {
  display: block;
  margin: 10px auto 0;
}
.buttonSubmit:disabled {
  background-color: grey;
  color: black;
  border-color: black;
}
.errorStr {
  color: red;
}
.errorInput {
  border-color: red;
}
.errorInput:focus {
  border-color: red;
}
</style>
