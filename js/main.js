//IMPORT COMPONENTS
import LoginComponent from "./components/LoginComponent.js";
import UsersComponent from "./components/UsersComponent.js";
import UserHomeComponent from "./components/UserHomeComponent.js";
//----------ROUTES----------//
const routes = [
  { path: "/", name: "home", component: LoginComponent },
  { path: "/users", name: "users", component: UsersComponent },
  { path: "/userhome", name: "userhome", component: UserHomeComponent, props: true },


];
const router = new VueRouter({
  routes
});

//----------MAIN VUE INSTANCE----------//
const vm = new Vue({
  data: {
    vidinfo: [],
    singleVidInfo: [],
    navdisplay: true,
    authenticated: false,
    administrator: false,
    user: [],
    currentUser: [],
    homeurl: "http://localhost:8888/alderson_mariah_dantas_daniella_AV_app/#/"
  },
  created() {
    if (localStorage.getItem("cachedUser")) {
      let user = JSON.parse(localStorage.getItem("cachedUser"));
      this.authenticated = true;

      this.$router.push({ name: "userhome", params: { currentUser: user } });
    }
  },
  beforeUpdate() {
    this.checkpage();
  },
  methods: {
    checkpage() {
      if (this.homeurl != window.location.href) {
        this.navdisplay = "none";
      } else {
        this.navdisplay = "block";
      }
    },
    setAuthenticated(status, data) {
      this.authenticated = status;
      this.user = data;
    },

    logout() {
      this.$router.push({ path: "/" });
      this.authenticated = false;
      localStorage.clear("cachedUser");
    },

  },
  router: router
}).$mount("#app");

// make the router check all of the routes and bounce back if we are not authenticated
router.beforeEach((to, from, next) => {
  console.log("router guard working!", to, from, vm.authenticated);

  if (vm.authenticated === false) {
    next("/");
  } else {
    next();
  }
});

