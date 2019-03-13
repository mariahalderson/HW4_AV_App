import MoviesComponent from "./MoviesComponent.js"
import MusicComponent from "./MusicComponent.js"
import TvComponent from "./TvComponent.js"
import NavHeaderComponent from "./layout/NavHeaderComponent.js"
export default {
  props: ['currentUser'],
  template: /*html */`
  <div>
  <div id="movies">
  <!--lightbox-->
  <div id="vidbox" ref="vidbox">
    <div id="closebox" ref="closebox" v-on:click="closebox">
      <p>X</p>
    </div>
    <div id="lightbox-container">
      <div>
        <h1>{{singleVidInfo.title}}</h1>

        <div class="image-container">
          <img :src="'images/' + imageFolder +'/' + singleVidInfo.img" :alt="singleVidInfo.title">
          <div class="play-btn"></div>
        </div>
        <div class="movie-specs">
          <p>{{singleVidInfo.year}}</p>
          <p>{{singleVidInfo.duration}}</p>
          <p>{{singleVidInfo.rating}}</p>
          <p>{{singleVidInfo.category}}</p>
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

      <p class="video-desc">{{singleVidInfo.desc}}</p>
    </div>
  </div>

  <section id="thumbs">
    <div v-for="video in vidinfo" class="thumb" :id="video.id" v-on:click="showVidInfo">

      <img class="thumb-img" :src="'images/' + imageFolder +'/' + video.img" alt="video.title" />

    </div>
  </section>
</div>
  <NavHeaderComponent @updateDecade="updateDecade" @updateMedia="updateMedia"></NavHeaderComponent>

 </div>
 `,
//  computed: {
//   imageSource() {
//     var source = 'images/';
//     if (this.media == "movie") {
//       source += 'movies/';
//       source += video.video_img;
//     }if(this.media == "music"){
//       source += 'music/';
//       source += video.music_img;
//     }if(this.media == "tv"){
//       source += 'tv/';
//       source += video.tv_img;
//     }
//
//     return source;
//   }
// },
  data() {
    return {
      media: 'movie',
      decade: '0',
      message: "hello from the Users Page",
      usersList: [],
      vidinfo: [],
      singleVidInfo: [],
      imageFolder: 'movies'
    };
  },
  components: {
    MoviesComponent: MoviesComponent,
    MusicComponent: MusicComponent,
    TvComponent: TvComponent,
    NavHeaderComponent: NavHeaderComponent
  },

  created(){
    this.getMediaContent(this.media, this.decade);
  },
  methods: {
    updateMedia(media) {
      this.media = media;
      this.getMediaContent(this.media, '0');
    },

    updateDecade(decade){
      this.decade = decade;
      this.getMediaContent(this.media, this.decade);
    },

    getMediaContent(media, decade) {
      this.getImageSource();
      // let targetURL = media
      //   ? //? `./includes/movies.php?movie=${movie}`
      //   "./includes/movies.php?movie=" + movie
      //   : "./includes/movies.php";
      //if(decade == "00"){
        //let targetURL = "./includes/"+media+".php";
      // }else{
         let targetURL = "./includes/"+media+".php?decade="+decade;
      // }
      // console.log(targetURL);
      fetch(targetURL)
      .then(res => res.json())
      // .then(res=>res.text())
      // .then(text=>console.log(text))
        .then(data => {
          // if (movie) {
          //   // console.log(data);
          //   this.singleVidInfo = data[0];
          // } else {
            console.log(data);
            this.vidinfo = data;
          //}
        })
        .catch(function (error) {
          console.log(error);
        });

    },
    showVidInfo(e) {
      console.log(e.currentTarget.id);
      //this.getMovieContent(e.currentTarget.id);
      var index = e.currentTarget.id;
      this.singleVidInfo = this.vidinfo[index-1];
      this.$refs.vidbox.style.display = "block";
    },

    closebox() {
      this.$refs.vidbox.style.display = "none";
    },
    getImageSource(){
      if(this.media == "movie"){
        this.imageFolder = "movies";
      }if(this.media == "music"){
        this.imageFolder = "music";
      }if(this.media == "tv"){
        this.imageFolder = "tv";
      }
    }
  }
};
