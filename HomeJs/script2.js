let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'Calvin Klein T-Shirt',
        image: '1.PNG',
        price: 1599
    },
    {
        id: 2,
        name: 'Iphone 15 Pro Max 1Tb',
        image: '2.PNG',
        price: 97000
    },
    {
        id: 3,
        name: 'Hawk Genth Bag',
        image: '3.PNG',
        price: 3999
    },
    {
        id: 4,
        name: 'Whirpool Waching Machine',
        image: '4.PNG',
        price: 44999
    },
    {
        id: 5,
        name: 'FERM Electric Blower',
        image: '5.PNG',
        price: 34399
    },
    {
        id: 6,
        name: 'Christian Dior Sandals',
        image: '6.PNG',
        price: 17999
    },
    {
        id: 7,
        name: 'Hair Dryer',
        image: '7.PNG',
        price: 12399
    },
    {
        id: 8,
        name: 'Samsung Galaxy S23 Ultra',
        image: '8.PNG',
        price: 98999
    },
    {
        id: 9,
        name: 'MacBook Pro',
        image: '9.PNG',
        price: 70999
    },
    {
        id: 10,
        name: 'LG Refrigerator',
        image: '10.PNG',
        price: 50999
    },
    {
        id: 11,
        name: 'Belo Sunscreen',
        image: '11.PNG',
        price: 1299
    },
    {
        id: 12,
        name: 'Puma Sports Bag',
        image: '12.PNG',
        price: 5499
    },
    {
        id: 13,
        name: 'Addidas Mini Bag',
        image: '13.PNG',
        price: 1199
    },
    {
        id: 14,
        name: 'Cetaphil Baby Lotion',
        image: '14.PNG',
        price: 2399
    },
    {
        id: 15,
        name: 'Kitchen Utensils 8Pcs',
        image: '15.PNG',
        price: 7399
    },
    {
        id: 16,
        name: 'Tomford Men Boxers',
        image: '16.PNG',
        price: 4299
    },
    {
        id: 17,
        name: 'UNIQLO Jacket',
        image: '17.PNG',
        price: 6499
    },
    {
        id: 18,
        name: 'Rice Cooker',
        image: '18.PNG',
        price: 9499
    },
    {
        id: 19,
        name: 'Men Casual Shoes',
        image: '19.PNG',
        price: 4799
    },
    {
        id: 20,
        name: 'AquaFlask 40oz',
        image: '20.PNG',
        price: 899
    }
];

let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">₱ ${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Cart</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){

        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>₱ ${value.price.toLocaleString()}</div>
                <div>
                    
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}
