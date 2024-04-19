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

const monkImg = "/assets/Wow-Icons/images/classe/64/monk.png";
const dkImg = "assets/WoW-Icons/images/classe/64/deathknight.png";
const huntImg = "assets/WoW-Icons/images/classe/64/hunter.png";
const evokImg = "assets/WoW-Icons/images/classe/64/evoker.jpg";
const rogueImg = "assets/WoW-Icons/images/classe/64/rogue.png";
const priestImg = "assets/WoW-Icons/images/classe/64/priest.png";
const droodImg = "assets/WoW-Icons/images/classe/64/druid.png";
const demoImg = "assets/WoW-Icons/images/classe/64/warlock.png";
const dhImg = "assets/WoW-Icons/images/classe/64/demonhunter.jpg";
const chamImg = "assets/WoW-Icons/images/classe/64/shaman.png";
const mageImg = "assets/WoW-Icons/images/classe/64/mage.png";
const palaImg = "assets/WoW-Icons/images/classe/64/paladin.png";
const warImg = "assets/WoW-Icons/images/classe/64/warrior.png";

const humain = "assets/WoW-Icons/images/race/humain.gif";
const bloodelf = "assets/WoW-Icons/images/race/blood-elf.png";
const dhnightelf = "assets/WoW-Icons/images/race/dhnightelf.gif";
const dracthyr = "assets/WoW-Icons/images/race/dracthyr.gif";
const gobelin = "assets/WoW-Icons/images/race/gobelin.gif";
const kultiran = "assets/WoW-Icons/images/race/kultiran.gif";
const nain = "assets/WoW-Icons/images/race/nain.gif";
const nightelf = "assets/WoW-Icons/images/race/nightelf.gif";
const orc = "assets/WoW-Icons/images/race/orc.gif";
const tauren = "assets/WoW-Icons/images/race/tauren.gif";
const trollZandalari = "assets/WoW-Icons/images/race/troll_zandalari.gif";
const troll = "assets/WoW-Icons/images/race/troll.gif";
const vulperin = "assets/WoW-Icons/images/race/vulperin.gif";

