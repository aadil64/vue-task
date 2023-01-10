<template>
  <table class="sss">
    <tr>
      <td>Name</td>
      <td>Email</td>
      <td>Phone</td>
      <td>Sum</td>
    </tr>
    <tr v-for="user in data" :key="user">
      <td>{{ user.name }}</td>
      <td>{{ user.email }}</td>
      <td>{{ user.phone }}</td>
      <td>{{ user.num1 + user.num2 }}</td>
    </tr>
  </table>
</template>

<script>
export default {
  data() {
    return {
      data: [],
    };
  },
  mounted() {
    const user = JSON.parse(localStorage.getItem("userData"));
    this.data = [...this.data, user];
  },
};
</script>

<style scoped>
td {
  width: 160px;
  height: 40px;
  border: 1px solid skyblue;
}
.sss {
  margin-right: auto;
  margin-left: auto;
}
</style>
