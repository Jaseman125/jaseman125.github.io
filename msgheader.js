// ---------------------------------------------
// MSGHEADER MODULE — CLEAN, SELF-CONTAINED JS
// ---------------------------------------------

// Rotating message words
const words = [
  { letters:["j","4","$","3","m","4","n"], color:"#0000AA" },
  { letters:["j","a","s","e","m","a","n"], color:"#0000AA" },
  { letters:["J","A","S","E","M","A","N"], color:"#0000AA" },
  { letters:["☻","H","a","p","p","y","☻"], color:"#008800" },
  { letters:["N","e","w","Y","e","a","r"], color:"#008800" },
  { letters:["W","E","L","C","O","M","E"], color:"#000000" },
  { letters:["★","✦","♥","✿","☃","❄","☮"], color:"#000000" },
  { letters:["O","n"," ","T","h","i","s"], color:"#0000AA" },
  { letters:["W","e","b","s","i","t","e"], color:"#0000AA" },
  { letters:["U"," ","W","i","l","l"," "], color:"#0000AA" },
  { letters:["F","i","n","d",".",".","."], color:"#0000AA" },
  { letters:["M","U","S","I","C"," "," "], color:"#AA0000" },
  { letters:["L","E","G","O"," "," "," "], color:"#FF8800" },
  { letters:["M","O","V","I","E","S"," "], color:"#000088" },
  { letters:["P","H","O","T","O","S"," "], color:"#008800" },
  { letters:["P","I","C","S"," ","&"," "], color:"#008800" },
  { letters:["S","O","F","T","W","R","E"], color:"#008800" },
  { letters:["B","e","l","o","w"," ","U"], color:"#0000AA" },
  { letters:["C","a","n"," ","S","e","e"], color:"#0000AA" },
  { letters:["M","y"," ","Y","T"," "," "], color:"#0000AA" },
  { letters:["P","o","d","c","a","s","t"], color:"#0000AA" },
  { letters:["P","l","a","y","l","s","t"], color:"#0000AA" },
  { letters:["E","X","P","L","O","R","E"], color:"#00AA00" },
  { letters:["J","A","S","E","W","L","D"], color:"#00AA00" },
  { letters:["U","s","e"," ","T","h","e"], color:"#00AA00" },
  { letters:["L","f","t","R","g","h","t"], color:"#00AA00" },
  { letters:["A","r","r","o","w","s"," "], color:"#00AA00" },
  { letters:["T","o"," ","T","u","r","n"], color:"#00AA00" },
  { letters:["T","h","e","R","o","o","m"], color:"#00AA00" },
  { letters:["C","l","o","k","w","y","z"], color:"#00AA00" },
  { letters:["&","U","p","D","o","w","n"], color:"#00AA00" },
  { letters:["2","G","o","T","h","r","u"], color:"#00AA00" },
  { letters:["D","o","o","r","s"," "," "], color:"#00AA00" },
  { letters:["T","h","e","r","e","s"," "], color:"#00AA00" },
  { letters:["W","e","b","l","n","k","s"], color:"#00AA00" },
  { letters:["&","P","i","c","s"," "," "], color:"#00AA00" },
  { letters:["I","n"," ","E","a","c","h"], color:"#00AA00" },
  { letters:["R","o","o","m"," "," "," "], color:"#00AA00" },
  { letters:["Y","o","u"," ","C","a","n"], color:"#000000" },
  { letters:["C","o","n","t","a","c","t"], color:"#000000" },
  { letters:["M","e"," ","O","n"," "," "], color:"#000000" },
  { letters:["W","h","a","t","s","a","p"], color:"#000000" },
  { letters:[" ","0","7","7","1","8"," "], color:"#000000" },
  { letters:["1","1","5"," ","4","5","3"], color:"#000000" },
  { letters:[" ","O","r"," ","o","n"," "], color:"#000000" },
  { letters:["j","a","s","e","m","a","n"], color:"#000000" },
  { letters:["1","2","5","@"," "," "," "], color:"#000000" },
  { letters:["g","o","o","g","l","e"," "], color:"#000000" },
  { letters:["m","a","i","l","c","o","m"], color:"#000000" },
  { letters:["J","A","S","E","M","A","N"], color:"#0000AA" }
];

