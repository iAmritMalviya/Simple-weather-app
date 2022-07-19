// let  apiKey = 7556eeda90eb12557dbf752e5dfcc418

let submitBtn = document.getElementById("submitBtn");
let cityInput = document.getElementById("cityInput");

submitBtn.addEventListener("click", () => {
  let temp = document.querySelector('input[name="temp"]:checked').value;
  let city = cityInput.value;
  if (city) {
    cityInput.classList.remove("is-invalid");
    document.getElementById(
      "weather"
    ).innerHTML = `<h1 class="display-6 text-center">FETCHING DATA...</h1>`;
    let api = `https://api.weatherapi.com/v1/current.json?key=2596ce4bb9ce4f0fbb465430221705&q=${city}`;
    fetch(api)
      .then((response) => response.json())
      .then((data) => {
        console.log(typeof data);
        show(data, temp);
      });
  } else {
    cityInput.classList.add("is-invalid");
  }
});
function show(data, temp) {
  let tem = temp == "cel" ? data.current.temp_c : data.current.temp_f;
  console.log(tem);

  var dob = new Date();
  var min =  dob.getMinutes();
  var hour = dob.getHours();
  var dobArr = dob.toDateString().split(" ");
  var dobFormat = dobArr[2] + " " + dobArr[1];
  var zone = (hour > 12 )? 'PM' : 'AM';
  hour = (hour > 12)? hour - 12 : hour;
 
  var dobtime = hour + ":" + min+ ":" + zone;
  console.log(dobFormat);

  let html = `  <article class="widget">
   <div class="weatherIcon"><img src="${data.current.condition.icon}"></div>
   <div class="weatherInfo">
     <div class="temperature"><span id="kel">${tem}&deg;</span></div>
     <div class="description">    
       <div class="weatherCondition">${data.current.condition.text}</div>    
       <div class="place">${data.location.name},${data.location.region}, ${data.location.country}</div>
     </div>
   </div>
   <div class="date">${dobFormat}<br>${dobtime}</div>
   
 </article>  `;

  document.getElementById("weather").innerHTML = html;
}

