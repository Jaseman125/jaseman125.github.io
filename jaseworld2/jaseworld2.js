const rooms = {
  mainfoyer: {
    north: "mainfoyer_north.png",
    east: "mainfoyer_east.png",
    south: "mainfoyer_south.png",
    west: "mainfoyer_west.png",
    doorways: { north:true, east:true, south:true, west:true },
    nextRooms: { north:"musicroom1", east:"legoroom1", south:"movieroom1", west:"photoroom1" },
    items: [
      "https://jaseman125.github.io/photo-album/100-photos/090-2020-uk-wales-gresford-22-may-jaseman-com-hat.jpg",
      "https://jaseman125.github.io/photo-album/house.jpg",
      "https://jaseman125.github.io/photo-album/100-photos/100-2025-uk-england-chester-hickorys-smokehouse-28-jul-martins-birthday-meal-enid-martin-irina-jaseman.jpg",
      "https://jaseman125.github.io/photo-album/20190908_173050-audi-tt-and-a4-rear-chocks-away-car-park-hawarden-airport.jpg"
    ],
    links: [
      { href:"https://jaseman125.github.io/phone-menu.html", label:"PHONE MENU" },
      { href:"https://www.youtube.com/@jaseman", label:"My YouTube" },
      { href:"https://calendar.google.com/calendar/u/0?cid=YWM2MWQ1NzNmMmJjYmIxZmQzNmRjZGY4MmRlNjNmZTliNDg3NDM0N2Y5NWEzMTQ5ZTgyZWNiZmY5ZWQ2ZTc0ZUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t", label:"Calendar" },
      { href:"https://github.com/Jaseman125?tab=repositories", label:"Github" }
    ]
  },

  musicroom1: {
    north: "musicroom1_north.png",
    east: "musicroom1_east.png",
    south: "musicroom1_south.png",
    west: "musicroom1_west.png",
    doorways: { south:true },
    nextRooms: { south:"mainfoyer" },
    items: [],
    links: [
      { href:"https://jaseman125.github.io/music/music.html", label:"MUSIC" },
      { href:"https://www.youtube.com/embed/videoseries?list=PLGnmo4N_SmKKjhsDQGfukgHR8jQfqIuXl", label:"Music Playlist" },
      { href:"https://www.smule.com/jaseman125", label:"Smule" }
    ]
  },

  legoroom1: {
    north: "legoroom1_north.png",
    east: "legoroom1_east.png",
    south: "legoroom1_south.png",
    west: "legoroom1_west.png",
    doorways: { west:true },
    nextRooms: { west:"mainfoyer" },
    items: [],
    links: [
      { href:"https://jaseman125.github.io/lego/lego.html", label:"LEGO" },
      { href:"https://www.bricklink.com/aboutMe.asp?u=jaseman125", label:"Bricklink" }
    ]
  },

  movieroom1: {
    north: "movieroom1_north.png",
    east: "movieroom1_east.png",
    south: "movieroom1_south.png",
    west: "movieroom1_west.png",
    doorways: { north:true },
    nextRooms: { north:"mainfoyer" },
    items: [],
    links: [
      { href:"https://jaseman125.github.io/movies/movies.html", label:"MOVIES" },
      { href:"http://youtube.com/post/UgkxTbvisBlCliKZm5smGklnrnTvtOY4qGsR?si=aaOmG_cw2_wMLpKd", label:"100 Movies" },
      { href:"https://www.youtube.com/watch?v=aKqWEi68gME&list=PLGnmo4N_SmKKdoqJGkQhpH0ngal5_bdvS", label:"Trailers" }
    ]
  },

  photoroom1: {
    north: "photoroom1_north.png",
    east: "photoroom1_east.png",
    south: "photoroom1_south.png",
    west: "photoroom1_west.png",
    doorways: { north:true, east:true },
    nextRooms: { north:"frontgarden", east:"mainfoyer" },
    items: [
      "https://jaseman125.github.io/pictures/100pics/BMX01-2023-jaseburner-at-the-flash.jpg",
      "https://jaseman125.github.io/pictures/100pics/PLACES05-swan-lake-gresford.jpg",
      "https://jaseman125.github.io/pictures/100pics/PLACES09-gresford-quarry-brow.jpg"
    ],
    links: [
      { href:"https://jaseman125.github.io/photo-album/100-photos/index-phone.html", label:"PHOTOS" },
      { href:"https://jaseman125.github.io/pictures/100pics/index-phone.html", label:"PICS" },
      { href:"https://youtu.be/79zINoERzM0?si=LuDkJipQ4FvAcRAe", label:"Photos Slideshow" },
      { href:"https://jaseman125.github.io/software/software.html", label:"SOFTWARE" }
    ]
  },

  frontgarden: {
    north: "frontgarden_north.jpg",
    east: "frontgarden_east.jpg",
    south: "frontgarden_south.jpg",
    west: "frontgarden_west.jpg",
    doorways: { south:true },
    nextRooms: { south:"photoroom1" },
    items: [],
    links: []
  }
};

