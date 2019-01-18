const mainheader = {
	template: "#appheader",
	//name: 'tempheader',
	created: function(){
		console.log("created");
	}
}

const navigation = {
  template: "#appfooter",
  created: function(){
    console.log("footer nav");
  }
}

// Vue.Component('temp',{
//   template: "#appheader"
// });



const vm = new Vue({
  el: "#app",
  data: {
    vidinfo: [],
    singleVidInfo: []
  },
  created() {
    //this.getContent(null);
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
    temp : mainheader,
    footernav : navigation
}
});
