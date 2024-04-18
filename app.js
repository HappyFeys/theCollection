const monk = "#00FFBA";
const dk = "#C41E3B";
const hunt = "#AAD372";
const evok = "#33937F";
const rogue = "#FFF468";
const priest = "#F0EBE0";
const drood = "#FF7C04";
const demo = "#9382C9";
const dh = "#A330C9";
const cham = "#2359FF";
const mage = "#68CCEF";
const pala = "#F48EBA";
const war = "#C69B6D";

const tank = "assets/img/tank.png";
const heal = "assets/img/healer.png";
const dps = "assets/img/dps.png";

const officier = [
    {
        name : "Yønselpiki",
        image : "assets/img/roster/yonselpiki.jpg",
        race : "Vulperin",
        classe : "Moine",
        role : heal,
        rio : "3460",
        voti : "5/8HM",
        atsc : "8/9HM",
        atdh : "2/9MM",
        color : monk,
        link : "https://raider.io/characters/eu/hyjal/Y%C3%B8nselpiki"
    },
    {
        name : "Roomro",
        image : "assets/img/roster/roomro.jpg",
        race : "Troll Zandalari",
        classe : "Chasseur",
        role : dps,
        rio : "2283",
        voti : "2/8MM",
        atsc : "9/9HM",
        atdh : "4/9HM",
        color : hunt,
        link : "https://raider.io/characters/eu/hyjal/Roomro"
    },
    {
        name : "Bøøbì",
        image : "assets/img/roster/boobi.jpg",
        race : "Dracthyr",
        classe : "Evoker",
        role : dps,
        rio : "3269",
        voti : "2/8MM",
        atsc : "9/9HM",
        atdh : "5/9MM",
        color : evok,
        link : "https://raider.io/characters/eu/hyjal/B%C3%B8%C3%B8b%C3%AC"
    },
    {
        name : "Funha",
        image : "assets/img/roster/fun.jpg",
        race : "Night Elf",
        classe : "Prêtre",
        role : dps,
        rio : "2806",
        voti : "8/8HM",
        atsc : "9/9HM",
        atdh : "4/9MM",
        color : priest,
        link : "https://raider.io/characters/eu/hyjal/Funha"
    },
    {
        name : "Døv",
        image : "assets/img/roster/dov.jpg",
        race : "Dracthyr",
        classe : "Evoker",
        role : dps,
        rio : "3141",
        voti : "8/8HM",
        atsc : "9/9HM",
        atdh : "4/9MM",
        color: evok,
        link : "https://raider.io/characters/eu/hyjal/D%C3%B8v"
    }
]

