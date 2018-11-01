var buttons = document.querySelectorAll(".btn");

function getData(){
    fetch(`./includes/connect.php?colnum=${this.id}`)
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        showData(data[0]); //data does not live update, i have to change the index to get info on a different row?
    })
    .catch(function(error){
        console.log(error);
    });
}

function showData(data){
    const {col1, col2, col3} = data;
    document.querySelector("#row1").textContent = col1 + col2;
    document.querySelector("#row2").textContent = col3;
}

//getData();
buttons.forEach(button=>button.addEventListener('click', getData));