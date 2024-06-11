const teams = {
  "76ers": [
    { name: "Joel Embiid", position: "C", careerPoints: 11919 },
    { name: "Mo Bamba", position: "C", careerPoints: 2223 },
    { name: "Kenneth Lofton Jr", position: "PF", careerPoints: 161 },
    { name: "Nicolas Batum", position: "PF", careerPoints: 10844 },
    { name: "Robert Covington", position: "PF", careerPoints: 6637 },
    { name: "Tobias Harris", position: "PF", careerPoints: 14351 },
    { name: "Cameron Payne", position: "PG", careerPoints: 3003 },
    { name: "De'Anthony Melton", position: "PG", careerPoints: 3161 },
    { name: "Tyrese Maxey", position: "PG", careerPoints: 4448 },
    { name: "Kyle Lowry", position: "PG", careerPoints: 16074 },
    { name: "KJ Martin", position: "SF", careerPoints: 2303 },
    { name: "Paul Reed", position: "SF", careerPoints: 894 },
    { name: "Buddy Hield", position: "SG", careerPoints: 9587 },
    { name: "Kelly Oubre Jr", position: "SG", careerPoints: 7391 },
    { name: "Ricky Council IV", position: "SG", careerPoints: 119 },
    { name: "Terquavion Smith", position: "SG", careerPoints: 46 },
  ],
  Blazers: [
    { name: "Deandre Ayton", position: "C", careerPoints: 5618 },
    { name: "Duop Reath", position: "C", careerPoints: 428 },
    { name: "Ibou Badji", position: "C", careerPoints: 29 },
    { name: "Moses Brown", position: "C", careerPoints: 734 },
    { name: "Robert Williams III", position: "C", careerPoints: 1575 },
    { name: "Kris Murray", position: "PF", careerPoints: 169 },
    { name: "Jabari Walker", position: "PF", careerPoints: 689 },
    { name: "Malcolm Brogdon", position: "PG", careerPoints: 6772 },
    { name: "Scoot Henderson", position: "PG", careerPoints: 523 },
    { name: "Jerami Grant", position: "SF", careerPoints: 8717 },
    { name: "Justin Minaya", position: "SF", careerPoints: 38 },
    { name: "Toumani Camara", position: "SF", careerPoints: 415 },
    { name: "Dalano Banton", position: "SG", careerPoints: 503 },
    { name: "Rayan Rupert", position: "SG", careerPoints: 60 },
    { name: "Shaedon Sharpe", position: "SG", careerPoints: 1299 },
    { name: "Anfernee Simons", position: "SG", careerPoints: 4289 },
    { name: "Matisse Thybulle", position: "SG", careerPoints: 1534 },
  ],
  Bucks: [
    { name: "Brook Lopez", position: "C", careerPoints: 16232 },
    { name: "Giannis Antetokounmpo", position: "PF", careerPoints: 18099 },
    { name: "Jae Crowder", position: "PF", careerPoints: 7376 },
    { name: "Bobby Portis", position: "PF", careerPoints: 6822 },
    { name: "Patrick Beverley", position: "PG", careerPoints: 5427 },
    { name: "Damian Lillard", position: "PG", careerPoints: 20774 },
    { name: "TyTy Washington Jr", position: "PG", careerPoints: 148 },
    { name: "MarJon Beauchamp", position: "SF", careerPoints: 461 },
    { name: "Thanasis Antetokounmpo", position: "SF", careerPoints: 473 },
    { name: "Chris Livingston", position: "SF", careerPoints: 17 },
    { name: "Khris Middleton", position: "SF", careerPoints: 12269 },
    { name: "Malik Beasley", position: "SG", careerPoints: 5197 },
    { name: "AJ Green", position: "SG", careerPoints: 334 },
    { name: "Pat Connaughton", position: "SG", careerPoints: 3239 },
    { name: "Andre Jackson Jr", position: "SG", careerPoints: 115 },
  ],
  Bulls: [
    { name: "Adama Sanogo", position: "C", careerPoints: 8 },
    { name: "Andre Drummond", position: "C", careerPoints: 10849 },
    { name: "Nikola Vucevic", position: "C", careerPoints: 14993 },
    { name: "Patrick Williams", position: "PF", careerPoints: 2070 },
    { name: "Coby White", position: "PG", careerPoints: 4583 },
    { name: "Jevon Carter", position: "PG", careerPoints: 1916 },
    { name: "Lonzo Ball", position: "PG", careerPoints: 2995 },
    { name: "Dalen Terry", position: "SF", careerPoints: 180 },
    { name: "DeMar DeRozan", position: "SF", careerPoints: 23035 },
    { name: "Julian Phillips", position: "SF", careerPoints: 69 },
    { name: "Onuralp Bitim", position: "SF", careerPoints: 17 },
    { name: "Terry Taylor", position: "SF", careerPoints: 445 },
    { name: "Torrey Craig", position: "SF", careerPoints: 2486 },
    { name: "Alex Caruso", position: "SG", careerPoints: 2261 },
    { name: "Ayo Dosunmu", position: "SG", careerPoints: 2002 },
    { name: "Zach Lavine", position: "SG", careerPoints: 11866 },
  ],
  Cavaliers: [
    { name: "Damian Jones", position: "C", careerPoints: 1305 },
    { name: "Jarrett Allen", position: "C", careerPoints: 5782 },
    { name: "Dean Wade", position: "PF", careerPoints: 1130 },
    { name: "Evan Mobley", position: "PF", careerPoints: 2900 },
    { name: "Isaiah Mobley", position: "PF", careerPoints: 36 },
    { name: "Craig Porter Jr", position: "PG", careerPoints: 219 },
    { name: "Darius Garland", position: "PG", careerPoints: 5294 },
    { name: "Emoni Bates", position: "SF", careerPoints: 18 },
    { name: "Georges Niang", position: "SF", careerPoints: 3008 },
    { name: "Isaac Okoro", position: "SF", careerPoints: 2205 },
    { name: "Caris LeVert", position: "SG", careerPoints: 6221 },
    { name: "Donovan Mitchell", position: "SG", careerPoints: 11471 },
    { name: "Max Strus", position: "SG", careerPoints: 2617 },
    { name: "Sam Merrill", position: "SG", careerPoints: 478 },
    { name: "Ty Jerome", position: "SG", careerPoints: 1108 },
    { name: "Zhaire Smith", position: "SG", careerPoints: 48 },
  ],
  Celtics: [
    { name: "Al Horford", position: "C", careerPoints: 14001 },
    { name: "Kristaps Porzingis", position: "C", careerPoints: 8768 },
    { name: "Luke Kornet", position: "C", careerPoints: 1277 },
    { name: "Neemias Queta", position: "C", careerPoints: 170 },
    { name: "Drew Peterson", position: "PF", careerPoints: 3 },
    { name: "Derrick White", position: "PG", careerPoints: 4912 },
    { name: "Jaden Springer", position: "PG", careerPoints: 176 },
    { name: "Jrue Holiday", position: "PG", careerPoints: 15584 },
    { name: "Payton Pritchard", position: "PG", careerPoints: 1711 },
    { name: "Jayson Tatum", position: "SF", careerPoints: 11408 },
    { name: "Oshae Brissett", position: "SF", careerPoints: 1425 },
    { name: "Sam Hauser", position: "SF", careerPoints: 1044 },
    { name: "Xavier Tillman", position: "SF", careerPoints: 1290 },
    { name: "Jaylen Brown", position: "SG", careerPoints: 9663 },
    { name: "JD Davison", position: "SG", careerPoints: 21 },
    { name: "Jordan Walsh", position: "SG", careerPoints: 2 },
    { name: "Svi Mykhailiuk", position: "SG", careerPoints: 1747 },
  ],
  Clippers: [
    { name: "Daniel Theis", position: "C", careerPoints: 2652 },
    { name: "Ivica Zubac", position: "C", careerPoints: 4377 },
    { name: "Mason Plumlee", position: "C", careerPoints: 6511 },
    { name: "Moussa Diabate", position: "PF", careerPoints: 88 },
    { name: "PJ Tucker", position: "PF", careerPoints: 5822 },
    { name: "Bones Hyland", position: "PG", careerPoints: 1482 },
    { name: "Russell Westbrook", position: "PG", careerPoints: 25098 },
    { name: "Xavier Moon", position: "PG", careerPoints: 67 },
    { name: "Kawhi Leonard", position: "SF", careerPoints: 13645 },
    { name: "Paul George", position: "SF", careerPoints: 17578 },
    { name: "Amir Coffey", position: "S", careerPoints: 1282 },
    { name: "Brandon Boston Jr", position: "SG", careerPoints: 558 },
    { name: "James Harden", position: "SG", careerPoints: 25661 },
    { name: "Joshua Primo", position: "SG", careerPoints: 318 },
    { name: "Kobe Brown", position: "SG", careerPoints: 61 },
    { name: "Norman Powell", position: "SG", careerPoints: 6598 },
    { name: "Terance Mann", position: "SG", careerPoints: 2588 },
  ],
  Grizzlies: [
    { name: "Trey Jemison", position: "C", careerPoints: 55 },
    { name: "Brandon Clarke", position: "PF", careerPoints: 2534 },
    { name: "Jaren Jackson Jr", position: "PF", careerPoints: 5603 },
    { name: "Lamar Stevens", position: "PF", careerPoints: 1034 },
    { name: "Matt Hurt", position: "PF", careerPoints: 32 },
    { name: "Santi Aldama", position: "PF", careerPoints: 1349 },
    { name: "GG Jackson", position: "PF", careerPoints: 326 },
    { name: "Derrick Rose", position: "PG", careerPoints: 12573 },
    { name: "Ja Morant", position: "PG", careerPoints: 5783 },
    { name: "Jacob Gilyard", position: "PG", careerPoints: 176 },
    { name: "Scotty Pippen Jr", position: "PG", careerPoints: 98 },
    { name: "Jake LaRavia", position: "SF", careerPoints: 204 },
    { name: "Yuta Watanabe", position: "SF", careerPoints: 895 },
    { name: "Ziaire Williams", position: "SF", careerPoints: 1131 },
    { name: "Desmond Bane", position: "SG", careerPoints: 4160 },
    { name: "John Konchar", position: "SG", careerPoints: 1141 },
    { name: "Luke Kennard", position: "SG", careerPoints: 3853 },
    { name: "Vince Williams Jr", position: "SG", careerPoints: 520 },
  ],
  Hawks: [
    { name: "Saddiq Bey", position: "SF", careerPoints: 4046 },
    { name: "Bogdan Bogdanovic", position: "SG", careerPoints: 6227 },
    { name: "Kobe Bufkin", position: "PG", careerPoints: 33 },
    { name: "Clint Capela", position: "C", careerPoints: 7205 },
    { name: "Bruno Fernando", position: "PF", careerPoints: 643 },
    { name: "Trent Forrest", position: "SG", careerPoints: 375 },
    { name: "AJ Griffin", position: "SF", careerPoints: 676 },
    { name: "Mouhamed Gueye", position: "PF", careerPoints: 0 },
    { name: "De'Andre Hunter", position: "SF", careerPoints: 3409 },
    { name: "Onyeka Okongwu", position: "PF", careerPoints: 1953 },
    { name: "Trae Young", position: "PG", careerPoints: 10334 },
    { name: "Patty Mills", position: "PG", careerPoints: 7817 },
    { name: "Jalen Johnson", position: "SF", careerPoints: 1166 },
    { name: "Dejounte Murray", position: "SG", careerPoints: 6737 },
    { name: "Garrison Mathews", position: "SG", careerPoints: 1511 },
    { name: "Seth Lundy", position: "SG", careerPoints: 14 },
    { name: "Vit Krejci", position: "SG", careerPoints: 223 },
    { name: "Wesley Matthews", position: "SG", careerPoints: 11154 },
  ],
  Heat: [
    { name: "Bam Adebayo", position: "C", careerPoints: 7166 },
    { name: "Orlando Robinson", position: "C", careerPoints: 205 },
    { name: "Thomas Bryant", position: "C", careerPoints: 2418 },
    { name: "Cole Swider", position: "PF", careerPoints: 34 },
    { name: "Kevin Love", position: "PF", careerPoints: 15239 },
    { name: "Nikola Jovic", position: "PF", careerPoints: 239 },
    { name: "Dru Smith", position: "PG", careerPoints: 83 },
    { name: "Tyler Herro", position: "PG", careerPoints: 5021 },
    { name: "Caleb Martin", position: "SF", careerPoints: 2053 },
    { name: "Duncan Robinson", position: "SF", careerPoints: 3835 },
    { name: "Haywood Highsmith", position: "SF", careerPoints: 547 },
    { name: "Jamal Cain", position: "SF", careerPoints: 182 },
    { name: "Jimmy Butler", position: "SF", careerPoints: 14583 },
    { name: "Delon Wright", position: "SG", careerPoints: 3470 },
    { name: "Jaime Jaquez Jr", position: "SG", careerPoints: 686 },
    { name: "Josh Richardson", position: "SG", careerPoints: 6349 },
    { name: "Terry Rozier", position: "SG", careerPoints: 8242 },
  ],
  Hornets: [
    { name: "Mark Williams", position: "C", careerPoints: 629 },
    { name: "Nathan Mensah", position: "C", careerPoints: 33 },
    { name: "Nick Richards", position: "C", careerPoints: 1208 },
    { name: "Grant Williams", position: "PF", careerPoints: 2298 },
    { name: "JT Thor", position: "PF", careerPoints: 459 },
    { name: "Frank Ntilikina", position: "PG", careerPoints: 1535 },
    { name: "Ish Smith", position: "PG", careerPoints: 5712 },
    { name: "LaMelo Ball", position: "PG", careerPoints: 3675 },
    { name: "Seth Curry", position: "PG", careerPoints: 5032 },
    { name: "Tre Mann", position: "PG", careerPoints: 1301 },
    { name: "Vasilije Micic", position: "PG", careerPoints: 186 },
    { name: "Brandon Miller", position: "SF", careerPoints: 903 },
    { name: "Cody Martin", position: "SF", careerPoints: 1235 },
    { name: "Davis Bertans", position: "SF", careerPoints: 3487 },
    { name: "Leaky Black", position: "SF", careerPoints: 50 },
    { name: "Miles Bridges", position: "SF", careerPoints: 4961 },
    { name: "Amari Bailey", position: "SG", careerPoints: 5 },
    { name: "Bryce McGowens", position: "SG", careerPoints: 503 },
    { name: "James Bouknight", position: "SG", careerPoints: 383 },
    { name: "Nick Smith Jr", position: "SG", careerPoints: 238 },
  ],
  Jazz: [
    { name: "Micah Potter", position: "C", careerPoints: 36 },
    { name: "Omer Yurtseven", position: "C", careerPoints: 439 },
    { name: "Walker Kessler", position: "C", careerPoints: 1111 },
    { name: "John Collins", position: "PF", careerPoints: 6602 },
    { name: "Lauri Markkanen", position: "PF", careerPoints: 7206 },
    { name: "Luka Samanic", position: "PF", careerPoints: 289 },
    { name: "Taylor Hendricks", position: "PF", careerPoints: 134 },
    { name: "Collin Sexton", position: "PG", careerPoints: 6163 },
    { name: "Jason Preston", position: "PG", careerPoints: 41 },
    { name: "Jordan Clarkson", position: "PG", careerPoints: 11367 },
    { name: "Kira Lewis Jr", position: "PG", careerPoints: 644 },
    { name: "Kris Dunn", position: "PG", careerPoints: 2574 },
    { name: "Brice Sensabaugh", position: "SF", careerPoints: 41 },
    { name: "Otto Porter Jr", position: "SF", careerPoints: 5419 },
    { name: "Johnny Juzang", position: "SG", careerPoints: 97 },
    { name: "Keyonte George", position: "SG", careerPoints: 670 },
    { name: "Talen Horton-Tucker", position: "SG", careerPoints: 2313 },
  ],
  Kings: [
    { name: "Alex Len", position: "C", careerPoints: 4483 },
    { name: "JaVale McGee", position: "C", careerPoints: 6893 },
    { name: "Domantas Sabonis", position: "PF", careerPoints: 8664 },
    { name: "Sasha Vezenkov", position: "PF", careerPoints: 196 },
    { name: "Trey Lyles", position: "PF", careerPoints: 4393 },
    { name: "Davion Mitchell", position: "PG", careerPoints: 1519 },
    { name: "De'Aaron Fox", position: "PG", careerPoints: 9366 },
    { name: "Jordan Ford", position: "PG", careerPoints: 12 },
    { name: "Keon Ellis", position: "PG", careerPoints: 140 },
    { name: "Harrison Barnes", position: "SF", careerPoints: 12524 },
    { name: "Jalen Slawson", position: "SF", careerPoints: 4 },
    { name: "Keegan Murray", position: "SF", careerPoints: 1820 },
    { name: "Kessler Edwards", position: "SF", careerPoints: 442 },
    { name: "Chris Duarte", position: "SG", careerPoints: 1255 },
    { name: "Colby Jones", position: "SG", careerPoints: 37 },
    { name: "Kevin Huerter", position: "SG", careerPoints: 4901 },
    { name: "Malik Monk", position: "SG", careerPoints: 5124 },
    { name: "Mason Jones", position: "SG", careerPoints: 196 },
  ],
  Knicks: [
    { name: "Isaiah Hartenstein", position: "C", careerPoints: 1748 },
    { name: "Jericho Sims", position: "C", careerPoints: 347 },
    { name: "Mitchell Robinson", position: "C", careerPoints: 2506 },
    { name: "Julius Randle", position: "PF", careerPoints: 12229 },
    { name: "Precious Achiuwa", position: "PF", careerPoints: 1914 },
    { name: "Taj Gibson", position: "PF", careerPoints: 8272 },
    { name: "Duane Washington Jr", position: "PG", careerPoints: 717 },
    { name: "Jalen Brunson", position: "PG", careerPoints: 6470 },
    { name: "Miles McBride", position: "PG", careerPoints: 616 },
    { name: "Bojan Bogdanovic", position: "SF", careerPoints: 10994 },
    { name: "OG Anunoby", position: "SF", careerPoints: 4895 },
    { name: "Alec Burks", position: "SG", careerPoints: 7917 },
    { name: "Charlie Brown Jr", position: "SG", careerPoints: 96 },
    { name: "DaQuan Jeffries", position: "SG", careerPoints: 190 },
    { name: "Donte DiVincenzo", position: "SG", careerPoints: 3340 },
    { name: "Josh Hart", position: "SG", careerPoints: 4182 },
  ],
  Lakers: [
    { name: "Colin Castleton", position: "C", careerPoints: 18 },
    { name: "Jaxson Hayes", position: "C", careerPoints: 2002 },
    { name: "Anthony Davis", position: "PF", careerPoints: 17313 },
    { name: "Christian Wood", position: "PF", careerPoints: 4617 },
    { name: "Jarred Vanderbilt", position: "PF", careerPoints: 1661 },
    { name: "Rui Hachimura", position: "PF", careerPoints: 3216 },
    { name: "Taurean Prince", position: "PF", careerPoints: 4946 },
    { name: "D'Angelo Russell", position: "PG", careerPoints: 9800 },
    { name: "Gabe Vincent", position: "PG", careerPoints: 1523 },
    { name: "Spencer Dinwiddle", position: "PG", careerPoints: 7061 },
    { name: "Cam Reddish", position: "SF", careerPoints: 2028 },
    { name: "Lebron James", position: "SF", careerPoints: 40036 },
    { name: "Austin Reaves", position: "SG", careerPoints: 2263 },
    { name: "Dylan Windler", position: "SG", careerPoints: 291 },
    { name: "Max Christie", position: "SG", careerPoints: 366 },
    { name: "Skylar Mays", position: "SG", careerPoints: 449 },
  ],
  Magic: [
    { name: "Goga Bitadze", position: "C", careerPoints: 1201 },
    { name: "Moritz Wagner", position: "C", careerPoints: 2738 },
    { name: "Wendell Carter Jr", position: "C", careerPoints: 3751 },
    { name: "Chuma Okeke", position: "PF", careerPoints: 1183 },
    { name: "Jonathan Isaac", position: "PF", careerPoints: 1572 },
    { name: "Paolo Banchero", position: "PF", careerPoints: 2787 },
    { name: "Anthony Black", position: "PG", careerPoints: 272 },
    { name: "Cole Anthony", position: "PG", careerPoints: 3153 },
    { name: "Markelle Fultz", position: "PG", careerPoints: 2474 },
    { name: "Admiral Schofield", position: "SF", careerPoints: 415 },
    { name: "Caleb Houstan", position: "SF", careerPoints: 407 },
    { name: "Franz Wagner", position: "SF", careerPoints: 3768 },
    { name: "Gary Harris", position: "SG", careerPoints: 6196 },
    { name: "Jalen Suggs", position: "SG", careerPoints: 1775 },
    { name: "Jett Howard", position: "SG", careerPoints: 23 },
    { name: "Joe Ingles", position: "SG", careerPoints: 5627 },
    { name: "Trevelin Queen", position: "SG", careerPoints: 104 },
  ],
  Mavericks: [
    { name: "Daniel Gafford", position: "C", careerPoints: 2546 },
    { name: "Dereck Lively II", position: "C", careerPoints: 385 },
    { name: "Dwight Powell", position: "C", careerPoints: 4627 },
    { name: "Greg Brown III", position: "PF", careerPoints: 268 },
    { name: "Markieff Morris", position: "PF", careerPoints: 7999 },
    { name: "Maxi Kleber", position: "PF", careerPoints: 2652 },
    { name: "Olivier-Maxence_Prosper", position: "PF", careerPoints: 83 },
    { name: "PJ Washington", position: "PF", careerPoints: 4050 },
    { name: "Jaden Hardy", position: "PG", careerPoints: 842 },
    { name: "Kyrie Irving", position: "PG", careerPoints: 16716 },
    { name: "Luka Doncic", position: "PG", careerPoints: 10930 },
    { name: "Derrick Jones Jr", position: "SF", careerPoints: 2664 },
    { name: "Tim Hardaway Jr", position: "SF", careerPoints: 10122 },
    { name: "AJ Lawson", position: "SG", careerPoints: 161 },
    { name: "Dante Exum", position: "SG", careerPoints: 1693 },
    { name: "Josh Green", position: "SG", careerPoints: 1390 },
  ],
  Nets: [
    { name: "Day'Ron Sharpe", position: "C", careerPoints: 762 },
    { name: "Nic Claxton", position: "C", careerPoints: 2261 },
    { name: "Dorian Finney-Smith", position: "PF", careerPoints: 4229 },
    { name: "Noah Clowney", position: "PF", careerPoints: 29 },
    { name: "Trendon Watford", position: "PF", careerPoints: 1075 },
    { name: "Ben Simmons", position: "PG", careerPoints: 4765 },
    { name: "Dennis Schroder", position: "PG", careerPoints: 10458 },
    { name: "Dennis Smith Jr", position: "PG", careerPoints: 3096 },
    { name: "Cameron Johnson", position: "SF", careerPoints: 3217 },
    { name: "Keita Bates-Diop", position: "SF", careerPoints: 1691 },
    { name: "Mikal Bridges", position: "SF", careerPoints: 6442 },
    { name: "Cam Thomas", position: "SG", careerPoints: 2177 },
    { name: "Keon Johnson", position: "SG", careerPoints: 484 },
    { name: "Lonnie Walker IV", position: "SG", careerPoints: 3055 },
  ],
  Nuggets: [
    { name: "DeAndre Jordan", position: "C", careerPoints: 9250 },
    { name: "Jay Huff", position: "C", careerPoints: 68 },
    { name: "Nikola Jokic", position: "C", careerPoints: 13585 },
    { name: "Aaron Gordon", position: "PF", careerPoints: 8766 },
    { name: "Hunter Tyson", position: "PF", careerPoints: 5 },
    { name: "Zeke Nnaji", position: "PF", careerPoints: 835 },
    { name: "Jamal Murray", position: "PG", careerPoints: 7864 },
    { name: "Reggie Jackson", position: "PG", careerPoints: 10508 },
    { name: "Braxton Key", position: "SF", careerPoints: 100 },
    { name: "Justin Holiday", position: "SF", careerPoints: 5360 },
    { name: "Michael Porter Jr", position: "SF", careerPoints: 3838 },
    { name: "Peyton Watson", position: "SF", careerPoints: 474 },
    { name: "Vlatko Cancar", position: "SF", careerPoints: 461 },
    { name: "Christian Braun", position: "SG", careerPoints: 774 },
    { name: "Jalen Pickett", position: "SG", careerPoints: 34 },
    { name: "Julian Strawther", position: "SG", careerPoints: 206 },
    { name: "Kentavious Caldwell-Pope", position: "SG", careerPoints: 9291 },
  ],
  Pacers: [
    { name: "Myles Turner", position: "C", careerPoints: 7596 },
    { name: "Oscar Tshiebwe", position: "C", careerPoints: 26 },
    { name: "Jalen Smith", position: "PF", careerPoints: 1607 },
    { name: "James Johnson", position: "PF", careerPoints: 5820 },
    { name: "Jarace Walker", position: "PF", careerPoints: 80 },
    { name: "Obi Toppin", position: "PF", careerPoints: 2039 },
    { name: "Pascal Siakam", position: "PF", careerPoints: 9312 },
    { name: "Andrew Nembhard", position: "PG", careerPoints: 1148 },
    { name: "TJ McConnell", position: "PG", careerPoints: 4398 },
    { name: "Tyrese Haliburton", position: "PG", careerPoints: 4113 },
    { name: "Aaron Nesmith", position: "SF", careerPoints: 1809 },
    { name: "Doug McDermott", position: "SF", careerPoints: 5795 },
    { name: "Isaiah Jackson", position: "SF", careerPoints: 1075 },
    { name: "Ben Sheppard", position: "SG", careerPoints: 142 },
    { name: "Bennedict Mathurin", position: "SG", careerPoints: 2139 },
  ],
  Pelicans: [
    { name: "Cody Zeller", position: "C", careerPoints: 4368 },
    { name: "Jonas Valanciunas", position: "C", careerPoints: 11257 },
    { name: "Jeremiah Robinson-Earl", position: "PF", careerPoints: 752 },
    { name: "Larry Nance Jr", position: "PF", careerPoints: 3879 },
    { name: "Zion Williamson", position: "PF", careerPoints: 4048 },
    { name: "Dyson Daniels", position: "PG", careerPoints: 515 },
    { name: "Jose Alvarado", position: "PG", careerPoints: 1161 },
    { name: "Brandon Ingram", position: "SF", careerPoints: 9127 },
    { name: "EJ Liddell", position: "SF", careerPoints: 4 },
    { name: "Herbert Jones", position: "SF", careerPoints: 2027 },
    { name: "Matt Ryan", position: "SF", careerPoints: 266 },
    { name: "Naji Marshall", position: "SF", careerPoints: 1597 },
    { name: "CJ McCollum", position: "SG", careerPoints: 13756 },
    { name: "Dereon Seabron", position: "SG", careerPoints: 18 },
    { name: "Jordan Hawkins", position: "SG", careerPoints: 500 },
    { name: "Malcolm Hill", position: "SG", careerPoints: 77 },
    { name: "Trey Murphy III", position: "SG", careerPoints: 1955 },
  ],
  Pistons: [
    { name: "Isaiah Stewart", position: "C", careerPoints: 2116 },
    { name: "Jalen Duren", position: "C", careerPoints: 1238 },
    { name: "James Wiseman", position: "C", careerPoints: 1137 },
    { name: "Mike Muscala", position: "C", careerPoints: 3194 },
    { name: "Danilo Gallinari", position: "PF", careerPoints: 11574 },
    { name: "Cade Cunningham", position: "PG", careerPoints: 2462 },
    { name: "Jaden Ivey", position: "PG", careerPoints: 2046 },
    { name: "Malachi Flynn", position: "PG", careerPoints: 1004 },
    { name: "Marcus Sasser", position: "PG", careerPoints: 386 },
    { name: "Ausar Thompson", position: "SF", careerPoints: 529 },
    { name: "Simone Fontecchio", position: "SF", careerPoints: 901 },
    { name: "Troy Brown Jr", position: "SF", careerPoints: 2128 },
    { name: "Evan Fournier", position: "SG", careerPoints: 9472 },
    { name: "Quentin Grimes", position: "SG", careerPoints: 1422 },
    { name: "Shake Milton", position: "SG", careerPoints: 2573 },
  ],
  Raptors: [
    { name: "Christian Koloko", position: "C", careerPoints: 182 },
    { name: "Jakob Poeltl", position: "C", careerPoints: 4487 },
    { name: "Jontay Porter", position: "C", careerPoints: 97 },
    { name: "Chris Boucher", position: "PF", careerPoints: 3083 },
    { name: "Jalen McDaniels", position: "PF", careerPoints: 1625 },
    { name: "Justise Winslow", position: "PF", careerPoints: 2829 },
    { name: "Kelly Olynyk", position: "PF", careerPoints: 7485 },
    { name: "Immanuel Quickley", position: "PG", careerPoints: 3725 },
    { name: "Bruce Brown", position: "SF", careerPoints: 4540 },
    { name: "Garrett Temple", position: "SF", careerPoints: 4464 },
    { name: "Jordan Nwora", position: "SF", careerPoints: 1373 },
    { name: "Scottie Barnes", position: "SF", careerPoints: 3504 },
    { name: "Gary Trent Jr", position: "SG", careerPoints: 4559 },
    { name: "Gradey Dick", position: "SG", careerPoints: 259 },
    { name: "Ochai Agbaji", position: "SG", careerPoints: 798 },
    { name: "RJ Barrett", position: "SG", careerPoints: 5872 },
  ],
  Rockets: [
    { name: "Alperen Sengun", position: "C", careerPoints: 3031 },
    { name: "Boban Marjanovic", position: "C", careerPoints: 1813 },
    { name: "Jock Landale", position: "C", careerPoints: 798 },
    { name: "Steven Adams", position: "C", careerPoints: 6518 },
    { name: "Jabari Smith Jr", position: "PF", careerPoints: 1749 },
    { name: "Jeff Green", position: "PF", careerPoints: 14083 },
    { name: "Tari Eason", position: "PF", careerPoints: 975 },
    { name: "Aaron Holiday", position: "PG", careerPoints: 2433 },
    { name: "Fred VanVleet", position: "PG", careerPoints: 6965 },
    { name: "Amen Thompson", position: "SF", careerPoints: 319 },
    { name: "Cam Whitmore", position: "SF", careerPoints: 401 },
    { name: "Dillon Brooks", position: "SF", careerPoints: 5688 },
    { name: "Jae'Sean Tate", position: "SF", careerPoints: 2225 },
    { name: "Jermaine Samuels Jr", position: "SF", careerPoints: 18 },
    { name: "Reggie Bullock Jr", position: "SF", careerPoints: 4002 },
    { name: "Jalen Green", position: "SG", careerPoints: 3931 },
    { name: "Nate Williams", position: "SG", careerPoints: 86 },
  ],
  Spurs: [
    { name: "Charles Bassey", position: "C", careerPoints: 331 },
    { name: "Victor Wembanyama", position: "C", careerPoints: 1150 },
    { name: "Jeremy Sochan", position: "PF", careerPoints: 1305 },
    { name: "Marcus Morris Sr", position: "PF", careerPoints: 9896 },
    { name: "Sandro Mamukelashvili", position: "PF", careerPoints: 499 },
    { name: "Zach Collins", position: "PF", careerPoints: 2386 },
    { name: "Devonte Graham", position: "PG", careerPoints: 3654 },
    { name: "Tre Jones", position: "PG", careerPoints: 1926 },
    { name: "Cedi Osman", position: "SF", careerPoints: 4351 },
    { name: "Julian Champagnie", position: "SF", careerPoints: 474 },
    { name: "Keldon Johnson", position: "SF", careerPoints: 4597 },
    { name: "Blake Wesley", position: "SG", careerPoints: 344 },
    { name: "Devin_Vassell", position: "SG", careerPoints: 2994 },
    { name: "Malaki Branham", position: "SG", careerPoints: 1147 },
  ],
  Suns: [
    { name: "Bol Bol", position: "C", careerPoints: 897 },
    { name: "Jusuf Nurkic", position: "C", careerPoints: 6384 },
    { name: "Udoka Azubuike", position: "C", careerPoints: 256 },
    { name: "Drew Eubanks", position: "PF", careerPoints: 1823 },
    { name: "Kevin Durant", position: "PF", careerPoints: 28392 },
    { name: "Royce O'Neale", position: "PF", careerPoints: 3412 },
    { name: "Thaddeus Young", position: "PF", careerPoints: 14208 },
    { name: "Saben Lee", position: "PG", careerPoints: 688 },
    { name: "Theo Maledon", position: "PG", careerPoints: 1373 },
    { name: "David Roddy", position: "SF", careerPoints: 874 },
    { name: "Josh Okogie", position: "SF", careerPoints: 2348 },
    { name: "Nassir Little", position: "SF", careerPoints: 1295 },
    { name: "Bradley Beal", position: "SG", careerPoints: 15975 },
    { name: "Damion Lee", position: "SG", careerPoints: 2384 },
    { name: "Devin Booker", position: "SG", careerPoints: 14065 },
    { name: "Eric Gordon", position: "SG", careerPoints: 13745 },
    { name: "Grayson Allen", position: "SG", careerPoints: 3249 },
  ],
  Thunder: [
    { name: "Bismack Biyombo", position: "C", careerPoints: 4235 },
    { name: "Olivier Sarr", position: "C", careerPoints: 223 },
    { name: "Aleksej Pokusevski", position: "PF", careerPoints: 1119 },
    { name: "Chet Holmgren", position: "PF", careerPoints: 1044 },
    { name: "Jaylin Williams", position: "PF", careerPoints: 479 },
    { name: "Ousmane Dieng", position: "PF", careerPoints: 313 },
    { name: "Cason Wallace", position: "PG", careerPoints: 410 },
    { name: "Shai Gilgeous-Alexander", position: "PG", careerPoints: 8419 },
    { name: "Gordon Hayward", position: "SF", careerPoints: 12566 },
    { name: "Jalen Williams", position: "SF", careerPoints: 2107 },
    { name: "Kenrich Williams", position: "SF", careerPoints: 1939 },
    { name: "Keyontae Johnson", position: "SF", careerPoints: 11 },
    { name: "Lindy Waters III", position: "SF", careerPoints: 483 },
    { name: "Aaron Wiggins", position: "SG", careerPoints: 1259 },
    { name: "Isaiah Joe", position: "SG", careerPoints: 1513 },
    { name: "Josh Giddey", position: "SG", careerPoints: 2606 },
    { name: "Luguentz Dort", position: "SG", careerPoints: 3499 },
  ],
  Timberwolves: [
    { name: "Karl-Anthony Towns", position: "C", careerPoints: 13100 },
    { name: "Luka Garza", position: "C", careerPoints: 400 },
    { name: "Naz Reid", position: "C", careerPoints: 3232 },
    { name: "Rudy Gobert", position: "C", careerPoints: 9359 },
    { name: "Jaden McDaniels", position: "PF", careerPoints: 2571 },
    { name: "Josh Minott", position: "PF", careerPoints: 79 },
    { name: "Leonard Miller", position: "PF", careerPoints: 15 },
    { name: "Jordan McLaughlin", position: "PG", careerPoints: 976 },
    { name: "Mike Conley", position: "PG", careerPoints: 15624 },
    { name: "Monte Morris", position: "PG", careerPoints: 3666 },
    { name: "Kyle Anderson", position: "SF", careerPoints: 4387 },
    { name: "Anthony Edwards", position: "SG", careerPoints: 6412 },
    { name: "Nickeil Alexander-Walker", position: "SG", careerPoints: 2278 },
    { name: "Wendell Moore Jr", position: "SG", careerPoints: 52 },
  ],
  Warriors: [
    { name: "Kevon Looney", position: "C", careerPoints: 2573 },
    { name: "Dario Saric", position: "PF", careerPoints: 5043 },
    { name: "Draymond Green", position: "PF", careerPoints: 6903 },
    { name: "Jonathan Kuminga", position: "PF", careerPoints: 2236 },
    { name: "Trayce Jackson-Davis", position: "PF", careerPoints: 310 },
    { name: "Chris Paul", position: "PG", careerPoints: 22076 },
    { name: "Stephen Curry", position: "PG", careerPoints: 23258 },
    { name: "Andrew Wiggins", position: "SF", careerPoints: 12802 },
    { name: "Brandin Podziemski", position: "SG", careerPoints: 502 },
    { name: "Gary Payton II", position: "SG", careerPoints: 991 },
    { name: "Klay Thompson", position: "SG", careerPoints: 15122 },
    { name: "Moses Moody", position: "SG", careerPoints: 907 },
  ],
  Wizards: [
    { name: "Marvin Bagley III", position: "C", careerPoints: 3268 },
    { name: "Anthony Gill", position: "PF", careerPoints: 519 },
    { name: "Isaiah Livers", position: "PF", careerPoints: 581 },
    { name: "Patrick Baldwin Jr", position: "PF", careerPoints: 177 },
    { name: "Richaun Holmes", position: "PF", careerPoints: 3846 },
    { name: "Jordan Poole", position: "PG", careerPoints: 5172 },
    { name: "Ryan Rollins", position: "PG", careerPoints: 64 },
    { name: "Tyus Jones", position: "PG", careerPoints: 4377 },
    { name: "Corey Kispert", position: "SF", careerPoints: 2176 },
    { name: "Deni Avdija", position: "SF", careerPoints: 2517 },
    { name: "Eugene Omoruyi", position: "SF", careerPoints: 417 },
    { name: "Kyle Kuzma", position: "SF", careerPoints: 8003 },
    { name: "Bilal Coulibaly", position: "SG", careerPoints: 467 },
    { name: "Jared Butler", position: "SG", careerPoints: 292 },
    { name: "Johnny Davis", position: "SG", careerPoints: 228 },
    { name: "Landry Shamet", position: "SG", careerPoints: 3025 },
  ],
};
// export { teams };

