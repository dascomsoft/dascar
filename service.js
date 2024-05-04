

let carDisplay = document.getElementById('car-description');

function carRender(){
   cars.forEach((car) =>{
    carDisplay.innerHTML +=` 
     <div class="car-wrapper">
       <div class="car-content">
        <img src="${car.image}" alt="" />
      <div class="car-detail p-3">
          <p class="fw-bold mt-3">${car.model}</p>
          <p class="fw-bold mt-3">$${car.price}</p>
          <button class="btn btn-secondary" onclick="redirect(${car.id})">See more</button>
    </div>
    </div> 

    `
})

}
carRender()



function redirect(carId){
    window.location.href = `detail.html?id=${carId}`
}