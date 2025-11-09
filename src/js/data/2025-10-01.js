dataSetVersion = "2025-10-01"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by School",
    key: "school",
    tooltip: "Check this to restrict characters from certain school.",
    checked: false,
    sub: [
      { name: "Abydos High School", key: "Abydos" },
      { name: "Gehenna Academy", key: "Gehenna" },
      { name: "Millennium Science School", key: "Millenium" },
      { name: "Trinity General School", key: "Trinity" },
      { name: "Hyakkiyako Alliance Academy", key: "Hyakkiyako" },
      { name: "Shanhaijing Senior Secondary School", key: "Shanhaijing" },
      { name: "Red Winter Federal Academy", key: "RedWinter" },
      { name: "Valkyrie Police Academy", key: "Valkyrie" },
      { name: "Arius Branch School", key: "Arius" },
      { name: "SRT Special Academy", key: "SRT" },
      { name: "Highlander Railroad Academy", key: "Highlander" },
      { name: "Wildhunt Art Academy", key: "Wildhunt" },
      { name: "Other", key: "Other" },
    ]
  },
  {
    name: "Show Global-released only",
    key: "notyetGlobal",
    tooltip: "Check this to disable characters that haven't yet made an appearance on the global server.",
    checked: false
  },
  {
    name: "Disable NPC Characters",
    key: "NPC",
    tooltip: "Check this to disable NPC characters.",
    checked: false
  },
  {
    name: "Disable Collab Characters",
    key: "collab",
    tooltip: "Check this to disable collab characters (Hatsune Miku, Misaka Mikoto, etc.)",
    checked: false
  },
  {
    name: "Remove Duplicate Characters",
    key: "dupes",
    tooltip: "Check this to remove Duplicate characters (ex. Shun and Small Shun)."
  }
  /*
  {
    name: "Remove Non-Girls",
    key: "notgirl",
    tooltip: "Check this to remove all non-female characters."
  },
  */
  
];

dataSet[dataSetVersion].characterData = [
  //A17
  {
    name: "蘇菲",
    img: "Sophie_A17.png",
    opts: {
      Series: ["A17"]
    }
  },
  {
    name: "Plachta",
    img: "PlachtaA17.webp",
    opts: {
      Series: ["A17"]
    }
  },
  {
    name: "Monika",
    img: "Monika.png",
    opts: {
      Series: ["A17"]
    }
  },
  {
    name: "Oskar",
    img: "OskarA17.png",
    opts: {
      Series: ["A17"],
	  notgirl: true
    }
  },
  {
    name: "Julio",
    img: "JulioA17.png",
    opts: {
      Series: ["A17"],
	  notgirl: true
    }
  },
  {
    name: "Corneria",
    img: "CorneriaA17.png",
    opts: {
      Series: ["A17"]
    }
  },
  
  //A26
  {
    name: "Kuchinashi Yume",
    img: "yume.jpg",
    opts: {
      school: ["Abydos"],
      NPC: true
    }
  }
];
	