const nbaLogos = {
  "76ers": "images/nbaLogos/philadelphia76ers.svg",
  Blazers: "images/nbaLogos/portlandTrailBlazers.svg",
  Bucks: "images/nbaLogos/milwaukeeBucks.svg",
  Bulls: "images/nbaLogos/chicagoBulls.svg",
  Cavaliers: "images/nbaLogos/clevelandCavaliers.svg",
  Celtics: "images/nbaLogos/bostonCeltics.svg",
  Clippers: "images/nbaLogos/laClippers.svg",
  Grizzlies: "images/nbaLogos/memphisGrizzlies.svg",
  Hawks: "images/nbaLogos/atlantaHawks.svg",
  Heat: "images/nbaLogos/miamiHeat.svg",
  Hornets: "images/nbaLogos/charlotteHornets.svg",
  Jazz: "images/nbaLogos/utahJazz.svg",
  Kings: "images/nbaLogos/sacramentoKings.svg",
  Knicks: "images/nbaLogos/newyorkKnicks.svg",
  Lakers: "images/nbaLogos/losAngelesLakers.svg",
  Magic: "images/nbaLogos/orlandoMagic.svg",
  Mavericks: "images/nbaLogos/dallasMavericks.svg",
  Nets: "images/nbaLogos/brooklynNets.svg",
  Nuggets: "images/nbaLogos/denverNuggets.svg",
  Pacers: "images/nbaLogos/indianaPacers.svg",
  Pelicans: "images/nbaLogos/newOrleansPelicans.svg",
  Pistons: "images/nbaLogos/detroitPistons.svg",
  Raptors: "images/nbaLogos/torontoRaptors.svg",
  Rockets: "images/nbaLogos/houstonRockets.svg",
  Spurs: "images/nbaLogos/sanAntonioSpurs.svg",
  Suns: "images/nbaLogos/phoenixSuns.svg",
  Thunder: "images/nbaLogos/oklahomaCityThunder.svg",
  Timberwolves: "images/nbaLogos/minnesotaTimberwolves.svg",
  Warriors: "images/nbaLogos/goldenStateWarriors.svg",
  Wizards: "images/nbaLogos/washingtonWizards.svg",
};

