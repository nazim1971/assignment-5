 const openTicketPage = document.getElementById('ButTicketBtn');

 openTicketPage.addEventListener('click',function(){
    const ticketCounter = document.getElementById('miamiParibahan');
    ticketCounter.scrollIntoView({behavior:'smooth'})
 })

// seat Function

//  const seatName = document.querySelector('.seat');
// const clickBtn = document.querySelectorAll('.miamia');
// const totalSeat = document.querySelector('.totalSeatNum');
// const addedSeat = document.querySelector('.addSeatCount');
// const finalButton = document.querySelector('.finalBtn');

// let value1 = parseInt(totalSeat.innerText);
// let value2 = parseInt(addedSeat.innerText);

// function handleBtnClick() {
//     const isWhite = this.classList.contains('bg-white');
//     if (isWhite && (value2 < 4 || value2 === 0)) { 
//         value1--; 
//         value2++; 
//         this.classList.add('bg-[#1DD100]');
//         finalButton.classList.remove('btn-disabled');
//     } else { 
//         value1++; 
//         value2--; 
//         this.classList.remove('bg-[#1DD100]'); 
//     }
//     this.classList.toggle('bg-white');
//     totalSeat.innerText = value1;
//     addedSeat.innerText = value2;
    
//     clickBtn.forEach(
//         btn => btn.disabled = value2 >= 4 ? !btn.classList.contains('bg-[#1DD100]') : false); 
// }


// clickBtn.forEach(btn =>  {
//     btn.addEventListener('click', handleBtnClick)
//     ;
    
// });







const seatName = document.querySelector('.seat');
const clickBtn = document.querySelectorAll('.miamia');
const totalSeat = document.querySelector('.totalSeatNum');
const addedSeat = document.querySelector('.addSeatCount');
const finalButton = document.querySelector('.finalBtn');
const ticketDiv = document.querySelector('.ticketMainDiv');
const firstTotal = document.querySelector('.total');

let value1 = parseInt(totalSeat.innerText);
let value2 = parseInt(addedSeat.innerText);
let totalPrice = 550;

function handleBtnClick() {
    const isWhite = this.classList.contains('bg-white');
    if (isWhite && (value2 < 4 || value2 === 0)) { 
        value1--; 
        value2++; 
        this.classList.add('bg-[#1DD100]');
        finalButton.classList.remove('btn-disabled');
        
        // Create a new ticket div element
        const newTicketDiv = document.createElement('div');
        newTicketDiv.classList.add('font-semibold','justify-between','flex',);
        
        // Enter the seat information
        const seatName = document.createElement('p');
        const seatClass = document.createElement('p');
        seatClass.innerText = 'economy';
        const seatPrice = document.createElement('p');
        seatPrice.innerText = '550';
        
        seatName.innerText = `${this.innerText}`;
        newTicketDiv.appendChild(seatName);
        newTicketDiv.appendChild(seatClass);
        newTicketDiv.appendChild(seatPrice);
        
        // Append the new ticket div to the ticket main div
        ticketDiv.appendChild(newTicketDiv);
        firstTotal.innerText = totalPrice;
        totalPrice+=550;
    } else { 
        value1++; 
        value2--; 
        this.classList.remove('bg-[#1DD100]');
        firstTotal.innerText = totalPrice - 1100;
        totalPrice-=550;
       // Remove the last added ticket div
    const lastTicketDiv = ticketDiv.lastElementChild;
    if (lastTicketDiv) {
        lastTicketDiv.remove();
    }
    }
    this.classList.toggle('bg-white');
    totalSeat.innerText = value1;
    addedSeat.innerText = value2;
    
    // Disable buttons when the maximum number of seats is reached
    clickBtn.forEach(btn => {
        btn.disabled = value2 >= 4 ? !btn.classList.contains('bg-[#1DD100]') : false;
    });
}

clickBtn.forEach(btn =>  {
    btn.addEventListener('click', handleBtnClick);
});