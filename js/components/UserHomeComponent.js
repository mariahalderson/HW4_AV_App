import MoviesComponent from "./MoviesComponent.js"
import MusicComponent from "./MusicComponent.js"
import TvComponent from "./TvComponent.js"
import NavHeaderComponent from "./layout/NavHeaderComponent.js"
export default {
  props: ['currentUser'],
  template: /*html */`
  <div>
  <MoviesComponent v-if="media == 'movie'"></MoviesComponent>
  <MusicComponent v-if="media == 'music'"></MusicComponent>
  <TvComponent v-if="media == 'tv'"></TvComponent>
  <NavHeaderComponent @updateMedia="updateMedia" @updateDecade="updateDecade"></NavHeaderComponent>
 </div>
 `,
  data() {
    return {
      media: 'movie',
      message: "hello from the Users Page",
      usersList: [],
      decade: ""
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
    updateDecade(decade) {
      this.decade = decade;
    }
  }
};
