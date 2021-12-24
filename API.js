


//callAPI();

function callAPI() {
    cityname = document.getElementById("searchbox").value;
    //cityname = "London";
    var url = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=2471bc340f047b455a212540e36efe24`;
    fetch(url)
        .then(res => res.json())
        .then(data => card(data.main))
}


function card(data) {
    //console.log(data);
    var content = document.getElementById("BootStrapData");
    var newDiv = document.getElementById("div");
    //for (var i = 0; i < 12; i++) {
    //console.log(i);

    //console.log(data[i].strCategory);
    // var category = ();
    var temp = (data.temp);
    var temp_max = (data.temp_max)
    //var image = (data[i].strCategoryThumb);
    var newDiv = document.createElement("div");
    //newStyle.classList.add("styles");





    newDiv.innerHTML = `<div class="card"  style="max -width: 1080px;">
            
            <img src=" " class="card-img-top" alt=""  >
            <div class="card-body ">
                <h1 class="card-title" id="Location" > ${cityname} <br> </h1>
                <p class="card-text" id="description"> Current Temperature: ${temp} F <br>Maximum Temperature: ${temp_max} F <br> 
                
            </div>
        </div> `;

    content.appendChild(newDiv);


    //}


}




































