//IMPORT COMPONENTS
import LoginComponent from "./components/LoginComponent.js";
import UsersComponent from "./components/UsersComponent.js";

//----------ROUTES----------//
const routes = [
  { path: "/", name: "home", component: LoginComponent },
  { path: "/users", name: "users", component: UsersComponent }

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
  created() { },
  // beforeUpdate() {
  //   this.checkpage();
  // },
  methods: {
    // checkpage() {
    //   if (this.homeurl != window.location.href) {
    //     this.navdisplay = "none";
    //   } else {
    //     this.navdisplay = "block";
    //   }
    // },
    setAuthenticated(status) {
      this.authenticated = status;
    },
    logout() {
      this.$router.push({ path: "/" });
      this.authenticated = false;
    },

    setCurrentUser(user) {
      this.authenticated = false;
    }
  },
  router: router
}).$mount("#app");

// make the router check all of the routes and bounce back if we are not authenticated
router.beforeEach((to, from, next) => {
  console.log("router guard working!");
  if (vm.authenticated === false) {
    next("/");
  } else {
    next();
  }
});

