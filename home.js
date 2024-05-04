

//select audi car
let price = document.querySelector(".price")
let audix = document.querySelector(".audix")
//select car image
let carMove = document.querySelector(".carMove")
//select car model
let model = document.querySelector(".model")
// select the car mark
let markis = document.querySelector(".markis")
//select the year of the car production
let year = document.querySelector(".year")
//select car transmission
let trans = document.querySelector(".trans")
//select the car type of fuel
let fuel = document.querySelector(".fuel")
//select car color
let color = document.querySelector(".color")


//Audi function

function audiCar(){
    price.innerHTML = "$500"
    carMove.src = "images/audiS.jpg"
    model.innerHTML ="Audi"
    markis.innerHTML ="MB-R3"
    year.innerHTML = "2017"
    trans.innerHTML ="Manual"
    fuel.innerHTML = "Gas"
    color.innerHTML ="Ligthgray"
}

//Audi function
function toyotaCar(){
  price.innerHTML = "$300"
    carMove.src = "images/toyota.jpg"
    model.innerHTML ="Toyota"
    markis.innerHTML ="MRV-56"
    year.innerHTML = "2012"
    trans.innerHTML ="Manual"
    fuel.innerHTML = "Gas"
    color.innerHTML ="Ligthgray"
}

//Mercedez Benz
function mercedezBenz(){
  price.innerHTML = "$250"
    carMove.src = "images/mercedezBenz.jpg"
    model.innerHTML ="Mercedez Benz"
    markis.innerHTML ="BMZ-T5"
    year.innerHTML = "2019"
    trans.innerHTML ="Automatic"
    fuel.innerHTML = "Gasoline"
    color.innerHTML ="grey"
}

//Gof car

function golfCar(){ 
  price.innerHTML = "$350"
    carMove.src = "images/golf.jpg"
    model.innerHTML ="Golf"
    markis.innerHTML ="GOLF-T5X"
    year.innerHTML = "2000"
    trans.innerHTML ="Manual"
    fuel.innerHTML = "Gas"
    color.innerHTML ="gray"
}

//Jeep car

function jeepCar(){
  price.innerHTML = "$450"
    carMove.src = "images/jeep.jpg"
    model.innerHTML ="Jeep"
    markis.innerHTML ="JEEP-UR"
    year.innerHTML = "2010"
    trans.innerHTML ="Automatic"
    fuel.innerHTML = "Super"
    color.innerHTML ="lightgray"
}

//Honda car
function hondaCar(){
    price.innerHTML = "$650"
    carMove.src = "images/car17.png"
    model.innerHTML ="Honda"
    markis.innerHTML ="Honda-UxR"
    year.innerHTML = "2022"
    trans.innerHTML ="Automatic"
    fuel.innerHTML = "Gas"
    color.innerHTML ="red"
}


// SEARCH FUNCTION

function searchForm(){
  let car = document.getElementById('selectCar').value ;
  let location = document.getElementById('pickLocation').value ;
  let drop = document.getElementById('dropLocation').value ;
  let pick = document.getElementById('pickUpDate').value ;
  let dropDate = document.getElementById('dropUpDate').value ;

  
  if (car === "" || location === "" || drop === "" || pick==="" || dropDate ==="") {
     alert('PLEASE FILL ALL THE BOX FIRST')
      return false; // Stoppedthe submission
  } else {
      return true; // Authorized the submission
  }
  }
  
  document.getElementById('submit-btn').addEventListener('click', function() {
  if (searchForm()) {
      // Rediriger vers une nouvelle page
      window.location.href = "reserve.html";
  }
  });


