<template>
  <form class="add">
    <div>
      <input type="text" placeholder="Enter Name" v-model="user.name" />
      <input type="email" placeholder="Enter Email" v-model="user.email" />
      <input type="number" placeholder="Phone" v-model="user.phone" />
    </div>
    <div>
      <input
        type="number"
        min="0"
        step="1"
        placeholder="Enter Values"
        v-model="user.num1"
      />
      <input
        type="number"
        min="0"
        step="1"
        placeholder="Enter Values"
        v-model="user.num2"
      />
    </div>
    <button @click="submit" type="button">Submit</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: "",
        email: "",
        phone: "",
        num1: 0,
        num2: 0,
      },
    };
  },
  methods: {
    submit() {
      localStorage.setItem("userData", JSON.stringify(this.user));
      this.user = {
        name: "",
        email: "",
        phone: "",
        num1: 0,
        num2: 0,
      };
      this.$router.push({ name: "viewuserdata" });
    },
  },
};
</script>

<style scoped>
.nav {
  background-color: #333;
  overflow: hidden;
}
.nav a {
  color: #f2f2f2;
  padding: 14px 16px;
  font-size: 18px;
  float: left;
  text-decoration: none;
  margin-right: 5px;
  text-align: center;
}
.nav a:hover {
  background-color: #ddd;
  color: #333;
}
.add input {
  width: 320px;
  height: 40px;
  border: 1px solid skyblue;
  padding-left: 20px;
  display: block;
  margin-bottom: 30px;
  margin-left: auto;
  margin-right: auto;
}
.add button {
  width: 350px;
  height: 40px;
  background-color: skyblue;
}
</style>
