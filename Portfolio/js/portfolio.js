//code for generating cards
let text=
`{
    "portfolio":[["kitty.jpeg",
    "Mitushi",
    "https://github.com/neos-20/neos-20.github.io",
    "https://www.instagram.com/neos_20_/",
    "https://www.linkedin.com/in/mitushi-agrawal-bb75b0210/",
    "https://twitter.com/20_neos",
    "kitty.jpeg",
     "Mitushi",
    "Main heading",
    "contentLorem ipsum dolor sit amet consectetur adipisicing elit. "],

    ["kitty.jpeg",
    "Card 2",
    "https://github.com/neos-20/neos-20.github.io",
    "https://www.instagram.com/neos_20_/",
    "https://www.linkedin.com/in/mitushi-agrawal-bb75b0210/",
    "https://twitter.com/20_neos",
    "kitty.jpeg",
     "Kitty 2",
    "Heading 2",
    "contentLorem ipsum dolor sit amet consectetur adipisicing elit. "],

    ["kitty.jpeg",
    "Card 3",
    "https://github.com/neos-20/neos-20.github.io",
    "https://www.instagram.com/neos_20_/",
    "https://www.linkedin.com/in/mitushi-agrawal-bb75b0210/",
    "https://twitter.com/20_neos",
    "kitty.jpeg",
     "Kitty 3",
    "Heading 3",
    "contentLorem ipsum dolor sit amet consectetur adipisicing elit. "],

    
    ["kitty.jpeg",
    "Card 2",
    "https://github.com/neos-20/neos-20.github.io",
    "https://www.instagram.com/neos_20_/",
    "https://www.linkedin.com/in/mitushi-agrawal-bb75b0210/",
    "https://twitter.com/20_neos",
    "kitty.jpeg",
     "Kitty 2",
    "Heading 2",
    "contentLorem ipsum dolor sit amet consectetur adipisicing elit. "],

    ["kitty.jpeg",
    "Card 2",
    "https://github.com/neos-20/neos-20.github.io",
    "https://www.instagram.com/neos_20_/",
    "https://www.linkedin.com/in/mitushi-agrawal-bb75b0210/",
    "https://twitter.com/20_neos",
    "kitty.jpeg",
     "Kitty 2",
    "Heading 2",
    "contentLorem ipsum dolor sit amet consectetur adipisicing elit. "],

    ["kitty.jpeg",
    "Card 2",
    "https://github.com/neos-20/neos-20.github.io",
    "https://www.instagram.com/neos_20_/",
    "https://www.linkedin.com/in/mitushi-agrawal-bb75b0210/",
    "https://twitter.com/20_neos",
    "kitty.jpeg",
     "Kitty 2",
    "Heading 2",
    "contentLorem ipsum dolor sit amet consectetur adipisicing elit. "],

    ["kitty.jpeg",
    "Card 2",
    "https://github.com/neos-20/neos-20.github.io",
    "https://www.instagram.com/neos_20_/",
    "https://www.linkedin.com/in/mitushi-agrawal-bb75b0210/",
    "https://twitter.com/20_neos",
    "kitty.jpeg",
     "Kitty 2",
    "Heading 2",
    "contentLorem ipsum dolor sit amet consectetur adipisicing elit. "],

    ["kitty.jpeg",
    "Card 2",
    "https://github.com/neos-20/neos-20.github.io",
    "https://www.instagram.com/neos_20_/",
    "https://www.linkedin.com/in/mitushi-agrawal-bb75b0210/",
    "https://twitter.com/20_neos",
    "kitty.jpeg",
     "Kitty 2",
    "Heading 2",
    "contentLorem ipsum dolor sit amet consectetur adipisicing elit. "],

    ["kitty.jpeg",
    "Card 2",
    "https://github.com/neos-20/neos-20.github.io",
    "https://www.instagram.com/neos_20_/",
    "https://www.linkedin.com/in/mitushi-agrawal-bb75b0210/",
    "https://twitter.com/20_neos",
    "kitty.jpeg",
     "Kitty 2",
    "Heading 2",
    "contentLorem ipsum dolor sit amet consectetur adipisicing elit. "],

    ["kitty.jpeg",
    "Card 2",
    "https://github.com/neos-20/neos-20.github.io",
    "https://www.instagram.com/neos_20_/",
    "https://www.linkedin.com/in/mitushi-agrawal-bb75b0210/",
    "https://twitter.com/20_neos",
    "kitty.jpeg",
     "Kitty 2",
    "Heading 2",
    "contentLorem ipsum dolor sit amet consectetur adipisicing elit. "],

    ["kitty.jpeg",
    "Kunnu",
    "https://github.com/neos-20/neos-20.github.io",
    "https://www.instagram.com/neos_20_/",
    "https://www.linkedin.com/in/mitushi-agrawal-bb75b0210/",
    "https://twitter.com/20_neos",
    "kitty.jpeg",
     "Kunnu",
    "Heading 2",
    "contentLorem ipsum dolor sit amet consectetur adipisicing elit. "]]
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
               
                <div class="social_media">
                <a href="${data["portfolio"][i][3]}"><img src="icons/insta.png" alt="" width="24.26px" height="26.31px" class = "icon"></a> 
                <a href="${data["portfolio"][i][2]}"><img src="icons/github.png" alt="" width="24.26px" height="26.31px" class = "icon"></a>
                  <a href="${data["portfolio"][i][4]}"><img src="icons/linkedin.png" alt="" width="24.26px" height="26.31px" class = "icon"></a> 
                  <a href="${data["portfolio"][i][5]}"><img src="icons/twitter.png" alt="" width="24.26px" height="26.31px" class = "icon"></a>  
                </div>
                <div class="header1">
                    <img src="${data["portfolio"][i][6]}" alt="" class="pp" />
                    <h2>${data["portfolio"][i][7]}</h2>
                    </div>
                    
                </div>
                
              
                <div class="card__body">
                    <h3>${data["portfolio"][i][8]}</h3>
                    <p>${data["portfolio"][i][9]}</p>
                </div>
            </div>
        </div>
    </div>
</div>
      `;
cards.innerHTML += code;
    }




 //flip code   

let card = document.querySelectorAll('.card__inner');
// let social = document.querySelectorAll('.icon');
for(let i=0;i<card.length;i++){
card[i].addEventListener("click", function (e) {
  card[i].classList.toggle('is-flipped');
});

// social[i].addEventListener("click", function (e) {
//     social[i].classList.toggle('no-flip');
//   });
}

