let text=
`{
    "portfolio":[["kitty.jpeg",
    "Card 1",
    "kitty.jpeg",
     "Kitty 1",
    "Heading 1",
    "contentLorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates exercitationem quas, maiores atque quis a neque, reprehenderit eaque praesentium, animi id nesciunt laudantium? Voluptatem nam alias nulla repellat. Molestiae, explicabo!"],

    ["kitty.jpeg",
    "Card 2",
    "kitty.jpeg",
     "Kitty 2",
    "Heading 2",
    "contentLorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates exercitationem quas, maiores atque quis a neque, reprehenderit eaque praesentium, animi id nesciunt laudantium? Voluptatem nam alias nulla repellat. Molestiae, explicabo!"],

    ["kitty.jpeg",
    "Card 3",
    "kitty.jpeg",
     "Kitty 3",
    "Heading 3",
    "contentLorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates exercitationem quas, maiores atque quis a neque, reprehenderit eaque praesentium, animi id nesciunt laudantium? Voluptatem nam alias nulla repellat. Molestiae, explicabo!"],

    
    ["kitty.jpeg",
    "Card 2",
    "kitty.jpeg",
     "Kitty 2",
    "Heading 2",
    "contentLorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates exercitationem quas, maiores atque quis a neque, reprehenderit eaque praesentium, animi id nesciunt laudantium? Voluptatem nam alias nulla repellat. Molestiae, explicabo!"],

    ["kitty.jpeg",
    "Card 2",
    "kitty.jpeg",
     "Kitty 2",
    "Heading 2",
    "contentLorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates exercitationem quas, maiores atque quis a neque, reprehenderit eaque praesentium, animi id nesciunt laudantium? Voluptatem nam alias nulla repellat. Molestiae, explicabo!"],

    ["kitty.jpeg",
    "Card 2",
    "kitty.jpeg",
     "Kitty 2",
    "Heading 2",
    "contentLorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates exercitationem quas, maiores atque quis a neque, reprehenderit eaque praesentium, animi id nesciunt laudantium? Voluptatem nam alias nulla repellat. Molestiae, explicabo!"],

    ["kitty.jpeg",
    "Card 2",
    "kitty.jpeg",
     "Kitty 2",
    "Heading 2",
    "contentLorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates exercitationem quas, maiores atque quis a neque, reprehenderit eaque praesentium, animi id nesciunt laudantium? Voluptatem nam alias nulla repellat. Molestiae, explicabo!"],

    ["kitty.jpeg",
    "Card 2",
    "kitty.jpeg",
     "Kitty 2",
    "Heading 2",
    "contentLorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates exercitationem quas, maiores atque quis a neque, reprehenderit eaque praesentium, animi id nesciunt laudantium? Voluptatem nam alias nulla repellat. Molestiae, explicabo!"],

    ["kitty.jpeg",
    "Card 2",
    "kitty.jpeg",
     "Kitty 2",
    "Heading 2",
    "contentLorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates exercitationem quas, maiores atque quis a neque, reprehenderit eaque praesentium, animi id nesciunt laudantium? Voluptatem nam alias nulla repellat. Molestiae, explicabo!"],

    ["kitty.jpeg",
    "Card 2",
    "kitty.jpeg",
     "Kitty 2",
    "Heading 2",
    "contentLorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates exercitationem quas, maiores atque quis a neque, reprehenderit eaque praesentium, animi id nesciunt laudantium? Voluptatem nam alias nulla repellat. Molestiae, explicabo!"]]
}`

const data = JSON.parse(text);

    const cards = document.querySelector(".cardholder");
    for(var i=0; i<data["portfolio"].length ; i++){
    let code = `
    <div class="card">
          <div class="card__inner">
              <div class="card__face card__face--front">
              
              <img class="profile" src="${data["portfolio"][i][0]}" alt="" >
                  <h2>${data["portfolio"][i][1]}</h2>
                  
              </div>
              <div class="card__face card__face--back">
                  <div class="card__content">
                      <div class="card__header">
                          <img src="${data["portfolio"][i][2]}" alt="" class="pp" />
                          <h2>${data["portfolio"][i][3]}</h2>
                      </div>
                      <div class="card__body">
                          <h3>${data["portfolio"][i][4]}</h3>
                          <p>${data["portfolio"][i][5]}</p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      `;
cards.innerHTML += code;
    }




    

let card = document.querySelectorAll('.card__inner');

for(let i=0;i<card.length;i++){
card[i].addEventListener("click", function (e) {
  card[i].classList.toggle('is-flipped');
});
}

