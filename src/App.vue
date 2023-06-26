<!-- <template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style> -->
<!-- <template> -->
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/contact">Contact</router-link>
  </nav> -->
  <!-- <template> -->

    <template>
      <div>
      <nav>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
         <img src="../src/assets/nozti-150x150@2x.jpg" alt="Logo" class="navbar-logo">
        <router-link to="/" class="navbar-brand">NOZTI</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link to="/" class="nav-link">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/about" class="nav-link">About</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/contact" class="nav-link">Contact</router-link>
            </li>
            <!-- <li class="nav-item">
              <router-link to="/contact" class="nav-link">Composition</router-link>
            </li> -->
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="compositionDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Composition
              </a>
              <ul class="dropdown-menu" aria-labelledby="compositionDropdown">
                <li><router-link to="/composition" class="dropdown-item">Reactive</router-link></li>
                <li><router-link to="/ref" class="dropdown-item">Ref</router-link></li>
                <li><router-link to="/initial" class="dropdown-item">Initialstate</router-link></li>
              </ul>
            </li>
            <li class="nav-item">
              <router-link to="/crud" class="nav-link">CRUD</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </nav> 
  
  
  
  
  
  
  
  
  
  
  
  <router-view> </router-view>

</div>
  </template>
  
  
  
  
  <style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  
  nav {
    padding: 30px;
  }
  
  nav a {
    font-weight: bold;
    color: #2c3e50;
  }
  
  nav a.router-link-exact-active {
    color: #42b983;
  }
  
  .card {
    margin-bottom: 20px;
  }
  .navbar-logo {
    height: 30px;
    width: auto;
    margin-right: 8px;
  }
  
  </style>
  