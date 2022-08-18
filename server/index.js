const express = require("express");
const bodyParser = require("body-parser");
const fs = require('fs');
const path = require('path');
const cors = require("cors");
const busboyCons = require('busboy');

const app = express();
const corsOptions = {
   origin: '*', 
   credentials: true, 
   optionSuccessStatus: 200,
}

app.use(bodyParser.json());
app.use(cors(corsOptions));

const db_data = [
  { "id" : "node0", "parent" : "#", properties: { 
      "name" : "Root", 
      "favoriteColor" : "Blue",
      "hairColor" : "White",
      "age" : 95,
      "hobbies": ["watching tv", "fine dining"],
    }
  },
  { "id" : "node1", "parent" : "node0", properties: { 
      "name" : "Child 1",
      "favoriteColor" : "Green",
      "hairColor" : "Silver",
      "age" : 67,
      "hobbies": ["singing"],
    } 
  },
  { "id" : "node2", "parent" : "node1", properties: { 
      "name" : "Grand Child 1",
      "favoriteColor" : "Teal",
      "hairColor" : "Brown",
      "age" : 49,
      "hobbies": [],
    } 
  },
  { "id" : "node3", "parent" : "node2", properties: { 
      "name" : "Great Grand Child 1",
      "favoriteColor" : "Orange",
      "hairColor" : "Black",
      "age" : 32,
      "hobbies": ["playing guitar", "fitness", "dining"],
    } 
  },
  { "id" : "node4", "parent" : "node2", properties: { 
      "name" : "Great Grand Child 2",
      "favoriteColor" : "Brown",
      "hairColor" : "Brown",
      "age" : 29,
      "hobbies": ["singing", "guitar", "fitness"],
    } 
  },
  { "id" : "node5", "parent" : "node0", properties: { 
      "name" : "Child 2",
      "favoriteColor" : "Red",
      "hairColor" : null,
      "age" : 69,
      "hobbies": ["hiking", "travel"],
    } 
  },
  { "id" : "node6", "parent" : "node5", properties: { 
      "name" : "Grand Child 2",
      "favoriteColor" : "Fuschia",
      "hairColor" : null,
      "age" : 41,
      "hobbies": ["vacations", "travel", "pets"],
    } 
  },
  { "id" : "node7", "parent" : "node5", properties: { 
      "name" : "Grand Child 3",
      "favoriteColor" : "Green",
      "hairColor" : "Silver",
      "age" : 52,
      "hobbies": ["working", "fitness"],
    } 
  },
  { "id" : "node8", "parent" : "node7", properties: { 
      "name" : "Great Grand Child 3",
      "favoriteColor" : "Green",
      "hairColor" : "Blue",
      "age" : 35,
      "hobbies": ["running", "baseball"],
    } 
  },
  { "id" : "node9", "parent" : "node7", properties: { 
      "name" : "Great Grand Child 4",
      "favoriteColor" : "Blue",
      "hairColor" : "Blonde",
      "age" : 31,
      "hobbies": ["singing"],
    } 
  },
  { "id" : "node10", "parent" : "node7", properties: { 
      "name" : "Great Grand Child 5",
      "favoriteColor" : "Silver",
      "hairColor" : "Pink",
      "age" : 29,
      "hobbies": ["movies", "football"],
    } 
  },
  { "id" : "node11", "parent" : "node10", properties: { 
      "name" : "Great Great Grand Child 1",
      "favoriteColor" : "Red",
      "hairColor" : "Blonde",
      "age" : 8,
      "hobbies": ["eating", "watching tv"],
    } 
  },
  { "id" : "node12", "parent" : "node10", properties: { 
      "name" : "Great Great Grand Child 2",
      "favoriteColor" : "Blue",
      "hairColor" : "Brown",
      "age" : 12,
      "hobbies": ["reading", "cartoons", "fitness"],
    } 
  },
  { "id" : "node13", "parent" : "node5", properties: { 
      "name" : "Grand Child 4",
      "favoriteColor" : "Blue",
      "hairColor" : "Blonde",
      "age" : 34,
      "hobbies": ["family", "pets"],
    } 
  },
];

app.get('/v1/getTreeData', (req, res) => {
  res.send(db_data);
});

app.listen(3000, () =>
  console.log("API running on http://localhost:3000")
);