import UserComponent from './UserComponent.js';

export default {
  // prop: [],
  template: /*html */`
  <div>
  <h1 class="user-message">{{ message }}</h1>
	<div class="user-container">
			<user v-for="(user, index) in userList" :liveuser="user" :key="index"></user>     
  </div>
  </div>
	`,

  created: function () {
    //debugger;
    this.fetchAllUsers();
    this.handleStyles();
  },

  data() {
    return {
      message: "Who's Using Roku Flashback Today?",

      userList: []
    }
  },

  methods: {
    handleStyles() {

      if (this.$route.path === "/") {
        document.body.style.background = "#f2f2f3";

      }
    },
    fetchAllUsers() {
      let url = `./admin/scripts/users.php?allusers=true`;

      fetch(url)
        .then(res => res.json())
        .then(data => {
          this.userList = data
          // console.log(userList);
        })
        // .then(res => res.text())
        // .then(text => console.log(text))
        .catch(function (error) {
          console.error(error);
        });
    }
  },

  components: {
    user: UserComponent
  }
}