const officier = [
    {
        name : "Yønselpiki",
        image : "assets/img/roster/yonselpiki.jpg",
        race : vulperin,
        classe : monkImg,
        role : heal,
        rio : 3460,
        voti : "5/8HM",
        atsc : "8/9HM",
        atdh : "2/9MM",
        color : monk,
        link : "https://raider.io/characters/eu/hyjal/Y%C3%B8nselpiki"
    },
    {
        name : "Roomro",
        image : "assets/img/roster/roomro.jpg",
        race : trollZandalari,
        classe : huntImg,
        role : dps,
        rio : 2283,
        voti : "2/8MM",
        atsc : "9/9HM",
        atdh : "4/9HM",
        color : hunt,
        link : "https://raider.io/characters/eu/hyjal/Roomro"
    },
    {
        name : "Bøøbì",
        image : "assets/img/roster/boobi.jpg",
        race : dracthyr,
        classe : evokImg,
        role : dps,
        rio : 3269,
        voti : "2/8MM",
        atsc : "9/9HM",
        atdh : "5/9MM",
        color : evok,
        link : "https://raider.io/characters/eu/hyjal/B%C3%B8%C3%B8b%C3%AC"
    },
    {
        name : "Funha",
        image : "assets/img/roster/fun.jpg",
        race : nightelf,
        classe : priestImg,
        role : dps,
        rio : 2806,
        voti : "8/8HM",
        atsc : "9/9HM",
        atdh : "4/9MM",
        color : priest,
        link : "https://raider.io/characters/eu/hyjal/Funha"
    },
    {
        name : "Døv",
        image : "assets/img/roster/dov.jpg",
        race : dracthyr,
        classe : evokImg,
        role : dps,
        rio : 3141,
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
        race : bloodelf,
        classe : dkImg,
        role : dps,
        rio : 3037,
        voti : "3/8MM",
        atsc : "3/9MM",
        atdh : "5/9MM",
        color : dk,
        link : "https://raider.io/characters/eu/hyjal/T%C3%ACntin"
    },
    {
        name : "Rødg",
        image : "assets/img/roster/rodg.jpg",
        race : dhnightelf,
        classe : dhImg,
        role : tank,
        rio : 3417,
        voti : "2/8MM",
        atsc : "9/9HM",
        atdh : "5/9MM",
        color : dh,
        link : "https://raider.io/characters/eu/hyjal/R%C3%B8dg"
    },
    {
        name : "Heells",
        image : "assets/img/roster/hells.jpg",
        race : dhnightelf,
        classe : dhImg,
        role : dps,
        rio : 3528,
        voti : "0/8MM",
        atsc : "9/9NM",
        atdh : "5/9MM",
        color : dh,
        link : "https://raider.io/characters/eu/hyjal/Heells"
    },
    {
        name : "Teiiteii",
        image : "assets/img/roster/tei.jpg",
        race : orc,
        classe : warImg,
        role : dps,
        rio : 2834,
        voti : "0/8MM",
        atsc : "0/9MM",
        atdh : "4/9MM",
        color : war,
        link : "https://raider.io/characters/eu/hyjal/Teiiteii"
    },
    {
        name : "Lüiñil",
        image : "assets/img/roster/luinil.jpg",
        race : bloodelf,
        classe : monkImg,
        role : heal,
        rio : 2944,
        voti : "0/8MM",
        atsc : "0/9MM",
        atdh : "5/9MM",
        color : monk,
        link : "https://raider.io/characters/eu/hyjal/L%C3%BCi%C3%B1il"
    },
    {
        name : "Élio",
        image : "assets/img/roster/elio.jpg",
        race : orc,
        classe : monkImg,
        role : dps,
        rio : 3053,
        voti : "6/8HM",
        atsc : "9/9HM",
        atdh : "5/9MM",
        color : monk,
        link : "https://raider.io/characters/eu/hyjal/%C3%89lio"
    },
    {
        name : "Røot",
        image : "assets/img/roster/root.jpg",
        race : kultiran,
        classe : droodImg,
        role :tank,
        rio : 613,
        voti : "0/8MM",
        atsc : "9/9NM",
        atdh : "0/9MM",
        color : drood,
        link : "https://raider.io/characters/eu/hyjal/R%C3%B8ot"
    },
    {
        name : "Exîna",
        image : "assets/img/roster/exina.jpg",
        race : troll,
        classe : droodImg,
        role : dps,
        rio : 3300,
        voti : "6/8HM",
        atsc : "9/9HM",
        atdh : "5/9MM",
        color : drood,
        link : "https://raider.io/characters/eu/hyjal/Ex%C3%AEna"
    },
    {
        name : "Nouchie",
        image : "assets/img/roster/nouchie.jpg",
        race : nightelf,
        classe : droodImg,
        role : heal,
        rio : 1781,
        voti : "0/8MM",
        atsc : "0/9MM",
        atdh : "0/9MM",
        color : drood,
        link : "https://raider.io/characters/eu/hyjal/Nouchie"
    },
    {
        name : "Mañìa",
        image : "assets/img/roster/mania.jpg",
        race : bloodelf,
        classe : palaImg,
        role : tank,
        rio : 3020,
        voti : "8/8HM",
        atsc : "6/9MM",
        atdh : "5/9MM",
        color : pala,
        link : "https://raider.io/characters/eu/hyjal/Ma%C3%B1%C3%ACa"
    },
    {
        name : "Tømty",
        image : "assets/img/roster/tomty.jpg",
        race : tauren,
        classe : palaImg,
        role : heal,
        rio : 2836,
        voti : "2/8MM",
        atsc : "0/9MM",
        atdh : "5/9MM",
        color : pala,
        link : "https://raider.io/characters/eu/hyjal/T%C3%B8mty"
    },
    {
        name : "Chtitôu",
        image : "assets/img/roster/chtitou.jpg",
        race : vulperin,
        classe : huntImg,
        role : dps,
        rio : 2842,
        voti : "0/8MM",
        atsc : "0/9MM",
        atdh : "5/9MM",
        color : hunt,
        link : "https://raider.io/characters/eu/hyjal/Chtit%C3%B4u"
    },
    {
        name : "Myaou",
        image : "assets/img/roster/myaou.jpg",
        race : nightelf,
        classe : huntImg,
        role : dps,
        rio : 1274,
        voti : "0/8MM",
        atsc : "0/9MM",
        atdh : "6/9HM",
        color : hunt,
        link : "https://raider.io/characters/eu/hyjal/Myaou"
    },
    {
        name : "Roomro",
        image : "assets/img/roster/roomro.jpg",
        race : trollZandalari,
        classe : huntImg,
        role : dps,
        rio : 2283,
        voti : "2/8MM",
        atsc : "9/9HM",
        atdh : "4/9HM",
        color : hunt,
        link : "https://raider.io/characters/eu/hyjal/Roomro"
    },
    {
        name : "Bøbbî",
        image : "assets/img/roster/bobbi.jpg",
        race : humain,
        classe : mageImg,
        role : dps,
        rio : 0,
        voti : "0/8MM",
        atsc : "7/9HM",
        atdh : "0/9MM",
        color : mage,
        link : "https://raider.io/characters/eu/hyjal/B%C3%B8bb%C3%AE"
    },
    {
        name : "Dîsk",
        image : "assets/img/roster/disk.jpg",
        race : bloodelf,
        classe : demoImg,
        role : dps,
        rio : 3203,
        voti : "5/8MM",
        atsc : "7/9MM",
        atdh : "6/9MM",
        color : demo,
        link : "https://raider.io/characters/eu/hyjal/D%C3%AEsk"
    },
    {
        name : "Happyakä",
        image : "assets/img/roster/happy.jpg",
        race : nain,
        classe : priestImg,
        role : heal,
        rio : 2952,
        voti : "0/8MM",
        atsc : "9/9NM",
        atdh : "3/9MM",
        color : priest,
        link : "https://raider.io/characters/eu/hyjal/Happyak%C3%A4"
    },
    {
        name : "Lyötox",
        image : "assets/img/roster/lyotox.jpg",
        race : gobelin,
        classe : priestImg,
        role : dps,
        rio : 2693,
        voti : "3/8MM",
        atsc : "2/9MM",
        atdh : "7/9HM",
        color : priest,
        link : "https://raider.io/characters/eu/hyjal/Ly%C3%B6tox"
    },
    {
        name : "Døv",
        image : "assets/img/roster/dov.jpg",
        race : dracthyr,
        classe : evokImg,
        role :dps,
        rio : 3141,
        voti : "8/8HM",
        atsc : "9/9HM",
        atdh : "4/9MM",
        color : evok,
        link : "https://raider.io/characters/eu/hyjal/D%C3%B8v"
    }
]

