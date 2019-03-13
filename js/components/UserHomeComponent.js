import MoviesComponent from "./MoviesComponent.js"
import MusicComponent from "./MusicComponent.js"
import TvComponent from "./TvComponent.js"
import NavHeaderComponent from "./layout/NavHeaderComponent.js"
export default {
  props: ['currentUser'],
  template: /*html */`
  <div>
  <MoviesComponent :decade="decade" v-if="media == 'movie'"></MoviesComponent>
  <MusicComponent v-if="media == 'music'"></MusicComponent>
  <TvComponent v-if="media == 'tv'"></TvComponent>
  <NavHeaderComponent @updateDecade="updateDecade" @updateMedia="updateMedia"></NavHeaderComponent>

 </div>
 `,
  data() {
    return {
      media: 'movie',
      decade: '00',
      message: "hello from the Users Page",
      usersList: []
    };
  },
  components: {
    MoviesComponent: MoviesComponent,
    MusicComponent: MusicComponent,
    TvComponent: TvComponent,
    NavHeaderComponent: NavHeaderComponent
  },
  methods: {
    updateMedia(media) {
      this.media = media;
    },

    updateDecade(decade){
      this.decade = decade;
    }
  }
};
