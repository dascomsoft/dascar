
let show = document.getElementById('detail-content');

document.addEventListener('DOMContentLoaded', function () {

    const urlParams = new URLSearchParams(window.location.search);
    const idCar = urlParams.get('id');
    const carExist = cars.find(item => item.id === parseInt(idCar))

        
    if(carExist){

    show.innerHTML = `
    <div class='main-detail'>
        <div class='container'>
         <h2 class="mb-3 fw-bold">Car Detail</h2>
         <div class="detail-display">
            <img src="${carExist.image}" />
          <div class="cart-details">
            <h1><strong>${carExist.model}</strong></h1>
            <p><strong>Mark</strong> : ${carExist.mark}</p>
            <p><strong>Description</strong>:${carExist.description}</p>
            <p><strong>Comsumption : ${carExist.consumption}</strong></p>
            <p><strong>Color : ${carExist.color}</strong></p>

            <p><strong>Price : $${carExist.price}</strong></p>
            
           <a href="service.html#return" class="btn btn-secondary">Check More</a>

      </div>
    </div>
   </div>
  </div>
     `   
    }

    else{

        return('empty')

    }
  });
