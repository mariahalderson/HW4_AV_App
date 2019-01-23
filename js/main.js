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
        showMenu: false
      };
    },
    template: "#appfooter",
    created: function() {
      console.log("footer nav");
    },
    methods: {
      openMenu(e) {
        // console.log("clicked");

        const menu = document.querySelector(".menu");
        if (this.showMenu === false) {
          menu.classList.add("show");
          this.showMenu = true;
          // console.log(showMenu);
        } else {
          menu.classList.remove("show");
          this.showMenu = false;
          // console.log(showMenu);
        }
      }
    }
  };

  const vm = new Vue({
    el: "#app",
    data: {
      vidinfo: [],
      singleVidInfo: []
    },
    created() {
      this.getContent(null);
    },
    methods: {
      getContent(movie) {
        let targetURL = movie
          ? `./includes/index.php?movie=${movie}`
          : "./includes/index.php";
        fetch(targetURL)
          .then(res => res.json())
          .then(data => {
            if (movie) {
              console.log(data);
              this.singleVidInfo = data;
            } else {
              console.log(data);
              this.vidinfo = data;
            }
          })
          .catch(function(error) {
            console.log(error);
          });
      },
      checkConnect() {
        console.log("we did it!");
      }
    },
    components: {
      temp: mainheader,
      footernav: navigation
    }
    // router: router
  });
})();
