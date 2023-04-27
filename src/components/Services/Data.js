import Icon1 from "../../images/svg-1.svg";
import Icon2 from "../../images/svg-2.svg";
import Icon3 from "../../images/svg-3.svg";
import Icon4 from "../../images/LordOfUniversalis/lou_04.jfif";
import { FaGithub, FaSteam, FaHome, FaItchIo, FaWindowClose } from "react-icons/fa";

export const portfolio = [
  {
    pairId: 1,
    title: "Game Jam Randomizer",
    icon: require("../../images/GameJamRandomizer/gamejamrandomizer_01.PNG"),
    description: "A website i created to help randomizing Game Jam Challenges",
    longDescription:
      "The Game Jam Randomizer site was created to help randomize challenges for a game jam or to inspire/create ideas based on what to include in your game. The data was collected from several sources, such as Steam’s Tags and Genres. The Frontend was created using React and Bootstrap.",
    tags: [29, 26, 0, 1, 3, 11],
    highlight: true,
    links: [
      {
        icon: <FaHome />,
        label: "Site",
        ref: "https://theprograminator.github.io/",
      },
      {
        icon: <FaGithub />,
        label: "Github",
        ref: "https://github.com/ThePrograminator/game-jam-randomizer",
      },
    ],
    images: [
      {
        image: require("../../images/GameJamRandomizer/gamejamrandomizer_01.PNG"),
      },
      {
        image: require("../../images/GameJamRandomizer/gamejamrandomizer_02.PNG"),
      },
      {
        image: require("../../images/GameJamRandomizer/gamejamrandomizer_03.PNG"),
      },
      {
        image: require("../../images/GameJamRandomizer/gamejamrandomizer_04.PNG"),
      },
    ],
  },
  {
    pairId: 2,
    title: "Lord of Universalis",
    icon: require("../../images/LordOfUniversalis/lou_04.jfif"),
    description:
      "A Mod for the game Europa Universalis 4 set in the Lord of the Rings Universe",
    longDescription:
      "Lord of Universalis is a mod for the Strategy Game Europa Universalis 4 made by Paradox. The mod changes the game’s historical setting from 1444-1821 to the fictional world of Lord of the Rings. Lord of Universalis was my first Large Scale mod Project that I released in 2014. 8 Years have gone by, and I still update the mod till this day. The mod’s page on Steam has been visited by over 65.000 unique visitors and downloaded by 26.000 unique users. The mod has been covered by Youtubers and has also been mentioned on a certified Gaming News site as one of the best Europa Universalis 4 Mod in 2017. https://www.rockpapershotgun.com/best-europa-universalis-4-mods",
    tags: [29, 23],
    highlight: true,
    links: [
      {
        icon: <FaSteam />,
        label: "Steam",
        ref: "https://steamcommunity.com/sharedfiles/filedetails/?id=2095475587&searchtext=lord+of+universalis",
      },
      {
        icon: <FaGithub />,
        label: "Github",
        ref: "https://github.com/ThePrograminator/LOU_Map",
      },
    ],
    images: [
      {
        image: require("../../images/LordOfUniversalis/lou_01.jfif"),
      },
      {
        image: require("../../images/LordOfUniversalis/lou_02.jfif"),
      },
      {
        image: require("../../images/LordOfUniversalis/lou_03.jfif"),
      },
    ],
  },
  {
    pairId: 3,
    title: "Paradox Node Editor",
    icon: require("../../images/ParadoxNodeEditor/paradoxnodeeditor_02.PNG"),
    description:
      "A Moding Tool for the game Europa Universalis 4 and Hearts of Iron 4",
    longDescription:
      "Paradox Node Editor is a Desktop Application for editing Europa Universalis 4 Missions and Hearts of Iron 4 Focus Trees. The EU4 Missions and HOI4 Focus Trees are structured as a graph of connecting nodes. I created this tool to create and edit the structures of theses graphs more easily. The application was created with a JavaScript Framework called Electron and used Create React App as the Frontend.",
    tags: [29, 25, 0, 1, 3, 11, 13],
    highlight: true,
    links: [
      {
        icon: <FaGithub />,
        label: "Github",
        ref: "https://github.com/ThePrograminator/Eu4MissionEditorDesktop",
      },
    ],
    images: [
      {
        image: require("../../images/ParadoxNodeEditor/paradoxnodeeditor_01.PNG"),
      },
      {
        image: require("../../images/ParadoxNodeEditor/paradoxnodeeditor_04.PNG"),
      },
      {
        image: require("../../images/ParadoxNodeEditor/paradoxnodeeditor_03.PNG"),
      },
      {
        image: require("../../images/ParadoxNodeEditor/paradoxnodeeditor_05.PNG"),
      },
    ],
  },
  {
    pairId: 4,
    title: "The Martian Inspection",
    icon: require("../../images/MartianInspection/martianinspection_05.svg").default,
    description:
      "First-person story game, created as a main assignment for Game World Design Course",
    longDescription:
      "The Martian Inspection is the final project I made in my Game World Design Master’s Course. The game is a first-person story set in the late 1950’s in an American suburban town. You are playing as an Alien from Mars whose task it is to infiltrate a home and scan items of interest inside. While you do this you learn about the Aliens’ fear of the Humans and how they comically misinterpret everyday household items as being dangerous weapons. ",
    tags: [28, 24, 22, 5],
    highlight: true,
    links: [
      {
        icon: <FaItchIo />,
        label: "Itch IO",
        ref: "https://tvoldenitu.itch.io/tmi",
      },
    ],
    images: [
      {
        image: require("../../images/MartianInspection/martianinspection_01.png"),
      },
      {
        image: require("../../images/MartianInspection/martianinspection_02.png"),
      },
      {
        image: require("../../images/MartianInspection/martianinspection_03.png"),
      },
      {
        image: require("../../images/MartianInspection/martianinspection_04.png"),
      },
    ],
  },
  {
    pairId: 5,
    title: "Principal in Principle",
    icon: require("../../images/PrincipalInPrinciple/principalinprinciple_02.PNG"),
    description:
      "Isometric Simulation/Strategy game, created as a main assignment for Making Games Course",
    longDescription:
      "Principal in Principle was the first large game project I created at my Master’s course: Making Games. The game is a Simulation/Strategy Game set in an American Highschool. You are playing as the principal of a school which you have to maintain. The player has to respond to random events happening at the school while having to balance a budget. Good grades and management of the school results in bigger budgets which can then in turn mean the player can hire more teachers and enroll more students. ",
    tags: [28, 24, 22, 5],
    highlight: false,
    links: [
      /*{
        icon: <FaWindowClose />,
        label: "Missing",
        ref: "/",
      },*/
    ],
    images: [
      {
        image: require("../../images/PrincipalInPrinciple/principalinprinciple_01.PNG"),
      },
      {
        image: require("../../images/PrincipalInPrinciple/principalinprinciple_03.PNG"),
      },
      {
        image: require("../../images/PrincipalInPrinciple/principalinprinciple_04.PNG"),
      },
      {
        image: require("../../images/PrincipalInPrinciple/principalinprinciple_05.PNG"),
      },
    ],
  },
  {
    pairId: 6,
    title: "ACME Monopoly",
    icon: require("../../images/ACME/acme_03.png"),
    description:
      "Monopoly style companies take over Minecraft. A Minecraft Mod",
    longDescription:
      "In my Master’s Course Playable Media we had to create a Critical Design project for our Exam. My group and I came up with the idea of creating a mod, which changes the premise of a game where the player can control almost everything. So, we created a mod for Minecraft, in which there is an AI Monopoly style company that takes the land and its resources.",
    tags: [28, 23, 4],
    highlight: false,
    links: [
      {
        icon: <FaHome />,
        label: "Nexus Mods",
        ref: "https://www.nexusmods.com/minecraft/mods/199/",
      },
    ],
    images: [
      {
        image: require("../../images/ACME/acme_01.png"),
      },
      {
        image: require("../../images/ACME/acme_02.png"),
      },
      {
        image: require("../../images/ACME/acme_04.png"),
      },
    ],
  },
  {
    pairId: 7,
    title: "Skullbasher TD",
    icon: require("../../images/SkullbasherTD/skullbasher_01.PNG"),
    description:
      "3D First-person Tower Defense game, Made in Custom C++ Engine",
    longDescription:
      "My Game Programming Course for my Master’s wanted us to create a game in a custom C++ Game Engine (The Game Engine was created by a former lecturer). We chose to create a First-Person Tower Defense game, where the player must defend a Crystal from enemies by shooting them with a crossbow and building Towers. The Game includes 3D Models by using OpenGL, Physics from Bullet Physics Engine, and the GUI uses ImGui.",
    tags: [28, 24, 6, 27],
    highlight: false,
    links: [
      /*{
        icon: <FaWindowClose />,
        label: "Missing",
        ref: "/",
      },*/
    ],
    images: [
      {
        image: require("../../images/SkullbasherTD/skullbasher_02.PNG"),
      },
      {
        image: require("../../images/SkullbasherTD/skullbasher_03.PNG"),
      },
      {
        image: require("../../images/SkullbasherTD/skullbasher_04.PNG"),
      },
    ],
  },
  {
    pairId: 8,
    title: "EU4 Province Analyzer",
    icon: require("../../images/ProvinceAnalyzer/provinceanalyzer_01.PNG"),
    description:
      "A Map Moding Tool for the game Europa Universalis 4, Made with Java and Javafx",
    longDescription:
      "I created this Desktop application using Java and Javafx in order to quickly edit files when Modding for Europa Universalis 4. EU4 is a strategy game with over 4000 provinces, each having their data in a separate .txt file. The Application works by loading in data about the mod you are creating, then the user can write queries almost like SQL in order to edit multiple files.",
    tags: [29, 25, 4],
    highlight: true,
    links: [
      {
        icon: <FaGithub />,
        label: "Github",
        ref: "https://github.com/ThePrograminator/LordOfUniversalisProvinceAnalyser",
      },
    ],
    images: [
      {
        image: require("../../images/ProvinceAnalyzer/provinceanalyzer_01.PNG"),
      },
      {
        image: require("../../images/ProvinceAnalyzer/provinceanalyzer_02.PNG"),
      },
      {
        image: require("../../images/ProvinceAnalyzer/provinceanalyzer_03.PNG"),
      },
    ],
  },
  {
    pairId: 9,
    title: "European Islands",
    icon: require("../../images/EuropeanIslandsMod/european_islands_01.jfif"),
    description:
      "A Mod for the game Europa Universalis 4 adding more island provinces to the base game",
    longDescription:
      "I created this mod for Europa Universalis 4 as a side project from my main Mod: Lord of Universalis. The idea came from separating the Danish islands into their own provinces. However, one thing took another, and I ended up creating all islands in Europe as a separate province. Having this many islands creates new fun interactions in the form of Naval Strategies and gameplay. The mod was released in 2015.",
    tags: [29, 23],
    highlight: false,
    links: [
      {
        icon: <FaSteam />,
        label: "Steam",
        ref: "https://steamcommunity.com/sharedfiles/filedetails/?id=371477596",
      },
    ],
    images: [
      {
        image: require("../../images/EuropeanIslandsMod/european_islands_02.jfif"),
      },
      {
        image: require("../../images/EuropeanIslandsMod/european_islands_03.jfif"),
      },
      {
        image: require("../../images/EuropeanIslandsMod/european_islands_04.jfif"),
      },
    ],
  },
  {
    pairId: 9,
    title: "Estalian Custom Units",
    icon: require("../../images/Estalia/Estalia_04.jfif"),
    description:
      "A Mod for the game Total War - Warhammer, adding a custom faction to the game",
    longDescription:
      "When Total War: Warhammer first released in 2016 it only included special units for a couple of the main factions of the Warhammer Universe. Which meant that some of the more unknown and smaller factions in the universe such as the country of Estalia reused the units from the faction called the Empire. Looking into the lore and units I decided to add in 14 custom units based on a fan-made Estalia Strategy Book.",
    tags: [29, 23],
    highlight: false,
    links: [
      {
        icon: <FaSteam />,
        label: "Steam",
        ref: "https://steamcommunity.com/sharedfiles/filedetails/?id=707927964",
      },
    ],
    images: [
      {
        image: require("../../images/Estalia/estalia_01.jfif"),
      },
      {
        image: require("../../images/Estalia/estalia_02.jfif"),
      },
      {
        image: require("../../images/Estalia/estalia_03.jfif"),
      },
    ],
  },
  {
    pairId: 10,
    title: "Playable Kislev with Custom Units",
    icon: require("../../images/Kislev/kislev_04.jfif"),
    description:
      "A Mod for the game Total War - Warhammer, adding a custom faction to the game",
    longDescription:
      "When Total War: Warhammer first released in 2016 it only included special units for a couple of the main factions of the Warhammer Universe. Which meant that some of the more unknown and smaller factions in the universe such as the country of Kislev reused the units from the faction called the Empire. Looking into the lore and units I decided to add in 13 custom units based on a fan-made Kislev Strategy Book.",
    tags: [29, 23],
    highlight: false,
    links: [
      {
        icon: <FaSteam />,
        label: "Steam",
        ref: "https://steamcommunity.com/sharedfiles/filedetails/?id=709227156",
      },
    ],
    images: [
      {
        image: require("../../images/Kislev/kislev_01.jfif"),
      },
      {
        image: require("../../images/Kislev/kislev_02.jfif"),
      },
      {
        image: require("../../images/Kislev/kislev_03.jfif"),
      },
    ],
  },
  {
    pairId: 11,
    title: "Unity AI Behavior Tree Editor",
    icon: require("../../images/BehaviorTree/image_01.PNG"),
    description:
      "A Visual Behavior Tree Editor to be used for AI Agents in Unity Game Engine",
    longDescription:
      "When I created the Game Principal in Principle in my Making Games Course, I implemented a Behavior Tree for the Students and Teachers AI. However, I didn’t have the time to create a visual editing tool, so the trees were assembled in code. After some time, I felt like trying to create before mentioned Visual Editing Tool in Unity. The tool makes it much easier to edit Behavior Trees and it is very generic in that it easy to add in new types of nodes.",
    tags: [29, 22, 5],
    highlight: false,
    links: [
      /*{
        icon: <FaWindowClose />,
        label: "Missing",
        ref: "/",
      },*/
    ],
    images: [
      {
        image: require("../../images/BehaviorTree/image_01.PNG"),
      },
      {
        image: require("../../images/BehaviorTree/image_02.PNG"),
      },
      {
        image: require("../../images/BehaviorTree/image_03.PNG"),
      },
    ],
  },
  {
    pairId: 12,
    title: "Green Globe App",
    icon: require("../../images/GreenGlobe/image_03.png"),
    description:
      "A Social Media App for Pro-Environmental Events. Uses React Native and Communicates with GraphQL to a .Net Core Microservice",
    longDescription:
      "Green Globe is the final project for my Bachelor’s Degree as a Software Developer. At the time environmental awareness and action became more noticeable in Media and News outlets. So we were inspired to create a Social Media App for creating Environmental events such as: Picking up garbage in a forest. The creator of the event could then mark on the map in which area the event will take place, users could then during the event use their geolocation to see if they were within the bounds of the marked area. The app also included a chat. The Frontend was a React Native app which communicated with GraphQL to a ASP.Net Core Microservice Architecture consisting of 7 APIs. The Gateway API used Ocelot and the Service Discovery was Consul. The Database used was RavenDB an ACID-compliant Document store.",
    tags: [28, 12, 5, 9, 0, 1, 21, 30],
    highlight: false,
    links: [
      {
        icon: <FaGithub />,
        label: "Github",
        ref: "https://github.com/InteractiveBoiz/GreenGlobe-Frontend",
      },
      {
        icon: <FaGithub />,
        label: "Github",
        ref: "https://github.com/InteractiveBoiz/GreenGlobe-Backend",
      },
    ],
    images: [
      {
        image: require("../../images/GreenGlobe/image_03.png"),
      },
      {
        image: require("../../images/GreenGlobe/image_01.png"),
      },
      {
        image: require("../../images/GreenGlobe/image_02.png"),
      },
      {
        image: require("../../images/GreenGlobe/image_04.png"),
      },
    ],
  },
  {
    pairId: 13,
    title: "Opticor",
    icon: require("../../images/Opticor/image_01.png"),
    description:
      "A Puzzle Platform Game created in Unity for the Global Game Jam 2022",
    longDescription:
      "In January 2022 I joined the Global Game Jam and together with a group created the game Opticor in 48 hours. The Global Game Jam theme was Duality. Opticor is a 3D Puzzle Platformer set in a Dark Fantasy world where the player has to switch between two characters. One player was situated in a Light world and would do most of the puzzle activity, while the other character is in a dark world and does most of the Platform gameplay related actions. Using these two characters the player must progress through 10 different levels. The Game was created in Unity. ",
    tags: [29, 24, 22, 5],
    highlight: true,
    links: [
      {
        icon: <FaHome />,
        label: "Home",
        ref: "https://globalgamejam.org/2022/games/opticor-2",
      },
      {
        icon: <FaItchIo />,
        label: "Itch",
        ref: "https://dkstranger.itch.io/opticor",
      },
    ],
    images: [
      {
        image: require("../../images/Opticor/image_02.PNG"),
      },
      {
        image: require("../../images/Opticor/image_03.PNG"),
      },
      {
        image: require("../../images/Opticor/image_04.PNG"),
      },
      {
        image: require("../../images/Opticor/image_05.PNG"),
      },
    ],
  },
];
//https://tvoldenitu.itch.io/tmi