// Album list
const albums = [
  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/abba-gold.png",
    playlist: "https://www.youtube.com/watch?v=2ZUX3j6WLiQ&list=PLGnmo4N_SmKJm0fF29tAvLwRKEZlclxqf" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/bryan-adams-so-far-so-good.png",
    playlist: "https://www.youtube.com/watch?v=1Ep9c1-Ef5I&list=PLGnmo4N_SmKIAIkA9RjiQRvEOl7YSId7d" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/a-ha-hunting-high-and-low.png",
    playlist: "https://www.youtube.com/watch?v=HzdD8kbDzZA&list=PLGnmo4N_SmKIswUyMbz1UnUtnbETMhGvO" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/a-ha-scoundrel-days.png",
    playlist: "https://www.youtube.com/watch?v=wY-O9rLSNyc&list=PLGnmo4N_SmKITXhqT50GG6FyvWzWAoP0G" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/a-ha-stay-on-these-roads.png",
    playlist: "https://www.youtube.com/watch?v=ozc5-TcZbvI&list=PLGnmo4N_SmKI9ne8lkUAQWhsGZzo-qesk" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/a-ha-east-of-the-sun-west-of-the-moon.png",
    playlist: "https://www.youtube.com/watch?v=4IMppxFcnpc&list=PLGnmo4N_SmKKQh5w8tuMNlu_2hwIPMylD" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/all-about-eve-all-about-eve.png",
    playlist: "https://www.youtube.com/watch?v=KL6RL-hTRac&list=PLGnmo4N_SmKLkMGw2-sPsvOh7onKWsykD" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/tori-amos-little-earthquakes.png",
    playlist: "https://www.youtube.com/watch?v=dGBwsC0yJ8o&list=PLGnmo4N_SmKLrqTYtwS91KIH-qeE8t40g" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/the-b-52s-cosmic-thing.png",
    playlist: "https://en.wikipedia.org/wiki/Cosmic_Thing" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/bangles-different-light.png",
    playlist: "https://en.wikipedia.org/wiki/Different_Light" },


  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/bangles-everything.png",
    playlist: "https://en.wikipedia.org/wiki/Everything_(The_Bangles_album)" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/the-beat-bpm-the-very-best-of-the-beat.png",
    playlist: "https://en.wikipedia.org/wiki/B.P.M.:_The_Very_Best_of_the_Beat" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/pat-benatar-greatest-hits.png",
    playlist: "https://en.wikipedia.org/wiki/Greatest_Hits_(Pat_Benatar_album)" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/bon-jovi-slippery-when-wet.png",
    playlist: "https://en.wikipedia.org/wiki/Slippery_When_Wet" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/bon-jovi-new-jersey.png",
    playlist: "https://en.wikipedia.org/wiki/New_Jersey_(album)" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/kate-bush-the-kick-inside.png",
    playlist: "https://en.wikipedia.org/wiki/The_Kick_Inside" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/kate-bush-hounds-of-love.png",
    playlist: "https://en.wikipedia.org/wiki/Hounds_of_Love" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/belinda-carlisle-heaven-on-earth.png",
    playlist: "https://en.wikipedia.org/wiki/Heaven_on_Earth_(Belinda_Carlisle_album)" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/belinda-carlisle-runaway-horses.png",
    playlist: "https://en.wikipedia.org/wiki/Runaway_Horses_(album)" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/cher-cher.png",
    playlist: "https://en.wikipedia.org/wiki/Cher_(1987_album)" },


  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/cher-heart-of-stone.png",
    playlist: "https://en.wikipedia.org/wiki/Heart_of_Stone_(Cher_album)" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/lloyd-cole-the-collection.png",
    playlist: "https://en.wikipedia.org/wiki/Lloyd_Cole" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/phil-collins-hits.png",
    playlist: "https://en.wikipedia.org/wiki/Hits_(Phil_Collins_album)" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/communards-the-collection.png",
    playlist: "https://en.wikipedia.org/wiki/The_Communards" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/the-corrs-talk-on-corners-special-edition.png",
    playlist: "https://en.wikipedia.org/wiki/Talk_on_Corners" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/the-corrs-in-blue.png",
    playlist: "https://en.wikipedia.org/wiki/In_Blue" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/beverley-craven-beverley-craven.png",
    playlist: "https://en.wikipedia.org/wiki/Beverley_Craven_(album)" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/the-cure-mixed-up.png",
    playlist: "https://en.wikipedia.org/wiki/Mixed_Up_(The_Cure_album)" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/the-cure-wish.png",
    playlist: "https://en.wikipedia.org/wiki/Wish_(The_Cure_album)" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/the-darkness-permission-to-land.png",
    playlist: "https://en.wikipedia.org/wiki/Permission_to_Land" },


  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/def-leppard-hysteria.png",
    playlist: "https://en.wikipedia.org/wiki/Hysteria_(Def_Leppard_album)" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/dido-no-angel.png",
    playlist: "https://en.wikipedia.org/wiki/No_Angel" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/drab-majesty-careless.png",
    playlist: "https://en.wikipedia.org/wiki/Drab_Majesty" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/drab-majesty-the-demonstration.png",
    playlist: "https://en.wikipedia.org/wiki/Drab_Majesty" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/drab-majesty-modern-mirror.png",
    playlist: "https://en.wikipedia.org/wiki/Modern_Mirror" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/duran-duran-greatest.png",
    playlist: "https://en.wikipedia.org/wiki/Greatest_(Duran_Duran_album)" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/electric-six-fire.png",
    playlist: "https://en.wikipedia.org/wiki/Fire_(Electric_Six_album)" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/electric-six-senor-smoke.png",
    playlist: "https://en.wikipedia.org/wiki/Se%C3%B1or_Smoke" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/erasure-wonderland.png",
    playlist: "https://en.wikipedia.org/wiki/Wonderland_(Erasure_album)" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/erasure-the-circus.png",
    playlist: "https://en.wikipedia.org/wiki/The_Circus_(Erasure_album)" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/erasure-wild!.png",
    playlist: "https://en.wikipedia.org/wiki/Wild!" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/melissa-etheridge-melissa-etheridge.png",
    playlist: "https://en.wikipedia.org/wiki/Melissa_Etheridge_(album)" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/eurythmics-greatest-hits.png",
    playlist: "https://en.wikipedia.org/wiki/Greatest_Hits_(Eurythmics_album)" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/evanescence-fallen.png",
    playlist: "https://en.wikipedia.org/wiki/Fallen_(Evanescence_album)" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/falco-falco3.png",
    playlist: "https://en.wikipedia.org/wiki/Falco_3" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/jaseman-turbo-dreams.png",
    playlist: "https://www.youtube.com/watch?v=79zINoERzM0&list=PLGnmo4N_SmKK6jYbqESBcCFsvYF-sHcta" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/jessie-fry-obsidian.png",
    playlist: "https://www.youtube.com/watch?v=7yVa0tCsYqA&list=RD7yVa0tCsYqA&start_radio=1" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/genesis-invisible-touch.png",
    playlist: "https://en.wikipedia.org/wiki/Invisible_Touch" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/go-west-go-west.png",
    playlist: "https://en.wikipedia.org/wiki/Go_West_(Go_West_album)" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/jan-hammer-escape-from-television.png",
    playlist: "https://en.wikipedia.org/wiki/Escape_from_Television" },


  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/heart-heart.png",
    playlist: "https://en.wikipedia.org/wiki/Heart_(Heart_album)" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/buddy-holly-memorial-collection.png",
    playlist: "https://en.wikipedia.org/wiki/Memorial_Collection" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/bruce-hornsby-and-the-range-the-way-it-is.png",
    playlist: "https://en.wikipedia.org/wiki/The_Way_It_Is_(Bruce_Hornsby_album)" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/bruce-hornsby-and-the-range-scenes-from-the-southside.png",
    playlist: "https://en.wikipedia.org/wiki/Scenes_from_the_Southside" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/hothouse-flowers-the-platinum-collection.png",
    playlist: "https://en.wikipedia.org/wiki/Hothouse_Flowers" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/chris-isaak-wicked-game.png",
    playlist: "https://en.wikipedia.org/wiki/Wicked_Game_(Chris_Isaak_album)" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/billy-joel-an-innocent-man.png",
    playlist: "https://en.wikipedia.org/wiki/An_Innocent_Man" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/keane-hopes-and-fears.png",
    playlist: "https://en.wikipedia.org/wiki/Hopes_and_Fears" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/avril-lavigne-let-go.png",
    playlist: "https://en.wikipedia.org/wiki/Let_Go_(Avril_Lavigne_album)" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/cyndi-lauper-shes-so-unusual.png",
    playlist: "https://en.wikipedia.org/wiki/She%27s_So_Unusual" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/cyndi-lauper-true-colors.png",
    playlist: "https://en.wikipedia.org/wiki/True_Colors_(Cyndi_Lauper_album)" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/level-42-level-best.png",
    playlist: "https://en.wikipedia.org/wiki/Level_Best" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/huey-lewis-and-the-news-fore!.png",
    playlist: "https://en.wikipedia.org/wiki/Fore!" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/madonna-like-a-virgin.png",
    playlist: "https://en.wikipedia.org/wiki/Like_a_Virgin_(album)" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/madonna-true-blue.png",
    playlist: "https://en.wikipedia.org/wiki/True_Blue_(album)" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/madonna-like-a-prayer.png",
    playlist: "https://en.wikipedia.org/wiki/Like_a_Prayer_(album)" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/marillion-misplaced-childhood.png",
    playlist: "https://en.wikipedia.org/wiki/Misplaced_Childhood" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/richard-marx-greatest-hits.png",
    playlist: "https://en.wikipedia.org/wiki/Greatest_Hits_(1997_Richard_Marx_album)" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/pet-shop-boys-please.png",
    playlist: "https://en.wikipedia.org/wiki/Please_(Pet_Shop_Boys_album)" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/pet-shop-boys-actually.png",
    playlist: "https://en.wikipedia.org/wiki/Actually" },


  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/primitives-lovely.png",
    playlist: "https://en.wikipedia.org/wiki/Lovely_(The_Primitives_album)" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/propaganda-a-secret-wish.png",
    playlist: "https://en.wikipedia.org/wiki/A_Secret_Wish" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/propaganda-wishful-thinking.png",
    playlist: "https://en.wikipedia.org/wiki/Wishful_Thinking_(Propaganda_album)" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/chris-rea-new-light-through-old-windows.png",
    playlist: "https://en.wikipedia.org/wiki/New_Light_Through_Old_Windows" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/simple-minds-live-in-the-city-of-light.png",
    playlist: "https://en.wikipedia.org/wiki/Live_in_the_City_of_Light" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/simple-minds-glittering-prize.png",
    playlist: "https://en.wikipedia.org/wiki/Glittering_Prize_81/92" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/skid-row-slave-to-the-grind.png",
    playlist: "https://en.wikipedia.org/wiki/Slave_to_the_Grind" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/the-smiths-best.png",
    playlist: "https://en.wikipedia.org/wiki/Best..._I" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/spandau-ballet-the-best-of.png",
    playlist: "https://en.wikipedia.org/wiki/The_Best_of_Spandau_Ballet" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/spandau-ballet-once-more.png",
    playlist: "https://en.wikipedia.org/wiki/Once_More_(Spandau_Ballet_album)" },


  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/tears-for-fears-tears-roll-down-greatest-hits-82-92.png",
    playlist: "https://en.wikipedia.org/wiki/Tears_Roll_Down_(Greatest_Hits_82%E2%80%9392)" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/10,000-maniacs-mtv-unplugged.png",
    playlist: "https://en.wikipedia.org/wiki/MTV_Unplugged_(10,000_Maniacs_album)" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/therapy-troublegum.png",
    playlist: "https://en.wikipedia.org/wiki/Troublegum" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/tanita-tikaram-ancient-heart.png",
    playlist: "https://en.wikipedia.org/wiki/Ancient_Heart" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/tpau-bridge-of-spies.png",
    playlist: "https://en.wikipedia.org/wiki/Bridge_of_Spies_(album)" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/tpau-rage.png",
    playlist: "https://en.wikipedia.org/wiki/Rage_(T%27Pau_album)" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/u2-under-a-bloodred-sky.png",
    playlist: "https://en.wikipedia.org/wiki/Under_a_Blood_Red_Sky" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/u2-the-unforgettable-fire.png",
    playlist: "https://en.wikipedia.org/wiki/The_Unforgettable_Fire" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/van-halen-1984.png",
    playlist: "https://en.wikipedia.org/wiki/1984_(Van_Halen_album)" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/van-halen-5150.png",
    playlist: "https://en.wikipedia.org/wiki/5150_(album)" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/van-halen-ou812.png",
    playlist: "https://en.wikipedia.org/wiki/OU812" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/suzanne-vega-suzanne-vega.png",
    playlist: "https://en.wikipedia.org/wiki/Suzanne_Vega_(album)" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/suzanne-vega-solitude-standing.png",
    playlist: "https://en.wikipedia.org/wiki/Solitude_Standing" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/westworld-where-the-action-is.png",
    playlist: "https://en.wikipedia.org/wiki/Westworld_(British_band)" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/jane-wiedlin-jane-wiedlin.png",
    playlist: "https://en.wikipedia.org/wiki/Jane_Wiedlin_(album)" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/jane-wiedlin-fur.png",
    playlist: "https://en.wikipedia.org/wiki/Fur_(Jane_Wiedlin_album)" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/jane-wiedlin-tangled.png",
    playlist: "https://en.wikipedia.org/wiki/Tangled_(Jane_Wiedlin_album)" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/kim-wilde-close.png",
    playlist: "https://en.wikipedia.org/wiki/Close_(Kim_Wilde_album)" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/kim-wilde-here-come-the-aliens.png",
    playlist: "https://en.wikipedia.org/wiki/Here_Come_the_Aliens" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/steve-winwood-chronicles.png",
    playlist: "https://en.wikipedia.org/wiki/Chronicles_(Steve_Winwood_album)" },





  { cover: "https://jaseman125.github.io/img/bricklink.png",
    playlist: "https://www.bricklink.com/aboutMe.asp?u=jaseman125" },

  { cover: "https://jaseman125.github.io/img/ebay.png",
    playlist: "https://www.ebay.co.uk/usr/jaseman125" },

  { cover: "https://jaseman125.github.io/img/facebook.png",
    playlist: "https://www.facebook.com/jason.a.davies" },

  { cover: "https://jaseman125.github.io/img/home.png",
    playlist: "https://jaseman.com/" },

  { cover: "https://jaseman125.github.io/img/podcast.png",
    playlist: "https://www.youtube.com/watch?v=0UVUW11FENs&list=PLGnmo4N_SmKKj7XS6RQDUjXMzCNW08jW-" },

  { cover: "https://jaseman125.github.io/img/smule.png",
    playlist: "https://www.smule.com/jaseman125" },

  { cover: "https://jaseman125.github.io/img/youtube.png",
    playlist: "https://www.youtube.com/@jaseman" }


]; // end of albums array

