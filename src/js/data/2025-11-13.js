dataSetVersion = "2025-11-13"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "選擇角色範圍",
    key: "series",
    tooltip: "Check this to restrict characters from certain series.",
    checked: true,
    sub: [
      { name: "A1 瑪莉的鍊金工房", key: "A1", checked: false },
      { name: "A2 艾莉的鍊金工房", key: "A2", checked: false },
      { name: "A3 莉莉的鍊金工房", key: "A3", checked: false },
      { name: "A4 優蒂的鍊金工房", key: "A4", checked: false },
      { name: "A5 薇歐蕾特的鍊金工房", key: "A5", checked: false },
      { name: "A6 伊莉絲的鍊金工房~永恆瑪娜~", key: "A6", checked: false },
      { name: "A7 伊莉絲的鍊金工房~永恆瑪娜2~", key: "A7", checked: false },
      { name: "A8 伊莉絲的鍊金工房~莊嚴幻境~", key: "A8", checked: false },
      { name: "A9 瑪娜傳奇", key: "A9", checked: false },
      { name: "A10 瑪娜傳奇2", key: "A10", checked: false },
      { name: "A11 蘿樂娜的鍊金工房", key: "A11", checked: false },
      { name: "A12 托托莉的鍊金工房", key: "A12", checked: false },
      { name: "A13 梅露露的鍊金工房", key: "A13", checked: false },
      { name: "A14 愛夏的鍊金工房", key: "A14", checked: false },
      { name: "A15 愛絲卡＆羅吉的鍊金工房", key: "A15", checked: false },
      { name: "A16 夏莉的鍊金工房", key: "A16", checked: false },
      { name: "A17 蘇菲的鍊金工房", key: "A17", checked: false },
      { name: "A18 菲莉絲的鍊金工房", key: "A18", checked: false },
      { name: "A19 莉迪＆蘇瑞的鍊金工房", key: "A19", checked: false },
      { name: "A20 露露亞的鍊金工房", key: "A20", checked: false },
      { name: "A21 萊莎的鍊金工房", key: "A21", checked: false },
      { name: "A22 萊莎的鍊金工房2", key: "A22", checked: false },
      { name: "A23 蘇菲的鍊金工房2", key: "A23", checked: false },
      { name: "A24 萊莎的鍊金工房3", key: "A24", checked: false },
      { name: "A25 蕾斯萊莉婭娜的鍊金工房", key: "A25", checked: false },
      { name: "A26 優米雅的鍊金工房", key: "A26", checked: false },
      { name: "Nelke 奈爾克與傳說之鍊金術士們", key: "Nelke", checked: false },
      { name: "DSA1 莉慈的鍊金工房", key: "DSA1", checked: false },
      { name: "DSA2 安妮的鍊金工房", key: "DSA2", checked: false },
      { name: "DSA3 莉娜的鍊金工房", key: "DSA3", checked: false },
      { name: "AO 布蕾塞爾的鍊金術士", key: "AO", checked: false },
      { name: "Elkrone 艾爾克羅奈的鍊金工房", key: "Elkrone", checked: false },
    ],
  },
  {
    name: "排除次要角色",
    key: "subchar",
    tooltip: "Check this to disable subcharacters.",
    checked: false,
  },
];

