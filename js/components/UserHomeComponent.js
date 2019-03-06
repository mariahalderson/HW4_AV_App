import MoviesComponent from "./MoviesComponent.js"
export default {
  props: ['currentUser'],
  template: /*html */`
  <div>
  <MoviesComponent></MoviesComponent>
 </div>
 `,
  data() {
    return {
      message: "hello from the Users Page",
      usersList: []
    };
  },
  components: {
    MoviesComponent: MoviesComponent
  }
};
