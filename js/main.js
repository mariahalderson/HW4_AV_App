const header = {
	template: "#AppHeader",
	name: 'AppHeader',
	created: function(){
		console.log("created");
	}
}



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
  components : {
    AppHeader : AppHeader
}
});
