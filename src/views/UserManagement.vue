<template>
    <div>
      <div>
        <!-- Search input for filtering users -->
        <input v-model="searchTerm" placeholder="Search by username" />
  
        <!-- User Details component with filtered user data -->
        <UserDetails :users="users" />
      </div>
  
      <div>
        <!-- Account Creation component -->
        <AccountCreation />
      </div>
    </div>
  </template>
  
  <script>
  import UserDetails from "@/components/UserDetails.vue";
  import AccountCreation from "@/components/AccountCreation.vue";
  
  export default {
    components: {
      UserDetails,
      AccountCreation,
    },
    data() {
      return {
        users: [
          // Dummy user data
          // Add more users as needed
          { id: 1, username: "user1", email: "user1@example.com", phone: "1234567890", creationDate: "2023-01-01" },
          { id: 2, username: "user2", email: "user2@example.com", phone: "9876543210", creationDate: "2023-02-01" },
          // ...
        ],
      };
    },
    computed: {
      searchTerm: {
        get() {
          return this.$store.state.searchTerm;
        },
        set(value) {
          this.$store.commit("updateSearchTerm", value);
        },
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add styling for the view here */
  </style>
  