const offiSection = document.querySelector("#officier");
const rosterSection = document.querySelector("#roster");
const btnAlpha = document.querySelector(".btnAlpha");
const btnDecroissant = document.querySelector(".btnDecroissant");
const btnAlphaRoster = document.querySelector(".btnAlphaRoster");
const btnDecroissantRoster = document.querySelector(".btnDecroissantRoster");
const btnCroissant = document.querySelector(".btnCroissant");
const btnCroissantRoster = document.querySelector(".btnCroissantRoster");

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
        let race = document.createElement("img");
        let raceName = document.createElement("p");
        race.classList.add("imgClasse")
        raceName.classList.add("titre");
        raceName.innerText= "Race";
        race.src = element.race;
        info.appendChild(raceDiv);
        raceDiv.appendChild(raceName);
        raceDiv.appendChild(race);
        //Création de la zone classe
        let classeDiv = document.createElement("div");
        classeDiv.classList.add("divInfo");
        let classe = document.createElement("p");
        let classeName = document.createElement("img");
        classe.classList.add("titre");
        classe.innerText = `Classe`;
        classeName.src = element.classe;
        classeName.classList.add("imgClasse")
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
        //Création du bouton delete
        let btnDelete = document.createElement("button");
        let btnImg = document.createElement("img");
        btnImg.src = "assets/img/delete-cross.svg";
        btnDelete.appendChild(btnImg);
        btnDelete.classList.add("btnDelete");
        stat.appendChild(btnDelete);
    }
}

createCard(officier,offiSection);
createCard(roster,rosterSection);

let personnage = document.querySelectorAll(".personnage")

for (const iterator of personnage) {
    iterator.addEventListener("click", ()=> {
        console.log(iterator.innerText)
        for (let element of officier.concat(roster)) {
            if (iterator.innerText==element.name) {
                window.open(element.link, '_blank');
                break;
            }
        }
    })
}

function sortAlpha(array, section) {
    array.sort((a,b) => a.name.localeCompare(b.name));
    section.innerHTML="";
    createCard(array,section);
}

function sortScoreRio(array, section){
    array.sort((a,b) => b.rio - a.rio);
    section.innerHTML ="";
    createCard(array,section)
}

function sortScoreRioCroissant(array, section){
    array.sort((a,b) => a.rio - b.rio);
    section.innerHTML ="";
    createCard(array,section)
}


btnAlpha.addEventListener("click",()=>{
    console.log("tu as click");
    sortAlpha(officier,offiSection)
})

btnDecroissant.addEventListener("click", ()=>{
    console.log("tu as click");
    sortScoreRio(officier, offiSection)
})

btnAlphaRoster.addEventListener("click",()=>{
    console.log("tu as click");
    sortAlpha(roster,rosterSection)
})

btnDecroissantRoster.addEventListener("click", ()=>{
    console.log("tu as click");
    sortScoreRio(roster, rosterSection)
})

btnCroissant.addEventListener("click", ()=>{
    console.log("tu as click");
    sortScoreRioCroissant(officier, offiSection)
})
btnCroissantRoster.addEventListener("click", ()=>{
    console.log("tu as click");
    sortScoreRioCroissant(roster, rosterSection)
})


function deleteCard(array) {
    const btnDeleted = document.querySelectorAll(".btnDelete")
    btnDeleted.forEach(btn => {
        btn.addEventListener("click", () =>{
            btn.parentNode.parentNode.remove()
        })
    })
    return array
}

deleteCard(officier.concat(roster))