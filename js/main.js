
const vm = new Vue({
    el: "#app",
    data:{
        vidinfo: []
    },
    created(){
        this.getContent();
    },
    methods:{
        getContent(){
            let targetURL = "/includes/connect.php?vid=all";
            fetch(targetURL) 
            .then(res => res.json()) 
            .then(data => {
                console.log(data);
                this.vidinfo = data;
            })
            .catch(function(error) {
            console.log(error);
            });
        },
        checkConnect(){
            console.log("we did it!");
        }
    }

});