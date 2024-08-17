let itemContainerElement = document.querySelector(".items-container")

let innerHTML = ""
items.forEach(item =>{
    innerHTML += `<div class="item-container">
                <img class="item-image" src="${item.image}" alt="img">
                <div class="rating">${item.rating.start} ⭐ ${item.rating.end}</div>
                <div class="company">${item.company}</div>
                <div class="item-name">${item.item_name}</div>
                <div class="price">
                    <span class="current-price">Rs.${item.current_price}</span>
                    <span class="original-price">Rs. ${item.original_price}</span>
                    <span class="discount">(${item.discount}% off)</span>
                </div>
                <button class="btn-add-bag">Add to Bag</button>
            </div>`
} 

)





itemContainerElement.innerHTML = innerHTML