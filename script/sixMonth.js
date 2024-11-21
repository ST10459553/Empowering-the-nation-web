import { sixMonthCourse } from "../Data/sixMonthCourse.js"
export const description =JSON.parse(localStorage.getItem('selectedCourse'))||[]
let gridContainer=document.querySelector('.content-grid')
let html=''


sixMonthCourse.forEach((item,index)=>{
    html += `
        <div class="item-container" data-index="${index}">
            <img src="${item.image}" alt="${item.name}" srcset="">
            <button class="enquireBtn" data-index="${index}">${item.name}</button>
            <p class="description">${item.description}</p>
            <p>${item.price}</p>
        </div>`;
})

gridContainer.innerHTML+=html
gridContainer.addEventListener('click',(e)=>{
    if (e.target.classList.contains('enquireBtn')){
        const index = e.target.getAttribute('data-index'); 
        const selectedCourse = sixMonthCourse[index];  
        // Store the selected venue with its index in the bookingArray
        description.push({ index: index, ...selectedCourse });
        localStorage.setItem('selectedCourse', JSON.stringify(description));  // 
        window.location.href='../HTML/First Aid.html'
    }
})
console.log(sixMonthCourse)
// localStorage.clear()