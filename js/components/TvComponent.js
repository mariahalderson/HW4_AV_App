
export default {
  props: ['decade', 'vidinfo'],
  template: /*html*/ `
 <div id="movies">
  <!--lightbox-->
  <div id="vidbox" ref="vidbox">
    <div id="closebox" ref="closebox" v-on:click="closebox">
      <p>X</p>
    </div>
    <div id="lightbox-container">
      <div>
        <h1>{{singleTvInfo.tv_title}}</h1>

        <div class="image-container">
          <img :src="'images/tv/' + singleTvInfo.tv_img" :alt="singleTvInfo.tv_title">
          <div class="play-btn"></div>
        </div>
        <div class="movie-specs">
          <p>{{singleTvInfo.tv_year}}</p>
          <p>{{singleTvInfo.tv_duration}}</p>
          <p>{{singleTvInfo.tv_rating}}</p>
          <p>{{singleTvInfo.tv_category}}</p>
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

      <p class="video-desc">{{singleTvInfo.tv_desc}}</p>
    </div>
  </div>

  <section id="thumbs">
    <div v-for="tv in tvInfo" class="thumb" :id="tv.tv_id" v-on:click="showTvInfo">

      <img class="thumb-img" :src="'images/tv/' + tv.tv_img" alt="tv.tv_title" />

    </div>
  </section>
</div>
 `,
  data: function () {
    return {
      tvInfo: [],

      singleTvInfo: [],

      hideBar: true,
    };
  },

  created: function () {

    this.getTv();
  },
  methods: {
    getTv(tv) {
      this.tvInfo = this.$props.vidinfo;
      // let targetURL = tv
      //   ? //? `./includes/tv.php?tv=${tv}`
      //   "./includes/tv.php?tv=" + tv
      //   : "./includes/tv.php";
      // console.log(targetURL);
      // fetch(targetURL)
      //   .then(res => res.json())
      //   .then(data => {
      //     if (tv) {
      //       // console.log(data);
      //       this.singleTvInfo = data[0];
      //     } else {
      //       // console.log(data);
      //       this.tvInfo = data;
      //     }
      //   })
      //   .catch(function (error) {
      //     console.log(error);
      //   });
    },

    showTvInfo(e) {
      //console.log(e.currentTarget.id);
      this.getTv(e.currentTarget.id);
      this.$refs.vidbox.style.display = "block";
    },

    closebox() {
      this.$refs.vidbox.style.display = "none";
    }
  }

};
