import MoviesComponent from "./MoviesComponent.js"
export default {
  props: ['currentuser'],
  template: `
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
