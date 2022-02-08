//#region TODO pre made list
let villians = [{ name: "Lord Voldemort", facialHair: false, gender: "M", overFifty: true, hair: false, image: '../assets/images/Voldemort.jpg', guilty: false }, { name: "Cruella Deville", facialHair: false, gender: 'F', overFifty: true, hair: true, image: '../assets/images/cruella.png', guilty: false },
{ name: "Darth Vader", facialHair: false, gender: "M", overFifty: false, hair: false, image: '../assets/images/vader.jpg', guilty: false },
{ name: "wicked witch of the west", facialHair: false, gender: "F", overFifty: true, hair: true, image: '../assets/images/WickedWitchoftheWest.jpg', guilty: false }, { name: "Syndrome", facialHair: false, gender: "M", overFifty: false, hair: true, image: 'assets/images/syndrome.jpg', guilty: false }, { name: "Ursula", facialHair: false, gender: "F", overFifty: true, hair: true, image: '../assets/images/Ursula.jpg', guilty: false }, { name: "Joker", facialHair: false, gender: "M", overFifty: false, hair: true, image: '../assets/images/joker.jpg', guilty: false }, { name: "Thanos", facialHair: false, gender: "M", overFifty: true, hair: false, image: '../assets/images/thanos.png', guilty: false }, { name: "Jafar", facialHair: true, gender: "M", overFifty: false, hair: true, image: '../assets/images/jafar.jpg', guilty: false }, { name: "White Witch", facialHair: false, gender: "F", overFifty: true, hair: true, image: '../assets/images/whiteWitch.jpg', guilty: false }, { name: "Hades", facialHair: false, gender: "M", overFifty: true, hair: true, image: '../assets/images/hades.jpg', guilty: false }, { name: "Queen of Hearts", facialHair: false, gender: "F", overFifty: true, hair: true, image: '../assets/images/queenOfHearts.jpg', guilty: false }
]
//#endregion

let current = []

function draw() {
  let template = ""
  for (let i = 0; i < current.length; i++) {
    const character = current[i]
    template += /* html*/`
    <div class="col-12 col-sm-6 col-md-4 p-3">
      <div class="bg-white shadow rounded" onclick="guess('${character.name}')">
        <img class="img-fluid rounded-top character-image" src="${character.image}">
        <div class="p-2 text-center">
          <h3>${character.name} </h3>
        </div>
      </div>
    </div>
    `
  }
  document.getElementById('cards').innerHTML = template
}

function newGame() {
  // NOTE reset all
  // for (let i = 0; i < arr.length; i++) {
  //   const character = arr[i]
  //   character.guilty = false
  // }
  villians.forEach(character => character.guilty = false)
  // NOTE pick random character from array
  // Math.random returns a number between 0-1 
  const randIndex = Math.floor(Math.random() * villians.length)
  villians[randIndex].guilty = true
  current = villians
  draw()
}


function filterFacialHair() {
  // let facialHairedVillans = []
  // for (let i = 0; i < villians.length; i++) {
  //   const villian = villians[i]
  //   if (villian.facialHair) {
  //     facialHairedVillans.push(villian)
  //   }
  // }
  current = current.filter(villian => villian.facialHair)
  draw()
}

function filter(filteredProperty) { // 'gender'
  // find the guilty character
  // let guiltyParty = {}
  // for (let i = 0; i < villians.length; i++) {
  //   const villian = villians[i]
  //   if (villian.guilty) {
  //     guiltyParty = villian
  //     break
  //   }
  // }
  let guiltyParty = villians.find(villian => villian.guilty) // { name: 'jafar', gender: 'M', ...... }

  // remove all characters who do not have the same value for that property
  current = current.filter(villian => villian[filteredProperty] === guiltyParty[filteredProperty])
  draw()
}


function guess(name) {
  let guiltyParty = villians.find(villian => villian.guilty)
  if (guiltyParty.name == name) {
    alert('YOU WIN!')
  }
  else {
    alert('WRONG!!!! YOU STINK')
  }
}




newGame()




