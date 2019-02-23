// everything inside of export default will be accecible  to the build, it will be public

export default {
  template: /*html */`
  <div>
  <div id="home">
  <div class="welcome-box">
    <h2>Welcome to Roku</h2>
    <img src="images/flashback_logo_yellow.svg" alt="Flashback logo yellow" />
    <p>
      The all new Flashback app from Roku is your complete premium
      entertainment time-machine. With movies, tv shows, and movies from
      every decade from 1950-1990 right at your finger tips, you'll never
      miss the "good 'ol days" again. Your Nostalgia has arrived.
    </p>
    <hr class="my-4">
    <form>
        <div class="container">
            <div class="name">
                <label class="sr-only" for="inlineFormInputName">Name</label>
                <input v-model="input.username" type="text" class="form-control" id="inlineFormInputName" placeholder="username" required>
            </div>
  
            <div class="password">
                <label class="sr-only" for="inlineFormPassword">Name</label>
                <input v-model="input.password" type="password" class="form-control" id="inlineFormPassword" placeholder="password" required>
            </div>
  
            <div class="col-auto my-1">
                <button v-on:click.prevent="login()" type="submit" class="btn">Login!</button>
            </div>
        </div>
    </form>            
    </div> 
</div>
</div>
`,

  data() {
    return {
      input: {
        username: "",
        password: ""
      }
    };
  },

  created: function () {
    this.handleStyles();
  },

  methods: {
    handleStyles() {

      if (this.$route.path === "/") {
        document.body.style.background = "#f2f2f3";

      }
    },
    login() {
      // console.log("Trying to Login");
      if (this.input.username != "" && this.input.password != "") {
        // do afetch here and check creds on the back end
        // CREATE some form data to do a POST request
        let formData = new FormData();

        formData.append("username", this.input.username);
        formData.append("password", this.input.password);

        let url = `./admin/admin_login.php`;
        fetch(url, {
          method: 'POST',
          body: formData
        })
          .then(res => res.json())
          .then(data => {
            if (typeof data != "object") { // means that we're not getting a user object back
              console.warn(data);
              console.error("authentication failed, please try again");
            } else {
              this.$emit("authenticated", true, data[0]);
              this.$router.replace({ name: "users" });
            }
          })
          .catch(function (error) {
            console.log(error);
          });
      } else {
        console.log("A username and password must be present");
      }
    }
  }
}