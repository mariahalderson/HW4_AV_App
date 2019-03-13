import MoviesComponent from "./MoviesComponent.js"
import NavHeaderComponent from "./layout/NavHeaderComponent.js"
export default {
  props: ['currentUser'],
  template: /*html */`
  <div>
  <MoviesComponent :decade="decade" v-if="media == 'movie'"></MoviesComponent>
  <MusicComponent v-if="media == 'music'"></MusicComponent>
  <TVComponent v-if="media == 'tv'"></TVComponent>
  <NavHeaderComponent @updateDecade="updateDecade" @updateMedia="updateMedia"></NavHeaderComponent>
 </div>
 `,
  data() {
    return {
      media: 'movie',
      decade: '00',
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
    },
    updateDecade(decade){
      this.decade = decade;
    }
  }
};
