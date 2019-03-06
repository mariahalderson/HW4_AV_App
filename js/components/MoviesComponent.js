import NavHeaderComponent from "./layout/NavHeaderComponent.js";
export default {
  template: /*html*/ `
  <div id="movies">
  <!--lightbox-->
  <div id="vidbox" ref="vidbox">
    <div id="closebox" ref="closebox" v-on:click="closebox">
      <p>X</p>
    </div>
    <div id="lightbox-container">
      <div>
        <h1>{{singleVidInfo.video_title}}</h1>

        <div class="image-container">
          <img :src="singleVidInfo.video_img" :alt="singleVidInfo.video_title">
          <div class="play-btn"></div>
        </div>
        <div class="movie-specs">
          <p>{{singleVidInfo.video_year}}</p>
          <p>{{singleVidInfo.video_duration}}</p>
          <p>{{singleVidInfo.video_rating}}</p>
          <p>{{singleVidInfo.video_category}}</p>
        </div>
        <div class="rate-share">
          <div class="stars image-container">
            <img src="images/stars.svg">
          </div>

          <div class="button">
            <p>SHARE</p>
          </div>
        </div>
      </div>

      <p class="video-desc">{{singleVidInfo.video_desc}}</p>
    </div>
  </div>

  <section id="thumbs">
    <div v-for="video in vidinfo" class="thumb" :id="video.video_id" v-on:click="showVidInfo">

      <img class="thumb-img" :src="'images/movies/' + video.video_img" alt="video.video_title" />

    </div>
  </section>
  <NavHeaderComponent/>
</div>
 `,
  data: function () {
    return {
      vidinfo: [],

      singleVidInfo: [],

      hideBar: true,
      singleVidInfo: []
    };
  },

  created: function () {
    console.log("moviespage");
    this.getMovieContent(null);
  },
  methods: {
    getMovieContent(movie) {
      let targetURL = movie
        ? //? `./includes/index.php?movie=${movie}`
        "./includes/index.php?movie=" + movie
        : "./includes/index.php";
      console.log(targetURL);
      fetch(targetURL)
        .then(res => res.json())
        .then(data => {
          if (movie) {
            // console.log(data);
            this.singleVidInfo = data[0];
          } else {
            // console.log(data);
            this.vidinfo = data;
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },

    showVidInfo(e) {
      //console.log(e.currentTarget.id);
      this.getMovieContent(e.currentTarget.id);
      this.$refs.vidbox.style.display = "block";
    },

    closebox() {
      this.$refs.vidbox.style.display = "none";
    }
  },
  components: {
    NavHeaderComponent: NavHeaderComponent
  }
};
