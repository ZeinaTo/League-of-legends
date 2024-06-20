import { Injectable } from '@angular/core';
import { Champion } from './entities/Champion';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ChampionService {
  champions:Champion[];
  constructor(private http: HttpClient){
    this.champions=[ {
      id: 1,
      name: "Annie",
      title: "the Dark Child",
      key: "Annie"
    },
    {
      id: 2,
      name: "Olaf",
      title: "the Berserker",
      key: "Olaf"
    },
    {
      id: 3,
      name: "Galio",
      title: "the Colossus",
      key: "Galio"
    },
    {
      id: 4,
      name: "Twisted Fate",
      title: "the Card Master",
      key: "TwistedFate"
    },
    {
      id: 5,
      name: "Xin Zhao",
      title: "the Seneschal of Demacia",
      key: "XinZhao"
    },
    {
      id: 6,
      name: "Urgot",
      title: "the Dreadnought",
      key: "Urgot"
    },
    {
      id: 7,
      name: "LeBlanc",
      title: "the Deceiver",
      key: "Leblanc"
    },
    {
      id: 8,
      name: "Vladimir",
      title: "the Crimson Reaper",
      key: "Vladimir"
    },
    {
      id: 9,
      name: "Fiddlesticks",
      title: "the Harbinger of Doom",
      key: "Fiddlesticks"
    },
    {
      id: 10,
      name: "Kayle",
      title: "The Judicator",
      key: "Kayle"
    },
    {
      id: 11,
      name: "Master Yi",
      title: "the Wuju Bladesman",
      key: "MasterYi"
    },
    {
      id: 12,
      name: "Alistar",
      title: "the Minotaur",
      key: "Alistar"
    },
    {
      id: 13,
      name: "Ryze",
      title: "the Rune Mage",
      key: "Ryze"
    },
    {
      id: 14,
      name: "Sion",
      title: "The Undead Juggernaut",
      key: "Sion"
    },
    {
      id: 15,
      name: "Sivir",
      title: "the Battle Mistress",
      key: "Sivir"
    },
    {
      id: 16,
      name: "Soraka",
      title: "the Starchild",
      key: "Soraka"
    },
    {
      id: 17,
      name: "Teemo",
      title: "the Swift Scout",
      key: "Teemo"
    },
    {
      id: 18,
      name: "Tristana",
      title: "the Yordle Gunner",
      key: "Tristana"
    },
    {
      id: 19,
      name: "Warwick",
      title: "the Uncaged Wrath of Zaun",
      key: "Warwick"
    },
    {
      id: 20,
      name: "Nunu",
      title: "the Yeti Rider",
      key: "Nunu"
    },
    {
      id: 21,
      name: "Miss Fortune",
      title: "the Bounty Hunter",
      key: "MissFortune"
    },
    {
      id: 22,
      name: "Ashe",
      title: "the Frost Archer",
      key: "Ashe"
    },
    {
      id: 23,
      name: "Tryndamere",
      title: "the Barbarian King",
      key: "Tryndamere"
    },
    {
      id: 24,
      name: "Jax",
      title: "Grandmaster at Arms",
      key: "Jax"
    },
    {
      id: 25,
      name: "Morgana",
      title: "Fallen Angel",
      key: "Morgana"
    },
    {
      id: 26,
      name: "Zilean",
      title: "the Chronokeeper",
      key: "Zilean"
    },
    {
      id: 27,
      name: "Singed",
      title: "the Mad Chemist",
      key: "Singed"
    },
    {
      id: 28,
      name: "Evelynn",
      title: "the Widowmaker",
      key: "Evelynn"
    },
    {
      id: 29,
      name: "Twitch",
      title: "the Plague Rat",
      key: "Twitch"
    },
    {
      id: 30,
      name: "Karthus",
      title: "the Deathsinger",
      key: "Karthus"
    },
    {
      id: 31,
      name: "Cho'Gath",
      title: "the Terror of the Void",
      key: "Chogath"
    },
    {
      id: 32,
      name: "Amumu",
      title: "the Sad Mummy",
      key: "Amumu"
    },
    {
      id: 33,
      name: "Rammus",
      title: "the Armordillo",
      key: "Rammus"
    },
    {
      id: 34,
      name: "Anivia",
      title: "the Cryophoenix",
      key: "Anivia"
    },
    {
      id: 35,
      name: "Shaco",
      title: "the Demon Jester",
      key: "Shaco"
    },
    {
      id: 36,
      name: "Dr. Mundo",
      title: "the Madman of Zaun",
      key: "DrMundo"
    },
    {
      id: 37,
      name: "Sona",
      title: "Maven of the Strings",
      key: "Sona"
    },
    {
      id: 38,
      name: "Kassadin",
      title: "the Void Walker",
      key: "Kassadin"
    },
    {
      id: 39,
      name: "Irelia",
      title: "the Will of the Blades",
      key: "Irelia"
    },
    {
      id: 40,
      name: "Janna",
      title: "the Storm's Fury",
      key: "Janna"
    },
    {
      id: 41,
      name: "Gangplank",
      title: "the Saltwater Scourge",
      key: "Gangplank"
    },
    {
      id: 42,
      name: "Corki",
      title: "the Daring Bombardier",
      key: "Corki"
    },
    {
      id: 43,
      name: "Karma",
      title: "the Enlightened One",
      key: "Karma"
    },
    {
      id: 44,
      name: "Taric",
      title: "the Shield of Valoran",
      key: "Taric"
    },
    {
      id: 45,
      name: "Veigar",
      title: "the Tiny Master of Evil",
      key: "Veigar"
    },
    {
      id: 48,
      name: "Trundle",
      title: "the Troll King",
      key: "Trundle"
    },
    {
      id: 50,
      name: "Swain",
      title: "the Master Tactician",
      key: "Swain"
    },
    {
      id: 51,
      name: "Caitlyn",
      title: "the Sheriff of Piltover",
      key: "Caitlyn"
    },
    {
      id: 53,
      name: "Blitzcrank",
      title: "the Great Steam Golem",
      key: "Blitzcrank"
    },
    {
      id: 54,
      name: "Malphite",
      title: "Shard of the Monolith",
      key: "Malphite"
    },
    {
      id: 55,
      name: "Katarina",
      title: "the Sinister Blade",
      key: "Katarina"
    },
    {
      id: 56,
      name: "Nocturne",
      title: "the Eternal Nightmare",
      key: "Nocturne"
    },
    {
      id: 57,
      name: "Maokai",
      title: "the Twisted Treant",
      key: "Maokai"
    },
    {
      id: 58,
      name: "Renekton",
      title: "the Butcher of the Sands",
      key: "Renekton"
    },
    {
      id: 59,
      name: "Jarvan IV",
      title: "the Exemplar of Demacia",
      key: "JarvanIV"
    },
    {
      id: 60,
      name: "Elise",
      title: "the Spider Queen",
      key: "Elise"
    },
    {
      id: 61,
      name: "Orianna",
      title: "the Lady of Clockwork",
      key: "Orianna"
    },
    {
      id: 62,
      name: "Wukong",
      title: "the Monkey King",
      key: "MonkeyKing"
    },
    {
      id: 63,
      name: "Brand",
      title: "the Burning Vengeance",
      key: "Brand"
    },
    {
      id: 64,
      name: "Lee Sin",
      title: "the Blind Monk",
      key: "LeeSin"
    },
    {
      id: 67,
      name: "Vayne",
      title: "the Night Hunter",
      key: "Vayne"
    },
    {
      id: 68,
      name: "Rumble",
      title: "the Mechanized Menace",
      key: "Rumble"
    },
    {
      id: 69,
      name: "Cassiopeia",
      title: "the Serpent's Embrace",
      key: "Cassiopeia"
    },
    {
      id: 72,
      name: "Skarner",
      title: "the Crystal Vanguard",
      key: "Skarner"
    },
    {
      id: 74,
      name: "Heimerdinger",
      title: "the Revered Inventor",
      key: "Heimerdinger"
    },
    {
      id: 75,
      name: "Nasus",
      title: "the Curator of the Sands",
      key: "Nasus"
    },
    {
      id: 76,
      name: "Gragas",
      title: "the Rabble Rouser",
      key: "Gragas"
    },
    {
      id: 77,
      name: "Udyr",
      title: "the Spirit Walker",
      key: "Udyr"
    },
    {
      id: 78,
      name: "Poppy",
      title: "Keeper of the Hammer",
      key: "Poppy"
    },
    {
      id: 79,
      name: "Gragas",
      title: "the Rabble Rouser",
      key: "Gragas"
    },
    {
      id: 80,
      name: "Pantheon",
      title: "the Artisan of War",
      key: "Pantheon"
    },
    {
      id: 81,
      name: "Ezreal",
      title: "the Prodigal Explorer",
      key: "Ezreal"
    },
    {
      id: 82,
      name: "Mordekaiser",
      title: "the Iron Revenant",
      key: "Mordekaiser"
    },
    {
      id: 83,
      name: "Yorick",
      title: "Shepherd of Souls",
      key: "Yorick"
    },
    {
      id: 84,
      name: "Akali",
      title: "the Rogue Assassin",
      key: "Akali"
    },
    {
      id: 85,
      name: "Kennen",
      title: "the Heart of the Tempest",
      key: "Kennen"
    },
    {
      id: 86,
      name: "Garen",
      title: "The Might of Demacia",
      key: "Garen"
    },
    {
      id: 89,
      name: "Leona",
      title: "the Radiant Dawn",
      key: "Leona"
    },
    {
      id: 90,
      name: "Malzahar",
      title: "the Prophet of the Void",
      key: "Malzahar"
    },
    {
      id: 91,
      name: "Talon",
      title: "the Blade's Shadow",
      key: "Talon"
    },
    {
      id: 92,
      name: "Riven",
      title: "the Exile",
      key: "Riven"
    },
    {
      id: 96,
      name: "Kog'Maw",
      title: "the Mouth of the Abyss",
      key: "KogMaw"
    },
    {
      id: 98,
      name: "Shen",
      title: "the Eye of Twilight",
      key: "Shen"
    },
    {
      id: 99,
      name: "Lux",
      title: "the Lady of Luminosity",
      key: "Lux"
    },
    {
      id: 101,
      name: "Xerath",
      title: "the Magus Ascendant",
      key: "Xerath"
    },
    {
      id: 102,
      name: "Shyvana",
      title: "the Half-Dragon",
      key: "Shyvana"
    },
    {
      id: 103,
      name: "Ahri",
      title: "the Nine-Tailed Fox",
      key: "Ahri"
    },
    {
      id: 104,
      name: "Graves",
      title: "the Outlaw",
      key: "Graves"
    },
    {
      id: 105,
      name: "Fizz",
      title: "the Tidal Trickster",
      key: "Fizz"
    },
    {
      id: 106,
      name: "Volibear",
      title: "the Relentless Storm",
      key: "Volibear"
    },
    {
      id: 107,
      name: "Rengar",
      title: "the Pridestalker",
      key: "Rengar"
    },
    {
      id: 110,
      name: "Varus",
      title: "the Arrow of Retribution",
      key: "Varus"
    },
    {
      id: 111,
      name: "Nautilus",
      title: "the Titan of the Depths",
      key: "Nautilus"
    },
    {
      id: 112,
      name: "Viktor",
      title: "the Machine Herald",
      key: "Viktor"
    },
    {
      id: 113,
      name: "Sejuani",
      title: "Fury of the North",
      key: "Sejuani"
    },
    {
      id: 114,
      name: "Fiora",
      title: "the Grand Duelist",
      key: "Fiora"
    },
    {
      id: 115,
      name: "Ziggs",
      title: "the Hexplosives Expert",
      key: "Ziggs"
    },
    {
      id: 117,
      name: "Lulu",
      title: "the Fae Sorceress",
      key: "Lulu"
    },
    {
      id: 119,
      name: "Draven",
      title: "the Glorious Executioner",
      key: "Draven"
    },
    {
      id: 120,
      name: "Hecarim",
      title: "the Shadow of War",
      key: "Hecarim"
    },
    {
      id: 121,
      name: "Khazix",
      title: "the Voidreaver",
      key: "Khazix"
    },
    {
      id: 122,
      name: "Darius",
      title: "the Hand of Noxus",
      key: "Darius"
    },
    {
      id: 126,
      name: "Jayce",
      title: "the Defender of Tomorrow",
      key: "Jayce"
    },
    {
      id: 127,
      name: "Lissandra",
      title: "the Ice Witch",
      key: "Lissandra"
    },
    {
      id: 131,
      name: "Diana",
      title: "Scorn of the Moon",
      key: "Diana"
    },
    {
      id: 133,
      name: "Quinn",
      title: "Demacia's Wings",
      key: "Quinn"
    },
    {
      id: 134,
      name: "Syndra",
      title: "the Dark Sovereign",
      key: "Syndra"
    },
    {
      id: 136,
      name: "Aurelion Sol",
      title: "The Star Forger",
      key: "AurelionSol"
    },
    {
      id: 141,
      name: "Kayn",
      title: "the Shadow Reaper",
      key: "Kayn"
    },
    {
      id: 142,
      name: "Zoe",
      title: "the Aspect of Twilight",
      key: "Zoe"
    },
    {
      id: 143,
      name: "Zyra",
      title: "Rise of the Thorns",
      key: "Zyra"
    },
    {
      id: 145,
      name: "Kaisa",
      title: "Daughter of the Void",
      key: "Kaisa"
    },
    {
      id: 147,
      name: "Seraphine",
      title: "the Starry-Eyed Songstress",
      key: "Seraphine"
    },
    {
      id: 150,
      name: "Gnar",
      title: "the Missing Link",
      key: "Gnar"
    },
    {
      id: 154,
      name: "Zac",
      title: "the Secret Weapon",
      key: "Zac"
    },
    {
      id: 157,
      name: "Yasuo",
      title: "the Unforgiven",
      key: "Yasuo"
    },
    {
      id: 161,
      name: "Vel'Koz",
      title: "the Eye of the Void",
      key: "Velkoz"
    },
    {
      id: 163,
      name: "Taliyah",
      title: "the Stoneweaver",
      key: "Taliyah"
    },
    {
      id: 164,
      name: "Camille",
      title: "the Steel Shadow",
      key: "Camille"
    },
    {
      id: 201,
      name: "Braum",
      title: "the Heart of the Freljord",
      key: "Braum"
    },
    {
      id: 202,
      name: "Jhin",
      title: "the Virtuoso",
      key: "Jhin"
    },
    {
      id: 203,
      name: "Kindred",
      title: "The Eternal Hunters",
      key: "Kindred"
    },
    {
      id: 222,
      name: "Jinx",
      title: "the Loose Cannon",
      key: "Jinx"
    },
    {
      id: 223,
      name: "Tahm Kench",
      title: "the River King",
      key: "TahmKench"
    },
    {
      id: 234,
      name: "Viego",
      title: "the Ruined King",
      key: "Viego"
    },
    {
      id: 235,
      name: "Senna",
      title: "the Redeemer",
      key: "Senna"
    },
    {
      id: 236,
      name: "Lucian",
      title: "the Purifier",
      key: "Lucian"
    },
    {
      id: 238,
      name: "Zed",
      title: "the Master of Shadows",
      key: "Zed"
    },
    {
      id: 240,
      name: "Kled",
      title: "the Cantankerous Cavalier",
      key: "Kled"
    },
    {
      id: 245,
      name: "Ekko",
      title: "the Boy Who Shattered Time",
      key: "Ekko"
    },
    {
      id: 246,
      name: "Qiyana",
      title: "Empress of the Elements",
      key: "Qiyana"
    },
    {
      id: 254,
      name: "Vi",
      title: "the Piltover Enforcer",
      key: "Vi"
    },
    {
      id: 266,
      name: "Aatrox",
      title: "the Darkin Blade",
      key: "Aatrox"
    },
    {
      id: 267,
      name: "Nami",
      title: "the Tidecaller",
      key: "Nami"
    },
    {
      id: 268,
      name: "Azir",
      title: "the Emperor of the Sands",
      key: "Azir"
    },
    {
      id: 350,
      name: "Yuumi",
      title: "the Magical Cat",
      key: "Yuumi"
    },
    {
      id: 360,
      name: "Samira",
      title: "the Desert Rose",
      key: "Samira"
    },
    {
      id: 412,
      name: "Thresh",
      title: "the Chain Warden",
      key: "Thresh"
    },
    {
      id: 420,
      name: "Illaoi",
      title: "the Kraken Priestess",
      key: "Illaoi"
    },
    {
      id: 421,
      name: "Rek'Sai",
      title: "the Void Burrower",
      key: "RekSai"
    },
    {
      id: 427,
      name: "Ivern",
      title: "the Green Father",
      key: "Ivern"
    },
    {
      id: 429,
      name: "Kalista",
      title: "the Spear of Vengeance",
      key: "Kalista"
    },
    {
      id: 432,
      name: "Bard",
      title: "the Wandering Caretaker",
      key: "Bard"
    },
    {
      id: 497,
      name: "Rakan",
      title: "the Charmer",
      key: "Rakan"
    },
    {
      id: 498,
      name: "Xayah",
      title: "the Rebel",
      key: "Xayah"
    },
    {
      id: 516,
      name: "Ornn",
      title: "The Fire Below The Mountain",
      key: "Ornn"
    },
    {
      id: 517,
      name: "Sylas",
      title: "the Unshackled",
      key: "Sylas"
    },
    {
      id: 518,
      name: "Neeko",
      title: "the Curious Chameleon",
      key: "Neeko"
    },
    {
      id: 555,
      name: "Pyke",
      title: "the Bloodharbor Ripper",
      key: "Pyke"
    },
    {
      id: 777,
      name: "Yone",
      title: "the Unforgotten",
      key: "Yone"
    },
    {
      id: 875,
      name: "Sett",
      title: "the Boss",
      key: "Sett"
    },
    {
      id: 876,
      name: "Lillia",
      title: "the Bashful Bloom",
      key: "Lillia"
    },
    {
      id: 887,
      name: "Gwen",
      title: "The Hallowed Seamstress",
      key: "Gwen"
    },
    {
      id: 360,
      name: "Samira",
      title: "the Desert Rose",
      key: "Samira"
    },]
  }

  //Pour la base de donnees de champion service
  getChampions(){
    return this.champions;
  }
  addChampion(champion:Champion) {
    console.log(champion);
    this.champions.push(champion);
  }
  generateUniqueId(): number {
    if (!this.champions || this.champions.length === 0) {
      return 1;
    }
    // Use a type assertion to tell TypeScript that this.champions is not undefined
    return Math.max(...this.champions.map(c => c.id as number)) + 1;
  }

  //pour importer les donnees du fichier json
  // private jsonUrl = 'assets/data.json';
  // getChampions(): Champion[] {
  //   return this.champions;
  // }

  // fetchChampionsFromJson(): Observable<Champion[]> {
  //   return this.http.get<Champion[]>(this.jsonUrl);
  // }

}
