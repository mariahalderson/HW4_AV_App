import MoviesComponent from "./MoviesComponent.js"
import MusicComponent from "./MusicComponent.js"
import TvComponent from "./TvComponent.js"
import NavHeaderComponent from "./layout/NavHeaderComponent.js"
export default {
  props: ['currentUser'],
  template: /*html */`
  <div>
  <MoviesComponent :decade="decade" :vidinfo="vidinfo" v-if="media == 'movie'"></MoviesComponent>
  <MusicComponent :decade="decade" :vidinfo="vidinfo" v-if="media == 'music'"></MusicComponent>
  <TvComponent :decade="decade" :vidinfo="vidinfo" v-if="media == 'tv'"></TvComponent>
  <NavHeaderComponent @updateDecade="updateDecade" @updateMedia="updateMedia"></NavHeaderComponent>

 </div>
 `,
  data() {
    return {
      media: 'movie',
      decade: '0',
      message: "hello from the Users Page",
      usersList: [],
      vidinfo: [],
      singleVidInfo: []
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
      //.then(res=>res.text())
      //.then(text=>console.log(text))
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
  }
};