// ---------------------------------------------
// ELEMENT REFERENCES
// ---------------------------------------------
const spans = document.querySelectorAll(".header-box span");
const boxes = document.querySelectorAll(".header-box");
const imgs  = document.querySelectorAll(".header-box img");

let currentIndex = 0;
let isAlbumSelectorMode = false;
let messageInterval = null;

// ---------------------------------------------
// APPLY WORD
// ---------------------------------------------
function applyWord(index) {
  if (isAlbumSelectorMode) return;

  const entry = words[index];
  const letters = entry.letters;
  const color = entry.color;

  spans.forEach((span, i) => {
    span.style.opacity = 0;

    setTimeout(() => {
      if (!isAlbumSelectorMode) {
        span.textContent = letters[i] || "";
        span.style.opacity = 1;
      }
    }, 1000);
  });

  boxes.forEach(box => {
    box.style.background = color;
  });
}

// ---------------------------------------------
// MESSAGE MODE
// ---------------------------------------------
function startMessageMode() {
  applyWord(0);

  messageInterval = setInterval(() => {
    currentIndex = (currentIndex + 1) % words.length;
    applyWord(currentIndex);
  }, 2000);
}

// ---------------------------------------------
// ALBUM SELECTOR
// ---------------------------------------------
function pickRandomAlbums(count) {
  const indices = albums.map((_, i) => i);

  for (let i = indices.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [indices[i], indices[j]] = [indices[j], indices[i]];
  }

  return indices.slice(0, count).map(i => albums[i]);
}