let selectedTeams = [];
let selectedTeam = "";
let selectedPlayers = [];
const selectedPositions = [];
const teamLogo = document.getElementById("team-logo");
const positionButtons = document.querySelectorAll(".position-button");
const randomizeTeamButton = document.getElementById("randomize-team-btn");
const playersContainer = document.getElementById("players");
const highScoreDisplay = document.getElementById("highscore");

// Initially hide the player card
let playerCardVisible = false;

randomizeTeamButton.addEventListener("click", randomizeTeam);

function randomizeTeam() {
  randomizeTeamButton.disabled = true;
  const teamNames = Object.keys(teams).filter(
    (team) => !selectedTeams.includes(team)
  );

  if (teamNames.length === 0) {
    selectedTeams = [];
  }

  const randomIndex = Math.floor(Math.random() * teamNames.length);
  selectedTeam = teamNames[randomIndex];
  selectedTeams.push(selectedTeam);
  teamLogo.src = nbaLogos[selectedTeam];

  positionButtons.forEach((button) => {
    button.disabled = false;
  });
}

positionButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const position = button.dataset.position;
    const availablePlayers = teams[selectedTeam].filter(
      (player) =>
        !selectedPositions.includes(player.position) &&
        player.position === position
    );

    if (availablePlayers.length > 0) {
      const randomPlayer =
        availablePlayers[Math.floor(Math.random() * availablePlayers.length)];

      selectedPlayers.push(randomPlayer);

      const playerName = randomPlayer.name
        .replace(/'/g, "_")
        .split(" ")
        .join("_");
      const imgSrc = `images/${selectedTeam}/${randomPlayer.position}/${playerName}.png`;

      // Create a new player card for each player
      const playerContainer = document.createElement("div");
      playerContainer.classList.add("player-container");
      // playerContainer.style.background = "#f0f0f0";
      playerContainer.style.color = "#333"; // Text color
      playerContainer.style.display = "flex";

      const playerBackground = document.createElement("div");
      playerBackground.classList.add("player-background");
      playerBackground.style.backgroundColor = "orange";
      playerContainer.appendChild(playerBackground);

      const img = document.createElement("img");
      img.src = imgSrc;
      img.alt = randomPlayer.name;
      img.classList.add("player-image");
      playerContainer.appendChild(img);

      const nameDiv = document.createElement("div");
      nameDiv.classList.add("player-name");
      nameDiv.textContent = randomPlayer.name;
      playerContainer.appendChild(nameDiv);

      const teamDiv = document.createElement("div");
      teamDiv.classList.add("player-team");
      teamDiv.textContent = selectedTeam;
      playerContainer.appendChild(teamDiv);

      const careerPointsDiv = document.createElement("div");
      careerPointsDiv.classList.add("player-career-points");
      careerPointsDiv.textContent = `Career Points: ${randomPlayer.careerPoints}`;
      playerContainer.appendChild(careerPointsDiv);

      const positionDiv = document.createElement("div");
      positionDiv.classList.add("player-position");
      positionDiv.textContent = randomPlayer.position;
      positionDiv.style.fontSize = "24px"; // Adjusted font size
      playerContainer.appendChild(positionDiv);

      // Create the team logo image element
      const teamLogoImg = document.createElement("img");
      teamLogoImg.src = nbaLogos[selectedTeam];
      teamLogoImg.alt = `${selectedTeam} Logo`;
      teamLogoImg.classList.add("team-logo");

      // sizing for player team-logo
      teamLogoImg.style.width = "45px";
      teamLogoImg.style.height = "45px";

      // Append the image element to the player container
      playerContainer.appendChild(teamLogoImg);

      const lineTop = document.createElement("div");
      lineTop.classList.add("line-top");
      playerContainer.appendChild(lineTop);

      const lineBottom = document.createElement("div");
      lineBottom.classList.add("line-bottom");
      playerContainer.appendChild(lineBottom);

      playersContainer.appendChild(playerContainer);

      selectedPositions.push(randomPlayer.position);
      button.disabled = true;

      if (selectedPlayers.length === 5) {
        randomizeTeamButton.disabled = true;
        displayHighScore();
      } else {
        randomizeTeamButton.disabled = false;
      }
    } else {
      alert(`${position} has already been selected.`);
    }
  });
});

function displayHighScore() {
  let totalCareerPoints = 0;

  for (const player of selectedPlayers) {
    totalCareerPoints += player.careerPoints;
  }

  // Fetch current high score from the hidden input field
  const currentHighScore = parseInt(
    document.getElementById("current-high-score").value
  );

  // Check if the new score is greater than the current high score
  if (totalCareerPoints > currentHighScore) {
    // Store the high score in session using AJAX
    $.ajax({
      url: "update_high_score.php",
      type: "POST",
      data: { high_score: totalCareerPoints }, // Send the high score to the PHP script
      success: function (response) {
        console.log(response); // Output success message or error
        // Update high score display
        highScoreDisplay.textContent = `High Score: ${totalCareerPoints} Career Points`;
        // Show the high score box
        highScoreDisplay.style.display = "block";
      },
      error: function (xhr, status, error) {
        console.error(error); // Log any errors
      },
    });
  } else {
    console.log(
      "New score is not higher than the current high score. Not updating."
    );
    // Update high score display
    highScoreDisplay.textContent = `High Score: ${totalCareerPoints} Career Points`;
    // Show the high score box if all players are picked
    if (selectedPlayers.length === 5) {
      highScoreDisplay.style.display = "block";
    }
  }
}
