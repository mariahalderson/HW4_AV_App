export default {
  props: ['liveuser'],

  template: /*html */ `
      <div class="avatar-card" @click="navToUserHome()">
        <div class="pic">
              <img :src="'images/' + liveuser.avatar">
          </div>
          <div class="user-info">
          <p>{{ liveuser.username }}</p>
          </div>
        </div>`,

  created: function () {
    if (this.liveuser.avatar == null) {
      this.liveuser.avatar = "temp_avatar.jpg";
    }
  },

  methods: {
    navToUserHome() {
      this.$router.push({ name: "userhome", params: { currentuser: this.liveuser } });
      // set a localstorage session object so that we don't have to log back in on page refresh or after our initial login
      localStorage.setItem("cachedUser", JSON.stringify(this.liveuser));
    }
  }
}