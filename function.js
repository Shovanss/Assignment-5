

const seats = document.getElementsByClassName('seat');


let count = 0;
let ticketPrice = 550;

    for(const seat of seats){
        seat.addEventListener('click', function(event){
            count = count + 1;
            if(count > 4){
                seat.setAttribute('disabled'); 
            }
            event.target.classList.add("pointer-events-none");
            seat.style.backgroundColor = '#1DD100';
            
            seat.classList.add('text-white');
            const seatLeft = document.getElementById('seats-left').innerText;
        const newSeat = parseInt(seatLeft);
        document.getElementById('seats-left').innerText = newSeat - 1;
        
        
        const counts = document.getElementById('count').innerText;
        const newCount = parseInt(counts);
        document.getElementById('count').innerText = newCount + 1;
        
       
        
        const totalPrice = document.getElementById('total-price').innerText;
        const newPrice = parseInt(totalPrice);
        document.getElementById('total-price').innerText = newPrice + ticketPrice;
        
        
        
        const grandTotal = document.getElementById('grand-total').innerText;
        document.getElementById('grand-total').innerText =  newPrice + ticketPrice;
        
        
        
        const text = event.target.innerText;
        const titleContainer = document.getElementById('title-container');
        const p = document.createElement('p');
        p.innerText = text;
        
        const seatName = document.getElementById('seat-name');
        const p2 = document.createElement('p');
        p2.innerText = 'Economy';
        
        const price = document.getElementById('price');
        const p3 = document.createElement('p');
        p3.innerText = '550';
        
        titleContainer.appendChild(p);
        seatName.appendChild(p2);
        price.appendChild(p3);
        });
        }



const button = document.getElementById('btn-apply');
button.addEventListener('click', function(){
    const inputText = document.getElementById('input-text').value;
if(inputText === 'NEW15'){
    const totalPrice = document.getElementById('total-price').innerText;
    const discount = parseInt(totalPrice);
    const newDiscount = discount * 0.15;

    const discountContainer = document.getElementById('discount-container');
    const p = document.createElement('p');
    p.innerText = 'Total Discount';

    const priceContainer = document.getElementById('price-container');
    const p2 = document.createElement('p');
    p2.innerText = newDiscount;
    
    discountContainer.appendChild(p);
    priceContainer.appendChild(p2);



    const grandTotal = document.getElementById('grand-total').innerText;
    document.getElementById('grand-total').innerText = discount - newDiscount;
    document.getElementById('input-text').value = " ";
    button.removeAttribute('disabled');
    button.classList.add('hidden');
    
}
else if(inputText === 'Couple 20'){
    const totalPrice = document.getElementById('total-price').innerText;
    const discount = parseInt(totalPrice);
    const newDiscount = discount * 0.20;

    const discountContainer = document.getElementById('discount-container');
    const p = document.createElement('p');
    p.innerText = 'Total Discount';

    const priceContainer = document.getElementById('price-container');
    const p2 = document.createElement('p');
    p2.innerText = newDiscount;
    
    discountContainer.appendChild(p);
    priceContainer.appendChild(p2);
    
    const grandTotal = document.getElementById('grand-total').innerText;
    document.getElementById('grand-total').innerText = discount - newDiscount;
    document.getElementById('input-text').value = " ";
    button.classList.add('hidden');
}
else{
    alert('the code was wrong');
    
    
}
})





    
