<template>
    <div>
      <table>
        <!-- Table headers -->
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
            <th>ID</th>
            <th>Creation Date</th>
          </tr>
        </thead>
        <!-- Table body with dynamic data -->
        <tbody>
          <tr v-for="user in filteredUsers" :key="user.id" @click="openModal(user)">
            <td>{{ user.username }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.phone }}</td>
            <td>{{ user.id }}</td>
            <td>{{ user.creationDate }}</td>
          </tr>
        </tbody>
      </table>
  
      <!-- Modal for generating a report -->
      <div v-if="selectedUser" class="modal">
        <button @click="generateReport">Generate Report</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      users: Array, // Array of user data
    },
    data() {
      return {
        selectedUser: null,
        searchTerm: "",
      };
    },
    computed: {
      filteredUsers() {
        // Filter users based on the search term
        return this.users.filter((user) =>
          user.username.toLowerCase().includes(this.searchTerm.toLowerCase())
        );
      },
    },
    methods: {
      openModal(user) {
        this.selectedUser = user;
      },
      generateReport() {
        // Implement report generation logic here
        console.log("Generating report for user:", this.selectedUser);
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add styling for the component here */
  </style>
  