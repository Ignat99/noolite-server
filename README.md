noolite-server
==============

noolite server with ripple network http://noolite-server.herokuapp.com

    npm install
    heroku create <name of your noolite-server>
    git push heroku master
    heroku logs -t

API
====

node app.js
http://localhost:3000
http://localhost:3000/switches/0

{
  "id": "0",
  "url": "/switches/0",
  "name": "Lamp 1",
  "script": "nool1",
  "command": " ",
  "status": " "
}


http://localhost:3000/switches/1

{
  "id": "1",
  "url": "/switches/1",
  "name": "Lamp 2",
  "script": "nool2",
  "command": " ",
  "status": " "
}

#!/bin/bash
noolite -api -on_ch 1


#!/bin/bash
noolite -api -off_ch 1


heroku create
git push heroku master

foreman start



http://shrouded-reef-4887.herokuapp.com/switches/0
http://shrouded-reef-4887.herokuapp.com/switches/1

