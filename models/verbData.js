const verbsPresent = [
    [
        "rakastaa", "to love", 1, 
        "rakastan", "rakastat", "rakastaa", "rakastamme", "rakastatte", "rakastavat", "rakastetaan",
        "rakastin", "rakastit", "rakasti", "rakastimme", "rakastitte", "rakastivat", "rakastettiin",
        "rakastaisin", "rakastaisit", "rakastaisi", "rakastaisimme", "rakastaisitte", "rakastaisivat", "rakastettaisiin"
    ],
    [
        "syödä", "to eat", 2, 
        "syön", "syöt", "syö", "syömme", "syötte", "syövät", "syödään",
        "söin", "söit", "söi", "söimme", "söitte", "söivät", "syöttiin",
        "söisin", "söisit", "söisi", "söisimme", "söisitte", "söisivät", "syötäisiin"
    ],
    [
        "haluta", "to want", 4, 
        "haluan", "haluat", "haluaa", "haluamme", "haluatte", "haluavat", "haluataan",
        "halusin", "halusit", "halusi", "halusimme", "halusitte", "halusivat", "haluttiin",
        "haluaisin", "haluaisit", "haluaisi", "haluaisimme", "haluaisitte", "haluaisivat", "haluattaisiin"
    ],
    [
        "olla", "to be", 3, 
        "olen", "olet", "on", "olemme", "olette", "ovat", "ollaan",
        "olin", "olit", "oli", "olimme", "olitte", "olivat", "oltiin",
        "olisin", "olisit", "olisi", "olisimme", "olisitte", "olisivat", "oltaisiin"
    ],
    [
        "puhua", "to speak", 1, 
        "puhun", "puhut", "puhuu", "puhumme", "puhutte", "puhuvat", "puhutaan",
        "puhuin", "puhuit", "puhui", "puhuimme", "puhuitte", "puhuivat", "puhuttiin",
        "puhuisin", "puhuisit", "puhuisi", "puhuisimme", "puhuisitte", "puhuisivat", "puhuttaisiin",
    ],
    [
        "kirjoittaa", "to write", 1, 
        "kirjoitan", "kirjoitat", "kirjoittaa", "kirjoitamme", "kirjoitatte", "kirjoittavat", "kirjoitetaan",
        "kirjoitin", "kirjoitit", "kirjoitti", "kirjoitimme", "kirjoititte", "kirjoittivat", "kirjoitettiin",
        "kirjoittaisin", "kirjoittaisit", "kirjoittaisi", "kirjoittaisimme", "kirjoittaisitte", "kirjoittaisivat", "kirjoitettaisiin"
    ],
    [
        "tehdä", "to make", 2, 
        "teen", "teet", "tekee", "teemme", "teette", "tekevät", "tehdään",
        "tein", "teit", "teki", "teimme", "teitte", "tekivät", "tehtiin",
        "tekisin", "tekisit", "tekisi", "tekisimme", "tekisitte", "tekisivät", "tehtäisiin"
    ],
    [
        "ottaa", "to take", 1, 
        "otan", "otat", "ottaa", "otamme", "otatte", "ottavat", "otetaan",
        "otin", "otit", "otti", "otimme", "otitte", "ottivat", "otettiin",
        "ottaisin", "ottaisit", "ottaisi", "ottaisimme", "ottaisitte", "ottaisivat", "otettiin"
    ],
    [
        "kaivata", "to miss", 4, 
        "kaipaan", "kaipaat", "kaipaa", "kaipaamme", "kaipaatte", "kaipaavat", "kaivataan",
        "kaipasin", "kaipasit", "kaipasi", "kaipasimme", "kaipasitte", "kaipasivat", "kaivattiin",
        "kaipaisin", "kaipaisit", "kaipaisi", "kaipaisimme", "kaipaisitte", "kaipaisivat", "kaivattaisiin"
    ],
    [
        "nähdä", "to see", 2,
        "näen", "näet", "näkee", "näemme", "näette", "näkevät", "nähdään",
        "näin", "näit", "näki", "näimme", "näitte", "näkivät", "nähtiin",
        "näkisin", "näkisit", "näkisi", "näkisimme", "näkisitte", "näkisivät", "nähtaisiin",
    ],
    [
        "mennä", "to go", 3, 
        "menen", "menet", "menee", "menemme", "menette", "menevät", "mennään",
        "menin", "menit", "meni", "menimme", "menitte", "menivät", "mentiin",
        "menisin", "menisit", "menisi", "menisimme", "menisitte", "menisivät", "mentäisiin"
    ],
    [
        "tulla", "to come", 3, 
        "tulen", "tulet", "tulee", "tulemme", "tulette", "tulevat", "tullaan",
        "tulin", "tulit", "tuli", "tulimme", "tulitte", "tulivat", "tultiin",
        "tulisin", "tulisit", "tulisi", "tulisimme", "tulisitte", "tulisivat", "tultasiin",
    ],
    [
        "tykätä", "to like", 4, 
        "tykkään", "tykkäät", "tykkää", "tykkäämme", "tykkäätte", "tykkäävät", "tykätään",
        "tykkäsin", "tykkäsit", "tykkäsi", "tykkäsimme", "tykkäsitte", "tykkäsivat", "tykättiin",
        "tykkäisin", "tykkäisit", "tykkäisi", "tykkäisimme", "tykkäisitte", "tykkäisivat", "tykättäisiin",
    ],

    [
        "tarvita", "to need", 5, 
        "tarvitsen", "tarvitset", "tarvitsee", "tarvitsemme", "tarvitsette", "tarvitsevat", "tarvitaan",
        "tarvitsin", "tarvitsit", "tarvitsi", "tarvitsimme", "tarvitsitte", "tarvitsivat", "tarvittiin",
        "tarvitsisin", "tarvitsisit", "tarvitsisi", "tarvitsisimme", "tarvitsisitte", "tarvitsisivat", "tarvittaisiin"
    ],

    [
        "kyetä", "to be able to", 5, 
        "kykenen", "kykenet", "kykenee", "kykenemme", "kykenette", "kykenevät", "kyetään",
        "kykenin", "kykenit", "kykeni", "kykenimme", "kykenitte", "kykenivät", "kyettiin",
        "kykenisin", "kykenisit", "kykenisi", "kykenisimme", "kykenisitte", "kykenisivät", "kyettäisiin"
    ]
];


//add a list for irregular verbs?  Or a boolean?
//add attribute for consonnant gradations?

module.exports = verbsPresent;