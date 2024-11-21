const description = JSON.parse(localStorage.getItem('selectedCourse')) || [];
const cart = JSON.parse(localStorage.getItem('cart')) || [];

let flexContainer = document.querySelector('.flex-container');
let html = '';

description.forEach((item, index) => {
    html = `
    <div class="detailContainer-js" data-index="${index}">
          <h1>${item.name || "First Aid"}</h1>
          <p>
            Fees: ${item.price}<br>
            Purpose: To provide first aid awareness and basic life support <br>
            Content:</p>
          <br>
          <ul>
              <li>${item.perk}</li>
          </ul>
          <button class="add-to-course-js" data-index="${index}">Add to Courses</button>
    </div>
    <div class="imgContainer">
        <img src="${item.image}" alt="${item.name || "First Aid"}" srcset="">  
    </div>`;
});

flexContainer.innerHTML = html;

flexContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('add-to-course-js')) {
        const index = e.target.getAttribute('data-index'); 
        const selectedCourse = description[index];
        const itemExist=cart.some((item)=>
            item.name===selectedCourse.name
        )
        if (!itemExist){
        // Add to the cart
        cart.push(selectedCourse);
        localStorage.setItem('cart', JSON.stringify(cart));  
        }
        else{
            alert('item alrady exist')
        }
        

    }
});
