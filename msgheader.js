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

// Album list (Now including the 250 YouTube song links)
const albums = [
  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/abba-gold.png", playlist: "https://www.youtube.com/watch?v=2ZUX3j6WLiQ&list=PLGnmo4N_SmKJm0fF29tAvLwRKEZlclxqf" },
  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/bryan-adams-so-far-so-good.png", playlist: "https://www.youtube.com/watch?v=1Ep9c1-Ef5I&list=PLGnmo4N_SmKIAIkA9RjiQRvEOl7YSId7d" },
  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/a-ha-hunting-high-and-low.png", playlist: "https://www.youtube.com/watch?v=HzdD8kbDzZA&list=PLGnmo4N_SmKIswUyMbz1UnUtnbETMhGvO" },
  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/a-ha-scoundrel-days.png", playlist: "https://www.youtube.com/watch?v=wY-O9rLSNyc&list=PLGnmo4N_SmKITXhqT50GG6FyvWzWAoP0G" },
  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/a-ha-stay-on-these-roads.png", playlist: "https://www.youtube.com/watch?v=ozc5-TcZbvI&list=PLGnmo4N_SmKI9ne8lkUAQWhsGZzo-qesk" },
  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/a-ha-east-of-the-sun-west-of-the-moon.png", playlist: "https://www.youtube.com/watch?v=4IMppxFcnpc&list=PLGnmo4N_SmKKQh5w8tuMNlu_2hwIPMylD" },
  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/all-about-eve-all-about-eve.png", playlist: "https://www.youtube.com/watch?v=KL6RL-hTRac&list=PLGnmo4N_SmKLkMGw2-sPsvOh7onKWsykD" },
  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/tori-amos-little-earthquakes.png", playlist: "https://www.youtube.com/watch?v=dGBwsC0yJ8o&list=PLGnmo4N_SmKLrqTYtwS91KIH-qeE8t40g" },
  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/the-b-52s-cosmic-thing.png", playlist: "https://www.youtube.com/watch?v=axyFMQUFASA&list=PLGnmo4N_SmKLtI8QKfeRkij7zS6wkcda6" },
  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/bangles-different-light.png", playlist: "https://www.youtube.com/watch?v=rHQrSx9LRN8&list=PLGnmo4N_SmKI9V1gJrMrbIv7uTHxoi7It" },
  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/bangles-everything.png", playlist: "https://www.youtube.com/watch?v=xTEp5lV5ytc&list=PLGnmo4N_SmKKp0zdzVwHFB9XHpLSMwPy6" },
  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/the-beat-bpm-the-very-best-of-the-beat.png", playlist: "https://www.youtube.com/watch?v=Cw5awfyRfUE&list=PLGnmo4N_SmKKTFYFpLxB8vxmu_QH7axCl" },
  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/pat-benatar-greatest-hits.png", playlist: "https://www.youtube.com/watch?v=fd_7jIC9180&list=PLGnmo4N_SmKL-XYi6OM2CWNAFf7K7tGoq" },
  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/bon-jovi-slippery-when-wet.png", playlist: "https://www.youtube.com/watch?v=M15gawGu6VE&list=PLGnmo4N_SmKJ9qLdeU11NOLCkSqlKByJa" },
  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/bon-jovi-new-jersey.png", playlist: "https://www.youtube.com/watch?v=Tf-3xV3bCv0&list=PLGnmo4N_SmKIfAx-7WMG1t_aSVs7clHgh" },
  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/kate-bush-the-kick-inside.png", playlist: "https://www.youtube.com/watch?v=UPxi6EmWp-o&list=PLGnmo4N_SmKLVb0DygKmOU-wCQLU8zmYa" },
  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/kate-bush-hounds-of-love.png", playlist: "https://www.youtube.com/watch?v=HYwNM1t9ltI&list=PLGnmo4N_SmKK0g8uLr37-QbsocQkSi7mO" },
  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/belinda-carlisle-heaven-on-earth.png", playlist: "https://www.youtube.com/watch?v=vFPajU-d-Ek&list=PLGnmo4N_SmKJhKZQGeNB9Iflohrdu4__7" },
  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/belinda-carlisle-runaway-horses.png", playlist: "https://www.youtube.com/watch?v=AWUBrKBA3_w&list=PLGnmo4N_SmKLoKIL9scrKB0MF3paC1K_p" },
  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/cher-cher.png", playlist: "https://www.youtube.com/watch?v=48L1BTVpxjA&list=PLGnmo4N_SmKL3GFKMSqQKXvNJY45d_Vrj" },
  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/cher-heart-of-stone.png", playlist: "https://www.youtube.com/watch?v=BUbjmLrp9dc&list=PLGnmo4N_SmKLmyPcBGPyDcfSORDUYH6Eh" },
  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/lloyd-cole-the-collection.png", playlist: "https://www.youtube.com/watch?v=2HRSTe0iE6g&list=PLGnmo4N_SmKKPzN8wSTBEGiqVHqgxHLsI" },
  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/phil-collins-hits.png", playlist: "https://www.youtube.com/watch?v=8xPAjMSkCGI&list=PLGnmo4N_SmKJLdg5LwQXhnikiVTSEAypQ" },
  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/communards-the-collection.png", playlist: "https://www.youtube.com/watch?v=qq_oG1vD_O8&list=PLGnmo4N_SmKKB-RH5gK-cQsnYrnBf12Su" },
  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/the-corrs-talk-on-corners-special-edition.png", playlist: "https://www.youtube.com/watch?v=4aTneAfopTs&list=PLGnmo4N_SmKKt5LNhrkr3a6C9JSPp3Om-" },
  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/the-corrs-in-blue.png", playlist: "https://www.youtube.com/watch?v=z2Y_2mhFp5g&list=PLGnmo4N_SmKIigbcCMyeG776F9eVumBFv" },
  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/beverley-craven-beverley-craven.png", playlist: "https://www.youtube.com/watch?v=tcYukoFt_VA&list=PLGnmo4N_SmKIscPl_fCHbJIHkaWQuvp2k" },
  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/the-cure-mixed-up.png", playlist: "https://www.youtube.com/watch?v=OkEQ9iZbfj0&list=PLGnmo4N_SmKLtu90WeANNaL-BFiNt8I91" },
  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/the-cure-wish.png", playlist: "https://www.youtube.com/watch?v=67ulFSNIdCU&list=PLGnmo4N_SmKKIsunvXsimMiNYzQRJz8SQ" },
  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/the-darkness-permission-to-land.png", playlist: "https://www.youtube.com/watch?v=et_3LDM_teA&list=PLGnmo4N_SmKI6gNVrbu8GQf_gwXVb8QN7" },
  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/def-leppard-hysteria.png", playlist: "https://www.youtube.com/watch?v=7Q5Pksn4VA0&list=PLGnmo4N_SmKJ2P5SBC0V6EYmTwIR7lcXO" },
  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/dido-no-angel.png", playlist: "https://www.youtube.com/watch?v=HHchQdWuIAs&list=PLGnmo4N_SmKJGNPJz_yD50Wj236f0f6tp" },
  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/drab-majesty-careless.png", playlist: "https://www.youtube.com/watch?v=0Y3xg-1SQ7k&list=PLGnmo4N_SmKKwW96Z1Nzi-joF_cfhEoE-" },
  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/drab-majesty-the-demonstration.png", playlist: "https://www.youtube.com/watch?v=WPvalVuP9FE&list=PLGnmo4N_SmKLHgilcOF9mUiotsu2YtDp2" },
  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/drab-majesty-modern-mirror.png", playlist: "https://www.youtube.com/watch?v=mmOSv-PG0ow&list=PLGnmo4N_SmKKK3kf-MIqrG22f1FHn4OOE" },
  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/duran-duran-greatest.png", playlist: "https://www.youtube.com/watch?v=E297U6jqQj0&list=PLGnmo4N_SmKLpfjbAFbivJPYDgzKGx4fe" },
  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/electric-six-fire.png", playlist: "https://www.youtube.com/watch?v=BzabCVOBUJI&list=PLGnmo4N_SmKKLcTV6NTqiVvj16AHH_Qxq" },
  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/electric-six-senor-smoke.png", playlist: "https://www.youtube.com/watch?v=vtH3DJ8Dyyg&list=PLGnmo4N_SmKJXwLw5h7cZTloT6-K09Ioq" },
  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/erasure-wonderland.png", playlist: "https://www.youtube.com/watch?v=pkMJP0GTGBU&list=PLGnmo4N_SmKLBQPYIqDyqa3ofNZRc-D1Y" },
  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/erasure-the-circus.png", playlist: "https://www.youtube.com/watch?v=wlIOP7Vfi3I&list=PLGnmo4N_SmKKVFhDj-3auNTkFG5pQdIN7" },
  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/erasure-wild!.png", playlist: "https://www.youtube.com/watch?v=59YnyzWGzPs&list=PLGnmo4N_SmKKbRAM69HdSjIQUxSkzxojD" },
  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/melissa-etheridge-melissa-etheridge.png", playlist: "https://www.youtube.com/watch?v=CvZwOA_62ew&list=PLGnmo4N_SmKJwK70l14jFQaRqRM_mszZb" },
  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/eurythmics-greatest-hits.png", playlist: "https://www.youtube.com/watch?v=zD9thE3n2V0&list=PLGnmo4N_SmKIKonQQ8G8mS30gAmyTqZBs" },
  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/evanescence-fallen.png", playlist: "https://www.youtube.com/watch?v=ysJ82L-1rEc&list=PLGnmo4N_SmKJMw64mghbSiSzYlJQow5SM" },
  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/falco-falco3.png", playlist: "https://www.youtube.com/watch?v=OKxBk4V79Co&list=PLGnmo4N_SmKKnn94G88g4ko13pYY2nCmh" },
  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/jaseman-turbo-dreams.png", playlist: "https://www.youtube.com/watch?v=79zINoERzM0&list=PLGnmo4N_SmKK6jYbqESBcCFsvYF-sHcta" },
  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/jessie-fry-obsidian.png", playlist: "https://www.jiosaavn.com/album/obsidian/vsyhtrHy0N0_" },
  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/genesis-invisible-touch.png", playlist: "https://www.youtube.com/watch?v=tMbiHCMYJtw&list=PLGnmo4N_SmKKU8D5KZZBTzadaVb8ut69Z" },
  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/go-west-go-west.png", playlist: "https://www.youtube.com/watch?v=9OifIwh53gY&list=PLGnmo4N_SmKLXdaXe7FwvcI4kHwtwicjp" },
  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/jan-hammer-escape-from-television.png", playlist: "https://www.youtube.com/watch?v=v9s0xO1_l6U&list=PLGnmo4N_SmKIaNppE6N663LckqExKdfgZ" },
  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/heart-heart.png", playlist: "https://www.youtube.com/watch?v=NdzSZdpEeyE&list=PLGnmo4N_SmKLCT6VGWgfl5egujIGh31vD" },
  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/buddy-holly-memorial-collection.png", playlist: "https://www.youtube.com/watch?v=XAmnmKivHjA&list=PLGnmo4N_SmKLbMm27XGGFqjso_4QDdmQ1" },
  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/bruce-hornsby-and-the-range-the-way-it-is.png", playlist: "https://www.youtube.com/watch?v=PHjq52hFSKo&list=PLGnmo4N_SmKJV8K3KWajNsyX0ySOMfAcH" },
  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/bruce-hornsby-and-the-range-scenes-from-the-southside.png", playlist: "https://www.youtube.com/watch?v=KewbVGhvPlY&list=PLGnmo4N_SmKKSCvQRr3IljAcOVzI0tleO" },
  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/hothouse-flowers-the-platinum-collection.png", playlist: "https://www.youtube.com/watch?v=PH5u2EEQpBY&list=PLGnmo4N_SmKJrVQfqiUVzjZOJavU9mnTJ" },
  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/chris-isaak-wicked-game.png", playlist: "https://www.youtube.com/watch?v=CdMqOK4tnkc&list=PLGnmo4N_SmKJzCen2857nYe_DEo1_0q5L" },
  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/billy-joel-an-innocent-man.png", playlist: "https://www.youtube.com/watch?v=tdGzzfQ52TQ&list=PLGnmo4N_SmKJE9pib5uncuRGBf8KwP30R" },
  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/keane-hopes-and-fears.png", playlist: "https://www.youtube.com/watch?v=0LuignGmX_0&list=PLGnmo4N_SmKLohKx4ZaVbLpopu0SFzq41" },
  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/avril-lavigne-let-go.png", playlist: "https://www.youtube.com/watch?v=qwlVaTCyfgc&list=PLGnmo4N_SmKKnGH4KnTgenYiKxKKVzpLB" },
  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/cyndi-lauper-shes-so-unusual.png", playlist: "https://www.youtube.com/watch?v=pEPy2KOh4yY&list=PLGnmo4N_SmKLbVFEVk_Xsw3uyejQ2cZU3" },
  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/cyndi-lauper-true-colors.png", playlist: "https://www.youtube.com/watch?v=_UtYGg3jEdM&list=PLGnmo4N_SmKIIZIJHpKltXkmqlts3itwS" },
  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/level-42-level-best.png", playlist: "https://www.youtube.com/watch?v=ArrEfcgwWWc&list=PLGnmo4N_SmKKaoICA5SHim5nF2Bn9hCg3" },
  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/huey-lewis-and-the-news-fore!.png", playlist: "https://www.youtube.com/watch?v=atiJkXBEJks&list=PLGnmo4N_SmKLBHQSY__4zoOJJ96uDcYW2" },
  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/madonna-like-a-virgin.png", playlist: "https://www.youtube.com/watch?v=IlPCW6nLheM&list=PLGnmo4N_SmKLDkj118ZwKfHfUhV_xj46u" },
  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/madonna-true-blue.png", playlist: "https://www.youtube.com/watch?v=BlGg-4XIwgg&list=PLGnmo4N_SmKKeDszR_ecxgOeSwMQs4nlK" },
  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/madonna-like-a-prayer.png", playlist: "https://www.youtube.com/watch?v=ilottRbDnGY&list=PLGnmo4N_SmKLkidmOMj5pg2bbv-gShYgf" },
  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/marillion-misplaced-childhood.png", playlist: "https://www.youtube.com/watch?v=M7SDuWgTXU4&list=PLGnmo4N_SmKLgYjI4uX_RF8rJRIa9Ovh0" },
  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/richard-marx-greatest-hits.png", playlist: "https://www.youtube.com/watch?v=KowI8GbC3S4&list=PLGnmo4N_SmKIXCCGK6d2GbWJV22apQz3o" },
  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/pet-shop-boys-please.png", playlist: "https://www.youtube.com/watch?v=1ht9xsdrcoM&list=PLGnmo4N_SmKLKRuFVHpvZrKEBC56bpDhk" },
  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/pet-shop-boys-actually.png", playlist: "https://www.youtube.com/watch?v=prntbdZiJSg&list=PLGnmo4N_SmKJ9yslRM7gREdM1jxeTFlt3" },
  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/primitives-lovely.png", playlist: "https://www.youtube.com/watch?v=XmwrDtjhXkE&list=PLGnmo4N_SmKIyrtvWg7xf2DPS_tt55bsz" },
  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/propaganda-a-secret-wish.png", playlist: "https://www.youtube.com/watch?v=Myy5qlZdBB0&list=PLGnmo4N_SmKKWKDyT8FOUJO3vP9NXnAZA" },
  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/propaganda-wishful-thinking.png", playlist: "https://www.youtube.com/watch?v=N6U-xDyo0mA&list=PLGnmo4N_SmKJ3KPX0dqg2LUjiO49lr1oE" },
  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/chris-rea-new-light-through-old-windows.png", playlist: "https://www.youtube.com/watch?v=I_X0NVV-tZY&list=PLGnmo4N_SmKKjScFDG6bS9V8Is7mfSo81" },
  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/simple-minds-live-in-the-city-of-light.png", playlist: "https://www.youtube.com/watch?v=daRtv_JveZg&list=PLGnmo4N_SmKLvPSj8dxDB9w3_Qo3s--aB" },
  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/simple-minds-glittering-prize.png", playlist: "https://www.youtube.com/watch?v=QxMh8W4VM98&list=PLGnmo4N_SmKJIvUCKoppVFIAHhgh61PFr" },
  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/skid-row-slave-to-the-grind.png", playlist: "https://www.youtube.com/watch?v=LFksc3I9kr8&list=PLGnmo4N_SmKLQwPaD6YHUCBikWnse3IDT" },
  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/the-smiths-best.png", playlist: "https://www.youtube.com/watch?v=jhNUhS1RW2Y&list=PLGnmo4N_SmKIXRM51c8ftX6rgBnGqTk20" },
  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/spandau-ballet-the-best-of.png", playlist: "https://www.youtube.com/watch?v=YjlAHyuq-0o&list=PLGnmo4N_SmKLGFgcbi4NJtK6YS4nINfL6" },
  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/spandau-ballet-once-more.png", playlist: "https://www.youtube.com/watch?v=YkujAeoM1R0&list=PLGnmo4N_SmKJEYvj_9bAe2AzO3PotKtL8" },
  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/tears-for-fears-tears-roll-down-greatest-hits-82-92.png", playlist: "https://www.youtube.com/watch?v=4vbXM98Pd4g&list=PLGnmo4N_SmKKzilI9VV40c63WLv1k7snm" },
  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/10,000-maniacs-mtv-unplugged.png", playlist: "https://www.youtube.com/watch?v=CoGfCS9DJlk&list=PLGnmo4N_SmKKufMs83NzBNETVWmK131b_" },
  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/therapy-troublegum.png", playlist: "https://www.youtube.com/watch?v=pqtFx938fbk&list=PLGnmo4N_SmKJ36o1IFk9-qYHVVYT2PAXv" },
  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/tanita-tikaram-ancient-heart.png", playlist: "https://www.youtube.com/watch?v=r8MtSO06Xi8&list=PLGnmo4N_SmKK5bCDR8NROJ_5nvN5CDjoW" },
  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/tpau-bridge-of-spies.png", playlist: "https://www.youtube.com/watch?v=nULSZY9gI3Y&list=PLGnmo4N_SmKIsW-BEW8nS1aOAaBExzTLf" },
  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/tpau-rage.png", playlist: "https://www.youtube.com/watch?v=KIMRiPdjcP0&list=PLGnmo4N_SmKKJm22IyTQrfu0liQwq2zoU" },
  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/u2-under-a-bloodred-sky.png", playlist: "https://www.youtube.com/watch?v=q9pEARgUGQ8&list=PLGnmo4N_SmKKwfIG91qob7c5EymFWbcK6" },
  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/u2-the-unforgettable-fire.png", playlist: "https://www.youtube.com/watch?v=ot-5qt-T-YQ&list=PLGnmo4N_SmKLgd4KSt5Wi4MjDGkIzv2m3" },
  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/van-halen-1984.png", playlist: "https://www.youtube.com/watch?v=UM68ZL42hp0&list=PLGnmo4N_SmKL0-sVc9jf1DfJHlRNrsrGD" },
  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/van-halen-5150.png", playlist: "https://www.youtube.com/watch?v=o936NLQMqJw&list=PLGnmo4N_SmKIa5CBqXp4oQ5VXfqrWY4KR" },
  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/van-halen-ou812.png", playlist: "https://www.youtube.com/watch?v=IVH7mHldMOo&list=PLGnmo4N_SmKIgDiYGHAdSUDfT4DXEEuTf" },
  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/suzanne-vega-suzanne-vega.png", playlist: "https://www.youtube.com/watch?v=32GGaizRqu0&list=PLGnmo4N_SmKJ3mwGAXW5f7Ut8OR3TDsu_" },
  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/suzanne-vega-solitude-standing.png", playlist: "https://www.youtube.com/watch?v=L9x-DENKIts&list=PLGnmo4N_SmKJmvmHeWYa699IYGoI55nb4" },
  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/westworld-where-the-action-is.png", playlist: "https://www.youtube.com/watch?v=uaqM29i3NkQ&list=PLGnmo4N_SmKLcLCYRAilztRNab_STt7ay" },
  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/jane-wiedlin-jane-wiedlin.png", playlist: "https://www.youtube.com/watch?v=meO9h9KosvQ&list=PLGnmo4N_SmKKUAjvZpFKXtyDtecbXpFRi" },
  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/jane-wiedlin-fur.png", playlist: "https://www.youtube.com/watch?v=TnsoVuN8tlE&list=PLGnmo4N_SmKJEDNwRR-4wwASvIwwPL0qN" },
  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/jane-wiedlin-tangled.png", playlist: "https://www.youtube.com/watch?v=0UBkFx56qfw&list=PLGnmo4N_SmKLhOUt3rSXBBsLkGRPT15nd" },
  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/kim-wilde-close.png", playlist: "https://www.youtube.com/watch?v=lZFjmkeW-rE&list=PLGnmo4N_SmKJdLY6a90qE-qyxiHeUu9aO" },
  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/kim-wilde-here-come-the-aliens.png", playlist: "https://www.youtube.com/watch?v=TdXjvzB-Ehc&list=PLGnmo4N_SmKI-4Xdh4YgBkIjjBwJrz66c" },
  { cover: "https://jaseman125.github.io/music/100-albums/lo-res/steve-winwood-chronicles.png", playlist: "https://www.youtube.com/watch?v=45aS0UqFXUU&list=PLGnmo4N_SmKJoHnLQ_sr-RSD6jEwZQiW4" },

  // --- BEGIN 250 SONGS ---
  { cover: "https://img.youtube.com/vi/G0AAMGPTL1A/hqdefault.jpg", playlist: "https://youtu.be/G0AAMGPTL1A" },
  { cover: "https://img.youtube.com/vi/8c0gkXzDZdM/hqdefault.jpg", playlist: "https://youtu.be/8c0gkXzDZdM" },
  { cover: "https://img.youtube.com/vi/_d5dPYHi17k/hqdefault.jpg", playlist: "https://youtu.be/_d5dPYHi17k" },
  { cover: "https://img.youtube.com/vi/m36SBHLmYXc/hqdefault.jpg", playlist: "https://youtu.be/m36SBHLmYXc" },
  { cover: "https://img.youtube.com/vi/HgNkEd0_Znc/hqdefault.jpg", playlist: "https://youtu.be/HgNkEd0_Znc" },
  { cover: "https://img.youtube.com/vi/i4TMXRRh4Hg/hqdefault.jpg", playlist: "https://youtu.be/i4TMXRRh4Hg" },
  { cover: "https://img.youtube.com/vi/ZUg6yzKrRXo/hqdefault.jpg", playlist: "https://youtu.be/ZUg6yzKrRXo" },
  { cover: "https://img.youtube.com/vi/53L7JFXfnJo/hqdefault.jpg", playlist: "https://youtu.be/53L7JFXfnJo" },
  { cover: "https://img.youtube.com/vi/zDfPW3BouWE/hqdefault.jpg", playlist: "https://youtu.be/zDfPW3BouWE" },
  { cover: "https://img.youtube.com/vi/lOqVQPq8zm8/hqdefault.jpg", playlist: "https://youtu.be/lOqVQPq8zm8" },
  { cover: "https://img.youtube.com/vi/jCl3wrYBqEY/hqdefault.jpg", playlist: "https://youtu.be/jCl3wrYBqEY" },
  { cover: "https://img.youtube.com/vi/AYIJorkyRI8/hqdefault.jpg", playlist: "https://youtu.be/AYIJorkyRI8" },
  { cover: "https://img.youtube.com/vi/526VPz7kGHY/hqdefault.jpg", playlist: "https://youtu.be/526VPz7kGHY" },
  { cover: "https://img.youtube.com/vi/ZEYGYNZL6_A/hqdefault.jpg", playlist: "https://youtu.be/ZEYGYNZL6_A" },
  { cover: "https://img.youtube.com/vi/oXk-PPmH5ak/hqdefault.jpg", playlist: "https://youtu.be/oXk-PPmH5ak" },
  { cover: "https://img.youtube.com/vi/fNFzfwLM72c/hqdefault.jpg", playlist: "https://youtu.be/fNFzfwLM72c" },
  { cover: "https://img.youtube.com/vi/xviuC-0FwQ0/hqdefault.jpg", playlist: "https://youtu.be/xviuC-0FwQ0" },
  { cover: "https://img.youtube.com/vi/9loBA3sE6hg/hqdefault.jpg", playlist: "https://youtu.be/9loBA3sE6hg" },
  { cover: "https://img.youtube.com/vi/2lGzJwksSv4/hqdefault.jpg", playlist: "https://youtu.be/2lGzJwksSv4" },
  { cover: "https://img.youtube.com/vi/yj86Hc-jGnc/hqdefault.jpg", playlist: "https://youtu.be/yj86Hc-jGnc" },
  { cover: "https://img.youtube.com/vi/ml414qVAxvA/hqdefault.jpg", playlist: "https://youtu.be/ml414qVAxvA" },
  { cover: "https://img.youtube.com/vi/enZ3cLD-9kQ/hqdefault.jpg", playlist: "https://youtu.be/enZ3cLD-9kQ" },
  { cover: "https://img.youtube.com/vi/u1ZoHfJZACA/hqdefault.jpg", playlist: "https://youtu.be/u1ZoHfJZACA" },
  { cover: "https://img.youtube.com/vi/M0quXl_od3g/hqdefault.jpg", playlist: "https://youtu.be/M0quXl_od3g" },
  { cover: "https://img.youtube.com/vi/76eeyjzNWcw/hqdefault.jpg", playlist: "https://youtu.be/76eeyjzNWcw" },
  { cover: "https://img.youtube.com/vi/Gf3cg8Fo2Wc/hqdefault.jpg", playlist: "https://youtu.be/Gf3cg8Fo2Wc" },
  { cover: "https://img.youtube.com/vi/uWhkbDMISl8/hqdefault.jpg", playlist: "https://youtu.be/uWhkbDMISl8" },
  { cover: "https://img.youtube.com/vi/Nl_Eo2QzqU4/hqdefault.jpg", playlist: "https://youtu.be/Nl_Eo2QzqU4" },
  { cover: "https://img.youtube.com/vi/t6HSlZBNwUQ/hqdefault.jpg", playlist: "https://youtu.be/t6HSlZBNwUQ" },
  { cover: "https://img.youtube.com/vi/AbRcjPoaWes/hqdefault.jpg", playlist: "https://youtu.be/AbRcjPoaWes" },
  { cover: "https://img.youtube.com/vi/RhxF9Qg5mOU/hqdefault.jpg", playlist: "https://youtu.be/RhxF9Qg5mOU" },
  { cover: "https://img.youtube.com/vi/vKNLtHONvBs/hqdefault.jpg", playlist: "https://youtu.be/vKNLtHONvBs" },
  { cover: "https://img.youtube.com/vi/gQnR4xbybsw/hqdefault.jpg", playlist: "https://youtu.be/gQnR4xbybsw" },
  { cover: "https://img.youtube.com/vi/-mvim98-TWw/hqdefault.jpg", playlist: "https://youtu.be/-mvim98-TWw" },
  { cover: "https://img.youtube.com/vi/Xqhy2iSA16Q/hqdefault.jpg", playlist: "https://youtu.be/Xqhy2iSA16Q" },
  { cover: "https://img.youtube.com/vi/eIdHbK6onkY/hqdefault.jpg", playlist: "https://youtu.be/eIdHbK6onkY" },
  { cover: "https://img.youtube.com/vi/AdW9oM6ZMME/hqdefault.jpg", playlist: "https://youtu.be/AdW9oM6ZMME" },
  { cover: "https://img.youtube.com/vi/hAx6mYeC6pY/hqdefault.jpg", playlist: "https://youtu.be/hAx6mYeC6pY" },
  { cover: "https://img.youtube.com/vi/K_lhBNtXwBY/hqdefault.jpg", playlist: "https://youtu.be/K_lhBNtXwBY" },
  { cover: "https://img.youtube.com/vi/R1oLPsUys_g/hqdefault.jpg", playlist: "https://www.youtube.com/watch?v=R1oLPsUys_g" },
  { cover: "https://img.youtube.com/vi/X0Ud3aIXpa4/hqdefault.jpg", playlist: "https://www.youtube.com/watch?v=X0Ud3aIXpa4" },
  { cover: "https://img.youtube.com/vi/r1hqSOPlAVo/hqdefault.jpg", playlist: "https://youtu.be/r1hqSOPlAVo" },
  { cover: "https://img.youtube.com/vi/6M0CY1fd4CU/hqdefault.jpg", playlist: "https://youtu.be/6M0CY1fd4CU" },
  { cover: "https://img.youtube.com/vi/Wnf0TXrN4mI/hqdefault.jpg", playlist: "https://youtu.be/Wnf0TXrN4mI" },
  { cover: "https://img.youtube.com/vi/OPzF5S2dgfA/hqdefault.jpg", playlist: "https://youtu.be/OPzF5S2dgfA" },
  { cover: "https://img.youtube.com/vi/AlZEdyo6uwY/hqdefault.jpg", playlist: "https://youtu.be/AlZEdyo6uwY" },
  { cover: "https://img.youtube.com/vi/300_2gwI4i0/hqdefault.jpg", playlist: "https://youtu.be/300_2gwI4i0" },
  { cover: "https://img.youtube.com/vi/awfbE0Ec_u4/hqdefault.jpg", playlist: "https://youtu.be/awfbE0Ec_u4" },
  { cover: "https://img.youtube.com/vi/p5OnECDRnZY/hqdefault.jpg", playlist: "https://youtu.be/p5OnECDRnZY" },
  { cover: "https://img.youtube.com/vi/Uob3iSzUxUU/hqdefault.jpg", playlist: "https://youtu.be/Uob3iSzUxUU" },
  { cover: "https://img.youtube.com/vi/6-kDoq2m3j0/hqdefault.jpg", playlist: "https://youtu.be/6-kDoq2m3j0" },
  { cover: "https://img.youtube.com/vi/-fH9qs5r6Wg/hqdefault.jpg", playlist: "https://youtu.be/-fH9qs5r6Wg" },
  { cover: "https://img.youtube.com/vi/1eQWdpWjXlk/hqdefault.jpg", playlist: "https://youtu.be/1eQWdpWjXlk" },
  { cover: "https://img.youtube.com/vi/AIOAlaACuv4/hqdefault.jpg", playlist: "https://youtu.be/AIOAlaACuv4" },
  { cover: "https://img.youtube.com/vi/Xv8FBjo1Y8I/hqdefault.jpg", playlist: "https://youtu.be/Xv8FBjo1Y8I" },
  { cover: "https://img.youtube.com/vi/8L1UngfqojI/hqdefault.jpg", playlist: "https://youtu.be/8L1UngfqojI" },
  { cover: "https://img.youtube.com/vi/Qq4j1LtCdww/hqdefault.jpg", playlist: "https://youtu.be/Qq4j1LtCdww" },
  { cover: "https://img.youtube.com/vi/ldQpRMegYc0/hqdefault.jpg", playlist: "https://youtu.be/ldQpRMegYc0" },
  { cover: "https://img.youtube.com/vi/sTQleXn0B1k/hqdefault.jpg", playlist: "https://youtu.be/sTQleXn0B1k" },
  { cover: "https://img.youtube.com/vi/NhGoZLudKyk/hqdefault.jpg", playlist: "https://youtu.be/NhGoZLudKyk" },
  { cover: "https://img.youtube.com/vi/PgRafRp-P-o/hqdefault.jpg", playlist: "https://youtu.be/PgRafRp-P-o" },
  { cover: "https://img.youtube.com/vi/d020hcWA_Wg/hqdefault.jpg", playlist: "https://youtu.be/d020hcWA_Wg" },
  { cover: "https://img.youtube.com/vi/5vyT2qDmFhE/hqdefault.jpg", playlist: "https://youtu.be/5vyT2qDmFhE" },
  { cover: "https://img.youtube.com/vi/kkUWlcjmOew/hqdefault.jpg", playlist: "https://youtu.be/kkUWlcjmOew" },
  { cover: "https://img.youtube.com/vi/IRFyFCFxCcM/hqdefault.jpg", playlist: "https://youtu.be/IRFyFCFxCcM" },
  { cover: "https://img.youtube.com/vi/xI0GDSTTccA/hqdefault.jpg", playlist: "https://youtu.be/xI0GDSTTccA" },
  { cover: "https://img.youtube.com/vi/LrjHz5hrupA/hqdefault.jpg", playlist: "https://youtu.be/LrjHz5hrupA" },
  { cover: "https://img.youtube.com/vi/J9gKyRmic20/hqdefault.jpg", playlist: "https://youtu.be/J9gKyRmic20" },
  { cover: "https://img.youtube.com/vi/si3dBlNdifE/hqdefault.jpg", playlist: "https://youtu.be/si3dBlNdifE" },
  { cover: "https://img.youtube.com/vi/ag8XcMG1EX4/hqdefault.jpg", playlist: "https://youtu.be/ag8XcMG1EX4" },
  { cover: "https://img.youtube.com/vi/FggsEkPQEbc/hqdefault.jpg", playlist: "https://youtu.be/FggsEkPQEbc" },
  { cover: "https://img.youtube.com/vi/_hAqkWuCYPo/hqdefault.jpg", playlist: "https://youtu.be/_hAqkWuCYPo" },
  { cover: "https://img.youtube.com/vi/ZCOSPtyZAPA/hqdefault.jpg", playlist: "https://youtu.be/ZCOSPtyZAPA" },
  { cover: "https://img.youtube.com/vi/JmcA9LIIXWw/hqdefault.jpg", playlist: "https://youtu.be/JmcA9LIIXWw" },
  { cover: "https://img.youtube.com/vi/PrW5npr5fk8/hqdefault.jpg", playlist: "https://youtu.be/PrW5npr5fk8" },
  { cover: "https://img.youtube.com/vi/bUwLDYZzxUY/hqdefault.jpg", playlist: "https://youtu.be/bUwLDYZzxUY" },
  { cover: "https://img.youtube.com/vi/n3nPiBai66M/hqdefault.jpg", playlist: "https://youtu.be/n3nPiBai66M" },
  { cover: "https://img.youtube.com/vi/PQp3oWdS7cw/hqdefault.jpg", playlist: "https://youtu.be/PQp3oWdS7cw" },
  { cover: "https://img.youtube.com/vi/i5tpuCcPfGk/hqdefault.jpg", playlist: "https://youtu.be/i5tpuCcPfGk" },
  { cover: "https://img.youtube.com/vi/59M9ggdpFjQ/hqdefault.jpg", playlist: "https://youtu.be/59M9ggdpFjQ" },
  { cover: "https://img.youtube.com/vi/tI9tfNx1M1E/hqdefault.jpg", playlist: "https://youtu.be/tI9tfNx1M1E" },
  { cover: "https://img.youtube.com/vi/ks_xu8JSL0Q/hqdefault.jpg", playlist: "https://youtu.be/ks_xu8JSL0Q" },
  { cover: "https://img.youtube.com/vi/PGNiXGX2nLU/hqdefault.jpg", playlist: "https://youtu.be/PGNiXGX2nLU" },
  { cover: "https://img.youtube.com/vi/BYRrpkJcy2o/hqdefault.jpg", playlist: "https://youtu.be/BYRrpkJcy2o" },
  { cover: "https://img.youtube.com/vi/1t-gK-9EIq4/hqdefault.jpg", playlist: "https://youtu.be/1t-gK-9EIq4" },
  { cover: "https://img.youtube.com/vi/r_0sL_SQYvw/hqdefault.jpg", playlist: "https://youtu.be/r_0sL_SQYvw" },
  { cover: "https://img.youtube.com/vi/cNIioK560jQ/hqdefault.jpg", playlist: "https://youtu.be/cNIioK560jQ" },
  { cover: "https://img.youtube.com/vi/GeMHC7Ih8wg/hqdefault.jpg", playlist: "https://youtu.be/GeMHC7Ih8wg" },
  { cover: "https://img.youtube.com/vi/Mz0yIXkRAmE/hqdefault.jpg", playlist: "https://youtu.be/Mz0yIXkRAmE" },
  { cover: "https://img.youtube.com/vi/wv-34w8kGPM/hqdefault.jpg", playlist: "https://youtu.be/wv-34w8kGPM" },
  { cover: "https://img.youtube.com/vi/2_Zg04ewTkY/hqdefault.jpg", playlist: "https://youtu.be/2_Zg04ewTkY" },
  { cover: "https://img.youtube.com/vi/KXN-ehXeqTI/hqdefault.jpg", playlist: "https://youtu.be/KXN-ehXeqTI" },
  { cover: "https://img.youtube.com/vi/_uARwQDqA20/hqdefault.jpg", playlist: "https://youtu.be/_uARwQDqA20" },
  { cover: "https://img.youtube.com/vi/qOc0-D2FrWE/hqdefault.jpg", playlist: "https://youtu.be/qOc0-D2FrWE" },
  { cover: "https://img.youtube.com/vi/J-PYqUHfTMA/hqdefault.jpg", playlist: "https://youtu.be/J-PYqUHfTMA" },
  { cover: "https://img.youtube.com/vi/UrIiLvg58SY/hqdefault.jpg", playlist: "https://youtu.be/UrIiLvg58SY" },
  { cover: "https://img.youtube.com/vi/Wijzz3zxINY/hqdefault.jpg", playlist: "https://youtu.be/Wijzz3zxINY" },
  { cover: "https://img.youtube.com/vi/UH1CMCtV4to/hqdefault.jpg", playlist: "https://youtu.be/UH1CMCtV4to" },
  { cover: "https://img.youtube.com/vi/YF1R0hc5Q2I/hqdefault.jpg", playlist: "https://youtu.be/YF1R0hc5Q2I" },
  { cover: "https://img.youtube.com/vi/TvZskcqdYcE/hqdefault.jpg", playlist: "https://youtu.be/TvZskcqdYcE" },
  { cover: "https://img.youtube.com/vi/6NXnxTNIWkc/hqdefault.jpg", playlist: "https://youtu.be/6NXnxTNIWkc" },
  { cover: "https://img.youtube.com/vi/-8y0onSG3kg/hqdefault.jpg", playlist: "https://youtu.be/-8y0onSG3kg" },
  { cover: "https://img.youtube.com/vi/Py4LyvY5eoc/hqdefault.jpg", playlist: "https://youtu.be/Py4LyvY5eoc" },
  { cover: "https://img.youtube.com/vi/gB-l1ijtRoo/hqdefault.jpg", playlist: "https://youtu.be/gB-l1ijtRoo" },
  { cover: "https://img.youtube.com/vi/Wz8YUw2VVt0/hqdefault.jpg", playlist: "https://youtu.be/Wz8YUw2VVt0" },
  { cover: "https://img.youtube.com/vi/_XlfFN3PZE4/hqdefault.jpg", playlist: "https://youtu.be/_XlfFN3PZE4" },
  { cover: "https://img.youtube.com/vi/7yVa0tCsYqA/hqdefault.jpg", playlist: "https://youtu.be/7yVa0tCsYqA" },
  { cover: "https://img.youtube.com/vi/1jzJJpUSyCc/hqdefault.jpg", playlist: "https://www.youtube.com/watch?v=1jzJJpUSyCc" },
  { cover: "https://img.youtube.com/vi/FOoiU39U45s/hqdefault.jpg", playlist: "https://youtu.be/FOoiU39U45s" },
  { cover: "https://img.youtube.com/vi/o1tj2zJ2Wvg/hqdefault.jpg", playlist: "https://youtu.be/o1tj2zJ2Wvg" },
  { cover: "https://img.youtube.com/vi/e3EQ0xP50u0/hqdefault.jpg", playlist: "https://youtu.be/e3EQ0xP50u0" },
  { cover: "https://img.youtube.com/vi/fdiu_OVpjBM/hqdefault.jpg", playlist: "https://youtu.be/fdiu_OVpjBM" },
  { cover: "https://img.youtube.com/vi/mc-y485XlQ0/hqdefault.jpg", playlist: "https://youtu.be/mc-y485XlQ0" },
  { cover: "https://img.youtube.com/vi/5_msHpEa3_Y/hqdefault.jpg", playlist: "https://youtu.be/5_msHpEa3_Y" },
  { cover: "https://img.youtube.com/vi/3cjywgmHv30/hqdefault.jpg", playlist: "https://youtu.be/3cjywgmHv30" },
  { cover: "https://img.youtube.com/vi/NtwBuJ_6oLI/hqdefault.jpg", playlist: "https://youtu.be/NtwBuJ_6oLI" },
  { cover: "https://img.youtube.com/vi/yBDc0YWi9mk/hqdefault.jpg", playlist: "https://youtu.be/yBDc0YWi9mk" },
  { cover: "https://img.youtube.com/vi/ZTidn2dBYbY/hqdefault.jpg", playlist: "https://youtu.be/ZTidn2dBYbY" },
  { cover: "https://img.youtube.com/vi/ZvMsp7s78Do/hqdefault.jpg", playlist: "https://youtu.be/ZvMsp7s78Do" },
  { cover: "https://img.youtube.com/vi/Lt6r-k9Bk6o/hqdefault.jpg", playlist: "https://youtu.be/Lt6r-k9Bk6o" },
  { cover: "https://img.youtube.com/vi/OAfxs0IDeMs/hqdefault.jpg", playlist: "https://youtu.be/OAfxs0IDeMs" },
  { cover: "https://img.youtube.com/vi/1Cw1ng75KP0/hqdefault.jpg", playlist: "https://youtu.be/1Cw1ng75KP0" },
  { cover: "https://img.youtube.com/vi/XPvb6-klI_k/hqdefault.jpg", playlist: "https://youtu.be/XPvb6-klI_k" },
  { cover: "https://img.youtube.com/vi/T68DuwluaOE/hqdefault.jpg", playlist: "https://youtu.be/T68DuwluaOE" },
  { cover: "https://img.youtube.com/vi/6RUIeX6UCT8/hqdefault.jpg", playlist: "https://youtu.be/6RUIeX6UCT8" },
  { cover: "https://img.youtube.com/vi/uPudE8nDog0/hqdefault.jpg", playlist: "https://youtu.be/uPudE8nDog0" },
  { cover: "https://img.youtube.com/vi/LvknQEjExC0/hqdefault.jpg", playlist: "https://youtu.be/LvknQEjExC0" },
  { cover: "https://img.youtube.com/vi/QF5S-TA7ljo/hqdefault.jpg", playlist: "https://youtu.be/QF5S-TA7ljo" },
  { cover: "https://img.youtube.com/vi/C7Eo1IHajGQ/hqdefault.jpg", playlist: "https://youtu.be/C7Eo1IHajGQ" },
  { cover: "https://img.youtube.com/vi/YlXtrnh-Ejo/hqdefault.jpg", playlist: "https://youtu.be/YlXtrnh-Ejo" },
  { cover: "https://img.youtube.com/vi/G9FcebOGYyQ/hqdefault.jpg", playlist: "https://youtu.be/G9FcebOGYyQ" },
  { cover: "https://img.youtube.com/vi/GEnx9xS79Lc/hqdefault.jpg", playlist: "https://youtu.be/GEnx9xS79Lc" },
  { cover: "https://img.youtube.com/vi/PVsqCZa47fU/hqdefault.jpg", playlist: "https://youtu.be/PVsqCZa47fU" },
  { cover: "https://img.youtube.com/vi/j-Tk7hT78gk/hqdefault.jpg", playlist: "https://youtu.be/j-Tk7hT78gk" },
  { cover: "https://img.youtube.com/vi/X_bFO1SNRZg/hqdefault.jpg", playlist: "https://youtu.be/X_bFO1SNRZg" },
  { cover: "https://img.youtube.com/vi/rbx7ss4F7JE/hqdefault.jpg", playlist: "https://youtu.be/rbx7ss4F7JE" },
  { cover: "https://img.youtube.com/vi/hIL5RiCfxko/hqdefault.jpg", playlist: "https://youtu.be/hIL5RiCfxko" },
  { cover: "https://img.youtube.com/vi/qwc85qWFoqU/hqdefault.jpg", playlist: "https://youtu.be/qwc85qWFoqU" },
  { cover: "https://img.youtube.com/vi/7kORTAjFAWM/hqdefault.jpg", playlist: "https://youtu.be/7kORTAjFAWM" },
  { cover: "https://img.youtube.com/vi/a1oSXlU0ZUk/hqdefault.jpg", playlist: "https://youtu.be/a1oSXlU0ZUk" },
  { cover: "https://img.youtube.com/vi/WPw7nlluRdc/hqdefault.jpg", playlist: "https://youtu.be/WPw7nlluRdc" },
  { cover: "https://img.youtube.com/vi/j2Addn9gp0A/hqdefault.jpg", playlist: "https://youtu.be/j2Addn9gp0A" },
  { cover: "https://img.youtube.com/vi/ahJGWww1jNc/hqdefault.jpg", playlist: "https://youtu.be/ahJGWww1jNc" },
  { cover: "https://img.youtube.com/vi/0eL6DwkdWhQ/hqdefault.jpg", playlist: "https://youtu.be/0eL6DwkdWhQ" },
  { cover: "https://img.youtube.com/vi/Vnzpg5GgQCo/hqdefault.jpg", playlist: "https://youtu.be/Vnzpg5GgQCo" },
  { cover: "https://img.youtube.com/vi/UwgmqPzVadM/hqdefault.jpg", playlist: "https://youtu.be/UwgmqPzVadM" },
  { cover: "https://img.youtube.com/vi/JaYTNsS_m2w/hqdefault.jpg", playlist: "https://youtu.be/JaYTNsS_m2w" },
  { cover: "https://img.youtube.com/vi/YJUdIHGtx4k/hqdefault.jpg", playlist: "https://youtu.be/YJUdIHGtx4k" },
  { cover: "https://img.youtube.com/vi/pufec0Hps00/hqdefault.jpg", playlist: "https://youtu.be/pufec0Hps00" },
  { cover: "https://img.youtube.com/vi/1XcIRm6iGkc/hqdefault.jpg", playlist: "https://youtu.be/1XcIRm6iGkc" },
  { cover: "https://img.youtube.com/vi/DHutZXREZ0E/hqdefault.jpg", playlist: "https://youtu.be/DHutZXREZ0E" },
  { cover: "https://img.youtube.com/vi/7ijgXe7hPsg/hqdefault.jpg", playlist: "https://youtu.be/7ijgXe7hPsg" },
  { cover: "https://img.youtube.com/vi/r0qDBYiOBrc/hqdefault.jpg", playlist: "https://youtu.be/r0qDBYiOBrc" },
  { cover: "https://img.youtube.com/vi/UZPSTJ7_htA/hqdefault.jpg", playlist: "https://youtu.be/UZPSTJ7_htA" },
  { cover: "https://img.youtube.com/vi/FKpCzQIWAWY/hqdefault.jpg", playlist: "https://youtu.be/FKpCzQIWAWY" },
  { cover: "https://img.youtube.com/vi/i5Wwabj5bXg/hqdefault.jpg", playlist: "https://youtu.be/i5Wwabj5bXg" },
  { cover: "https://img.youtube.com/vi/lpqDTQOFvf0/hqdefault.jpg", playlist: "https://youtu.be/lpqDTQOFvf0" },
  { cover: "https://img.youtube.com/vi/wXXhyy9obn0/hqdefault.jpg", playlist: "https://youtu.be/wXXhyy9obn0" },
  { cover: "https://img.youtube.com/vi/QkBHwH0P3ww/hqdefault.jpg", playlist: "https://youtu.be/QkBHwH0P3ww" },
  { cover: "https://img.youtube.com/vi/V3kE0rvAJhM/hqdefault.jpg", playlist: "https://youtu.be/V3kE0rvAJhM" },
  { cover: "https://img.youtube.com/vi/mUg5aEy-8CQ/hqdefault.jpg", playlist: "https://youtu.be/mUg5aEy-8CQ" },
  { cover: "https://img.youtube.com/vi/gV6SF492hNU/hqdefault.jpg", playlist: "https://youtu.be/gV6SF492hNU" },
  { cover: "https://img.youtube.com/vi/riyR4kuTaxw/hqdefault.jpg", playlist: "https://youtu.be/riyR4kuTaxw" },
  { cover: "https://img.youtube.com/vi/1p_BvaHsgGg/hqdefault.jpg", playlist: "https://youtu.be/1p_BvaHsgGg" },
  { cover: "https://img.youtube.com/vi/xY278Fe9kSg/hqdefault.jpg", playlist: "https://youtu.be/xY278Fe9kSg" },
  { cover: "https://img.youtube.com/vi/HSNSTerj2Kc/hqdefault.jpg", playlist: "https://youtu.be/HSNSTerj2Kc" },
  { cover: "https://img.youtube.com/vi/7bFowmyA5ZA/hqdefault.jpg", playlist: "https://youtu.be/7bFowmyA5ZA" },
  { cover: "https://img.youtube.com/vi/nBB2bPwKWVg/hqdefault.jpg", playlist: "https://youtu.be/nBB2bPwKWVg" },
  { cover: "https://img.youtube.com/vi/QDdAgJxdgcQ/hqdefault.jpg", playlist: "https://youtu.be/QDdAgJxdgcQ" },
  { cover: "https://img.youtube.com/vi/tT4d1LQy4es/hqdefault.jpg", playlist: "https://youtu.be/tT4d1LQy4es" },
  { cover: "https://img.youtube.com/vi/CNPMepicy6c/hqdefault.jpg", playlist: "https://youtu.be/CNPMepicy6c" },
  { cover: "https://img.youtube.com/vi/zYmuzJ_LfNM/hqdefault.jpg", playlist: "https://youtu.be/zYmuzJ_LfNM" },
  { cover: "https://img.youtube.com/vi/1snv-0jCiWY/hqdefault.jpg", playlist: "https://youtu.be/1snv-0jCiWY" },
  { cover: "https://img.youtube.com/vi/Im3JzxlatUs/hqdefault.jpg", playlist: "https://youtu.be/Im3JzxlatUs" },
  { cover: "https://img.youtube.com/vi/qX4lcYSR1eA/hqdefault.jpg", playlist: "https://youtu.be/qX4lcYSR1eA" },
  { cover: "https://img.youtube.com/vi/CAxWoGC1rMM/hqdefault.jpg", playlist: "https://youtu.be/CAxWoGC1rMM" },
  { cover: "https://img.youtube.com/vi/Ulay2FvUEd8/hqdefault.jpg", playlist: "https://youtu.be/Ulay2FvUEd8" },
  { cover: "https://img.youtube.com/vi/B90m_KLdLy8/hqdefault.jpg", playlist: "https://youtu.be/B90m_KLdLy8" },
  { cover: "https://img.youtube.com/vi/iye7wdaOwb8/hqdefault.jpg", playlist: "https://youtu.be/iye7wdaOwb8" },
  { cover: "https://img.youtube.com/vi/Wos2sWv_xI0/hqdefault.jpg", playlist: "https://youtu.be/Wos2sWv_xI0" },
  { cover: "https://img.youtube.com/vi/zugy2rkSM7g/hqdefault.jpg", playlist: "https://youtu.be/zugy2rkSM7g" },
  { cover: "https://img.youtube.com/vi/jEJdfDD4dVg/hqdefault.jpg", playlist: "https://youtu.be/jEJdfDD4dVg" },
  { cover: "https://img.youtube.com/vi/qbAab1hTxN4/hqdefault.jpg", playlist: "https://youtu.be/qbAab1hTxN4" },
  { cover: "https://img.youtube.com/vi/GwdZPzz2qLE/hqdefault.jpg", playlist: "https://youtu.be/GwdZPzz2qLE" },
  { cover: "https://img.youtube.com/vi/howKIqQ4y5Q/hqdefault.jpg", playlist: "https://youtu.be/howKIqQ4y5Q" },
  { cover: "https://img.youtube.com/vi/qkukZvP4E7Q/hqdefault.jpg", playlist: "https://youtu.be/qkukZvP4E7Q" },
  { cover: "https://img.youtube.com/vi/1fDTUhlYMdc/hqdefault.jpg", playlist: "https://youtu.be/1fDTUhlYMdc" },
  { cover: "https://img.youtube.com/vi/2wccJirQmlw/hqdefault.jpg", playlist: "https://youtu.be/2wccJirQmlw" },
  { cover: "https://img.youtube.com/vi/gJ4bW4KNffo/hqdefault.jpg", playlist: "https://youtu.be/gJ4bW4KNffo" },
  { cover: "https://img.youtube.com/vi/YYOKMUTTDdA/hqdefault.jpg", playlist: "https://youtu.be/YYOKMUTTDdA" },
  { cover: "https://img.youtube.com/vi/1RKqOmSkGM/hqdefault.jpg", playlist: "https://youtu.be/1RKqOmSkGM" },
  { cover: "https://img.youtube.com/vi/B4yVmBdXwfw/hqdefault.jpg", playlist: "https://youtu.be/B4yVmBdXwfw" },
  { cover: "https://img.youtube.com/vi/kOnde5c7OG8/hqdefault.jpg", playlist: "https://youtu.be/kOnde5c7OG8" },
  { cover: "https://img.youtube.com/vi/zGftnl0KtUY/hqdefault.jpg", playlist: "https://youtu.be/zGftnl0KtUY" },
  { cover: "https://img.youtube.com/vi/ElkqPNvMj6w/hqdefault.jpg", playlist: "https://youtu.be/ElkqPNvMj6w" },
  { cover: "https://img.youtube.com/vi/ifgpiGs_4Js/hqdefault.jpg", playlist: "https://youtu.be/ifgpiGs_4Js" },
  { cover: "https://img.youtube.com/vi/DcETMwIOGpI/hqdefault.jpg", playlist: "https://youtu.be/DcETMwIOGpI" },
  { cover: "https://img.youtube.com/vi/8LhkyyCvUHk/hqdefault.jpg", playlist: "https://youtu.be/8LhkyyCvUHk" },
  { cover: "https://img.youtube.com/vi/sVkYoArqNBw/hqdefault.jpg", playlist: "https://youtu.be/sVkYoArqNBw" },
  { cover: "https://img.youtube.com/vi/Zs-pPq_aqLg/hqdefault.jpg", playlist: "https://youtu.be/Zs-pPq_aqLg" },
  { cover: "https://img.youtube.com/vi/PabAoaS0ftk/hqdefault.jpg", playlist: "https://youtu.be/PabAoaS0ftk" },
  { cover: "https://img.youtube.com/vi/CJ_3mWYu3eY/hqdefault.jpg", playlist: "https://youtu.be/CJ_3mWYu3eY" },
  { cover: "https://img.youtube.com/vi/1wcaSyBmojM/hqdefault.jpg", playlist: "https://youtu.be/1wcaSyBmojM" },
  { cover: "https://img.youtube.com/vi/pcdyRW3B4Wg/hqdefault.jpg", playlist: "https://youtu.be/pcdyRW3B4Wg" },
  { cover: "https://img.youtube.com/vi/cv-0mmVnxPA/hqdefault.jpg", playlist: "https://youtu.be/cv-0mmVnxPA" },
  { cover: "https://img.youtube.com/vi/leQhz8oIYRQ/hqdefault.jpg", playlist: "https://youtu.be/leQhz8oIYRQ" },
  { cover: "https://img.youtube.com/vi/2wGpDuazyR4/hqdefault.jpg", playlist: "https://youtu.be/2wGpDuazyR4" },
  { cover: "https://img.youtube.com/vi/mLNCHb-5g4Y/hqdefault.jpg", playlist: "https://youtu.be/mLNCHb-5g4Y" },
  { cover: "https://img.youtube.com/vi/EYmc4-daCdg/hqdefault.jpg", playlist: "https://youtu.be/EYmc4-daCdg" },
  { cover: "https://img.youtube.com/vi/qjuEXKwnkLE/hqdefault.jpg", playlist: "https://youtu.be/qjuEXKwnkLE" },
  { cover: "https://img.youtube.com/vi/-2axOrCoXvs/hqdefault.jpg", playlist: "https://youtu.be/-2axOrCoXvs" },
  { cover: "https://img.youtube.com/vi/5xQBzXPdP6s/hqdefault.jpg", playlist: "https://youtu.be/5xQBzXPdP6s" },
  { cover: "https://img.youtube.com/vi/zVoSM5XFyQE/hqdefault.jpg", playlist: "https://youtu.be/zVoSM5XFyQE" },
  { cover: "https://img.youtube.com/vi/3wxyN3z9PL4/hqdefault.jpg", playlist: "https://youtu.be/3wxyN3z9PL4" },
  { cover: "https://img.youtube.com/vi/7dYjolgq0gM/hqdefault.jpg", playlist: "https://youtu.be/7dYjolgq0gM" },
  { cover: "https://img.youtube.com/vi/HWZisnZ-RGE/hqdefault.jpg", playlist: "https://youtu.be/HWZisnZ-RGE" },
  { cover: "https://img.youtube.com/vi/0rbw5FaCAzw/hqdefault.jpg", playlist: "https://youtu.be/0rbw5FaCAzw" },
  { cover: "https://img.youtube.com/vi/2kDirLkLp10/hqdefault.jpg", playlist: "https://youtu.be/2kDirLkLp10" },
  { cover: "https://img.youtube.com/vi/Ur5qz2X1vAE/hqdefault.jpg", playlist: "https://youtu.be/Ur5qz2X1vAE" },
  { cover: "https://img.youtube.com/vi/qQPm5wqMScE/hqdefault.jpg", playlist: "https://youtu.be/qQPm5wqMScE" },
  { cover: "https://img.youtube.com/vi/vz9WNOkVTWo/hqdefault.jpg", playlist: "https://youtu.be/vz9WNOkVTWo" },
  { cover: "https://img.youtube.com/vi/KhcaPNuaJNU/hqdefault.jpg", playlist: "https://youtu.be/KhcaPNuaJNU" },
  { cover: "https://img.youtube.com/vi/usmSr86oWFA/hqdefault.jpg", playlist: "https://youtu.be/usmSr86oWFA" },
  { cover: "https://img.youtube.com/vi/cFH5JgyZK1I/hqdefault.jpg", playlist: "https://youtu.be/cFH5JgyZK1I" },
  { cover: "https://img.youtube.com/vi/yWWLdUn4cNo/hqdefault.jpg", playlist: "https://youtu.be/yWWLdUn4cNo" },
  { cover: "https://img.youtube.com/vi/yZmBBo8R3xE/hqdefault.jpg", playlist: "https://youtu.be/yZmBBo8R3xE" },
  { cover: "https://img.youtube.com/vi/HqwovrZKTm8/hqdefault.jpg", playlist: "https://youtu.be/HqwovrZKTm8" },
  { cover: "https://img.youtube.com/vi/e3-5YC_oHjE/hqdefault.jpg", playlist: "https://youtu.be/e3-5YC_oHjE" },
  { cover: "https://img.youtube.com/vi/WfunypXsBO4/hqdefault.jpg", playlist: "https://youtu.be/WfunypXsBO4" },
  { cover: "https://img.youtube.com/vi/JcIXN1Ca7RE/hqdefault.jpg", playlist: "https://youtu.be/JcIXN1Ca7RE" },
  { cover: "https://img.youtube.com/vi/342VgfNDaTI/hqdefault.jpg", playlist: "https://youtu.be/342VgfNDaTI" },
  { cover: "https://img.youtube.com/vi/_vvashu6WAc/hqdefault.jpg", playlist: "https://youtu.be/_vvashu6WAc" },
  { cover: "https://img.youtube.com/vi/quD5B-la-ug/hqdefault.jpg", playlist: "https://youtu.be/quD5B-la-ug" },
  { cover: "https://img.youtube.com/vi/01g5F5gfNoo/hqdefault.jpg", playlist: "https://youtu.be/01g5F5gfNoo" },
  { cover: "https://img.youtube.com/vi/SnW9bw9kU8o/hqdefault.jpg", playlist: "https://youtu.be/SnW9bw9kU8o" },
  { cover: "https://img.youtube.com/vi/S-yN8XeOA9Q/hqdefault.jpg", playlist: "https://youtu.be/S-yN8XeOA9Q" },
  { cover: "https://img.youtube.com/vi/1WusfE2M5KU/hqdefault.jpg", playlist: "https://youtu.be/1WusfE2M5KU" },
  { cover: "https://img.youtube.com/vi/q18_mNKmCas/hqdefault.jpg", playlist: "https://youtu.be/q18_mNKmCas" },
  { cover: "https://img.youtube.com/vi/MHbeylXj6gs/hqdefault.jpg", playlist: "https://youtu.be/MHbeylXj6gs" },
  { cover: "https://img.youtube.com/vi/DP4t0M1W4Ec/hqdefault.jpg", playlist: "https://youtu.be/DP4t0M1W4Ec" },
  { cover: "https://img.youtube.com/vi/j_0cVTPNNOk/hqdefault.jpg", playlist: "https://youtu.be/j_0cVTPNNOk" },
  { cover: "https://img.youtube.com/vi/7hqgC3W9GUI/hqdefault.jpg", playlist: "https://youtu.be/7hqgC3W9GUI" },
  { cover: "https://img.youtube.com/vi/uIbXvaE39wM/hqdefault.jpg", playlist: "https://youtu.be/uIbXvaE39wM" },
  { cover: "https://img.youtube.com/vi/JFiL5vjc3cw/hqdefault.jpg", playlist: "https://youtu.be/JFiL5vjc3cw" },
  { cover: "https://img.youtube.com/vi/wIefsU_PVAo/hqdefault.jpg", playlist: "https://youtu.be/wIefsU_PVAo" },
  { cover: "https://img.youtube.com/vi/O7DnrAgIY5w/hqdefault.jpg", playlist: "https://youtu.be/O7DnrAgIY5w" },
  { cover: "https://img.youtube.com/vi/dAIw2DX_BpA/hqdefault.jpg", playlist: "https://youtu.be/dAIw2DX_BpA" },
  { cover: "https://img.youtube.com/vi/A6JBBkdPpnw/hqdefault.jpg", playlist: "https://youtu.be/A6JBBkdPpnw" },
  { cover: "https://img.youtube.com/vi/aVnE3HHbaQo/hqdefault.jpg", playlist: "https://youtu.be/aVnE3HHbaQo" },
  // --- END 250 SONGS ---

  { cover: "https://jaseman125.github.io/img/bricklink.png", playlist: "https://www.bricklink.com/aboutMe.asp?u=jaseman125" },
  { cover: "https://jaseman125.github.io/img/ebay.png", playlist: "https://www.ebay.co.uk/usr/jaseman125" },
  { cover: "https://jaseman125.github.io/img/home.png", playlist: "https://jaseman.com/" },
  { cover: "https://jaseman125.github.io/img/podcast.png", playlist: "https://www.youtube.com/watch?v=0UVUW11FENs&list=PLGnmo4N_SmKKj7XS6RQDUjXMzCNW08jW-" },
  { cover: "https://jaseman125.github.io/img/smule.png", playlist: "https://www.smule.com/jaseman125" },
  { cover: "https://jaseman125.github.io/img/youtube.png", playlist: "https://www.youtube.com/@jaseman" }
];

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