const roster = [
    {
        name : "Tìntin",
        image : "assets/img/roster/tintin.jpg",
        race : "Blood Elf",
        classe : "DK",
        role : dps,
        rio : "3037",
        voti : "3/8MM",
        atsc : "3/9MM",
        atdh : "5/9MM",
        color : dk,
        link : "https://raider.io/characters/eu/hyjal/T%C3%ACntin"
    },
    {
        name : "Rødg",
        image : "assets/img/roster/rodg.jpg",
        race : "Night Elf",
        classe : "DH",
        role : tank,
        rio : "3417",
        voti : "2/8MM",
        atsc : "9/9HM",
        atdh : "5/9MM",
        color : dh,
        link : "https://raider.io/characters/eu/hyjal/R%C3%B8dg"
    },
    {
        name : "Heells",
        image : "assets/img/roster/hells.jpg",
        race : "Night Elf",
        classe : "DH",
        role : dps,
        rio : "3528",
        voti : "0/8MM",
        atsc : "9/9NM",
        atdh : "5/9MM",
        color : dh,
        link : "https://raider.io/characters/eu/hyjal/Heells"
    },
    {
        name : "Teiiteii",
        image : "assets/img/roster/tei.jpg",
        race : "Orc",
        classe : "Guerrier",
        role : dps,
        rio : "2834",
        voti : "0/8MM",
        atsc : "0/9MM",
        atdh : "4/9MM",
        color : war,
        link : "https://raider.io/characters/eu/hyjal/Teiiteii"
    },
    {
        name : "Lüiñil",
        image : "assets/img/roster/luinil.jpg",
        race : "Blood Elf",
        classe : "Moine",
        role : heal,
        rio : "2944",
        voti : "0/8MM",
        atsc : "0/9MM",
        atdh : "5/9MM",
        color : monk,
        link : "https://raider.io/characters/eu/hyjal/L%C3%BCi%C3%B1il"
    },
    {
        name : "Élio",
        image : "assets/img/roster/elio.jpg",
        race : "Orc",
        classe : "Moine",
        role : dps,
        rio : "3053",
        voti : "6/8HM",
        atsc : "9/9HM",
        atdh : "5/9MM",
        color : monk,
        link : "https://raider.io/characters/eu/hyjal/%C3%89lio"
    },
    {
        name : "Røot",
        image : "assets/img/roster/root.jpg",
        race : "Kul Tiran",
        classe : "Druide",
        role :tank,
        rio : "613",
        voti : "0/8MM",
        atsc : "9/9NM",
        atdh : "0/9MM",
        color : drood,
        link : "https://raider.io/characters/eu/hyjal/R%C3%B8ot"
    },
    {
        name : "Exîna",
        image : "assets/img/roster/exina.jpg",
        race : "Troll",
        classe : "Druide",
        role : dps,
        rio : "3300",
        voti : "6/8HM",
        atsc : "9/9HM",
        atdh : "5/9MM",
        color : drood,
        link : "https://raider.io/characters/eu/hyjal/Ex%C3%AEna"
    },
    {
        name : "Nouchie",
        image : "assets/img/roster/nouchie.jpg",
        race : "Night Elf",
        classe : "Druide",
        role : heal,
        rio : "1781",
        voti : "0/8MM",
        atsc : "0/9MM",
        atdh : "0/9MM",
        color : drood,
        link : "https://raider.io/characters/eu/hyjal/Nouchie"
    },
    {
        name : "Mañìa",
        image : "assets/img/roster/mania.jpg",
        race : "Blood Elf",
        classe : "Paladin",
        role : tank,
        rio : "3020",
        voti : "8/8HM",
        atsc : "6/9MM",
        atdh : "5/9MM",
        color : pala,
        link : "https://raider.io/characters/eu/hyjal/Ma%C3%B1%C3%ACa"
    },
    {
        name : "Tømty",
        image : "assets/img/roster/tomty.jpg",
        race : "Tauren",
        classe : "Paladin",
        role : heal,
        rio : "2836",
        voti : "2/8MM",
        atsc : "0/9MM",
        atdh : "5/9MM",
        color : pala,
        link : "https://raider.io/characters/eu/hyjal/T%C3%B8mty"
    },
    {
        name : "Chtitôu",
        image : "assets/img/roster/chtitou.jpg",
        race : "Vulperin",
        classe : "Chasseur",
        role : dps,
        rio : "2842",
        voti : "0/8MM",
        atsc : "0/9MM",
        atdh : "5/9MM",
        color : hunt,
        link : "https://raider.io/characters/eu/hyjal/Chtit%C3%B4u"
    },
    {
        name : "Myaou",
        image : "assets/img/roster/myaou.jpg",
        race : "Night Elf",
        classe : "Chasseur",
        role : dps,
        rio : "1274",
        voti : "0/8MM",
        atsc : "0/9MM",
        atdh : "6/9HM",
        color : hunt,
        link : "https://raider.io/characters/eu/hyjal/Myaou"
    },
    {
        name : "Roomro",
        image : "assets/img/roster/roomro.jpg",
        race : "Troll Zandalari",
        classe : "Chasseur",
        role : dps,
        rio : "2283",
        voti : "2/8MM",
        atsc : "9/9HM",
        atdh : "4/9HM",
        color : hunt,
        link : "https://raider.io/characters/eu/hyjal/Roomro"
    },
    {
        name : "Bøbbî",
        image : "assets/img/roster/bobbi.jpg",
        race : "Humain",
        classe : "Mage",
        role : dps,
        rio : "0",
        voti : "0/8MM",
        atsc : "7/9HM",
        atdh : "0/9MM",
        color : mage,
        link : "https://raider.io/characters/eu/hyjal/B%C3%B8bb%C3%AE"
    },
    {
        name : "Dîsk",
        image : "assets/img/roster/disk.jpg",
        race : "Blood Elf",
        classe : "Démoniste",
        role : dps,
        rio : "3203",
        voti : "5/8MM",
        atsc : "7/9MM",
        atdh : "6/9MM",
        color : demo,
        link : "https://raider.io/characters/eu/hyjal/D%C3%AEsk"
    },
    {
        name : "Happyakä",
        image : "assets/img/roster/happy.jpg",
        race : "Nain",
        classe : "Prêtre",
        role : heal,
        rio : "2952",
        voti : "0/8MM",
        atsc : "9/9NM",
        atdh : "3/9MM",
        color : priest,
        link : "https://raider.io/characters/eu/hyjal/Happyak%C3%A4"
    },
    {
        name : "Lyötox",
        image : "assets/img/roster/lyotox.jpg",
        race : "Gobelin",
        classe : "Prêtre",
        role : dps,
        rio : "2693",
        voti : "3/8MM",
        atsc : "2/9MM",
        atdh : "7/9HM",
        color : priest,
        link : "https://raider.io/characters/eu/hyjal/Ly%C3%B6tox"
    },
    {
        name : "Døv",
        image : "assets/img/roster/dov.jpg",
        race : "Dracthyr",
        classe : "Evoker",
        role :dps,
        rio : "3141",
        voti : "8/8HM",
        atsc : "9/9HM",
        atdh : "4/9MM",
        color : evok,
        link : "https://raider.io/characters/eu/hyjal/D%C3%B8v"
    }
]

