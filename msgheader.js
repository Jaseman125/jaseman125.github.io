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
    playlist: "https://www.youtube.com/watch?v=axyFMQUFASA&list=PLGnmo4N_SmKLtI8QKfeRkij7zS6wkcda6" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/bangles-different-light.png",
    playlist: "https://www.youtube.com/watch?v=rHQrSx9LRN8&list=PLGnmo4N_SmKI9V1gJrMrbIv7uTHxoi7It" },


  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/bangles-everything.png",
    playlist: "https://www.youtube.com/watch?v=xTEp5lV5ytc&list=PLGnmo4N_SmKKp0zdzVwHFB9XHpLSMwPy6" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/the-beat-bpm-the-very-best-of-the-beat.png",
    playlist: "https://www.youtube.com/watch?v=Cw5awfyRfUE&list=PLGnmo4N_SmKKTFYFpLxB8vxmu_QH7axCl" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/pat-benatar-greatest-hits.png",
    playlist: "https://www.youtube.com/watch?v=fd_7jIC9180&list=PLGnmo4N_SmKL-XYi6OM2CWNAFf7K7tGoq" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/bon-jovi-slippery-when-wet.png",
    playlist: "https://www.youtube.com/watch?v=M15gawGu6VE&list=PLGnmo4N_SmKJ9qLdeU11NOLCkSqlKByJa" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/bon-jovi-new-jersey.png",
    playlist: "https://www.youtube.com/watch?v=Tf-3xV3bCv0&list=PLGnmo4N_SmKIfAx-7WMG1t_aSVs7clHgh" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/kate-bush-the-kick-inside.png",
    playlist: "https://www.youtube.com/watch?v=UPxi6EmWp-o&list=PLGnmo4N_SmKLVb0DygKmOU-wCQLU8zmYa" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/kate-bush-hounds-of-love.png",
    playlist: "https://www.youtube.com/watch?v=HYwNM1t9ltI&list=PLGnmo4N_SmKK0g8uLr37-QbsocQkSi7mO" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/belinda-carlisle-heaven-on-earth.png",
    playlist: "https://www.youtube.com/watch?v=vFPajU-d-Ek&list=PLGnmo4N_SmKJhKZQGeNB9Iflohrdu4__7" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/belinda-carlisle-runaway-horses.png",
    playlist: "https://www.youtube.com/watch?v=AWUBrKBA3_w&list=PLGnmo4N_SmKLoKIL9scrKB0MF3paC1K_p" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/cher-cher.png",
    playlist: "https://www.youtube.com/watch?v=48L1BTVpxjA&list=PLGnmo4N_SmKL3GFKMSqQKXvNJY45d_Vrj" },


  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/cher-heart-of-stone.png",
    playlist: "https://www.youtube.com/watch?v=BUbjmLrp9dc&list=PLGnmo4N_SmKLmyPcBGPyDcfSORDUYH6Eh" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/lloyd-cole-the-collection.png",
    playlist: "https://www.youtube.com/watch?v=2HRSTe0iE6g&list=PLGnmo4N_SmKKPzN8wSTBEGiqVHqgxHLsI" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/phil-collins-hits.png",
    playlist: "https://www.youtube.com/watch?v=8xPAjMSkCGI&list=PLGnmo4N_SmKJLdg5LwQXhnikiVTSEAypQ" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/communards-the-collection.png",
    playlist: "https://www.youtube.com/watch?v=qq_oG1vD_O8&list=PLGnmo4N_SmKKB-RH5gK-cQsnYrnBf12Su" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/the-corrs-talk-on-corners-special-edition.png",
    playlist: "https://www.youtube.com/watch?v=4aTneAfopTs&list=PLGnmo4N_SmKKt5LNhrkr3a6C9JSPp3Om-" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/the-corrs-in-blue.png",
    playlist: "https://www.youtube.com/watch?v=z2Y_2mhFp5g&list=PLGnmo4N_SmKIigbcCMyeG776F9eVumBFv" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/beverley-craven-beverley-craven.png",
    playlist: "https://www.youtube.com/watch?v=tcYukoFt_VA&list=PLGnmo4N_SmKIscPl_fCHbJIHkaWQuvp2k" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/the-cure-mixed-up.png",
    playlist: "https://www.youtube.com/watch?v=OkEQ9iZbfj0&list=PLGnmo4N_SmKLtu90WeANNaL-BFiNt8I91" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/the-cure-wish.png",
    playlist: "https://www.youtube.com/watch?v=67ulFSNIdCU&list=PLGnmo4N_SmKKIsunvXsimMiNYzQRJz8SQ" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/the-darkness-permission-to-land.png",
    playlist: "https://www.youtube.com/watch?v=et_3LDM_teA&list=PLGnmo4N_SmKI6gNVrbu8GQf_gwXVb8QN7" },


  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/def-leppard-hysteria.png",
    playlist: "https://www.youtube.com/watch?v=7Q5Pksn4VA0&list=PLGnmo4N_SmKJ2P5SBC0V6EYmTwIR7lcXO" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/dido-no-angel.png",
    playlist: "https://www.youtube.com/watch?v=HHchQdWuIAs&list=PLGnmo4N_SmKJGNPJz_yD50Wj236f0f6tp" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/drab-majesty-careless.png",
    playlist: "https://www.youtube.com/watch?v=0Y3xg-1SQ7k&list=PLGnmo4N_SmKKwW96Z1Nzi-joF_cfhEoE-" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/drab-majesty-the-demonstration.png",
    playlist: "https://www.youtube.com/watch?v=WPvalVuP9FE&list=PLGnmo4N_SmKLHgilcOF9mUiotsu2YtDp2" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/drab-majesty-modern-mirror.png",
    playlist: "https://www.youtube.com/watch?v=mmOSv-PG0ow&list=PLGnmo4N_SmKKK3kf-MIqrG22f1FHn4OOE" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/duran-duran-greatest.png",
    playlist: "https://www.youtube.com/watch?v=E297U6jqQj0&list=PLGnmo4N_SmKLpfjbAFbivJPYDgzKGx4fe" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/electric-six-fire.png",
    playlist: "https://www.youtube.com/watch?v=BzabCVOBUJI&list=PLGnmo4N_SmKKLcTV6NTqiVvj16AHH_Qxq" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/electric-six-senor-smoke.png",
    playlist: "https://www.youtube.com/watch?v=vtH3DJ8Dyyg&list=PLGnmo4N_SmKJXwLw5h7cZTloT6-K09Ioq" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/erasure-wonderland.png",
    playlist: "https://www.youtube.com/watch?v=pkMJP0GTGBU&list=PLGnmo4N_SmKLBQPYIqDyqa3ofNZRc-D1Y" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/erasure-the-circus.png",
    playlist: "https://www.youtube.com/watch?v=wlIOP7Vfi3I&list=PLGnmo4N_SmKKVFhDj-3auNTkFG5pQdIN7" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/erasure-wild!.png",
    playlist: "https://www.youtube.com/watch?v=59YnyzWGzPs&list=PLGnmo4N_SmKKbRAM69HdSjIQUxSkzxojD" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/melissa-etheridge-melissa-etheridge.png",
    playlist: "https://www.youtube.com/watch?v=CvZwOA_62ew&list=PLGnmo4N_SmKJwK70l14jFQaRqRM_mszZb" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/eurythmics-greatest-hits.png",
    playlist: "https://www.youtube.com/watch?v=zD9thE3n2V0&list=PLGnmo4N_SmKIKonQQ8G8mS30gAmyTqZBs" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/evanescence-fallen.png",
    playlist: "https://www.youtube.com/watch?v=ysJ82L-1rEc&list=PLGnmo4N_SmKJMw64mghbSiSzYlJQow5SM" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/falco-falco3.png",
    playlist: "https://www.youtube.com/watch?v=OKxBk4V79Co&list=PLGnmo4N_SmKKnn94G88g4ko13pYY2nCmh" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/jaseman-turbo-dreams.png",
    playlist: "https://www.youtube.com/watch?v=79zINoERzM0&list=PLGnmo4N_SmKK6jYbqESBcCFsvYF-sHcta" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/jessie-fry-obsidian.png",
    playlist: "https://www.jiosaavn.com/album/obsidian/vsyhtrHy0N0_" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/genesis-invisible-touch.png",
    playlist: "https://www.youtube.com/watch?v=tMbiHCMYJtw&list=PLGnmo4N_SmKKU8D5KZZBTzadaVb8ut69Z" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/go-west-go-west.png",
    playlist: "https://www.youtube.com/watch?v=9OifIwh53gY&list=PLGnmo4N_SmKLXdaXe7FwvcI4kHwtwicjp" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/jan-hammer-escape-from-television.png",
    playlist: "https://www.youtube.com/watch?v=v9s0xO1_l6U&list=PLGnmo4N_SmKIaNppE6N663LckqExKdfgZ" },


  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/heart-heart.png",
    playlist: "https://www.youtube.com/watch?v=NdzSZdpEeyE&list=PLGnmo4N_SmKLCT6VGWgfl5egujIGh31vD" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/buddy-holly-memorial-collection.png",
    playlist: "https://www.youtube.com/watch?v=XAmnmKivHjA&list=PLGnmo4N_SmKLbMm27XGGFqjso_4QDdmQ1" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/bruce-hornsby-and-the-range-the-way-it-is.png",
    playlist: "https://www.youtube.com/watch?v=PHjq52hFSKo&list=PLGnmo4N_SmKJV8K3KWajNsyX0ySOMfAcH" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/bruce-hornsby-and-the-range-scenes-from-the-southside.png",
    playlist: "https://www.youtube.com/watch?v=KewbVGhvPlY&list=PLGnmo4N_SmKKSCvQRr3IljAcOVzI0tleO" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/hothouse-flowers-the-platinum-collection.png",
    playlist: "https://www.youtube.com/watch?v=PH5u2EEQpBY&list=PLGnmo4N_SmKJrVQfqiUVzjZOJavU9mnTJ" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/chris-isaak-wicked-game.png",
    playlist: "https://www.youtube.com/watch?v=CdMqOK4tnkc&list=PLGnmo4N_SmKJzCen2857nYe_DEo1_0q5L" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/billy-joel-an-innocent-man.png",
    playlist: "https://www.youtube.com/watch?v=tdGzzfQ52TQ&list=PLGnmo4N_SmKJE9pib5uncuRGBf8KwP30R" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/keane-hopes-and-fears.png",
    playlist: "https://www.youtube.com/watch?v=0LuignGmX_0&list=PLGnmo4N_SmKLohKx4ZaVbLpopu0SFzq41" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/avril-lavigne-let-go.png",
    playlist: "https://www.youtube.com/watch?v=qwlVaTCyfgc&list=PLGnmo4N_SmKKnGH4KnTgenYiKxKKVzpLB" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/cyndi-lauper-shes-so-unusual.png",
    playlist: "https://www.youtube.com/watch?v=pEPy2KOh4yY&list=PLGnmo4N_SmKLbVFEVk_Xsw3uyejQ2cZU3" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/cyndi-lauper-true-colors.png",
    playlist: "https://www.youtube.com/watch?v=_UtYGg3jEdM&list=PLGnmo4N_SmKIIZIJHpKltXkmqlts3itwS" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/level-42-level-best.png",
    playlist: "https://www.youtube.com/watch?v=ArrEfcgwWWc&list=PLGnmo4N_SmKKaoICA5SHim5nF2Bn9hCg3" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/huey-lewis-and-the-news-fore!.png",
    playlist: "https://www.youtube.com/watch?v=atiJkXBEJks&list=PLGnmo4N_SmKLBHQSY__4zoOJJ96uDcYW2" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/madonna-like-a-virgin.png",
    playlist: "https://www.youtube.com/watch?v=IlPCW6nLheM&list=PLGnmo4N_SmKLDkj118ZwKfHfUhV_xj46u" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/madonna-true-blue.png",
    playlist: "https://www.youtube.com/watch?v=BlGg-4XIwgg&list=PLGnmo4N_SmKKeDszR_ecxgOeSwMQs4nlK" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/madonna-like-a-prayer.png",
    playlist: "https://www.youtube.com/watch?v=ilottRbDnGY&list=PLGnmo4N_SmKLkidmOMj5pg2bbv-gShYgf" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/marillion-misplaced-childhood.png",
    playlist: "https://www.youtube.com/watch?v=M7SDuWgTXU4&list=PLGnmo4N_SmKLgYjI4uX_RF8rJRIa9Ovh0" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/richard-marx-greatest-hits.png",
    playlist: "https://www.youtube.com/watch?v=KowI8GbC3S4&list=PLGnmo4N_SmKIXCCGK6d2GbWJV22apQz3o" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/pet-shop-boys-please.png",
    playlist: "https://www.youtube.com/watch?v=1ht9xsdrcoM&list=PLGnmo4N_SmKLKRuFVHpvZrKEBC56bpDhk" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/pet-shop-boys-actually.png",
    playlist: "https://www.youtube.com/watch?v=prntbdZiJSg&list=PLGnmo4N_SmKJ9yslRM7gREdM1jxeTFlt3" },


  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/primitives-lovely.png",
    playlist: "https://www.youtube.com/watch?v=XmwrDtjhXkE&list=PLGnmo4N_SmKIyrtvWg7xf2DPS_tt55bsz" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/propaganda-a-secret-wish.png",
    playlist: "https://www.youtube.com/watch?v=Myy5qlZdBB0&list=PLGnmo4N_SmKKWKDyT8FOUJO3vP9NXnAZA" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/propaganda-wishful-thinking.png",
    playlist: "https://www.youtube.com/watch?v=N6U-xDyo0mA&list=PLGnmo4N_SmKJ3KPX0dqg2LUjiO49lr1oE" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/chris-rea-new-light-through-old-windows.png",
    playlist: "https://www.youtube.com/watch?v=I_X0NVV-tZY&list=PLGnmo4N_SmKKjScFDG6bS9V8Is7mfSo81" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/simple-minds-live-in-the-city-of-light.png",
    playlist: "https://www.youtube.com/watch?v=daRtv_JveZg&list=PLGnmo4N_SmKLvPSj8dxDB9w3_Qo3s--aB" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/simple-minds-glittering-prize.png",
    playlist: "https://www.youtube.com/watch?v=QxMh8W4VM98&list=PLGnmo4N_SmKJIvUCKoppVFIAHhgh61PFr" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/skid-row-slave-to-the-grind.png",
    playlist: "https://www.youtube.com/watch?v=LFksc3I9kr8&list=PLGnmo4N_SmKLQwPaD6YHUCBikWnse3IDT" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/the-smiths-best.png",
    playlist: "https://www.youtube.com/watch?v=jhNUhS1RW2Y&list=PLGnmo4N_SmKIXRM51c8ftX6rgBnGqTk20" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/spandau-ballet-the-best-of.png",
    playlist: "https://www.youtube.com/watch?v=YjlAHyuq-0o&list=PLGnmo4N_SmKLGFgcbi4NJtK6YS4nINfL6" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/spandau-ballet-once-more.png",
    playlist: "https://www.youtube.com/watch?v=YkujAeoM1R0&list=PLGnmo4N_SmKJEYvj_9bAe2AzO3PotKtL8" },


  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/tears-for-fears-tears-roll-down-greatest-hits-82-92.png",
    playlist: "https://www.youtube.com/watch?v=4vbXM98Pd4g&list=PLGnmo4N_SmKKzilI9VV40c63WLv1k7snm" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/10,000-maniacs-mtv-unplugged.png",
    playlist: "https://www.youtube.com/watch?v=CoGfCS9DJlk&list=PLGnmo4N_SmKKufMs83NzBNETVWmK131b_" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/therapy-troublegum.png",
    playlist: "https://www.youtube.com/watch?v=pqtFx938fbk&list=PLGnmo4N_SmKJ36o1IFk9-qYHVVYT2PAXv" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/tanita-tikaram-ancient-heart.png",
    playlist: "https://www.youtube.com/watch?v=r8MtSO06Xi8&list=PLGnmo4N_SmKK5bCDR8NROJ_5nvN5CDjoW" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/tpau-bridge-of-spies.png",
    playlist: "https://www.youtube.com/watch?v=nULSZY9gI3Y&list=PLGnmo4N_SmKIsW-BEW8nS1aOAaBExzTLf" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/tpau-rage.png",
    playlist: "https://www.youtube.com/watch?v=KIMRiPdjcP0&list=PLGnmo4N_SmKKJm22IyTQrfu0liQwq2zoU" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/u2-under-a-bloodred-sky.png",
    playlist: "https://www.youtube.com/watch?v=q9pEARgUGQ8&list=PLGnmo4N_SmKKwfIG91qob7c5EymFWbcK6" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/u2-the-unforgettable-fire.png",
    playlist: "https://www.youtube.com/watch?v=ot-5qt-T-YQ&list=PLGnmo4N_SmKLgd4KSt5Wi4MjDGkIzv2m3" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/van-halen-1984.png",
    playlist: "https://www.youtube.com/watch?v=UM68ZL42hp0&list=PLGnmo4N_SmKL0-sVc9jf1DfJHlRNrsrGD" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/van-halen-5150.png",
    playlist: "https://www.youtube.com/watch?v=o936NLQMqJw&list=PLGnmo4N_SmKIa5CBqXp4oQ5VXfqrWY4KR" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/van-halen-ou812.png",
    playlist: "https://www.youtube.com/watch?v=IVH7mHldMOo&list=PLGnmo4N_SmKIgDiYGHAdSUDfT4DXEEuTf" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/suzanne-vega-suzanne-vega.png",
    playlist: "https://www.youtube.com/watch?v=32GGaizRqu0&list=PLGnmo4N_SmKJ3mwGAXW5f7Ut8OR3TDsu_" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/suzanne-vega-solitude-standing.png",
    playlist: "https://www.youtube.com/watch?v=L9x-DENKIts&list=PLGnmo4N_SmKJmvmHeWYa699IYGoI55nb4" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/westworld-where-the-action-is.png",
    playlist: "https://www.youtube.com/watch?v=uaqM29i3NkQ&list=PLGnmo4N_SmKLcLCYRAilztRNab_STt7ay" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/jane-wiedlin-jane-wiedlin.png",
    playlist: "https://www.youtube.com/watch?v=meO9h9KosvQ&list=PLGnmo4N_SmKKUAjvZpFKXtyDtecbXpFRi" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/jane-wiedlin-fur.png",
    playlist: "https://www.youtube.com/watch?v=TnsoVuN8tlE&list=PLGnmo4N_SmKJEDNwRR-4wwASvIwwPL0qN" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/jane-wiedlin-tangled.png",
    playlist: "https://www.youtube.com/watch?v=0UBkFx56qfw&list=PLGnmo4N_SmKLhOUt3rSXBBsLkGRPT15nd" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/kim-wilde-close.png",
    playlist: "https://www.youtube.com/watch?v=lZFjmkeW-rE&list=PLGnmo4N_SmKJdLY6a90qE-qyxiHeUu9aO" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/kim-wilde-here-come-the-aliens.png",
    playlist: "https://www.youtube.com/watch?v=TdXjvzB-Ehc&list=PLGnmo4N_SmKI-4Xdh4YgBkIjjBwJrz66c" },

  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/steve-winwood-chronicles.png",
    playlist: "https://www.youtube.com/watch?v=45aS0UqFXUU&list=PLGnmo4N_SmKJoHnLQ_sr-RSD6jEwZQiW4&pp=gAQBsAgC" },





  { cover: "https://jaseman125.github.io/img/bricklink.png",
    playlist: "https://www.bricklink.com/aboutMe.asp?u=jaseman125" },

  { cover: "https://jaseman125.github.io/img/ebay.png",
    playlist: "https://www.ebay.co.uk/usr/jaseman125" },

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
