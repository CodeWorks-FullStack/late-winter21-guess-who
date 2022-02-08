//#region TODO pre made list
let villians = [{ name: "Lord Voldemort", facialHair: false, gender: "M", overFifty: true, hair: false, image: '../assets/images/Voldemort.jpg', guilty: false }, { name: "Cruella Deville", facialHair: false, gender: 'F', overFifty: true, hair: true, image: '../assets/images/cruella.png', guilty: false },
{ name: "Darth Vader", facialHair: false, gender: "M", overFifty: false, hair: false, image: '../assets/images/vader.jpg', guilty: false },
{ name: "wicked witch of the west", facialHair: false, gender: "F", overFifty: true, hair: true, image: '../assets/images/WickedWitchoftheWest.jpg', guilty: false }, { name: "Syndrome", facialHair: false, gender: "M", overFifty: false, hair: true, image: 'assets/images/syndrome.jpg', guilty: false }, { name: "Ursula", facialHair: false, gender: "F", overFifty: true, hair: true, image: '../assets/images/Ursula.jpg', guilty: false }, { name: "Joker", facialHair: false, gender: "M", overFifty: false, hair: true, image: '../assets/images/joker.jpg', guilty: false }, { name: "Thanos", facialHair: false, gender: "M", overFifty: true, hair: false, image: '../assets/images/thanos.png', guilty: false }, { name: "Jafar", facialHair: true, gender: "M", overFifty: false, hair: true, image: '../assets/images/jafar.jpg', guilty: false }, { name: "White Witch", facialHair: false, gender: "F", overFifty: true, hair: true, image: '../assets/images/whiteWitch.jpg', guilty: false }, { name: "Hades", facialHair: false, gender: "M", overFifty: true, hair: true, image: '../assets/images/hades.jpg', guilty: false }, { name: "Queen of Hearts", facialHair: false, gender: "F", overFifty: true, hair: true, image: '../assets/images/queenOfHearts.jpg', guilty: false }
]
//#endregion

let cats = [{ name: 'Mittens' }, { name: 'Snowball' }, { name: 'Mr. Snibbley' }]

function draw(arr) {
  debugger
  let template = ""
  for (let i = 0; i < arr.length; i++) {
    const character = arr[i]
    template += `
    <div class="col-12 col-sm-6 col-md-4 p-3">
      <div class="bg-white shadow rounded">
        <img class="img-fluid rounded-top" src="${character.image}">
        <div class="p-2 text-center">
          <h3>${character.name} | ${character.guilty ? 'GUILTY!!!' : ''}</h3>
        </div>
      </div>
    </div>
    `
  }
  document.getElementById('cards').innerHTML = template
}

function newGame(arr) {
  // for (let i = 0; i < arr.length; i++) {
  //   const character = arr[i]
  //   character.guilty = false
  // }
  // NOTE reset all
  arr.forEach(character => character.guilty = false)
  // NOTE pick random character from array
  // Math.random returns a number between 0-1 
  const randIndex = Math.floor(Math.random() * arr.length)
  arr[randIndex].guilty = true
}



newGame(villians)
draw(villians)