export const tags = [
  {
    id: 0,
    name: "HTML",
    color: "#DEBE3D",
    colorSelected: "#AB8B0A",
    order: 4,
    gameTag: false,
    softwareTag: true,
  },
  {
    id: 1,
    name: "CSS",
    color: "#907609",
    colorSelected: "#AB511F",
    order: 4,
    gameTag: false,
    softwareTag: true,
  },
  {
    id: 2,
    name: "SASS",
    color: "#FFB8EC",
    colorSelected: "#FFA5E7",
    order: 4,
    gameTag: false,
    softwareTag: true,
  },
  {
    id: 3,
    name: "Javascript",
    color: "#FF705F",
    colorSelected: "#DF2512",
    order: 4,
    gameTag: false,
    softwareTag: true,
  },
  {
    id: 4,
    name: "Java",
    color: "#FE982C",
    colorSelected: "#C85120",
    order: 4,
    gameTag: true,
    softwareTag: true,
  },
  {
    id: 5,
    name: "C#",
    color: "#10DCFF",
    colorSelected: "#0099BF",
    order: 4,
    gameTag: true,
    softwareTag: true,
  },
  {
    id: 6,
    name: "C++",
    color: "#55B6FF",
    colorSelected: "#1D71C6",
    order: 4,
    gameTag: true,
    softwareTag: false,
  },
  {
    id: 7,
    name: "Python",
    color: "#51CD51",
    colorSelected: "#188018",
    order: 4,
    gameTag: false,
    softwareTag: true,
  },
  {
    id: 8,
    name: "ASP.NET",
    color: "#8985F7",
    colorSelected: "#5753C5",
    order: 3,
    gameTag: false,
    softwareTag: true,
  },
  {
    id: 9,
    name: "ASP.NET Core",
    color: "#FFC51F",
    colorSelected: "#C36806",
    order: 3,
    gameTag: false,
    softwareTag: true,
  },
  {
    id: 10,
    name: "NodeJS",
    color: "#5CBA2E",
    colorSelected: "#2E8C00",
    order: 3,
    gameTag: false,
    softwareTag: true,
  },
  {
    id: 11,
    name: "React",
    color: "#E19344",
    colorSelected: "#AB511F",
    order: 3,
    gameTag: false,
    softwareTag: true,
  },
  {
    id: 12,
    name: "React Native",
    color: "#FFC160",
    colorSelected: "#EDA04E",
    order: 3,
    gameTag: false,
    softwareTag: true,
  },
  {
    id: 13,
    name: "Electron",
    color: "#9EB22F",
    colorSelected: "#607100",
    order: 3,
    gameTag: false,
    softwareTag: true,
  },
  {
    id: 14,
    name: "Django",
    color: "#A0FE72",
    colorSelected: "#71CF43",
    order: 3,
    gameTag: false,
    softwareTag: true,
  },
  {
    id: 15,
    name: "AngularJS",
    color: "#FFF970",
    colorSelected: "#FFD03B",
    order: 3,
    gameTag: false,
    softwareTag: true,
  },
  {
    id: 16,
    name: "Microsoft SQL",
    color: "#000",
    colorSelected: "#000",
    order: 5,
    gameTag: false,
    softwareTag: true,
  },
  {
    id: 17,
    name: "MySQL",
    color: "#000",
    colorSelected: "#000",
    order: 5,
    gameTag: false,
    softwareTag: true,
  },
  {
    id: 18,
    name: "PostgreSQL",
    color: "#000",
    colorSelected: "#000",
    order: 5,
    gameTag: false,
    softwareTag: true,
  },
  {
    id: 19,
    name: "MongoDB",
    color: "#99F299",
    colorSelected: "#72DA72",
    order: 5,
    gameTag: false,
    softwareTag: true,
  },
  {
    id: 20,
    name: "NEO4J",
    color: "#000",
    colorSelected: "#000",
    order: 5,
    gameTag: false,
    softwareTag: true,
  },
  {
    id: 21,
    name: "RavenDB",
    color: "#E467C3",
    colorSelected: "#AA2288",
    order: 5,
    gameTag: false,
    softwareTag: true,
  },
  {
    id: 22,
    name: "Unity",
    color: "#9AEFFF",
    colorSelected: "#3EE1FF",
    order: 3,
    gameTag: true,
    softwareTag: false,
  },
  {
    id: 23,
    name: "Mod",
    color: "#FCEE98",
    colorSelected: "#E6C645",
    order: 2,
    gameTag: true,
    softwareTag: false,
  },
  {
    id: 24,
    name: "Game",
    color: "#FFC2B2",
    colorSelected: "#FF8A6A",
    order: 2,
    gameTag: true,
    softwareTag: false,
  },
  {
    id: 25,
    name: "Software",
    color: "#9FD4FF",
    colorSelected: "#69CAFF",
    order: 2,
    gameTag: false,
    softwareTag: true,
  },
  {
    id: 26,
    name: "Web",
    color: "#DBEF6C",
    colorSelected: "#ABBF3C",
    order: 2,
    gameTag: false,
    softwareTag: true,
  },
  {
    id: 27,
    name: "Lua",
    color: "#BBB8FF",
    colorSelected: "#918DFF",
    order: 4,
    gameTag: true,
    softwareTag: false,
  },
  {
    id: 28,
    name: "School",
    color: "#8985F7",
    colorSelected: "#444CDE",
    order: 1,
    gameTag: true,
    softwareTag: true,
  },
  {
    id: 29,
    name: "Personal",
    color: "#FD7854",
    colorSelected: "#BF3624",
    order: 1,
    gameTag: true,
    softwareTag: true,
  },
  {
    id: 30,
    name: "App",
    color: "#ebfc55",
    colorSelected: "#a6b23c",
    order: 2,
    gameTag: false,
    softwareTag: true,
  },
];
