<template>
  <div>
    <form @submit.prevent="submitForm">
      <label for="username">Username:</label>
      <input type="text" id="username" v-model="username" required />

      <label for="password">Password:</label>
      <input type="password" id="password" v-model="password" required />

      <button type="submit">Create Account</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    submitForm() {
      // Dummy request handling, replace with actual API call
      console.log("Creating account with username:", this.username, "and password:", this.password);
      // Reset form fields after submission
      this.username = "";
      this.password = "";
    },
  },
};
</script>

<style scoped>
/* Add styling for the component here */
</style>
