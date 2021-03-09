<template>
  <div class="v-mainpage">
    <div class="main-header">
      <header>
        <div class="container-fluid">
          <div class="navbar-header">
            <a href="" class="navbar-brand">Erlax Food</a>
          </div>
        </div>
      </header>
      <div class="bg">
        <div class="container text-center bg-text">
          <h1>Hello World </h1>
          <br/>
          <button class="btn btn-default btn-lg">About Us</button>
            <a class="btn btn-outline-warning btn-lg btn-catalog" href="#/catalog">Catalog</a>
        </div>
      </div>
      <div class="banner">
        <div class="wrapper">
          Good the <span class="orange">food</span> world.
          <button class="btn btn-primary">Order Now!</button>
        </div>
      </div>
      <div class="sec first">
        <h1>Section 1</h1>
        <hr/>
      </div>
      <div class="sec second">
        <h1>Section 2</h1>
        <hr/>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "v-mainpage"
}
</script>

<style>
.main-header {
  margin-top: -60px;
}


header {
  background: #263248;
}

.navbar-header {
  color: #FF9800;
}

ul.nav li a {
  color: white;
  font-size: 16px;
}

ul.nav li a:hover {
  background: #FF9800;
}

a.navbar-brand {
  font-size: 30px;
  color: #FF9800;
}

.bg {
  background: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)), url(https://s3-eu-west-1.amazonaws.com/straus/media/products2/6eb388d0181340ec884fea40591f1342.jpg);
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 500px;
  color: white;
}

.bg .bg-text {
  padding: 100px;
}

.bg .bg-text h1 {
  font-size: 60px;
  font-weight: 400;
}

button {
  border: none;
  width: 150px;
}

button.btn-primary {
  background: transparent;
  border: 1px solid #FF9800;
  color: white;
  margin: 5px;
}

button.btn-primary:hover {
  background: #FF9800;
}

button.btn-default {
  background: #263248;
  border: none;
  color: white;
}

.banner {
  height: 100px;
  background-color: #263248;
  font-size: 25px;
  color: #fff;
  position: relative;
}

.wrapper {
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  margin-left: 10px;
}

span.orange {
  color: #FF9800;
  font-weight: bold;
}

.bannerbutton {
  margin-left: 50px;
  width: 200px;
  background-color: #FF9800;
  font-size: 20px;
}

.sec {
  height: 400px;
}

h1 {
  text-align: center;
  font-weight: 700;
}

hr {
  width: 50px;
  border: 1.5px solid #FF9800;
}

div.sec.second {
  height: 400px;
  background: #f4f4f4;
  border-top: 5px solid #f1f1f1;
}
.btn-catalog{
  text-decoration: none;
}
</style>