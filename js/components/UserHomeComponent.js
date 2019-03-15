
import NavHeaderComponent from "./layout/NavHeaderComponent.js"
export default {
  props: ['currentUser'],
  template: /*html */`
  <div>
  <div id="movies">
    <div class="welcome">
      <h2>Welcome to <span class="purple">Roku </span><span class="yellow">Flashback</span> {{media}} Page</h2>
    </div>
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

    NavHeaderComponent: NavHeaderComponent
  },

  created() {
    this.getMediaContent(this.media, this.decade);
  },
  methods: {
    updateMedia(media) {
      this.media = media;
      this.getMediaContent(this.media, '0');
    },

    updateDecade(decade) {
      this.decade = decade;
      this.getMediaContent(this.media, this.decade);
    },

    getMediaContent(media, decade) {
      this.getImageSource();

      let targetURL = "./includes/" + media + ".php?decade=" + decade;

      fetch(targetURL)
        .then(res => res.json())
        // .then(res=>res.text())
        // .then(text=>console.log(text))
        .then(data => {
          console.log(data);
          this.vidinfo = data;
        })
        .catch(function (error) {
          console.log(error);
        });

    },
    showVidInfo(e) {
      this.getImageSource();
      var id = e.currentTarget.id;

      let newTarget = "./includes/" + this.media + ".php?id=" + id;
      console.log(newTarget);
      fetch(newTarget)
        .then(res => res.json())
        // .then(res=>res.text())
        // .then(text=>console.log(text))
        .then(data => {
          console.log(data);
          this.singleVidInfo = data[0];
        })
        .catch(function (error) {
          console.log(error);
        });
        this.$refs.vidbox.style.display = "block";
    },

    closebox() {
      this.$refs.vidbox.style.display = "none";
    },
    getImageSource() {
      if (this.media == "movie") {
        this.imageFolder = "movies";
      } if (this.media == "music") {
        this.imageFolder = "music";
      } if (this.media == "tv") {
        this.imageFolder = "tv";
      }
    }
  }
};
