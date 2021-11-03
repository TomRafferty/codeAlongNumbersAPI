let fact = document.querySelector("#fact");
fact.style.display = "none";
let factText = document.querySelector("#factText");

let numberInput = document.querySelector("#numberInput");
//                                     | Change this to the 
//                                     V method you wish to use
numberInput.addEventListener("input", getFactFetch);

//XHR Method
//I was told not to use this method but I'm going to
//learn it anyway just for the sake of it.
// function getFactAjax() {
//   let number = numberInput.value;

//   let xhr = new XMLHttpRequest();
//   xhr.open("GET", `http://numbersapi.com/${number}`);

//   xhr.onload = function () {
//       //I assume this is the status code we learnt about
//       // i.e 2xx = success.
//       //we also have to prevent it from running without
//       //any input to avoid some weirdness.
//       if(this.status == 200 && number !== ""){
//           fact.style.display = "block";
//           factText.innerText = this.responseText;
//       }else{
//           //this was not show in the video but
//           //I like the responsive feel of the fact
//           //hiding when there is no number value present.
//           fact.style.display = "none";
//       }
//   };

//   xhr.send();
// }

//Fetch (preferred) Method
function getFactFetch() {
  let number = numberInput.value;//|
//                                 |
//                                 V
  fetch(`http://numbersapi.com/${number}`)
//if dealing with JSON data then |
//this should be .json()         V
    .then(response => response.text())
    .then(data => {
        if (number !== "") {
          fact.style.display = "block";
          factText.innerText = data;
        }else{
            fact.style.display = "none";
        }
    })
    .catch(err => console.log(err));
}