let currentRoom = "mainfoyer";
const directions = ["north","east","south","west"];
let currentDirIndex = 0;

const roomImage    = document.getElementById("roomImage");
const leftArrow    = document.getElementById("left");
const rightArrow   = document.getElementById("right");
const upArrow      = document.getElementById("up");
const downArrow    = document.getElementById("down");
const inventoryDiv = document.getElementById("inventory");
const overlaysDiv  = document.getElementById("overlays");

function updateView() {
  const dir = directions[currentDirIndex];
  roomImage.src = rooms[currentRoom][dir];

  if (rooms[currentRoom].doorways[dir]) upArrow.classList.remove("inactive");
  else upArrow.classList.add("inactive");

  const oppositeDir = directions[(currentDirIndex + 2) % 4];
  if (rooms[currentRoom].doorways[oppositeDir]) downArrow.classList.remove("inactive");
  else downArrow.classList.add("inactive");

  updateInventory();
  updateOverlays();
}

function updateInventory() {
  inventoryDiv.innerHTML = "";
  const items = rooms[currentRoom].items || [];
  items.forEach(src => {
    const link = document.createElement("a");
    link.href = src;
    link.target = "_blank";
    const img = document.createElement("img");
    img.src = src;
    img.alt = "Inventory item";
    link.appendChild(img);
    inventoryDiv.appendChild(link);
  });
}

function updateOverlays() {
  overlaysDiv.innerHTML = "";
  const links = rooms[currentRoom].links || [];
  links.forEach(link => {
    const a = document.createElement("a");
    a.href = link.href;
    a.target = "_blank";
    a.rel = "noopener";
    a.textContent = link.label;
    overlaysDiv.appendChild(a);
  });
}

function rotateLeft() {
  currentDirIndex = (currentDirIndex + 3) % 4;
  updateView();
}

function rotateRight() {
  currentDirIndex = (currentDirIndex + 1) % 4;
  updateView();
}

function moveForward() {
  const dirIndex = currentDirIndex;
  const dir = directions[dirIndex];
  if (!rooms[currentRoom].doorways[dir]) return;
  const next = rooms[currentRoom].nextRooms[dir];
  if (next) {
    currentRoom = next;
    currentDirIndex = dirIndex;
    updateView();
  }
}

function moveBackward() {
  const oppositeIndex = (currentDirIndex + 2) % 4;
  const oppositeDir = directions[oppositeIndex];
  if (!rooms[currentRoom].doorways[oppositeDir]) return;
  const next = rooms[currentRoom].nextRooms[oppositeDir];
  if (next) {
    currentRoom = next;
    currentDirIndex = currentDirIndex;
    updateView();
  }
}

leftArrow.addEventListener("click", rotateLeft);
rightArrow.addEventListener("click", rotateRight);
upArrow.addEventListener("click", moveForward);
downArrow.addEventListener("click", moveBackward);

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft")  rotateLeft();
  else if (e.key === "ArrowRight") rotateRight();
  else if (e.key === "ArrowUp")    moveForward();
  else if (e.key === "ArrowDown")  moveBackward();
});

updateView();