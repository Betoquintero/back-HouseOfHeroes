require('dotenv').config();
const mongoose = require('mongoose');
const Part = require ('../models/Part');
// Import the model

// Place the array you want to seed
const parts = [
  {
    "universe":"DC",
    "name": "Part 1",
    "order":"1",           
    "years": "1938-1986",            
    "events": ["631a5707bb8d5b65ade5ba25","631a56d7f083cc1721f32176", "631a56d7f083cc1721f32177" ],
    
    "description": "The first part of the order contains all the Pre-Crisis comics and ends with the Crisis on Infinite Earths event.  The beginning of the order starts off heavily with the Superman Family but gradually other characters are brought in.  A lot of the Golden and Silver age comics rely on extreme amounts of coincidence for their plots,  which doesn't always make for the easiest reading.  If you are mainly interested in the Post-Crisis DC Universe you should skip this part and begin reading at Part 2.",             
  },
  {
    "universe":"DC",
    "name": "Part 2",
    "order":"2",          
    "years": "1987-1990",            
    "events": ["631a56d7f083cc1721f32178", "631a56d7f083cc1721f32179", "631a56d7f083cc1721f3217a", "631a56d7f083cc1721f3217b", "631a56d7f083cc1721f3217c", "631a56d7f083cc1721f3217d", "631a56d7f083cc1721f3217e"],
    
    "description": "The beginning of the Post-Crisis era.  We start off with a high concentration of some of the most iconic Batman stories of all time;  Year One,  The Long Halloween,  Dark Victory,  Killing Joke,  and A Lonely Place of Dying.   Also featured is the excellent Man of Steel limited series and the Post-Crisis origins of many of the biggest DC superheroes.  Post-Crisis we also see the beginning of large crossover events.",           
  },
  {
    "universe":"DC",
    "name": "Part 3",
    "order":"3",           
    "years": "1991-1997",            
    "events": ["631a56d7f083cc1721f3217f", "631a56d7f083cc1721f32180", "631a56d7f083cc1721f32181", "631a56d7f083cc1721f32182", "631a56d7f083cc1721f32183", "631a56d7f083cc1721f32184", "631a56d7f083cc1721f32185", "631a56d7f083cc1721f32186", "631a56d7f083cc1721f32187", "631a56d7f083cc1721f32188", "631a56d7f083cc1721f32189", "631a56d7f083cc1721f3218a", "631a56d7f083cc1721f3218b", "631a56d7f083cc1721f3218c", "631a56d7f083cc1721f3218d", "631a56d7f083cc1721f3218e", "631a56d7f083cc1721f3218f", "631a56d7f083cc1721f32190", "631a56d7f083cc1721f32191", "631a56d8f083cc1721f32192"],
    
    "description": "Along with the annual crossover events we also see two of the biggest comic events of the 90's;  Death of Superman and the Knightfall Saga.  These two events helped fuel the speculator boom of the early 90's and ultimately played a significant part in the collapse of the comic book market.  The Batman: Contagion event marks the beginning of a series of events that will culminate in Batman: No Man's Land several years later.  Zero Hour is the second of DC's large “Crisis” events.",
  },
  {
    "universe":"DC",
    "name": "Part 4",
    "order":"4",           
    "years": "1997-2002",            
    "events": ["631a56d8f083cc1721f32193", "631a56d8f083cc1721f32194", "631a56d8f083cc1721f32195", "631a56d8f083cc1721f32196", "631a56d8f083cc1721f32197", "631a56d8f083cc1721f32198", "631a56d8f083cc1721f32199", "631a56d8f083cc1721f3219a", "631a56d8f083cc1721f3219b", "631a56d8f083cc1721f3219c", "631a56d8f083cc1721f3219d", "631a56d8f083cc1721f3219e"],
    
    "description": "This part of the reading order starts off with a revamped Justice League being written by Grant Morrison and also sees the return of the Justice Society.  The DC One Million event depicts the DC Universe 83,000 years in the future.  Gotham City continues to have a bad time in Batman: Cataclysm and the government finally says enough is enough in Batman: No Man's Land.",
  },
  {
    "universe":"DC",
    "name": "Part 5",
    "order":"5",           
    "years": "2000-2005",           
    "events": ["631a56d8f083cc1721f3219f", "631a56d8f083cc1721f321a0", "631a56d8f083cc1721f321a1", "631a56d8f083cc1721f321a2", "631a56d8f083cc1721f321a3"],
    
    "description": "The popular Batman storyline Hush takes place in this part of the order and we have an updated version of Superman's Post-Crisis origin with the the Superman: Birthright limited series.  The Dark Knight Returns and The Dark Knight Strikes Again are placed in this section since they have to appear somewhere.  We also have the excellent alternate universe Superman: Red Son limited series.",
  },
  {
    "universe":"DC",
    "name": "Part 6",
    "order":"6",          
    "years": "2005-2009",            
    "events": ["631a56d8f083cc1721f321a4", "631a56d8f083cc1721f321a5", "631a56d8f083cc1721f321a6", "631a56d8f083cc1721f321a7", "631a56d8f083cc1721f321a8", "631a56d8f083cc1721f321a9", "631a56d8f083cc1721f321aa", "631a56d8f083cc1721f321ab", "631a56d8f083cc1721f321ac", "631a56d8f083cc1721f321ad"],
    
    "description": "And here we go.  First up is Identity Crisis,  followed by the massive Countdown to Infinite Crisis and then the Infinite Crisis event itself.  This is followed by the 52 limited series and the One Year Later storylines,  which explore the changes in the status quo of various heroes after the Infinite Crisis event.  During the Countdown to Infinite Crisis we have the excellent Green Lantern: Rebirth limited series and the beginning of Geoff Johns epic run with the character.",
  },
  {
    "universe":"DC",
    "name": "Part 7",
    "order":"7",          
    "years": "2008-2011",            
    "events": ["631a56d8f083cc1721f321ae", "631a56d8f083cc1721f321af", "631a56d8f083cc1721f321b0", "631a56d8f083cc1721f321b1", "631a56d8f083cc1721f321b2", "631a56d8f083cc1721f321b3", "631a56d8f083cc1721f321b4", "631a56d8f083cc1721f321b5", "631a56d8f083cc1721f321b6"],
    
    "description": "We have yet another “Crisis” event with Final Crisis,  which has major repercussions within the Batman Family series of comics.  There are several huge events such as Blackest Night,  Brightest Day,  and Superman: New Krypton.  Then there is Flashpoint which radically changes the DC Universe and ushers in the New 52 era.",
  },
  {
    "universe":"DC",
    "name": "New 52",
    "order":"8",          
    "years": "2011-2015",            
    "events": ["631a56d8f083cc1721f321b7", "631a56d8f083cc1721f321b8", "631a56d8f083cc1721f321b9", "631a56d8f083cc1721f321ba", "631a56d8f083cc1721f321bb", "631a56d8f083cc1721f321bc", "631a56d8f083cc1721f321bd", "631a56d8f083cc1721f321be", "631a56d8f083cc1721f321bf", "631a56d8f083cc1721f321c0", "631a56d8f083cc1721f321c1", "631a56d8f083cc1721f321c2", "631a56d8f083cc1721f321c3", "631a56d8f083cc1721f321c4", "631a56d8f083cc1721f321c5", "631a56d8f083cc1721f321c6", "631a56d8f083cc1721f321c7", "631a56d8f083cc1721f321c8", "631a56d8f083cc1721f321c9", "631a56d8f083cc1721f321ca", "631a56d8f083cc1721f321cb", "631a56d8f083cc1721f321cc", "631a56d8f083cc1721f321cd", "631a56d8f083cc1721f321ce"],
    
    "description": "",
  },
  {
    "universe":"DC",
    "name": "DC You",
    "order":"9",         
    "years": "2015-2016",            
    "events": ["631a56d8f083cc1721f321cf", "631a56d8f083cc1721f321d0", "631a56d8f083cc1721f321d1", "631a56d8f083cc1721f321d2"],
    
    "description": "Welcome to the DC You Reading Order.  Following the Convergence event the New 52 branding was dropped from all DC comics and was replaced by the DC You branding.  DC You begins after the Convergence event and ends with DC Rebirth.",
  },
  {
    "universe":"DC",
    "name": "DC Rebirth",
    "order":"10",           
    "years": "2016-2021",            
    "events": ["631a56d8f083cc1721f321d3",  "631a56d8f083cc1721f321d4", "631a56d8f083cc1721f321d5", "631a56d8f083cc1721f321d6", "631a56d8f083cc1721f321d7", "631a56d8f083cc1721f321d8", "631a56d8f083cc1721f321d9", "631a56d8f083cc1721f321da", "631a56d8f083cc1721f321db", "631a56d8f083cc1721f321dc", "631a56d8f083cc1721f321dd", "631a56d8f083cc1721f321de", "631a56d8f083cc1721f321df", "631a56d8f083cc1721f321e0"],
    
    "description": "",
  },
  {
    "universe":"DC",
    "name": "Part 8",
    "order":"11",           
    "years": "2010-2021+",            
    "events": ["631a56d8f083cc1721f321e1", "631a56d8f083cc1721f321e2"],
    
    "description": "The New 52, DC You, and DC Rebirth reading orders only contain in-continuity comic issues. This part of the reading order is dedicated to the non-canon comics DC has released since 2011. Non-canon comics in the Infinite Frontier era will also be added to this reading order.",
  },
  {
    "universe":"DC",
    "name": "Infinite Frontier",
    "order":"11",         
    "years": "2010-2021+",            
    "events": ["631a56d8f083cc1721f321e3", "631a56d8f083cc1721f321e4", "631a56d8f083cc1721f321e5"],
    
    "description": "Infinite Frontier is the name of the new era of DC Comics, following DC Rebirth. Rather than serve as a line-wide reboot, Infinite Frontier keeps the previous stories canon, while making many of the pre-Flashpoint storylines canon too. It also focuses on new or reintroduced characters, while allowing writers more creative freedom in telling their stories.",
            
  },
  {
    "universe":"MARVEL",
    "name": "Part 1",
    "order":"1",              
    "years": "1961-1972", 
    
    
    "description": "Containing by far the most first appearances of significant characters of any Marvel era.  You will see how the biggest superheroes in the Marvel Universe received their superpowers and witness the foundation that decades of comics will be built on.  Witness the formation of the X-Men,  Fantastic Four,  and Avengers.  Like most Silver Age comics there are numerous guest appearances but few actual crossovers.  The beginning of the reading order features numerous limited series that take place chronologically before,  as well as during,  the earliest published Marvel comics.",
  },
  {
    "universe":"MARVEL",
    "name": "Part 2",
    "order":"2",              
    "years": "1972-1981",    
    "events": ["631a56d8f083cc1721f321e6", "631a56d8f083cc1721f321e7"],
    
    "description": "Containing the second most first appearances of significant characters,  we see the introduction of some extremely popular heroes,  especially among the X-Men.  We also see the first significant crossover when the Avengers battle the Defenders.  This part of the reading order also contains some of the most popular X-Men storylines of all time;  the Phoenix Saga,  Dark Phoenix Saga,  and Days of Future Past.",
  },
  {
      "universe":"MARVEL",
      "name": "Part 3",
      "order":"3",              
      "years": "1972-1981",    
      "events": ["631a56d8f083cc1721f321e8", "631a56d8f083cc1721f321e9", "631a56d8f083cc1721f321ea"],
      
      "description": "Here we see the birth of large scale crossover events.  Contest of Champions is Marvel's first Limited Series and serves as a sort of prototype for the line-wide crossovers to follow.  The original Secret Wars event is wildly successful and its less successful sequel comes out a year later.  The X-Men line expands with the introduction of X-Factor and the New Mutants.  The popular villain Apocalypse is introduced and we see the beginnings of the symbiote that will go one to become Venom.",
  },
  {
      "universe":"MARVEL",
      "name": "Part 4",
      "order":"4",              
      "years": "1986-1993",     
      "events": ["631a56d8f083cc1721f321eb", "631a56d8f083cc1721f321ec", "631a56d8f083cc1721f321ed", "631a56d8f083cc1721f321ee", "631a56d8f083cc1721f321ef", "631a56d8f083cc1721f321f0", "631a56d8f083cc1721f321f1", "631a56d8f083cc1721f321f2", "631a56d8f083cc1721f321f3", "631a56d8f083cc1721f321f4", "631a56d8f083cc1721f321f5", "631a56d8f083cc1721f321f6", "631a56d8f083cc1721f321f7", "631a56d8f083cc1721f321f8", "631a56d8f083cc1721f321f9"],
      
      "description": "Now we really see the crossover events swing into high gear.  The Infinity Gauntlet event takes place,  one of the greatest comic events ever.  Venom,  Gambit,  and the mutant group X-Force are introduced and prove to be immensely popular.  In the comic book business the speculator market is in full swing but its end is already in sight.",
  },
  {
      "universe":"MARVEL",
      "name": "Part 5",
      "order":"5",              
      "years": "1992-1999",    
      "events": ["631a56d8f083cc1721f321fa", "631a56d8f083cc1721f321fb", "631a56d8f083cc1721f321fc", "631a56d8f083cc1721f321fd", "631a56d8f083cc1721f321fe", "631a56d8f083cc1721f321ff", "631a56d8f083cc1721f32200", "631a56d8f083cc1721f32201", "631a56d8f083cc1721f32202", "631a56d8f083cc1721f32203", "631a56d8f083cc1721f32204", "631a56d8f083cc1721f32205", "631a56d8f083cc1721f32206", "631a56d8f083cc1721f32207", "631a56d8f083cc1721f32208", "631a56d8f083cc1721f32209", "631a56d8f083cc1721f3220a", "631a56d8f083cc1721f3220b", "631a56d8f083cc1721f3220c", "631a56d8f083cc1721f3220d", "631a56d8f083cc1721f3220e", "631a56d8f083cc1721f3220f", "631a56d8f083cc1721f32210", "631a56d8f083cc1721f32211", "631a56d8f083cc1721f32212"],
      
      "description": "The 90's “Dark Age of Comics” is in full swing.  If you are a fan of pouches you are in luck.  We see the seminal X-Men event Age of Apocalypse as well as the will-it-ever-end Spider-Man event Second Clone Saga.  The first of several Marvel Alternate Universes are printed in this era;  the futuristic Marvel 2099 and the MC2 universe,  which mainly featured Spider-Girl.  Near the end of this section we see many of the most popular and long-running Marvel series relaunched with new #1 issues that will serve as a good jumping on point for new readers.  In the comic business world the market crashes and the industry is devastated.",               
  },
  {
      "universe":"MARVEL",
      "name": "Part 6",
      "order":"6",              
      "years": "1999-2004",    
      "events": ["631a56d8f083cc1721f32213", "631a56d8f083cc1721f32214", "631a56d8f083cc1721f32215", "631a56d8f083cc1721f32216"],
      
      "description": "Here we see the start of Grant Morrison's work on the X-Men with New X-Men #114 which can be seen as the start of the “Modern Age of Marvel” and serves as an excellent point to begin reading Marvel comics as it forms the basis for the X-Men moving forward and the beginning of the modern mega events is just around the corner.",
  },
  {
      "universe":"MARVEL",
      "name": "Part 7",
      "order":"7",              
      "years": "2002-2007",    
      "events": ["631a56d8f083cc1721f32217", "631a56d8f083cc1721f32218", "631a56d8f083cc1721f32219", "631a56d8f083cc1721f3221a", "631a56d8f083cc1721f3221b"],
      
      "description": "The era of Marvel mega events starts here with the Avengers Disassembled event and the beginning of the New Avengers series.  Following that we have House of M which will have repercussions through the various X-Men books for years to come.  Garth Ennis' fantastic run on Punisher continues with Punisher Vol. 6 under the MAX imprint.",
  },
  {
      "universe":"MARVEL",
      "name": "Part 8",
      "order":"8",              
      "years": "2005-2009",   
      "events": ["631a56d8f083cc1721f3221c", "631a56d8f083cc1721f3221d", "631a56d8f083cc1721f3221e", "631a56d8f083cc1721f3221f", "631a56d8f083cc1721f32220", "631a56d8f083cc1721f32221",  "631a56d8f083cc1721f32222", "631a56d8f083cc1721f32223", "631a56d8f083cc1721f32224", "631a56d8f083cc1721f32225", "631a56d8f083cc1721f32226", "631a56d8f083cc1721f32227", "631a56d8f083cc1721f32228", "631a56d8f083cc1721f32229"],
      
      "description": "Start off with Civil War,  one of the biggest Marvel events ever,  and follow that with the excellent Planet Hulk and Annihilation events,  a string of X-Men events,  the Wolverine storyline Old Man Logan,  and then finish it all off with the massive Secret Invasion event and you have a packed reading order.  Unfortunately One More Day also takes place during this time.",
  },
  {
      "universe":"MARVEL",
      "name": "Part 9",
      "order":"9",              
      "years": "2009-2011",     
      "events": ["631a56d8f083cc1721f3222a", "631a56d8f083cc1721f3222b", "631a56d8f083cc1721f3222c", "631a56d8f083cc1721f3222d", "631a56d8f083cc1721f3222e", "631a56d8f083cc1721f3222f", "631a56d8f083cc1721f32230", "631a56d8f083cc1721f32231", "631a56d8f083cc1721f32232", "631a56d8f083cc1721f32233", "631a56d8f083cc1721f32234", "631a56d8f083cc1721f32235", "631a56d8f083cc1721f32236", "631a56d8f083cc1721f32237", "631a56d8f083cc1721f32238", "631a56d8f083cc1721f32239", "631a56d8f083cc1721f3223a"],
      
      "description": "The tightly packed events continue.  The cosmic saga of Marvel,  which is one of the highlights of recent Marvel history,  continues with War of Kings,  Realm of Kings,  and The Thanos Imperative.  The status quo after Secret Invasion is explored in the 300!? issue Dark Reign era.  Siege marks the culmination of events that started with Avengers Disassembled.",
  },
  {
      "universe":"MARVEL",
      "name": "Part 10",
      "order":"10",              
      "years": "2011-2012",     
      "events": ["631a56d8f083cc1721f3223b", "631a56d8f083cc1721f3223c", "631a56d8f083cc1721f3223d", "631a56d8f083cc1721f3223e", "631a56d8f083cc1721f3223f", "631a56d8f083cc1721f32240", "631a56d8f083cc1721f32241", "631a56d8f083cc1721f32242"],
      
      "description": "The X-Men split apart and then battle the Avengers.  In 2012 Marvel NOW! starts and provides an excellent starting point for readers new to Marvel comics.  Years of storylines culminate in the Secret Wars (2015) event which makes way for an All-New All-Different Marvel.",
  },
  {
      "universe":"MARVEL",
      "name": "Marvel NOW!",
      "order":"11",              
      "years": "2012-2016",     
      "events": ["631a56d8f083cc1721f32243", "631a56d8f083cc1721f32244", "631a56d8f083cc1721f32245", "631a56d8f083cc1721f32246", "631a56d8f083cc1721f32247", "631a56d8f083cc1721f32248", "631a56d8f083cc1721f32249", "631a56d8f083cc1721f3224a", "631a56d8f083cc1721f3224b", "631a56d8f083cc1721f3224c", "631a56d8f083cc1721f3224d", "631a56d8f083cc1721f3224e", "631a56d8f083cc1721f3224f"],
      
      "description": "Welcome to the Marvel NOW! Reading Order.  Marvel NOW! presents a shift in the Marvel Universe following the Avengers vs. X-Men event and was designed as a jumping on point for new readers and featured many changes to character status quos,  alter egos,  and costumes.  Marvel NOW! ended with the conclusion of the Secret Wars (2015) event and made way for All-New All-Different Marvel.",
  },
  {
      "universe":"MARVEL",
      "name": "All-New, All-Different Marvel",
      "order":"12",             
      "years": "2015-2018",     
      "events": ["631a56d8f083cc1721f32250", "631a56d8f083cc1721f32251", "631a56d8f083cc1721f32252", "631a56d8f083cc1721f32253", "631a56d8f083cc1721f32254", "631a56d8f083cc1721f32255", "631a56d8f083cc1721f32256", "631a56d8f083cc1721f32257"],
      
      "description": "Coming after the Secret Wars (2015) event is an All-New, All-Different Marvel;  meant to reveal the state of the post-Secret Wars Marvel Universe and provide a jumping on point for new readers.  Even though after the Civil War II event Marvel began to reuse the Marvel NOW! banner on comic books,  for simplicity's sake this reading order considers everything post-Secret Wars (2015) to the beginning of Marvel Legacy to be All-New, All-Different Marvel.",
  },
  {
      "universe":"MARVEL",
      "name": "Marvel Legacy",
      "order":"13",              
      "years": "2017-2018",     
      "events": ["631a56d8f083cc1721f32258", "631a56d8f083cc1721f32259", "631a56d8f083cc1721f3225a", "631a56d8f083cc1721f3225b"],
      
      "description": "A relaunch following the Secret Empire event, Marvel Legacy attempted to bring a greater focus to Marvel's core superheroes. It saw the return of Bruce Banner as Hulk, Tony Stark as Iron Man, and Thor Odinson reclaiming the hammer Mjolnir. Wolverine, Jean Grey, and Franklin and Valeria Richards are all back; while the Thing and Human Torch search for Sue and Reed Richards, who have been missing since Secret Wars.",
  },
  {
      "universe":"MARVEL",
      "name": "A Fresh Start",
      "order":"14",              
      "years": "2018-2019",     
      "events": ["631a56d8f083cc1721f3225c", "631a56d8f083cc1721f3225d", "631a56d8f083cc1721f3225e", "631a56d8f083cc1721f3225f", "631a56d8f083cc1721f32260"],
      
      "description": "A Fresh Start saw the return of Tony Stark, Steve Rogers, Logan, Odinson and Bruce Banner to their classic identities of Iron Man, Captain America, Wolverine, Thor and Hulk respectively. The War of the Realms event caps off a seven year run of Thor stories by Jason Aaron. Also Marvel decides to go overboard with all the limited series and one-shots.",
  },
  {
      "universe":"MARVEL",
      "name": "Part 11",
      "order":"15",              
      "years": "2019-2021",    
      "events": ["631a56d8f083cc1721f32261", "631a56d8f083cc1721f32262", "631a56d8f083cc1721f32263", "631a56d8f083cc1721f32264", "631a56d8f083cc1721f32265", "631a56d8f083cc1721f32266"],
      
      "description": "Continuing from A Fresh Start the Marvel Universe rolls on. A new era for the X-Men begins, overseen by Jonathan Hickman.",
  },
  {
      "universe":"MARVEL",
      "name": "Part 12",
      "order":"16",              
      "years": "2020-2022",     
      "events": ["631a56d8f083cc1721f32267", "631a56d8f083cc1721f32268", "631a56d8f083cc1721f32269"],
      
      "description": "",
  },
]


mongoose.connect(process.env.MONGO_URL)
  .then(x => console.log(`Connected to ${x.connection.name}`))
  .then(() => {
    return Part.create(parts)
  })
  .then(() => {
    console.log('Seed done 🌱');
  })
  .catch(e => console.log(e))
  .finally(() => {
    console.log('Closing connection');
    mongoose.connection.close();
  })

// Run npm run seed 