function enterAlbumSelectorMode() {
  if (isAlbumSelectorMode) return;
  isAlbumSelectorMode = true;

  if (messageInterval !== null) {
    clearInterval(messageInterval);
    messageInterval = null;
  }

  const selectedAlbums = pickRandomAlbums(7);

  spans.forEach(s => {
    s.textContent = "";
    s.style.opacity = "0";
  });

  boxes.forEach((box, i) => {
    const img = box.querySelector("img");
    const album = selectedAlbums[i];

    if (img && album) {
      img.src = album.cover;
      img.alt = album.cover;
      img.style.display = "block";
    }

    box.style.background = "#000000";
    box.dataset.playlist = album && album.playlist ? album.playlist : "";
  });

  // Refresh albums every 5 seconds
  setInterval(() => {
    const nextAlbums = pickRandomAlbums(7);

    boxes.forEach((box, i) => {
      const img = box.querySelector("img");
      const album = nextAlbums[i];

      if (img && album) {
        img.src = album.cover;
        img.alt = album.cover;
      }

      box.dataset.playlist = album && album.playlist ? album.playlist : "";
    });
  }, 5000);
}

// ---------------------------------------------
// CLICK HANDLER
// ---------------------------------------------
boxes.forEach(box => {
  box.addEventListener("click", () => {
    if (!isAlbumSelectorMode) {
      enterAlbumSelectorMode();
    } else {
      const url = box.dataset.playlist;
      if (url) window.open(url, "_blank");
    }
  });
});

// ---------------------------------------------
// INITIALIZE
// ---------------------------------------------
startMessageMode();
