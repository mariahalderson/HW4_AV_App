
export default {
  props: ["navdisplay"],
  template: `
  <div id="bottomNav" ref="bottomNav">
  <nav id="main-nav">
    <ul>
      <li v-on:click="openMenu">
        <router-link :to="{ path: '/movies' }">
          <img src="images/iconmonstr-movies.svg" alt="Movies Icon" />
        </router-link>
      </li>
      <li v-on:click="openMenu">
        <img src="images/iconmonstr-music.svg" alt="Music Icon" />
      </li>
      <li v-on:click="openMenu">
        <img src="images/iconmonstr-television.svg" alt="TV Icon" />
      </li>
      <li class="settings" id="hamburger"><span v-on:click="openSettings">...</span></li>
    </ul>
  </nav>
  <nav class="menu">
    <div class="search-box">
      <input class="search-txt" type="text" name="" placeholder="Type to search" />
      <a class="search-btn" href="#"><i class="fas fa-search"></i></a>
    </div>
    <ul class="menu-nav">
      <li class="nav-item current">
        <a href="#" class="nav-link"> 50's </a>
      </li>
      <li class="nav-item"><a href="#" class="nav-link"> 60's </a></li>
      <li class="nav-item"><a href="#" class="nav-link"> 70's </a></li>
      <li class="nav-item"><a href="#" class="nav-link"> 80's </a></li>
      <li class="nav-item"><a href="#" class="nav-link"> 90's </a></li>
    </ul>
  </nav>
  <nav class="settings-nav">
    <ul>
      <li><a href="">Profile</a></li>
      <li><a href="">Settings</a></li>
      <li><a href="">LogOut</a></li>
    </ul>
  </nav>
</div>
  `,

  data() {
    return {
      showMenu: false,
      showSettings: false
      //navdisplay: "none",
    };
  },

  created: function () {
    console.log("footer nav");
  },

  methods: {
    openSettings(e) {
      console.log("clicked");
      const settings = document.querySelector(".settings-nav");
      if (this.showSettings === false) {
        settings.classList.add("show");
        this.showSettings = true;
      } else {
        settings.classList.remove("show");
        this.showSettings = false;
      }
    },
    openMenu(e) {
      // console.log("clicked");

      const menu = document.querySelector(".menu");
      if (this.showMenu === false) {
        menu.classList.add("show");
        this.showMenu = true;
      } else {
        menu.classList.remove("show");
        this.showMenu = false;
      }
    }
  }
}