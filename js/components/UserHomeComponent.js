import MoviesComponent from "./MoviesComponent.js"
import NavHeaderComponent from "./layout/NavHeaderComponent.js"
export default {
  props: ['currentUser'],
  template: /*html */`
  <div>
  <MoviesComponent v-if="media == 'movie'"></MoviesComponent>
  <MusicComponent v-if="media == 'music'"></MusicComponent>
  <TVComponent v-if="media == 'tv'"></TVComponent>
  <NavHeaderComponent @updateMedia="updateMedia"></NavHeaderComponent>
 </div>
 `,
  data() {
    return {
      media: 'movie',
      message: "hello from the Users Page",
      usersList: [],
    };
  },
  components: {
    MoviesComponent: MoviesComponent,
    NavHeaderComponent: NavHeaderComponent
  },
  methods: {
    updateMedia(media) {
      this.media = media;
    }
  }
};
