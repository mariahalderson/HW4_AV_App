
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
        <h1>{{singleMusicInfo.music_title}}</h1>

        <div class="image-container">
          <img :src="'images/music/' + singleMusicInfo.music_img" :alt="singleMusicInfo.music_title">
          <div class="play-btn"></div>
        </div>
        <div class="movie-specs">
          <p>{{singleMusicInfo.music_year}}</p>
          <p>{{singleMusicInfo.music_artist}}</p>
          <p>{{singleMusicInfo.music_genre}}</p>
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

      <p class="video-desc">{{singleMusicInfo.music_desc}}</p>
    </div>
  </div>

  <section id="thumbs">
    <div v-for="music in musicInfo" class="thumb" :id="music.music_id" v-on:click="showMusicInfo">

      <img class="thumb-img" :src="'images/music/' + music.music_img" alt="music.music_title" />

    </div>
  </section>
  
</div>
 `,
  data: function () {
    return {
      musicInfo: [],

      singleMusicInfo: [],

      hideBar: true,
    };
  },

  created: function () {
    console.log("musicpage");
    this.getMusic(null);
  },
  methods: {
    getMusic(music) {
      let targetURL = music
        ? //? `./includes/music.php?music=${music}`
        "./includes/music.php?music=" + music
        : "./includes/music.php";
      console.log(targetURL);
      fetch(targetURL)
        .then(res => res.json())
        .then(data => {
          if (music) {
            // console.log(data);
            this.singleMusicInfo = data[0];
          } else {
            // console.log(data);
            this.musicInfo = data;
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },

    showMusicInfo(e) {
      //console.log(e.currentTarget.id);
      this.getMusic(e.currentTarget.id);
      this.$refs.vidbox.style.display = "block";
    },

    closebox() {
      this.$refs.vidbox.style.display = "none";
    }
  }

};
