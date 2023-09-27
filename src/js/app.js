const accordionItems = document.querySelectorAll('.accordion-item');
const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach((header, index) => {
  header.addEventListener('click', () => {
    accordionItems[index].classList.toggle('active');
    const content = accordionItems[index].querySelector('.accordion-content');
    if (content.style.display === 'block') {
      content.style.display = 'none';
    } else {
      content.style.display = 'block';
    }
  });
});


const home = document.querySelector("#home");
const previous = document.querySelector(".previous");
const next = document.querySelector(".next");
const images = ["image1.jpg", "image2.jpg", "image3.jpg"];
let index = 0;

const slide = () => home.style.backgroundImage = `url(./src/img/${images[index]})`;

previous.addEventListener("click", () => slide(index = (index - 1 + images.length) % images.length));
next.addEventListener("click", () => slide(index = (index + 1) % images.length));

slide();


const countDownDate = new Date("july 4, 2024 21:00:00").getTime();
const result = setInterval(function () {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (distance <= 0) {
        clearInterval(result);
        document.querySelector(".time").innerHTML = "EXPIRED";
    } else {
        if (seconds === 0 && minutes > 0) {
            minutes -= 1;
            seconds = 59;
        } else if (seconds < 0) {
            seconds = 0;
        }

        document.querySelector(".day").innerHTML = days;
        document.querySelector(".hour").innerHTML = hours;
        document.querySelector(".min").innerHTML = minutes;
        document.querySelector(".sec").innerHTML = seconds;
    }
}, 1000);



const jsonData = {
  "products": [
    {
      "id": 1,
      "image": "/src/img/1.jpg",
      "name": "Bloodborne",
      "stars": "✩✩✩✩✩",
      "price": 50.00,
    },
    {
      "id": 2,
      "image": "/src/img/2.jpg",
      "name": "Dark Souls II",
      "stars": "✩✩✩✩✩",
      "price": 29.99
    },
    {
      "id": 3,
      "image": "/src/img/3.jpg",
      "name": "Dragons Dogma",
      "stars": "✩✩✩✩✩",
      "price": 34.99,
      "old_price" : 49.99
    },
    {
      "id": 4,
      "image": "/src/img/4.jpg",
      "name": "Kingdoms of Amalur",
      "stars": "★★★★✩",
      "price": 20.00
    },
    {
      "id": 5,
      "image": "/src/img/5.jpg",
      "name": "Lords of the Fallen",
      "stars": "★✩✩✩✩",
      "price": 14.99
    },
    {
      "id": 6,
      "image": "/src/img/6.jpg",
      "name": "Middle-earth",
      "stars": "★★★★★",
      "price": 29.99
    },
    {
      "id": 7,
      "image": "/src/img/7.jpg",
      "name": "Neverwinter",
      "stars": "✩✩✩✩✩",
      "price": 13.99
    },
    {
      "id": 8,
      "image": "/src/img/8.jpg",
      "name": "Prototype 3",
      "stars": "✩✩✩✩✩",
      "price": 20.00,
      "old_price" : 23.99
    },
    {
      "id": 9,
      "image": "/src/img/9.jpg",
      "name": "Risen 3",
      "stars": "✩✩✩✩✩",
      "price": 9.99
    }
    ]
}



const gameListContainer = document.querySelector(".shop");

const games = jsonData.products;

const gameElements = games.map(game => {
    const hasOldPrice = typeof game.old_price !== 'undefined';
            return `
                <div class="game">
                            <img src="${game.image}" alt="">
                            <h3>${game.name}</h3>
                            <div class="about-game">
                                <div class="stars">
                                ${game.stars}
                                </div>
                                <p>$${game.price} ${hasOldPrice ? `<s>$${game.old_price}</s>` : ''}</p>
                            </div>    
                            <div class="add-to-cart">
                                <a href="">Add to cart</a>
                            </div>
                        </div>
            `
});

gameListContainer.innerHTML = gameElements.join('');


let slider = document.getElementById("myRange");
let output = document.getElementById("range-price");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
};




  
