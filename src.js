// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}


onkeydown = (event) => {
  let inputId = document.getElementById("subbtn");
  let value = inputId.value;
  if (event.key == "Enter" && value != "") {
    newElement();
  }
};

function chngplahldr() {
  document.getElementById("myInput").placeholder = randomtext();
}
function rechgpldr() {
  document.getElementById("myInput").placeholder = "Add a task...";
}
function randomtext() {
  var random = Math.floor(Math.random() * 3);
  let arr = [
    "Try typing 'Pay utilities bill by Friday 6pm'",
    "Try typing 'Pay Electricity bill by on Monday'",
    "Bring Bananas from Market",
  ];
  return arr[random];
}

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let currdate = new Date().getDate();
let currmonth = new Date().getMonth();
let currday = new Date().getDay();

const content = document.createTextNode(
  days[currday] + "," + " " + currdate + " " + months[currmonth]
);
let ins = document.getElementsByClassName("date")[0];
ins.appendChild(content);

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
var count =0;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.parentNode.removeChild(div);
    check();
  }
}


function check(){
  var num = document.getElementById("myUL").childElementCount;
      // console.log(num);
  if(num ==0){
    // console.log("success");
    document.getElementsByClassName("image")[0].style.display = "block";
      document.getElementById("myUL").style.display = "none";
  }
}

const elem = document.getElementById("myUL").childElementCount;
// console.log(elem);


// Add a "checked" symbol when clicking on a list item
var list = document.querySelector("ul");
list.addEventListener(
  "click",
  function (ev) {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("checked");
    }
  },
  false
);


// Create a new list item when clicking on the "Add" button
function newElement() {
  document.getElementsByClassName("image")[0].style.display = "none";
    document.getElementById("myUL").style.display = "block";
    count++;
    // console.log(count);
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === "") {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").prepend(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);


  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.parentNode.removeChild(div);
      check();
    };
  }
}

//Clearing the list
function removeAll() {
  var lst = document.getElementsByTagName("ul");
  lst[0].innerHTML = "";
}