const offiSection = document.querySelector("#officier");
const rosterSection = document.querySelector("#roster");

function createCard(array, section) {
    for (let element of array) {
        //Création de la carte
        let card = document.createElement('div');
        card.classList.add("card");
        section.appendChild(card);
        //Création de la zone personnage
        let personnage = document.createElement("div");
        personnage.classList.add("personnage");
        personnage.style.backgroundImage = `URL('${element.image}')`;
        let namePerso = document.createElement("h3");
        namePerso.style.color = element.color;
        namePerso.innerText= element.name
        personnage.appendChild(namePerso);
        card.appendChild(personnage);
        //Création de la zone stat
        let stat = document.createElement("div");
        stat.classList.add("stat");
        card.appendChild(stat);
        //Création de la zone info
        let info = document.createElement("div");
        info.classList.add("info");
        stat.appendChild(info);
        //Création de la zone race
        let raceDiv = document.createElement("div");
        raceDiv.classList.add("divInfo");
        let race = document.createElement("p");
        let raceName = document.createElement("p");
        raceName.classList.add("titre");
        raceName.innerText= "Race";
        race.innerText = element.race;
        info.appendChild(raceDiv);
        raceDiv.appendChild(raceName);
        raceDiv.appendChild(race);
        //Création de la zone classe
        let classeDiv = document.createElement("div");
        classeDiv.classList.add("divInfo");
        let classe = document.createElement("p");
        let classeName = document.createElement("p");
        classe.classList.add("titre");
        classe.innerText = `Classe`;
        classeName.innerText = element.classe;
        info.appendChild(classeDiv);
        classeDiv.appendChild(classe);
        classeDiv.appendChild(classeName);
        //Création de la zone role
        
        let roleName = document.createElement("img");
        roleName.classList.add("imgRole")
        
        roleName.src = element.role;
        
        personnage.appendChild(roleName);
        //Création de la zone score
        let scoreDiv = document.createElement("div");
        scoreDiv.classList.add("score");
        let score = document.createElement("p")
        score.innerText ="Score RIO";
        score.classList.add("titre");
        let scoreElement = document.createElement("p")
        scoreElement.innerText = element.rio;
        stat.appendChild(scoreDiv);
        scoreDiv.appendChild(score);
        scoreDiv.appendChild(scoreElement);
        //Création de la zone raid
        let raid = document.createElement("div");
        raid.classList.add("raid");
        stat.appendChild(raid);
        let exp = document.createElement("p");
        exp.innerText = "Expérience en raid";
        exp.classList.add("titre");
        raid.appendChild(exp);
        let raidDiv = document.createElement("div");
        raidDiv.classList.add("raidDiv")
        raid.appendChild(raidDiv);
        //Création de la zone voti
        let voti = document.createElement("div");
        raidDiv.appendChild(voti);
        let votiName = document.createElement("p");
        votiName.innerText = "VOTI";
        votiName.classList.add("titre")
        let votiExp = document.createElement("p");
        votiExp.innerText = element.voti;
        voti.appendChild(votiName);
        voti.appendChild(votiExp);
        //Création de la zone atsc
        let atsc = document.createElement("div");
        raidDiv.appendChild(atsc);
        let atscName = document.createElement("p");
        atscName.classList.add("titre");
        atscName.innerText = "ATSC";
        let atscExp = document.createElement("p");
        atscExp.innerText = element.atsc;
        atsc.appendChild(atscName);
        atsc.appendChild(atscExp);
        //Création de la zone atdh
        let atdh = document.createElement("div");
        raidDiv.appendChild(atdh);
        let atdhName = document.createElement("p");
        atdhName.innerText = "ATDH";
        atdhName.classList.add("titre");
        let atdhExp = document.createElement("p");
        atdhExp.innerText = element.atdh;
        atdh.appendChild(atdhName);
        atdh.appendChild(atdhExp);
    }
}

createCard(officier,offiSection);
createCard(roster,rosterSection);

