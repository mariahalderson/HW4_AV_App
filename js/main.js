(() => {
  const mainheader = {
    template: "#appheader",
    //name: 'tempheader',
    created: function() {
      console.log("created");
    }
  };

  const navigation = {
    data() {
      return {
        showMenu: false,
        showSettings: false
      };
    },
    template: "#appfooter",
    created: function() {
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
  };
  const homepage = {
    template: "#homepage",
    data: function() {
      return {
        hideBar: false
      };
    },
    created: function() {
      this.handleStyles();
    },
    methods: {
      handleStyles() {
        // console.log("Hello");
        // change style to the body tag for the home page
        if (this.$route.path === "/") {
          document.body.style.background = "#f2f2f3";
          // this.hideBar = false;
          // document.querySelector(footernav).style.display = "none";
        }
      }
    }
  };
  const login = {
    template: "#login"
  };
  const moviespage = {
    template: "#moviespage",
    data: function() {
      return {
        vidinfo: [],

        singleVidInfo: [],
        hideBar: true
        singleVidInfo: []
        //singleVidInfo: {video_title:'test', video_img:'test', video_cast:'test', video_director:'test', video_desc:'', video_year:'', video_category:'', video_rating:''},
      }

    },
    created: function() {
      console.log("moviespage");
      this.getMovieContent(null);
    },
    methods: {
      getMovieContent(movie) {
        let targetURL = movie
          //? `./includes/index.php?movie=${movie}`
          ? "./includes/index.php?movie=" + movie
          : "./includes/index.php";
          console.log(targetURL);
        fetch(targetURL)
          .then(res => res.json())
          .then(data => {
            if (movie) {
              console.log(data);
              this.singleVidInfo = data[0];
              // this.singleVidInfo.video_title = data[0].video_title;
              // this.singleVidInfo.video_img = data[0].video_img;
              // this.singleVidInfo.video_cast = data.video_cast;
              // this.singleVidInfo.video_director = data.video_director;
              // this.singleVidInfo.video_desc = data.video_desc;
              // this.singleVidInfo.video_year = data.video_year;
              // this.singleVidInfo.video_category = data.video_category;
              // this.singleVidInfo.video_rating = data.video_rating;

            } else {
              console.log(data);
              this.vidinfo = data;
            }
          })
          .catch(function(error) {
            console.log(error);
          });
      },

      showVidInfo(e){
        //console.log(e.currentTarget.id);
        this.getMovieContent(e.currentTarget.id);
        this.$refs.vidbox.style.display="block";

      },

      closebox(){
        this.$refs.vidbox.style.display="none";
      }
    }
  };
  const routes = [
    { path: "/", name: "home", component: homepage },
    { path: "/movies", name: "movies", component: moviespage },
    { path: "/login", name: "login", component: login }
  ];
  const router = new VueRouter({
    routes
  });
  const vm = new Vue({
    el: "#app",
    data: {
      vidinfo: [],
      singleVidInfo: [],
      hideBar: ""
    },
    created() {},
    methods: {},
    components: {
      temp: mainheader,
      footernav: navigation,
      homepage: homepage,
      moviespage: moviespage
    },
    router: router
  });
})();
