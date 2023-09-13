# Quest Objects

## Object Format

```js
"template": {
    "name": "", //Quest name

    /*------------*/
    /* QuestTypes */
    /*------------*/
    "questType": "", //Quest type; "mine", "explore"
    /*---------------------------*/
    /* if questType is "explore" */
    /*------------------------- -*/
    "exploreWhat": "", //What to explore; "biomes", "locations", 
    "biomes": [ //Biomes to visit
        ""
    ],
    "locations":[ //Coordinate locations to visit
        [0,0,0] // x,y,z location coordinates
    ],
    /*------------------------*/
    /* if questType is "mine" */
    /*------------------------*/
    "blocks": [ // Blocks to mine
        { 
            "name":"", // Block name
            "amount": 0, // Amount of block to mine
        },
    ],

    /*---------*/
    /* REWARDS */
    /*---------*/
    "rewardType": "", // Type of reward; items, money
    /*------------------------*/
    /* if rewardType is "money" */
    /*------------------------*/
    "moneyPlugin": "", // What economy plugin to use; "essentialsx", "simpleEcon"
    "moneyAmount": 0, // How much money in reward
    /*------------------------*/
    /* if rewardType is "items" */
    /*------------------------*/
    "items": [
        { // Item 1
            // Item 1 name
            "name": "",
            // Item 1 amount
            "amount": 0
        }
    ],
    /*-------------------------------*/
    /* if rewardType is "experience" */
    /*-------------------------------*/
    "expType": "",
    "expAmount": "",
}
```

## QuestTypes

### Explore

Format:

```js
"exploreWhat": "", //What to explore; "biomes", "locations", 
"biomes": [ //Biomes to visit
    "", // Biome 1
    "", // Biome 2
    ...
   ],
"locations":[ //Coordinate locations to visit
    // [x,y,z]
    [0,0,0], // Location 1
    [0,0,0], // Location 2
    ...
],
```

Format without comments:

```js
"exploreWhat": "", 
"biomes": [ 
    ""
   ],
"locations":[ 
    [0,0,0]
],
```

### Mine

Format:

```js
"blocks": [ // Blocks to mine
    { // Block 1
        "name":"", // Block 1 name
        "amount": 0, // Amount of block 1 to mine
    },
    { // Block 2
        "name":"", // Block 2 name
        "amount": 0, // Amount of block 2 to mine
    },
    ...
],
```

Format without comments:

```js
"blocks": [ 
    {
        "name": "",
        "amount": 0
    }
],
```

## Reward

### Money

Format:

```js
// What economy plugin to use; "essentialsx", "simpleEcon"
"moneyPlugin": "", 
// How much money in reward
"amount": 0, 
```

Format wihtout comments:

```js
"moneyPlugin": "", 
"moneyAmount": 0, 
```

### Items

Format:

```js
// Items to get as reward
"items": [
    { // Item 1
        // Item 1 name
        "name": "",
        // Item 1 amount
        "amount": 0,
    },
    { // Item 2
        // Item 2 name
        "name": "",
        // Item 2 amount
        "amount": 0,
    }
    ...
]
```

Format without comments:

```js
"items": [
    { 
        "name": "",
        "amount": 0,
    }
]
```

### Experience

Format:

```js
// Type of exp; levels, points
"expType": "", 
// Exp amount
"expAmount": 0, 
```

Format without comments:

```js
"expType": "", 
"expAmount": 0, 
```

## Format without comments

```js
"template": {
    "name": "", 
    "questType": "", 
    "exploreWhat": "", 
    "biomes": [ 
        ""
    ],
    "locations":[
        [0,0,0]
    ],
    "blocks": [ 
        {
            "name": "",
            "amount": 0
        }
    ],
    "rewardType": "", 
    "moneyPlugin": "", 
    "moneyAmount": 0, 
    "items": [
        {
            "name": "",
            "amount": 0
        }
    ],
    "expType": "",
    "expAmount": "",
}
```