dataSet[dataSetVersion].characterData = [
  {
    name: "奧拉‧卡爾",
    img: "A1_Aula_Kuhl.jpeg",
    opts: {
      series: ["A1"],
      subchar: true
    }
  },
  {
    name: "琪麗耶里希‧法格那",
    img: "A1_Kyrielich.jpeg",
    opts: {
      series: ["A1"],
      subchar: false
    }
  },
  {
    name: "舒華爾貝‧札茲",
    img: "A1_Shwalbe.jpeg",
    opts: {
      series: ["A1"],
      subchar: false
    }
  },
  {
    name: "娜塔莉‧柯迪里亞",
    img: "A1_Nathalie_Ohse.jpeg",
    opts: {
      series: ["A1"],
      subchar: false
    }
  },
  {
    name: "恩戴克‧亞德",
    img: "A1_Enderk.jpeg",
    opts: {
      series: ["A1", "A2"],
      subchar: false
    }
  },
  {
    name: "庫高‧理希特",
    img: "A1_Kugel.jpeg",
    opts: {
      series: ["A1", "A2"],
      subchar: false
    }
  },
  {
    name: "庫萊斯‧庫爾",
    img: "A1_Kreiohse.jpeg",
    opts: {
      series: ["A1", "A2"],
      subchar: false
    }
  },
  {
    name: "希婭・多納斯塔克",
    img: "A1_Schia.jpeg",
    opts: {
      series: ["A1", "A2"],
      subchar: false
    }
  },
  {
    name: "迪歐‧謝克",
    img: "A1_Dio.jpeg",
    opts: {
      series: ["A1", "A2"],
      subchar: true
    }
  },
  {
    name: "哈雷修‧斯萊曼",
    img: "A1_Hallesch.jpeg",
    opts: {
      series: ["A1", "A2"],
      subchar: false
    }
  },
  {
    name: "芙蕾亞‧謝克",
    img: "A1_Flea.jpeg",
    opts: {
      series: ["A1", "A2"],
      subchar: true
    }
  },
  {
    name: "布列多爾夫‧西格札爾",
    img: "A1_Bredolf.jpeg",
    opts: {
      series: ["A1", "A2"],
      subchar: true
    }
  },
  {
    name: "瑪莉",
    img: "A1_Marie.jpeg",
    opts: {
      series: ["A1", "A2"],
      subchar: false
    }
  },
  {
    name: "繆羽‧賽克絲坦斯",
    img: "A1_Myu.jpeg",
    opts: {
      series: ["A1", "A2"],
      subchar: false
    }
  },
  {
    name: "路溫‧芬爾尼魯",
    img: "A1_Ruven.jpeg",
    opts: {
      series: ["A1", "A2"],
      subchar: false
    }
  },
  {
    name: "英格莉特",
    img: "A1_Ingrid.jpeg",
    opts: {
      series: ["A1", "A2", "A3"],
      subchar: false
    }
  },
  {
    name: "多爾尼",
    img: "A1_Dornie.jpeg",
    opts: {
      series: ["A1", "A2", "A3"],
      subchar: true
    }
  },
  {
    name: "妖精族長老",
    img: "A1_Fairy_Master.jpeg",
    opts: {
      series: ["A1", "A2", "A3"],
      subchar: true
    }
  },
  {
    name: "武器店的大叔",
    img: "Weapon_shop_master.jpeg",
    opts: {
      series: ["A1", "A2", "A3"],
      subchar: true
    }
  },
  {
    name: "妖精",
    img: "Fairy.jpeg",
    opts: {
      series: ["A1", "A2", "A3", "A4", "A6", "A8", "A25", "Nelke", "DSA1", "DSA3"],
      subchar: false
    }
  },
  {
    name: "溫特‧西格札爾",
    img: "A1_Wind.jpeg",
    opts: {
      series: ["A1", "A3"],
      subchar: true
    }
  },
  {
    name: "薇姆",
    img: "A10_Whim.jpeg",
    opts: {
      series: ["A10"],
      subchar: false
    }
  },
  {
    name: "烏琉",
    img: "A10_Uryu.jpeg",
    opts: {
      series: ["A10"],
      subchar: false
    }
  },
  {
    name: "烏爾莉卡‧繆貝莉",
    img: "A10_Ulrika_Mulberry.jpeg",
    opts: {
      series: ["A10"],
      subchar: false
    }
  },
  {
    name: "艾特瓦爾特‧戴斯勒",
    img: "A10_Etward_Dysler.jpeg",
    opts: {
      series: ["A10"],
      subchar: false
    }
  },
  {
    name: "艾納西亞‧戴斯勒",
    img: "A10_Ennarcia_Dysler.jpeg",
    opts: {
      series: ["A10"],
      subchar: false
    }
  },
  {
    name: "克蘿耶‧哈爾托克",
    img: "A10_Chloe_Hartzog.jpeg",
    opts: {
      series: ["A10"],
      subchar: false
    }
  },
  {
    name: "戈多",
    img: "A10_Goto.jpeg",
    opts: {
      series: ["A10"],
      subchar: false
    }
  },
  {
    name: "莎莎莉娜‧席利",
    img: "A10_Sasalina_Shilly.jpeg",
    opts: {
      series: ["A10"],
      subchar: true
    }
  },
  {
    name: "噗妞",
    img: "A10_Puniyo.jpeg",
    opts: {
      series: ["A10"],
      subchar: false
    }
  },
  {
    name: "佩佩隆奇諾",
    img: "A10_Pepperoncino.jpeg",
    opts: {
      series: ["A10"],
      subchar: false
    }
  },
  {
    name: "瑪露達‧榭貝斯提",
    img: "A10_Marta_Schevesti.jpeg",
    opts: {
      series: ["A10"],
      subchar: true
    }
  },
  {
    name: "尤恩",
    img: "A10_Yun.jpeg",
    opts: {
      series: ["A10"],
      subchar: false
    }
  },
  {
    name: "莉莉亞妮‧菲倫多夫",
    img: "A10_Lilianne_Valendorf.jpeg",
    opts: {
      series: ["A10"],
      subchar: false
    }
  },
  {
    name: "路里希・巴拉哈",
    img: "A10_Reicher_Wallach.jpeg",
    opts: {
      series: ["A10"],
      subchar: true
    }
  },
  {
    name: "羅傑琉克斯‧麥森",
    img: "A10_Raze.jpeg",
    opts: {
      series: ["A10"],
      subchar: false
    }
  },
  {
    name: "伊克賽爾‧楊",
    img: "A11_Iksel.jpeg",
    opts: {
      series: ["A11"],
      subchar: false
    }
  },
  {
    name: "坦特里斯",
    img: "A11_Tantris.jpeg",
    opts: {
      series: ["A11"],
      subchar: false
    }
  },
  {
    name: "梅利翁達斯‧奧爾克",
    img: "A11_Meredith.jpeg",
    opts: {
      series: ["A11"],
      subchar: true
    }
  },
  {
    name: "萊恩‧菲立克塞爾",
    img: "A11_Ryan.jpeg",
    opts: {
      series: ["A11"],
      subchar: true
    }
  },
  {
    name: "蘿拉‧菲立克塞爾",
    img: "A11_Laura.jpeg",
    opts: {
      series: ["A11"],
      subchar: true
    }
  },
  {
    name: "庫蝶莉亞‧馮‧費爾巴哈",
    img: "A11_Cordelia.jpeg",
    opts: {
      series: ["A11", "A12"],
      subchar: false
    }
  },
  {
    name: "蒂華娜・海德布蘭德",
    img: "A11_Tiffani.jpeg",
    opts: {
      series: ["A11", "A12"],
      subchar: true
    }
  },
  {
    name: "史特爾克（史特爾肯布魯克‧庫拉哈）",
    img: "A11_Sterk.jpeg",
    opts: {
      series: ["A11", "A12", "A13", "A20"],
      subchar: false
    }
  },
  {
    name: "蘿樂娜（蘿樂萊娜‧菲立克塞爾）",
    img: "A11_Rorona.jpeg",
    opts: {
      series: ["A11", "A12", "A13", "A20"],
      subchar: false
    }
  },
  {
    name: "亞斯特麗德‧潔克西絲",
    img: "A11_Astrid.jpeg",
    opts: {
      series: ["A11", "A13"],
      subchar: false
    }
  },
  {
    name: "艾絲緹‧愛哈德",
    img: "A11_Esty.jpeg",
    opts: {
      series: ["A11", "A13"],
      subchar: false
    }
  },
  {
    name: "霍姆（女）",
    img: "A11_Hom_(Female).jpeg",
    opts: {
      series: ["A11", "A13"],
      subchar: false
    }
  },
  {
    name: "霍姆（男）",
    img: "A11_Hom_(Male).jpeg",
    opts: {
      series: ["A11", "A13"],
      subchar: false
    }
  },
  {
    name: "吉歐",
    img: "A11_Gio.jpeg",
    opts: {
      series: ["A11", "A13"],
      subchar: false
    }
  },
  {
    name: "柯爾‧杜勒",
    img: "A11_Cole.jpeg",
    opts: {
      series: ["A11", "A20"],
      subchar: true
    }
  },
  {
    name: "里歐涅菈‧海因茲",
    img: "A11_Lionela.jpeg",
    opts: {
      series: ["A11", "A20"],
      subchar: false
    }
  },
  {
    name: "吉瑟菈‧赫爾默德",
    img: "A12_Gisela.jpeg",
    opts: {
      series: ["A12"],
      subchar: true
    }
  },
  {
    name: "吉多‧赫爾默德",
    img: "A12_Guid.jpeg",
    opts: {
      series: ["A12"],
      subchar: true
    }
  },
  {
    name: "葛哈‧科涅夫",
    img: "A12_Gerhard_Konev.jpeg",
    opts: {
      series: ["A12"],
      subchar: true
    }
  },
  {
    name: "小姆（女）",
    img: "A12_Chim_(Female).jpeg",
    opts: {
      series: ["A12"],
      subchar: false
    }
  },
  {
    name: "小姆（男）",
    img: "A12_Chim_(Male).jpeg",
    opts: {
      series: ["A12"],
      subchar: false
    }
  },
  {
    name: "賽希莉亞‧赫爾默德",
    img: "A12_Cecilia.jpeg",
    opts: {
      series: ["A12"],
      subchar: false
    }
  },
  {
    name: "畢露卡",
    img: "A12_Pilca.jpeg",
    opts: {
      series: ["A12"],
      subchar: true
    }
  },
  {
    name: "彼特‧里茲",
    img: "A12_Peter.jpeg",
    opts: {
      series: ["A12"],
      subchar: true
    }
  },
  {
    name: "馬克‧麥克布萊恩",
    img: "A12_Marc.jpeg",
    opts: {
      series: ["A12"],
      subchar: false
    }
  },
  {
    name: "梅爾維亞‧希伯",
    img: "A12_Melvia.jpeg",
    opts: {
      series: ["A12"],
      subchar: false
    }
  },
  {
    name: "吉諾‧克納布",
    img: "A12_Gino.jpeg",
    opts: {
      series: ["A12", "A13"],
      subchar: false
    }
  },
  {
    name: "菲莉‧愛哈德",
    img: "A13_Filly.jpeg",
    opts: {
      series: ["A12", "A13"],
      subchar: true
    }
  },
  {
    name: "托托莉（托托莉亞‧赫爾默德）",
    img: "A12_Totooria.jpeg",
    opts: {
      series: ["A12", "A13", "A20"],
      subchar: false
    }
  },
  {
    name: "敏敏‧霍利爾‧馮‧修瓦茲蘭格",
    img: "A12_Mimi.jpeg",
    opts: {
      series: ["A12", "A13", "A20"],
      subchar: false
    }
  },
  {
    name: "小姆龍",
    img: "A20_ChimDragon.jpeg",
    opts: {
      series: ["A12", "A20"],
      subchar: true
    }
  },
  {
    name: "琵亞妮雅",
    img: "A12_Piana.jpeg",
    opts: {
      series: ["A12", "A20"],
      subchar: false
    }
  },
  {
    name: "迪傑‧赫爾斯多納‧亞爾茲",
    img: "A13_Dessier.jpeg",
    opts: {
      series: ["A13"],
      subchar: true
    }
  },
  {
    name: "法娜‧歐瑟斯",
    img: "A13_Hanna.jpeg",
    opts: {
      series: ["A13"],
      subchar: false
    }
  },
  {
    name: "萊亞斯‧弗爾肯",
    img: "A13_Lias.jpeg",
    opts: {
      series: ["A13"],
      subchar: false
    }
  },
  {
    name: "路菲斯‧弗爾肯",
    img: "A13_Rufus.jpeg",
    opts: {
      series: ["A13"],
      subchar: false
    }
  },
  {
    name: "凱娜‧史威雅",
    img: "A13_Keina.jpeg",
    opts: {
      series: ["A13", "A20"],
      subchar: false
    }
  },
  {
    name: "梅露露（梅露露琳絲‧蕾蒂‧亞爾茲）",
    img: "A13_Meruru.jpeg",
    opts: {
      series: ["A13", "A20"],
      subchar: false
    }
  },
  {
    name: "亞尼‧利特頓",
    img: "A14_Ernie.jpeg",
    opts: {
      series: ["A14"],
      subchar: true
    }
  },
  {
    name: "凱爾‧塔連巴特",
    img: "A14_Kyle.jpeg",
    opts: {
      series: ["A14"],
      subchar: true
    }
  },
  {
    name: "塔妮亞‧霍塔",
    img: "A14_Tanya.jpeg",
    opts: {
      series: ["A14"],
      subchar: true
    }
  },
  {
    name: "娜娜卡‧古倫登",
    img: "A14_Nanaca.jpeg",
    opts: {
      series: ["A14"],
      subchar: true
    }
  },
  {
    name: "弗雷多‧羅德佛克",
    img: "A14_Fred.jpeg",
    opts: {
      series: ["A14"],
      subchar: true
    }
  },
  {
    name: "梅莉耶塔‧繆亞",
    img: "A14_Merietta.jpeg",
    opts: {
      series: ["A14"],
      subchar: true
    }
  },
  {
    name: "尤里斯‧古倫登",
    img: "A14_Juris.jpeg",
    opts: {
      series: ["A14"],
      subchar: false
    }
  },
  {
    name: "拉南‧耶祖",
    img: "A14_Ranun.jpeg",
    opts: {
      series: ["A14"],
      subchar: true
    }
  },
  {
    name: "瑞吉娜‧柯堤絲",
    img: "A14_Regina.jpeg",
    opts: {
      series: ["A14"],
      subchar: false
    }
  },
  {
    name: "妮歐‧阿圖爾",
    img: "A14_Nio.jpeg",
    opts: {
      series: ["A14", "A15"],
      subchar: false
    }
  },
  {
    name: "瑪麗翁‧昆恩",
    img: "A14_Marion.jpeg",
    opts: {
      series: ["A14", "A15"],
      subchar: false
    }
  },
  {
    name: "琳卡",
    img: "A14_Linca.jpeg",
    opts: {
      series: ["A14", "A15"],
      subchar: false
    }
  },
  {
    name: "薇爾貝兒‧沃‧耶斯禮特",
    img: "A14_Wilbell.jpeg",
    opts: {
      series: ["A14", "A15", "A16"],
      subchar: false
    }
  },
  {
    name: "哈利‧歐森",
    img: "A14_Harry.jpeg",
    opts: {
      series: ["A14", "A15", "A16"],
      subchar: true
    }
  },
  {
    name: "愛夏‧阿圖爾",
    img: "A14_Ayesha.jpeg",
    opts: {
      series: ["A14", "A16"],
      subchar: false
    }
  },
  {
    name: "奧迪莉雅",
    img: "A14_Odelia.jpeg",
    opts: {
      series: ["A14", "A16"],
      subchar: false
    }
  },
  {
    name: "奇斯葛里夫‧赫瑟達因",
    img: "A14_Keithgriff.jpeg",
    opts: {
      series: ["A14", "A16"],
      subchar: false
    }
  },
  {
    name: "亞文‧賽特雷特",
    img: "A15_Awin.jpeg",
    opts: {
      series: ["A15"],
      subchar: false
    }
  },
  {
    name: "克羅涅",
    img: "A15_Clone.jpeg",
    opts: {
      series: ["A15"],
      subchar: true
    }
  },
  {
    name: "克魯蘭德‧古拉曼",
    img: "A15_Colland.jpeg",
    opts: {
      series: ["A15"],
      subchar: true
    }
  },
  {
    name: "西蕾亞‧赫潔魯格里姆",
    img: "A15_Threia.jpeg",
    opts: {
      series: ["A15"],
      subchar: false
    }
  },
  {
    name: "狄庫‧貝里耶爾",
    img: "A15_Duke.jpeg",
    opts: {
      series: ["A15"],
      subchar: true
    }
  },
  {
    name: "芙拉梅烏",
    img: "A15_Flameu.jpeg",
    opts: {
      series: ["A15"],
      subchar: true
    }
  },
  {
    name: "米契‧薩‧謬森布魯格",
    img: "A15_Micie.jpeg",
    opts: {
      series: ["A15"],
      subchar: false
    }
  },
  {
    name: "露希兒‧艾爾涅拉",
    img: "A15_Lucille.jpeg",
    opts: {
      series: ["A15"],
      subchar: false
    }
  },
  {
    name: "愛絲卡‧梅莉耶",
    img: "A15_Escha.jpeg",
    opts: {
      series: ["A15", "A16"],
      subchar: false
    }
  },
  {
    name: "卡朵拉・拉奇卡",
    img: "A15_Katla.jpeg",
    opts: {
      series: ["A15", "A16"],
      subchar: false
    }
  },
  {
    name: "索爾‧格拉曼",
    img: "A15_Solle.jpeg",
    opts: {
      series: ["A15", "A16"],
      subchar: false
    }
  },
  {
    name: "雷法‧拉克培里",
    img: "A15_Reyfer.jpeg",
    opts: {
      series: ["A15", "A16"],
      subchar: false
    }
  },
  {
    name: "羅吉（羅吉庫斯‧菲克薩立歐）",
    img: "A15_Logy.jpeg",
    opts: {
      series: ["A15", "A16"],
      subchar: false
    }
  },
  {
    name: "艾伯特‧培里安",
    img: "A16_Albert.jpeg",
    opts: {
      series: ["A16"],
      subchar: true
    }
  },
  {
    name: "寇爾堤斯",
    img: "A16_Kortes.jpeg",
    opts: {
      series: ["A16"],
      subchar: false
    }
  },
  {
    name: "傑拉爾‧培里安",
    img: "A16_Gerard.jpeg",
    opts: {
      series: ["A16"],
      subchar: true
    }
  },
  {
    name: "夏莉絲堤菈",
    img: "A16_Stella.jpeg",
    opts: {
      series: ["A16"],
      subchar: false
    }
  },
  {
    name: "夏露羅蒂‧艾爾蜜娜斯",
    img: "A16_Lotte.jpeg",
    opts: {
      series: ["A16"],
      subchar: false
    }
  },
  {
    name: "迪歐庫加",
    img: "A16_Teokhuga.jpeg",
    opts: {
      series: ["A16"],
      subchar: true
    }
  },
  {
    name: "娜蒂‧艾爾蜜娜思",
    img: "A16_Nady.jpeg",
    opts: {
      series: ["A16"],
      subchar: true
    }
  },
  {
    name: "荷蒙拉",
    img: "A16_Homura.jpeg",
    opts: {
      series: ["A16"],
      subchar: false
    }
  },
  {
    name: "米爾卡‧庫羅茲",
    img: "A16_Miruca.jpeg",
    opts: {
      series: ["A16"],
      subchar: false
    }
  },
  {
    name: "尤莉耶‧庫羅茲",
    img: "A16_Jurie.jpeg",
    opts: {
      series: ["A16"],
      subchar: false
    }
  },
  {
    name: "勞爾‧比列德",
    img: "A16_Raoul.jpeg",
    opts: {
      series: ["A16"],
      subchar: true
    }
  },
  {
    name: "蘿潔米亞",
    img: "A16_Rosemia.jpeg",
    opts: {
      series: ["A16"],
      subchar: true
    }
  },
  {
    name: "蕾昂（阿美麗婭‧蕾昂邁爾）",
    img: "A17_Leon.jpeg",
    opts: {
      series: ["A17"],
      subchar: false
    }
  },
  {
    name: "愛莉婕‧弗利",
    img: "A17_Elise.jpeg",
    opts: {
      series: ["A17"],
      subchar: true
    }
  },
  {
    name: "朱利歐‧賽巴魯特‧雷汀夏福特",
    img: "A17_Julio.jpeg",
    opts: {
      series: ["A17"],
      subchar: false
    }
  },
  {
    name: "緹絲‧海茲曼",
    img: "A17_Tess.jpeg",
    opts: {
      series: ["A17"],
      subchar: true
    }
  },
  {
    name: "哈羅爾‧吉曼斯",
    img: "A17_Harol.jpeg",
    opts: {
      series: ["A17"],
      subchar: false
    }
  },
  {
    name: "霍爾斯特‧巴斯拉",
    img: "A17_Horst.jpeg",
    opts: {
      series: ["A17"],
      subchar: true
    }
  },
  {
    name: "摩妮卡‧艾門萊希",
    img: "A17_Monika.jpeg",
    opts: {
      series: ["A17"],
      subchar: false
    }
  },
  {
    name: "阿多米娜",
    img: "A17_Atomina.jpeg",
    opts: {
      series: ["A17", "A18"],
      subchar: true
    }
  },
  {
    name: "奧斯卡‧貝爾瑪",
    img: "A17_Oskar.jpeg",
    opts: {
      series: ["A17", "A18"],
      subchar: false
    }
  },
  {
    name: "梅庫雷特",
    img: "A17_Meklet.jpeg",
    opts: {
      series: ["A17", "A18"],
      subchar: true
    }
  },
  {
    name: "弗里茲‧懷斯貝爾克",
    img: "A17_Fritz.jpeg",
    opts: {
      series: ["A17", "A18", "A19"],
      subchar: false
    }
  },
  {
    name: "蘇菲‧諾伊恩謬拉",
    img: "A17_Sophie.jpeg",
    opts: {
      series: ["A17", "A18", "A19", "A23"],
      subchar: false
    }
  },
  {
    name: "普拉芙妲",
    img: "A17_Plachta.jpeg",
    opts: {
      series: ["A17", "A18", "A19", "A23"],
      subchar: false
    }
  },
  {
    name: "柯爾涅莉雅",
    img: "A17_Corneria.jpeg",
    opts: {
      series: ["A17", "A19"],
      subchar: false
    }
  },
  {
    name: "安古里夫‧達爾曼",
    img: "A18_Angriff.jpeg",
    opts: {
      series: ["A18"],
      subchar: false
    }
  },
  {
    name: "安奈里絲‧愛克思娜",
    img: "A18_Annelies.jpeg",
    opts: {
      series: ["A18"],
      subchar: true
    }
  },
  {
    name: "愛德爾‧巴克休達因",
    img: "A18_Edel.jpeg",
    opts: {
      series: ["A18"],
      subchar: true
    }
  },
  {
    name: "奧蕾莉‧布魯荷",
    img: "A18_Aurelie.jpeg",
    opts: {
      series: ["A18"],
      subchar: true
    }
  },
  {
    name: "凱伊‧霍爾特豪斯",
    img: "A18_Kai.jpeg",
    opts: {
      series: ["A18"],
      subchar: true
    }
  },
  {
    name: "卡爾多‧勞歐",
    img: "A18_Kald.jpeg",
    opts: {
      series: ["A18"],
      subchar: false
    }
  },
  {
    name: "琪爾雪‧里媞爾",
    img: "A18_Kirsche.jpeg",
    opts: {
      series: ["A18"],
      subchar: true
    }
  },
  {
    name: "夏農‧阿特金斯",
    img: "A18_Shanon.jpeg",
    opts: {
      series: ["A18"],
      subchar: false
    }
  },
  {
    name: "蒂安納‧帕玄",
    img: "A18_Tiana.jpeg",
    opts: {
      series: ["A18"],
      subchar: true
    }
  },
  {
    name: "迪歐‧麥亞",
    img: "A18_Dion.jpeg",
    opts: {
      series: ["A18"],
      subchar: true
    }
  },
  {
    name: "南娜‧特蓮玫兒",
    img: "A18_Nanna.jpeg",
    opts: {
      series: ["A18"],
      subchar: true
    }
  },
  {
    name: "妮可拉‧密斯忒盧特",
    img: "A18_Nicola.jpeg",
    opts: {
      series: ["A18"],
      subchar: true
    }
  },
  {
    name: "諾貝爾特‧克拉森",
    img: "A18_Nobert.jpeg",
    opts: {
      series: ["A18"],
      subchar: true
    }
  },
  {
    name: "海因茨‧弗賴赫隆",
    img: "A18_Haintsu.jpeg",
    opts: {
      series: ["A18"],
      subchar: false
    }
  },
  {
    name: "貝恩拖‧雷戴拉",
    img: "A18_Bernd.jpeg",
    opts: {
      series: ["A18"],
      subchar: true
    }
  },
  {
    name: "漢莉卡‧阿斯姆斯",
    img: "A18_Henrikka.jpeg",
    opts: {
      series: ["A18"],
      subchar: true
    }
  },
  {
    name: "梅亞‧霍爾特豪斯",
    img: "A18_Mea.jpeg",
    opts: {
      series: ["A18"],
      subchar: true
    }
  },
  {
    name: "露易絲‧貝斯塔",
    img: "A18_Luis.jpeg",
    opts: {
      series: ["A18"],
      subchar: true
    }
  },
  {
    name: "路卡斯‧密斯忒盧特",
    img: "A18_Lukas.jpeg",
    opts: {
      series: ["A18"],
      subchar: true
    }
  },
  {
    name: "雷比‧貝爾格",
    img: "A18_Revy.jpeg",
    opts: {
      series: ["A18"],
      subchar: false
    }
  },
  {
    name: "蓮‧布萊多娜",
    img: "A18_Ren.jpeg",
    opts: {
      series: ["A18"],
      subchar: true
    }
  },
  {
    name: "伊爾梅莉亞‧馮‧萊茵威巴",
    img: "A18_Ilmeria.jpeg",
    opts: {
      series: ["A18", "A19"],
      subchar: false
    }
  },
  {
    name: "多蘿瑟爾‧懷斯貝爾克",
    img: "A18_Drossel.jpeg",
    opts: {
      series: ["A18", "A19"],
      subchar: false
    }
  },
  {
    name: "菲莉絲‧密斯忒盧特",
    img: "A18_Firis.jpeg",
    opts: {
      series: ["A18", "A19"],
      subchar: false
    }
  },
  {
    name: "莉亞妮‧密斯忒盧特",
    img: "A18_Liane.jpeg",
    opts: {
      series: ["A18", "A19"],
      subchar: false
    }
  },
  {
    name: "亞爾特",
    img: "A19_Alt.jpeg",
    opts: {
      series: ["A19"],
      subchar: false
    }
  },
  {
    name: "歐妮朵‧瑪蓮",
    img: "A19_Onette_Malen.jpeg",
    opts: {
      series: ["A19"],
      subchar: true
    }
  },
  {
    name: "船長・巴肯",
    img: "A19_Backen.jpeg",
    opts: {
      series: ["A19"],
      subchar: true
    }
  },
  {
    name: "葛蕾絲",
    img: "A19_Grace.jpeg",
    opts: {
      series: ["A19"],
      subchar: true
    }
  },
  {
    name: "蘇瑞‧瑪蓮",
    img: "A19_Suelle.jpeg",
    opts: {
      series: ["A19"],
      subchar: false
    }
  },
  {
    name: "尼朱‧向特魯伊優",
    img: "A19_Neige.jpeg",
    opts: {
      series: ["A19"],
      subchar: true
    }
  },
  {
    name: "芙可",
    img: "A19_Fuko.jpeg",
    opts: {
      series: ["A19"],
      subchar: true
    }
  },
  {
    name: "瑪提亞斯・菲利艾‧亞達雷特",
    img: "A19_Mathias.jpeg",
    opts: {
      series: ["A19"],
      subchar: false
    }
  },
  {
    name: "米蕾優‧菲莉艾‧亞達雷特",
    img: "A19_Mireille.jpeg",
    opts: {
      series: ["A19"],
      subchar: true
    }
  },
  {
    name: "莉迪‧瑪蓮",
    img: "A19_Lydie.jpeg",
    opts: {
      series: ["A19"],
      subchar: false
    }
  },
  {
    name: "露夏‧維爾堤爾",
    img: "A19_Lucia.jpeg",
    opts: {
      series: ["A19"],
      subchar: false
    }
  },
  {
    name: "羅傑‧瑪蓮",
    img: "A19_Roger.jpeg",
    opts: {
      series: ["A19"],
      subchar: true
    }
  },
  {
    name: "伊克希",
    img: "A2_Xe.jpeg",
    opts: {
      series: ["A2"],
      subchar: true
    }
  },
  {
    name: "艾莉（艾露菲爾‧特勞姆）",
    img: "A2_Elie.jpeg",
    opts: {
      series: ["A2"],
      subchar: false
    }
  },
  {
    name: "奧多‧霍爾拜因",
    img: "A2_Otto_Holbein.jpeg",
    opts: {
      series: ["A2"],
      subchar: true
    }
  },
  {
    name: "修馬克‧赫爾登",
    img: "A2_Schmack_Horten.jpeg",
    opts: {
      series: ["A2"],
      subchar: true
    }
  },
  {
    name: "道格拉斯‧麥克連",
    img: "A2_Daglass.jpeg",
    opts: {
      series: ["A2"],
      subchar: false
    }
  },
  {
    name: "諾狄斯‧福柏",
    img: "A2_Nordis.jpeg",
    opts: {
      series: ["A2"],
      subchar: false
    }
  },
  {
    name: "法烏",
    img: "A2_V.jpeg",
    opts: {
      series: ["A2"],
      subchar: true
    }
  },
  {
    name: "波魯特‧盧克斯",
    img: "A2_Bord_Lx.jpeg",
    opts: {
      series: ["A2"],
      subchar: true
    }
  },
  {
    name: "米爾卡瑟‧佛羅貝爾",
    img: "A2_Milcasse.jpeg",
    opts: {
      series: ["A2"],
      subchar: false
    }
  },
  {
    name: "優莉卡‧耶達",
    img: "A2_Julika.jpeg",
    opts: {
      series: ["A2"],
      subchar: false
    }
  },
  {
    name: "露依潔‧羅連西烏姆",
    img: "A2_Luise_Lawrencium.jpeg",
    opts: {
      series: ["A2"],
      subchar: true
    }
  },
  {
    name: "羅瑪潔‧布雷瑪",
    img: "A2_Raumage.jpeg",
    opts: {
      series: ["A2"],
      subchar: false
    }
  },
  {
    name: "赫爾蜜娜",
    img: "A4_Hermina.jpeg",
    opts: {
      series: ["A2", "A3", "A4"],
      subchar: false
    }
  },
  {
    name: "愛瑟兒‧懷瑪",
    img: "A2_Eisel.jpeg",
    opts: {
      series: ["A2", "A5"],
      subchar: false
    }
  },
  {
    name: "伊兒榭‧艾雷米斯",
    img: "A20_Jeltje.jpeg",
    opts: {
      series: ["A20"],
      subchar: true
    }
  },
  {
    name: "維爾特‧克林斯曼",
    img: "A20_Wild.jpeg",
    opts: {
      series: ["A20"],
      subchar: true
    }
  },
  {
    name: "璦法‧阿爾姆絲塔",
    img: "A20_Eva.jpeg",
    opts: {
      series: ["A20"],
      subchar: false
    }
  },
  {
    name: "露露亞（艾爾梅露莉亞‧菲立克塞爾）",
    img: "A20_Lulua.jpeg",
    opts: {
      series: ["A20"],
      subchar: false
    }
  },
  {
    name: "克里斯多夫‧奧里爾‧亞蘭德",
    img: "A20_Christoph.jpeg",
    opts: {
      series: ["A20"],
      subchar: false
    }
  },
  {
    name: "詩緹兒‧菲爾斯加拉克西亞",
    img: "A20_Stia.jpeg",
    opts: {
      series: ["A20"],
      subchar: true
    }
  },
  {
    name: "尼可迪莫斯‧大衛‧狄特",
    img: "A20_Nicodemus.jpeg",
    opts: {
      series: ["A20"],
      subchar: false
    }
  },
  {
    name: "菲克斯‧費尼斯",
    img: "A20_Ficus.jpeg",
    opts: {
      series: ["A20"],
      subchar: false
    }
  },
  {
    name: "貝諾‧阿爾姆絲塔",
    img: "A20_Benon.jpeg",
    opts: {
      series: ["A20"],
      subchar: true
    }
  },
  {
    name: "瑪娜‧歐爾托加拉克西亞",
    img: "A20_Maana.jpeg",
    opts: {
      series: ["A20"],
      subchar: true
    }
  },
  {
    name: "麗莎‧馮‧拜爾修米特",
    img: "A20_Lisa.jpeg",
    opts: {
      series: ["A20"],
      subchar: true
    }
  },
  {
    name: "瑞芙蕾‧馮‧拜爾修米特",
    img: "A20_Refle.jpeg",
    opts: {
      series: ["A20"],
      subchar: true
    }
  },
  {
    name: "阿佳特‧哈曼",
    img: "A21_Agatha.jpeg",
    opts: {
      series: ["A21"],
      subchar: false
    }
  },
  {
    name: "莫里茨‧布倫嫩",
    img: "A21_Moritz.jpeg",
    opts: {
      series: ["A21"],
      subchar: true
    }
  },
  {
    name: "朗巴‧多恩",
    img: "A21_Lumbar.jpeg",
    opts: {
      series: ["A21"],
      subchar: true
    }
  },
  {
    name: "呂貝爾特‧巴蘭茨",
    img: "A21_Lubart.jpeg",
    opts: {
      series: ["A21"],
      subchar: true
    }
  },
  {
    name: "安佩爾‧沃爾默",
    img: "A21_Empel.jpeg",
    opts: {
      series: ["A21", "A22", "A24"],
      subchar: false
    }
  },
  {
    name: "科洛蒂婭‧巴蘭茨",
    img: "A21_Klaudia.jpeg",
    opts: {
      series: ["A21", "A22", "A24"],
      subchar: false
    }
  },
  {
    name: "塔奧‧蒙伽特恩",
    img: "A21_Tao.jpeg",
    opts: {
      series: ["A21", "A22", "A24"],
      subchar: false
    }
  },
  {
    name: "博斯‧布倫嫩",
    img: "A21_Bos.jpeg",
    opts: {
      series: ["A21", "A22", "A24"],
      subchar: false
    }
  },
  {
    name: "萊莎（萊莎琳‧斯托特）",
    img: "A21_Ryza.jpeg",
    opts: {
      series: ["A21", "A22", "A24"],
      subchar: false
    }
  },
  {
    name: "莉拉‧德西亞斯",
    img: "A21_Lila.jpeg",
    opts: {
      series: ["A21", "A22", "A24"],
      subchar: false
    }
  },
  {
    name: "蘭托‧馬斯林克",
    img: "A21_Lent.jpeg",
    opts: {
      series: ["A21", "A22", "A24"],
      subchar: false
    }
  },
  {
    name: "羅密‧沃格爾",
    img: "A21_Romy.jpeg",
    opts: {
      series: ["A21", "A22", "A24"],
      subchar: false
    }
  },
  {
    name: "卡爾‧斯托特",
    img: "A21_Karl.jpeg",
    opts: {
      series: ["A21", "A24"],
      subchar: true
    }
  },
  {
    name: "吉洛‧夏伊娜斯",
    img: "A21_Kilo.jpeg",
    opts: {
      series: ["A21", "A24"],
      subchar: false
    }
  },
  {
    name: "薩穆爾‧馬斯林克",
    img: "A21_Samuel.jpeg",
    opts: {
      series: ["A21", "A24"],
      subchar: true
    }
  },
  {
    name: "米奧‧斯托特",
    img: "A21_Mio.jpeg",
    opts: {
      series: ["A21", "A24"],
      subchar: true
    }
  },
  {
    name: "沃爾卡‧阿貝爾海姆",
    img: "A22_Volker.jpeg",
    opts: {
      series: ["A22"],
      subchar: true
    }
  },
  {
    name: "卡珊德拉‧卡佩利",
    img: "A22_Cassandra.jpeg",
    opts: {
      series: ["A22"],
      subchar: true
    }
  },
  {
    name: "克里佛德‧迪斯威爾",
    img: "A22_Clifford.jpeg",
    opts: {
      series: ["A22"],
      subchar: false
    }
  },
  {
    name: "潔菲娜‧柏杜安",
    img: "A22_Zephine.jpeg",
    opts: {
      series: ["A22"],
      subchar: true
    }
  },
  {
    name: "賽莉‧古勞斯",
    img: "A22_Serri.jpeg",
    opts: {
      series: ["A22"],
      subchar: false
    }
  },
  {
    name: "丹尼斯‧霍蘭德",
    img: "A22_Dennis.jpeg",
    opts: {
      series: ["A22"],
      subchar: true
    }
  },
  {
    name: "派翠夏‧阿貝爾海姆",
    img: "A22_Patricia.jpeg",
    opts: {
      series: ["A22", "A24"],
      subchar: false
    }
  },
  {
    name: "菲",
    img: "A22_Fi.jpeg",
    opts: {
      series: ["A22", "A24"],
      subchar: false
    }
  },
  {
    name: "阿蕾特‧克拉勒蒂",
    img: "A23_Alette.jpeg",
    opts: {
      series: ["A23"],
      subchar: false
    }
  },
  {
    name: "艾薇拉",
    img: "A23_Elvira.jpeg",
    opts: {
      series: ["A23"],
      subchar: false
    }
  },
  {
    name: "奧利亞斯‧安德斯",
    img: "A23_Olias.jpeg",
    opts: {
      series: ["A23"],
      subchar: false
    }
  },
  {
    name: "卡特麗娜‧巴爾巴斯特",
    img: "A23_Katrina.jpeg",
    opts: {
      series: ["A23"],
      subchar: true
    }
  },
  {
    name: "迪伯爾德‧萊韋倫茨",
    img: "A23_Diebold.jpeg",
    opts: {
      series: ["A23"],
      subchar: false
    }
  },
  {
    name: "諾姆‧杜摩提耶",
    img: "A23_Gnome.jpeg",
    opts: {
      series: ["A23"],
      subchar: true
    }
  },
  {
    name: "皮莉卡",
    img: "A23_Pirka.jpeg",
    opts: {
      series: ["A23"],
      subchar: true
    }
  },
  {
    name: "拉米潔兒‧埃倫邁爾",
    img: "A23_Ramizel.jpeg",
    opts: {
      series: ["A23"],
      subchar: false
    }
  },
  {
    name: "卡菈‧伊迪亞斯",
    img: "A24_Kala.jpeg",
    opts: {
      series: ["A24"],
      subchar: false
    }
  },
  {
    name: "迪安‧法雷爾",
    img: "A24_Dian.jpeg",
    opts: {
      series: ["A24"],
      subchar: false
    }
  },
  {
    name: "菲德麗卡‧蘭伯蒂",
    img: "A24_Federica.jpeg",
    opts: {
      series: ["A24"],
      subchar: false
    }
  },
  {
    name: "阿爾比娜・吉姆洛克",
    img: "A25_Alvina.jpeg",
    opts: {
      series: ["A25"],
      subchar: false
    }
  },
  {
    name: "安潔‧莫爾特克",
    img: "A25_Antje.jpeg",
    opts: {
      series: ["A25"],
      subchar: false
    }
  },
  {
    name: "伊札娜‧柯克西卡",
    img: "A25_Isana.jpeg",
    opts: {
      series: ["A25"],
      subchar: false
    }
  },
  {
    name: "瓦萊莉婭",
    img: "A25_Valeria.jpeg",
    opts: {
      series: ["A25"],
      subchar: false
    }
  },
  {
    name: "艾爾‧貝爾",
    img: "A25_El_Bell.jpeg",
    opts: {
      series: ["A25"],
      subchar: true
    }
  },
  {
    name: "卡米拉・艾德萊森",
    img: "A25_Camilla_Eidreise.jpeg",
    opts: {
      series: ["A25"],
      subchar: true
    }
  },
  {
    name: "克莉賽爾達・阿默豪森",
    img: "A25_Criselda.jpeg",
    opts: {
      series: ["A25"],
      subchar: false
    }
  },
  {
    name: "薩絲琪亞",
    img: "A25_Saskia.jpeg",
    opts: {
      series: ["A25"],
      subchar: false
    }
  },
  {
    name: "傑隆‧迪塞爾",
    img: "A25_Geron.jpeg",
    opts: {
      series: ["A25"],
      subchar: false
    }
  },
  {
    name: "史雷‧庫洛斯利塔",
    img: "A25_Slade_Clauslyter.jpeg",
    opts: {
      series: ["A25"],
      subchar: false
    }
  },
  {
    name: "迪歐娜‧格倫德貝里",
    img: "A25_Diona_Grundberg.jpeg",
    opts: {
      series: ["A25"],
      subchar: true
    }
  },
  {
    name: "海塔・克斯丁",
    img: "A25_Heiter_Kersten.jpeg",
    opts: {
      series: ["A25"],
      subchar: true
    }
  },
  {
    name: "海蒂",
    img: "A25_Heidi.jpeg",
    opts: {
      series: ["A25"],
      subchar: false
    }
  },
  {
    name: "布萊德利‧卡恩",
    img: "A25_Bradley_Khan.jpeg",
    opts: {
      series: ["A25"],
      subchar: true
    }
  },
  {
    name: "芙洛可‧契爾哈",
    img: "A25_Flock.jpeg",
    opts: {
      series: ["A25"],
      subchar: false
    }
  },
  {
    name: "貝普・吉姆洛克",
    img: "A25_Bepp.jpeg",
    opts: {
      series: ["A25"],
      subchar: false
    }
  },
  {
    name: "瑪格達‧庫普卡",
    img: "A25_Magda_Cupker.jpeg",
    opts: {
      series: ["A25"],
      subchar: true
    }
  },
  {
    name: "米珂‧克羅梅林",
    img: "A25_Mieke_Cronmelin.jpeg",
    opts: {
      series: ["A25"],
      subchar: true
    }
  },
  {
    name: "珍妮・林德曼",
    img: "A25_Yanne.jpeg",
    opts: {
      series: ["A25"],
      subchar: false
    }
  },
  {
    name: "尤娜‧維茨",
    img: "A25_Jona.jpeg",
    opts: {
      series: ["A25"],
      subchar: false
    }
  },
  {
    name: "約翰娜",
    img: "A25_Crow.jpeg",
    opts: {
      series: ["A25"],
      subchar: false
    }
  },
  {
    name: "拉拉‧特羅克爾",
    img: "A25_Lara.jpeg",
    opts: {
      series: ["A25"],
      subchar: false
    }
  },
  {
    name: "藍澤‧達赫",
    img: "A25_Lanze.jpeg",
    opts: {
      series: ["A25"],
      subchar: false
    }
  },
  {
    name: "蘭道夫・郎格納",
    img: "A25_Randolf_Langner.jpeg",
    opts: {
      series: ["A25"],
      subchar: true
    }
  },
  {
    name: "莉雅絲‧艾德萊森",
    img: "A25_Rias_Eidreise.jpeg",
    opts: {
      series: ["A25"],
      subchar: false
    }
  },
  {
    name: "蕾斯娜‧修特涅利希特",
    img: "A25_Resna.jpeg",
    opts: {
      series: ["A25"],
      subchar: false
    }
  },
  {
    name: "羅曼",
    img: "A25_Roman.jpeg",
    opts: {
      series: ["A25"],
      subchar: false
    }
  },
  {
    name: "瓦爾特‧曼",
    img: "A25_Walther.jpeg",
    opts: {
      series: ["A25"],
      subchar: false
    }
  },
  {
    name: "艾菈‧馮‧杜勒",
    img: "A26_Isla_von_Duerer.jpeg",
    opts: {
      series: ["A26"],
      subchar: false
    }
  },
  {
    name: "阿爾巴",
    img: "A26_Alber.jpeg",
    opts: {
      series: ["A26"],
      subchar: true
    }
  },
  {
    name: "維克多‧馮‧杜勒",
    img: "A26_Viktor_von_Duerer.jpeg",
    opts: {
      series: ["A26"],
      subchar: false
    }
  },
  {
    name: "薇爾瑪‧路特",
    img: "A26_Wilma.jpeg",
    opts: {
      series: ["A26"],
      subchar: true
    }
  },
  {
    name: "韋斯珀",
    img: "A26_Dragon-Winged_Warrior.jpeg",
    opts: {
      series: ["A26"],
      subchar: true
    }
  },
  {
    name: "艾哈德‧伯爾曼",
    img: "A26_Erhard.jpeg",
    opts: {
      series: ["A26"],
      subchar: true
    }
  },
  {
    name: "柯爾里奧尼斯",
    img: "A26_Monocular_Werewolf.jpeg",
    opts: {
      series: ["A26"],
      subchar: true
    }
  },
  {
    name: "妮娜‧弗里德",
    img: "A26_Nina_Friede.jpeg",
    opts: {
      series: ["A26"],
      subchar: false
    }
  },
  {
    name: "巴西利烏斯",
    img: "A26_Black_Coat_Noble.jpeg",
    opts: {
      series: ["A26"],
      subchar: true
    }
  },
  {
    name: "芙拉米",
    img: "A26_Flammi.jpeg",
    opts: {
      series: ["A26"],
      subchar: true
    }
  },
  {
    name: "優米雅‧利斯菲爾德",
    img: "A26_Yumia_Liessfeldt.jpeg",
    opts: {
      series: ["A26"],
      subchar: false
    }
  },
  {
    name: "利希特",
    img: "A26_Licht.jpeg",
    opts: {
      series: ["A26"],
      subchar: true
    }
  },
  {
    name: "莉莉波蕾亞",
    img: "A26_Sheep-eye_Witch.jpeg",
    opts: {
      series: ["A26"],
      subchar: true
    }
  },
  {
    name: "魯格‧阿倫特",
    img: "A26_Rutger_Arendt.jpeg",
    opts: {
      series: ["A26"],
      subchar: false
    }
  },
  {
    name: "蕾妮雅",
    img: "A26_Lenja.jpeg",
    opts: {
      series: ["A26"],
      subchar: false
    }
  },
  {
    name: "艾奧洛斯",
    img: "A3_Eioross.jpeg",
    opts: {
      series: ["A3"],
      subchar: true
    }
  },
  {
    name: "伊爾瑪‧瓦特",
    img: "A3_Iruma.jpeg",
    opts: {
      series: ["A3"],
      subchar: false
    }
  },
  {
    name: "韋爾納‧格列顛塔爾",
    img: "A3_Werner.jpeg",
    opts: {
      series: ["A3"],
      subchar: false
    }
  },
  {
    name: "烏爾里希‧莫爾根",
    img: "A3_Ulrich.jpeg",
    opts: {
      series: ["A3"],
      subchar: false
    }
  },
  {
    name: "艾爾莎‧赫森",
    img: "A3_Elsa.jpeg",
    opts: {
      series: ["A3"],
      subchar: false
    }
  },
  {
    name: "卡斯巴爾‧薩因",
    img: "A3_Kaspar_Sein.jpeg",
    opts: {
      series: ["A3"],
      subchar: true
    }
  },
  {
    name: "卡琳‧法布利克",
    img: "A3_Karin.jpeg",
    opts: {
      series: ["A3"],
      subchar: false
    }
  },
  {
    name: "庫爾特‧佛羅貝爾",
    img: "A3_Kurt.jpeg",
    opts: {
      series: ["A3"],
      subchar: false
    }
  },
  {
    name: "凱麥納",
    img: "A3_Gemeiner.jpeg",
    opts: {
      series: ["A3"],
      subchar: true
    }
  },
  {
    name: "希絲卡‧維拉",
    img: "A3_Ziska.jpeg",
    opts: {
      series: ["A3"],
      subchar: false
    }
  },
  {
    name: "泰奧‧莫恩邁爾",
    img: "A3_Theo.jpeg",
    opts: {
      series: ["A3"],
      subchar: false
    }
  },
  {
    name: "海因茲‧馬多克",
    img: "A3_Heinz_Maddok.jpeg",
    opts: {
      series: ["A3"],
      subchar: true
    }
  },
  {
    name: "赫德薇希‧馬克斯海姆",
    img: "A3_Hedwig_Maxheim.jpeg",
    opts: {
      series: ["A3"],
      subchar: true
    }
  },
  {
    name: "約瑟夫‧卡羅薩",
    img: "A3_Josef_Carossa.jpeg",
    opts: {
      series: ["A3"],
      subchar: true
    }
  },
  {
    name: "莉莉",
    img: "A3_Lilie.jpeg",
    opts: {
      series: ["A3"],
      subchar: false
    }
  },
  {
    name: "雷歐‧布蘭登",
    img: "A3_Leo_Branden.jpeg",
    opts: {
      series: ["A3"],
      subchar: true
    }
  },
  {
    name: "阿德爾貝爾特‧霍克",
    img: "A4_Aldebert.jpeg",
    opts: {
      series: ["A4"],
      subchar: false
    }
  },
  {
    name: "維多斯‧羅多斯",
    img: "A4_Vitoss.jpeg",
    opts: {
      series: ["A4"],
      subchar: false
    }
  },
  {
    name: "艾絲梅拉達（梅爾）",
    img: "A4_Esmeralda.jpeg",
    opts: {
      series: ["A4"],
      subchar: false
    }
  },
  {
    name: "歐瓦爾‧艾斯貝爾克",
    img: "A4_Ovale.jpeg",
    opts: {
      series: ["A4"],
      subchar: true
    }
  },
  {
    name: "克莉絲塔‧舒爾采",
    img: "A4_Christa.jpeg",
    opts: {
      series: ["A4"],
      subchar: false
    }
  },
  {
    name: "康拉德‧伊歐",
    img: "A4_Konrad.jpeg",
    opts: {
      series: ["A4"],
      subchar: false
    }
  },
  {
    name: "蘇菲亞",
    img: "A4_Sphere.jpeg",
    opts: {
      series: ["A4"],
      subchar: false
    }
  },
  {
    name: "帕爾克‧史提菲爾",
    img: "A4_Park.jpeg",
    opts: {
      series: ["A4"],
      subchar: true
    }
  },
  {
    name: "波拉‧克維勒",
    img: "A4_Borher.jpeg",
    opts: {
      series: ["A4"],
      subchar: false
    }
  },
  {
    name: "波斯特‧柯爾修達特",
    img: "A4_Post.jpeg",
    opts: {
      series: ["A4"],
      subchar: true
    }
  },
  {
    name: "馬汀‧克羅姆",
    img: "A4_Martin.jpeg",
    opts: {
      series: ["A4"],
      subchar: false
    }
  },
  {
    name: "優蒂（優蒂特‧佛爾托妮）",
    img: "A4_Judie.jpeg",
    opts: {
      series: ["A4"],
      subchar: false
    }
  },
  {
    name: "拉絲特爾‧比豪森",
    img: "A4_Rastel.jpeg",
    opts: {
      series: ["A4"],
      subchar: false
    }
  },
  {
    name: "帕梅拉・依畢斯",
    img: "Pamela.jpeg",
    opts: {
      series: ["A4", "A5", "A6", "A8", "A9", "A11", "A12", "A13", "A17", "A18", "A19", "A20", "A21", "A22", "A24", "Nelke"],
      subchar: false
    }
  },
  {
    name: "薇歐蕾特‧普拉塔涅",
    img: "A5_Violet.jpeg",
    opts: {
      series: ["A5"],
      subchar: false
    }
  },
  {
    name: "卡塔莉娜‧特拉肯",
    img: "A5_Katharina.jpeg",
    opts: {
      series: ["A5"],
      subchar: false
    }
  },
  {
    name: "克拉拉‧巴爾比耶",
    img: "A5_Klara.jpeg",
    opts: {
      series: ["A5"],
      subchar: false
    }
  },
  {
    name: "薩維特‧基帕",
    img: "A5_Savitt.jpeg",
    opts: {
      series: ["A5"],
      subchar: false
    }
  },
  {
    name: "達斯汀‧修米特",
    img: "A5_Dastin.jpeg",
    opts: {
      series: ["A5"],
      subchar: false
    }
  },
  {
    name: "娜娜美・修米特",
    img: "A5_Nanami.jpeg",
    opts: {
      series: ["A5"],
      subchar: false
    }
  },
  {
    name: "保羅",
    img: "A5_Paul.jpeg",
    opts: {
      series: ["A5"],
      subchar: false
    }
  },
  {
    name: "巴爾托洛梅斯‧普拉塔涅",
    img: "A5_Bartholome.jpeg",
    opts: {
      series: ["A5"],
      subchar: false
    }
  },
  {
    name: "布莉姬特‧傑倫",
    img: "A5_Brigitt.jpeg",
    opts: {
      series: ["A5"],
      subchar: false
    }
  },
  {
    name: "米菲絲‧法爾茨",
    img: "A5_Miuis.jpeg",
    opts: {
      series: ["A5"],
      subchar: false
    }
  },
  {
    name: "拉碧絲",
    img: "A5_Lapis.jpeg",
    opts: {
      series: ["A5"],
      subchar: false
    }
  },
  {
    name: "羅德弗利德‧桑塔爾",
    img: "A5_Rodfried.jpeg",
    opts: {
      series: ["A5"],
      subchar: false
    }
  },
  {
    name: "羅蘭德‧歐芬",
    img: "A5_Roland.jpeg",
    opts: {
      series: ["A5"],
      subchar: false
    }
  },
  {
    name: "亞霖",
    img: "A6_Arlin.jpeg",
    opts: {
      series: ["A6"],
      subchar: false
    }
  },
  {
    name: "艾因",
    img: "A6_Ein.jpeg",
    opts: {
      series: ["A6"],
      subchar: true
    }
  },
  {
    name: "奧斯卡爾",
    img: "A6_Oscar.jpeg",
    opts: {
      series: ["A6"],
      subchar: true
    }
  },
  {
    name: "克雷因‧奇斯林克",
    img: "A6_Klein.jpeg",
    opts: {
      series: ["A6"],
      subchar: false
    }
  },
  {
    name: "格拉普特",
    img: "A6_Fire_Mana_Grupt.jpeg",
    opts: {
      series: ["A6"],
      subchar: true
    }
  },
  {
    name: "希爾威斯特",
    img: "A6_Air_Mana_Silwest.jpeg",
    opts: {
      series: ["A6"],
      subchar: true
    }
  },
  {
    name: "潔伊莉雅",
    img: "A6_Light_Mana_Zelia.jpeg",
    opts: {
      series: ["A6"],
      subchar: true
    }
  },
  {
    name: "潔兒達莉亞",
    img: "A6_Zeldallia.jpeg",
    opts: {
      series: ["A6"],
      subchar: true
    }
  },
  {
    name: "茲威",
    img: "A6_Zwei.jpeg",
    opts: {
      series: ["A6"],
      subchar: true
    }
  },
  {
    name: "戴耶梅亞",
    img: "A6_Rock_Mana_Diemia.jpeg",
    opts: {
      series: ["A6"],
      subchar: true
    }
  },
  {
    name: "戴爾薩斯",
    img: "A6_Delsus.jpeg",
    opts: {
      series: ["A6"],
      subchar: false
    }
  },
  {
    name: "托托波波",
    img: "A6_Totopop.jpeg",
    opts: {
      series: ["A6"],
      subchar: true
    }
  },
  {
    name: "杜萊",
    img: "A6_Drei.jpeg",
    opts: {
      series: ["A6"],
      subchar: true
    }
  },
  {
    name: "諾曼",
    img: "A6_Norman.jpeg",
    opts: {
      series: ["A6"],
      subchar: true
    }
  },
  {
    name: "諾倫",
    img: "A6_Norn.jpeg",
    opts: {
      series: ["A6"],
      subchar: false
    }
  },
  {
    name: "帕帖特",
    img: "A6_Pattet.jpeg",
    opts: {
      series: ["A6"],
      subchar: true
    }
  },
  {
    name: "帕托特",
    img: "A6_Pattot.jpeg",
    opts: {
      series: ["A6"],
      subchar: true
    }
  },
  {
    name: "帕魯提雅",
    img: "A6_Life_Mana_Paltia.jpeg",
    opts: {
      series: ["A6"],
      subchar: true
    }
  },
  {
    name: "薇奧拉",
    img: "A6_Veola.jpeg",
    opts: {
      series: ["A6"],
      subchar: true
    }
  },
  {
    name: "法那托斯",
    img: "A6_Dark_Mana_Fanatos.jpeg",
    opts: {
      series: ["A6"],
      subchar: true
    }
  },
  {
    name: "菲亞",
    img: "A6_Vier.jpeg",
    opts: {
      series: ["A6"],
      subchar: true
    }
  },
  {
    name: "芬芙",
    img: "A6_Neun.jpeg",
    opts: {
      series: ["A6"],
      subchar: true
    }
  },
  {
    name: "普魯亞",
    img: "A6_Dark_Mana_Plua.jpeg",
    opts: {
      series: ["A6"],
      subchar: true
    }
  },
  {
    name: "布蕾亞",
    img: "A6_Blair.jpeg",
    opts: {
      series: ["A6"],
      subchar: true
    }
  },
  {
    name: "弗雷",
    img: "A6_Flay.jpeg",
    opts: {
      series: ["A6"],
      subchar: true
    }
  },
  {
    name: "貝克爾",
    img: "A6_Beggur.jpeg",
    opts: {
      series: ["A6"],
      subchar: true
    }
  },
  {
    name: "瑪蕾塔‧里庫希斯",
    img: "A6_Marietta.jpeg",
    opts: {
      series: ["A6"],
      subchar: false
    }
  },
  {
    name: "穆爾",
    img: "A6_Mull.jpeg",
    opts: {
      series: ["A6"],
      subchar: true
    }
  },
  {
    name: "莫夫瑪",
    img: "A6_Mofuma.jpeg",
    opts: {
      series: ["A6"],
      subchar: true
    }
  },
  {
    name: "拉普拉斯",
    img: "A6_Time_Mana_Luplus.jpeg",
    opts: {
      series: ["A6"],
      subchar: true
    }
  },
  {
    name: "莉塔‧布蘭西蒙",
    img: "A6_Lita.jpeg",
    opts: {
      series: ["A6"],
      subchar: false
    }
  },
  {
    name: "愛翁",
    img: "A6_Aion.jpeg",
    opts: {
      series: ["A6"],
      subchar: true
    }
  },
  {
    name: "伊莉絲",
    img: "A6_Iris.jpeg",
    opts: {
      series: ["A6", "A7"],
      subchar: true
    }
  },
  {
    name: "烏琉",
    img: "A6_Uru.jpeg",
    opts: {
      series: ["A6", "A7"],
      subchar: true
    }
  },
  {
    name: "艾緹爾",
    img: "A6_Light_Mana_Eital.jpeg",
    opts: {
      series: ["A6", "A7"],
      subchar: true
    }
  },
  {
    name: "寧芙",
    img: "A6_Water_Mana_Nymph.jpeg",
    opts: {
      series: ["A6", "A7"],
      subchar: true
    }
  },
  {
    name: "波波",
    img: "A6_Dour.jpeg",
    opts: {
      series: ["A6", "A7"],
      subchar: false
    }
  },
  {
    name: "光格爾・波魯多涅斯",
    img: "Hagel.jpeg",
    opts: {
      series: ["A6", "A7", "A8", "A9", "A11", "A12", "A13", "A19", "Nelke"],
      subchar: false
    }
  },
  {
    name: "維潔‧布蘭西蒙",
    img: "A7_Viese_Blanchimont.jpeg",
    opts: {
      series: ["A7"],
      subchar: false
    }
  },
  {
    name: "艾澤琳",
    img: "A7_Eizlen.jpeg",
    opts: {
      series: ["A7"],
      subchar: true
    }
  },
  {
    name: "加拉哈德",
    img: "A7_Galahad.jpeg",
    opts: {
      series: ["A7"],
      subchar: true
    }
  },
  {
    name: "格雷",
    img: "A7_Gray.jpeg",
    opts: {
      series: ["A7"],
      subchar: false
    }
  },
  {
    name: "庫羅伊滋",
    img: "A7_Kreuz.jpeg",
    opts: {
      series: ["A7"],
      subchar: true
    }
  },
  {
    name: "凱歐斯",
    img: "A7_Chaos.jpeg",
    opts: {
      series: ["A7"],
      subchar: true
    }
  },
  {
    name: "賽蓮",
    img: "A7_Siren.jpeg",
    opts: {
      series: ["A7"],
      subchar: true
    }
  },
  {
    name: "吉夫托斯",
    img: "A7_Jiptus.jpeg",
    opts: {
      series: ["A7"],
      subchar: true
    }
  },
  {
    name: "茲維爾克",
    img: "A7_Zuvelk.jpeg",
    opts: {
      series: ["A7"],
      subchar: true
    }
  },
  {
    name: "堤歐德爾",
    img: "A7_Theodore.jpeg",
    opts: {
      series: ["A7"],
      subchar: true
    }
  },
  {
    name: "托列妮",
    img: "A7_Tolena.jpeg",
    opts: {
      series: ["A7"],
      subchar: true
    }
  },
  {
    name: "諾伊",
    img: "A7_Noin.jpeg",
    opts: {
      series: ["A7"],
      subchar: false
    }
  },
  {
    name: "帕拉塞爾蘇斯",
    img: "A7_Palaxius.jpeg",
    opts: {
      series: ["A7"],
      subchar: true
    }
  },
  {
    name: "菲",
    img: "A7_Fee.jpeg",
    opts: {
      series: ["A7"],
      subchar: false
    }
  },
  {
    name: "菲爾特・布蘭西蒙",
    img: "A7_Felt_Blanchimont.jpeg",
    opts: {
      series: ["A7"],
      subchar: false
    }
  },
  {
    name: "波耶",
    img: "A7_Poe.jpeg",
    opts: {
      series: ["A7"],
      subchar: false
    }
  },
  {
    name: "馬克斯",
    img: "A7_Max.jpeg",
    opts: {
      series: ["A7"],
      subchar: true
    }
  },
  {
    name: "美芝",
    img: "A7_Mitsue.jpeg",
    opts: {
      series: ["A7"],
      subchar: true
    }
  },
  {
    name: "尤維莉雅",
    img: "A7_Yuvelia.jpeg",
    opts: {
      series: ["A7"],
      subchar: true
    }
  },
  {
    name: "優‧亞克",
    img: "A7_Yach.jpeg",
    opts: {
      series: ["A7"],
      subchar: true
    }
  },
  {
    name: "莉耶緹",
    img: "A7_Rie_sprite.jpeg",
    opts: {
      series: ["A7"],
      subchar: true
    }
  },
  {
    name: "莉莉絲",
    img: "A7_Lilith.jpeg",
    opts: {
      series: ["A7"],
      subchar: true
    }
  },
  {
    name: "亞格維德",
    img: "A7_Ardgevald.jpeg",
    opts: {
      series: ["A7"],
      subchar: true
    }
  },
  {
    name: "阿羅馬",
    img: "A7_Aroma.jpeg",
    opts: {
      series: ["A7"],
      subchar: true
    }
  },
  {
    name: "法烏茲",
    img: "A7_Faustus.jpeg",
    opts: {
      series: ["A7"],
      subchar: true
    }
  },
  {
    name: "亞修‧馮‧亞本斯坦",
    img: "A8_Ash.jpeg",
    opts: {
      series: ["A8"],
      subchar: true
    }
  },
  {
    name: "阿納斯特拉‧塞爾瓦蒂卡",
    img: "A8_Annastra.jpeg",
    opts: {
      series: ["A8"],
      subchar: true
    }
  },
  {
    name: "伊莉絲‧佛特納",
    img: "A8_IrisFortner.jpeg",
    opts: {
      series: ["A8"],
      subchar: false
    }
  },
  {
    name: "艾吉‧凡海特",
    img: "A8_Edge.jpeg",
    opts: {
      series: ["A8"],
      subchar: false
    }
  },
  {
    name: "艾拉‧芙爾庫哈芬",
    img: "A8_Ella_Fulchaphen.jpeg",
    opts: {
      series: ["A8"],
      subchar: true
    }
  },
  {
    name: "克魯梅娜‧尼裘",
    img: "A8_Meyna.jpeg",
    opts: {
      series: ["A8"],
      subchar: true
    }
  },
  {
    name: "克羅利",
    img: "A8_Crowley.jpeg",
    opts: {
      series: ["A8"],
      subchar: true
    }
  },
  {
    name: "奈爾‧艾爾伊斯",
    img: "A8_Nell.jpeg",
    opts: {
      series: ["A8"],
      subchar: false
    }
  },
  {
    name: "諾葉拉",
    img: "A8_Noella.jpeg",
    opts: {
      series: ["A8"],
      subchar: true
    }
  },
  {
    name: "巴吉傑爾‧克隆尼",
    img: "A8_Alvero.jpeg",
    opts: {
      series: ["A8"],
      subchar: true
    }
  },
  {
    name: "菲妮爾‧尼特",
    img: "A8_Phenyl.jpeg",
    opts: {
      series: ["A8"],
      subchar: true
    }
  },
  {
    name: "瑪娜‧馬提爾",
    img: "A8_Manna_Martyr.jpeg",
    opts: {
      series: ["A8"],
      subchar: true
    }
  },
  {
    name: "尤安‧克萊尼斯",
    img: "A8_Ewan.jpeg",
    opts: {
      series: ["A8"],
      subchar: true
    }
  },
  {
    name: "尤拉",
    img: "A8_Yula.jpeg",
    opts: {
      series: ["A8"],
      subchar: true
    }
  },
  {
    name: "安娜‧雷姆利",
    img: "A9_Anna.jpeg",
    opts: {
      series: ["A9"],
      subchar: false
    }
  },
  {
    name: "伊索德‧謝林",
    img: "A9_Isolde_Schelling.jpeg",
    opts: {
      series: ["A9"],
      subchar: true
    }
  },
  {
    name: "維因‧奧雷沃爾斯",
    img: "A9_Vayne.jpeg",
    opts: {
      series: ["A9"],
      subchar: false
    }
  },
  {
    name: "艾露梅特拉烏特‧卡魯納普",
    img: "A9_Ernentraud_Karnap.jpeg",
    opts: {
      series: ["A9"],
      subchar: true
    }
  },
  {
    name: "薩爾法",
    img: "A9_Sulpher.jpeg",
    opts: {
      series: ["A9"],
      subchar: false
    }
  },
  {
    name: "薩普路‧庫萊巴",
    img: "A9_Zeppel_Kriever.jpeg",
    opts: {
      series: ["A9"],
      subchar: true
    }
  },
  {
    name: "提提爾・米米‧妮可梅樂",
    img: "A9_Mimi_Nicole.jpeg",
    opts: {
      series: ["A9"],
      subchar: false
    }
  },
  {
    name: "東尼‧艾斯勒",
    img: "A9_Tony_Eisler.jpeg",
    opts: {
      series: ["A9"],
      subchar: true
    }
  },
  {
    name: "菲蘿梅爾‧哈頓",
    img: "A9_Jessica.jpeg",
    opts: {
      series: ["A9"],
      subchar: false
    }
  },
  {
    name: "博爾哈德‧提克",
    img: "A9_Bernard_Tieck.jpeg",
    opts: {
      series: ["A9"],
      subchar: true
    }
  },
  {
    name: "姆佩‧奧克塔薇雅‧馮德拉謝克8世",
    img: "A9_Muppy.jpeg",
    opts: {
      series: ["A9"],
      subchar: false
    }
  },
  {
    name: "梅爾西斯‧羅迪艾爾",
    img: "A9_Melanie_Ruthers.jpeg",
    opts: {
      series: ["A9"],
      subchar: true
    }
  },
  {
    name: "麗妮‧奇亞",
    img: "A9_Renee_Kearse.jpeg",
    opts: {
      series: ["A9"],
      subchar: true
    }
  },
  {
    name: "洛克西斯‧羅森克蘭茲",
    img: "A9_Roxis.jpeg",
    opts: {
      series: ["A9"],
      subchar: false
    }
  },
  {
    name: "羅爾",
    img: "A9_Cardinand_Lorryale.jpeg",
    opts: {
      series: ["A9"],
      subchar: true
    }
  },
  {
    name: "古納爾‧達姆",
    img: "A9_Flay_Gunnar.jpeg",
    opts: {
      series: ["A9", "A10"],
      subchar: false
    }
  },
  {
    name: "鍊金工房online主角（男）",
    img: "AO_Protagonist_Male.jpeg",
    opts: {
      series: ["AO"],
      subchar: false
    }
  },
  {
    name: "鍊金工房online主角（女）",
    img: "AO_Protagonist_Female.jpeg",
    opts: {
      series: ["AO"],
      subchar: false
    }
  },
  {
    name: "索蕾兒",
    img: "AO_Sorel.jpeg",
    opts: {
      series: ["AO"],
      subchar: false
    }
  },
  {
    name: "雅妮絲菲索布",
    img: "AO_Anise_Hyssop.jpeg",
    opts: {
      series: ["AO"],
      subchar: false
    }
  },
  {
    name: "克雷頌",
    img: "AO_Cresson.jpeg",
    opts: {
      series: ["AO"],
      subchar: false
    }
  },
  {
    name: "海柔爾",
    img: "AO_Hazel.jpeg",
    opts: {
      series: ["AO"],
      subchar: false
    }
  },
  {
    name: "賽特・瓊斯華特",
    img: "AO_Jones_Wort.jpeg",
    opts: {
      series: ["AO"],
      subchar: false
    }
  },
  {
    name: "瑪修拉姆",
    img: "AO_Marjoram.jpeg",
    opts: {
      series: ["AO"],
      subchar: false
    }
  },
  {
    name: "佩帕米特",
    img: "AO_Peppermint.jpeg",
    opts: {
      series: ["AO"],
      subchar: false
    }
  },
  {
    name: "貝露嘉莫德",
    img: "AO_Bergamot.jpeg",
    opts: {
      series: ["AO"],
      subchar: false
    }
  },
  {
    name: "艾莉卡",
    img: "AO_Erica.jpeg",
    opts: {
      series: ["AO"],
      subchar: false
    }
  },
  {
    name: "菲巴尤",
    img: "AO_Fever_Few.jpeg",
    opts: {
      series: ["AO"],
      subchar: false
    }
  },
  {
    name: "阿爾夫‧歐克特萊因",
    img: "DSA1_Alf.jpeg",
    opts: {
      series: ["DSA1"],
      subchar: false
    }
  },
  {
    name: "巴索",
    img: "DSA1_Basso.jpeg",
    opts: {
      series: ["DSA1"],
      subchar: true
    }
  },
  {
    name: "貝爾塔",
    img: "DSA1_Berta.jpeg",
    opts: {
      series: ["DSA1"],
      subchar: true
    }
  },
  {
    name: "卡露拉",
    img: "DSA1_Carla.jpeg",
    opts: {
      series: ["DSA1"],
      subchar: true
    }
  },
  {
    name: "克利安‧馬利夫",
    img: "DSA1_Marif.jpeg",
    opts: {
      series: ["DSA1"],
      subchar: false
    }
  },
  {
    name: "可倫",
    img: "DSA1_Coron.jpeg",
    opts: {
      series: ["DSA1"],
      subchar: true
    }
  },
  {
    name: "艾里‧米特",
    img: "DSA1_Eili.jpeg",
    opts: {
      series: ["DSA1"],
      subchar: false
    }
  },
  {
    name: "艾雷歐爾",
    img: "DSA1_Eleore.jpeg",
    opts: {
      series: ["DSA1"],
      subchar: false
    }
  },
  {
    name: "古雷格‧力格立斯",
    img: "DSA1_Regglis.jpeg",
    opts: {
      series: ["DSA1"],
      subchar: false
    }
  },
  {
    name: "希爾達",
    img: "DSA1_Hilda.jpeg",
    opts: {
      series: ["DSA1"],
      subchar: false
    }
  },
  {
    name: "里普薩",
    img: "DSA1_Lipsa.jpeg",
    opts: {
      series: ["DSA1"],
      subchar: true
    }
  },
  {
    name: "蘿蘿特‧史黛西爾",
    img: "DSA1_Lolotte.jpeg",
    opts: {
      series: ["DSA1"],
      subchar: false
    }
  },
  {
    name: "瑪儂‧亞雷克西斯",
    img: "DSA1_Manon.jpeg",
    opts: {
      series: ["DSA1"],
      subchar: false
    }
  },
  {
    name: "瑪琉士‧薩克遜",
    img: "DSA1_Marius.jpeg",
    opts: {
      series: ["DSA1"],
      subchar: false
    }
  },
  {
    name: "梅爾希奧爾",
    img: "DSA1_Melchior.jpeg",
    opts: {
      series: ["DSA1"],
      subchar: true
    }
  },
  {
    name: "米拉",
    img: "DSA1_Mira.jpeg",
    opts: {
      series: ["DSA1"],
      subchar: true
    }
  },
  {
    name: "尼特",
    img: "DSA1_Nitt.jpeg",
    opts: {
      series: ["DSA1"],
      subchar: true
    }
  },
  {
    name: "奧特馬爾",
    img: "DSA1_Otomaru.jpeg",
    opts: {
      series: ["DSA1"],
      subchar: true
    }
  },
  {
    name: "寶恩‧修達特",
    img: "DSA1_Poin.jpeg",
    opts: {
      series: ["DSA1"],
      subchar: false
    }
  },
  {
    name: "波莉",
    img: "DSA1_Polly.jpeg",
    opts: {
      series: ["DSA1"],
      subchar: true
    }
  },
  {
    name: "琉琉",
    img: "DSA1_Princess_Lulu.jpeg",
    opts: {
      series: ["DSA1"],
      subchar: true
    }
  },
  {
    name: "吉姆森",
    img: "DSA1_Simpson.jpeg",
    opts: {
      series: ["DSA1"],
      subchar: true
    }
  },
  {
    name: "威奇",
    img: "DSA1_Wicky.jpeg",
    opts: {
      series: ["DSA1"],
      subchar: true
    }
  },
  {
    name: "奧爾多爾國王",
    img: "DSA1_King_Orde.jpeg",
    opts: {
      series: ["DSA1", "DSA2"],
      subchar: true
    }
  },
  {
    name: "莉潔特‧藍德爾",
    img: "DSA1_Lise.jpeg",
    opts: {
      series: ["DSA1", "DSA2"],
      subchar: false
    }
  },
  {
    name: "喬艾爾",
    img: "DSA1_Prince_Joel.jpeg",
    opts: {
      series: ["DSA1", "DSA2"],
      subchar: true
    }
  },
  {
    name: "安妮‧艾倫伯格",
    img: "DSA2_Annie.jpeg",
    opts: {
      series: ["DSA2"],
      subchar: false
    }
  },
  {
    name: "漢斯‧阿倫斯",
    img: "DSA2_Hans.jpeg",
    opts: {
      series: ["DSA2"],
      subchar: false
    }
  },
  {
    name: "吉爾伯特‧哈涅斯",
    img: "DSA2_Kilbert_Hennes.jpeg",
    opts: {
      series: ["DSA2"],
      subchar: false
    }
  },
  {
    name: "加利亞‧克勞特",
    img: "DSA2_Gillian.jpeg",
    opts: {
      series: ["DSA2"],
      subchar: false
    }
  },
  {
    name: "凱爾‧優格拉爾德",
    img: "DSA2_Kyle_Eugrald.jpeg",
    opts: {
      series: ["DSA2"],
      subchar: false
    }
  },
  {
    name: "福‧修里克",
    img: "DSA2_Beaux_Shrick.jpeg",
    opts: {
      series: ["DSA2"],
      subchar: false
    }
  },
  {
    name: "菲茲・艾貝琳",
    img: "DSA2_Fitz.jpeg",
    opts: {
      series: ["DSA2"],
      subchar: false
    }
  },
  {
    name: "佩佩",
    img: "DSA2_Pepe.jpeg",
    opts: {
      series: ["DSA2"],
      subchar: true
    }
  },
  {
    name: "克拉拉‧克雷門斯",
    img: "DSA2_Clara_Clemens.jpeg",
    opts: {
      series: ["DSA2"],
      subchar: true
    }
  },
  {
    name: "雅絲蜜娜‧巴爾茲",
    img: "DSA2_Jasmine_Baltz.jpeg",
    opts: {
      series: ["DSA2"],
      subchar: true
    }
  },
  {
    name: "穆勒‧巴爾茲",
    img: "DSA2_Mueller_Baltz.jpeg",
    opts: {
      series: ["DSA2"],
      subchar: true
    }
  },
  {
    name: "阿瑪莉莉絲",
    img: "DSA2_Amalie.jpeg",
    opts: {
      series: ["DSA2"],
      subchar: true
    }
  },
  {
    name: "雅可布‧利夫曼",
    img: "DSA2_Jacob.jpeg",
    opts: {
      series: ["DSA2"],
      subchar: true
    }
  },
  {
    name: "布莉姬特‧蓋布莉",
    img: "DSA2_AnnieBrigitte.jpeg",
    opts: {
      series: ["DSA2"],
      subchar: true
    }
  },
  {
    name: "梅爾蒂雅‧歐肯",
    img: "DSA2_Melody_Orkin.jpeg",
    opts: {
      series: ["DSA2"],
      subchar: true
    }
  },
  {
    name: "克勞斯",
    img: "DSA2_Claus.jpeg",
    opts: {
      series: ["DSA2"],
      subchar: true
    }
  },
  {
    name: "尤里安‧法尼爾",
    img: "DSA2_Julian-fahne.jpeg",
    opts: {
      series: ["DSA2"],
      subchar: true
    }
  },
  {
    name: "忠犬",
    img: "DSA2_Inata.jpeg",
    opts: {
      series: ["DSA2"],
      subchar: true
    }
  },
  {
    name: "弗克斯",
    img: "DSA2_Hoox.jpeg",
    opts: {
      series: ["DSA2"],
      subchar: true
    }
  },
  {
    name: "弗羅修",
    img: "DSA2_Frosh.jpeg",
    opts: {
      series: ["DSA2"],
      subchar: true
    }
  },
  {
    name: "拉賓",
    img: "DSA2_Lapin.jpeg",
    opts: {
      series: ["DSA2"],
      subchar: true
    }
  },
  {
    name: "卡茲",
    img: "DSA2_Katze.jpeg",
    opts: {
      series: ["DSA2"],
      subchar: true
    }
  },
  {
    name: "鮑里斯‧馬克雷",
    img: "DSA3_Boris.jpeg",
    opts: {
      series: ["DSA3"],
      subchar: false
    }
  },
  {
    name: "艾潔琳‧芙莉登",
    img: "DSA3_Eselin.jpeg",
    opts: {
      series: ["DSA3"],
      subchar: false
    }
  },
  {
    name: "法菈‧威斯海特",
    img: "DSA3_Farah.jpeg",
    opts: {
      series: ["DSA3"],
      subchar: false
    }
  },
  {
    name: "傑拉爾‧多契",
    img: "DSA3_Gerard.jpeg",
    opts: {
      series: ["DSA3"],
      subchar: false
    }
  },
  {
    name: "海倫蘿潔・斯帕達",
    img: "DSA3_Herrenlose.jpeg",
    opts: {
      series: ["DSA3"],
      subchar: false
    }
  },
  {
    name: "榮格・辛",
    img: "DSA3_Jung.jpeg",
    opts: {
      series: ["DSA3"],
      subchar: false
    }
  },
  {
    name: "基斯・魯塞爾",
    img: "DSA3_Keith.jpeg",
    opts: {
      series: ["DSA3"],
      subchar: false
    }
  },
  {
    name: "琉恩‧佛爾克",
    img: "DSA3_Leon.jpeg",
    opts: {
      series: ["DSA3"],
      subchar: false
    }
  },
  {
    name: "瑪榭拉・華森",
    img: "DSA3_marecherra.jpeg",
    opts: {
      series: ["DSA3"],
      subchar: false
    }
  },
  {
    name: "莫拉‧奧爾",
    img: "DSA3_Mola.jpeg",
    opts: {
      series: ["DSA3"],
      subchar: true
    }
  },
  {
    name: "拉托妮‧波夫曼",
    img: "DSA3_Rathore.jpeg",
    opts: {
      series: ["DSA3"],
      subchar: true
    }
  },
  {
    name: "莉娜‧阿爾堤莉亞",
    img: "DSA3_Lina.jpeg",
    opts: {
      series: ["DSA3"],
      subchar: false
    }
  },
  {
    name: "阿列克謝",
    img: "Elkrone_Alexey.jpeg",
    opts: {
      series: ["Elkrone"],
      subchar: false
    }
  },
  {
    name: "卡爾",
    img: "Elkrone_Carl.jpeg",
    opts: {
      series: ["Elkrone"],
      subchar: false
    }
  },
  {
    name: "卡拉",
    img: "Elkrone_Carla.jpeg",
    opts: {
      series: ["Elkrone"],
      subchar: true
    }
  },
  {
    name: "克雷門斯",
    img: "Elkrone_Clemans.jpeg",
    opts: {
      series: ["Elkrone"],
      subchar: false
    }
  },
  {
    name: "迪爾克",
    img: "Elkrone_Dirk.jpeg",
    opts: {
      series: ["Elkrone"],
      subchar: false
    }
  },
  {
    name: "艾爾哈特",
    img: "Elkrone_Erhard.jpeg",
    opts: {
      series: ["Elkrone"],
      subchar: false
    }
  },
  {
    name: "弗連",
    img: "Elkrone_Flynn.jpeg",
    opts: {
      series: ["Elkrone"],
      subchar: false
    }
  },
  {
    name: "海蒂",
    img: "Elkrone_Heidi.jpeg",
    opts: {
      series: ["Elkrone"],
      subchar: false
    }
  },
  {
    name: "約翰",
    img: "Elkrone_Johann.jpeg",
    opts: {
      series: ["Elkrone"],
      subchar: false
    }
  },
  {
    name: "卡亞",
    img: "Elkrone_Kaya.jpeg",
    opts: {
      series: ["Elkrone"],
      subchar: true
    }
  },
  {
    name: "蘿拉",
    img: "Elkrone_Lola.jpeg",
    opts: {
      series: ["Elkrone"],
      subchar: true
    }
  },
  {
    name: "馬賽爾",
    img: "Elkrone_Marcel.jpeg",
    opts: {
      series: ["Elkrone"],
      subchar: false
    }
  },
  {
    name: "瑪格麗特",
    img: "Elkrone_Margret.jpeg",
    opts: {
      series: ["Elkrone"],
      subchar: true
    }
  },
  {
    name: "梅莉愛菈",
    img: "Elkrone_Meriela.jpeg",
    opts: {
      series: ["Elkrone"],
      subchar: false
    }
  },
  {
    name: "尼可拉",
    img: "Elkrone_Niclas.jpeg",
    opts: {
      series: ["Elkrone"],
      subchar: true
    }
  },
  {
    name: "奧茲華德",
    img: "Elkrone_Oswald.jpeg",
    opts: {
      series: ["Elkrone"],
      subchar: false
    }
  },
  {
    name: "拉爾夫",
    img: "Elkrone_Ralph.jpeg",
    opts: {
      series: ["Elkrone"],
      subchar: false
    }
  },
  {
    name: "修提凡",
    img: "Elkrone_Stephan.jpeg",
    opts: {
      series: ["Elkrone"],
      subchar: false
    }
  },
  {
    name: "克洛斯",
    img: "Knoss.jpeg",
    opts: {
      series: ["Nelke"],
      subchar: true
    }
  },
  {
    name: "奈爾克・馮・露修塔姆",
    img: "Nelke.jpeg",
    opts: {
      series: ["Nelke"],
      subchar: false
    }
  },
  {
    name: "宓絲蒂‧艾爾露特",
    img: "Misty.jpeg",
    opts: {
      series: ["Nelke"],
      subchar: true
    }
  },
  {
    name: "羅塔司・麥克瑞格",
    img: "LotusMcGregor.jpeg",
    opts: {
      series: ["Nelke"],
      subchar: true
    }
  },
];
