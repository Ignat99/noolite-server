noolite-server
==============

noolite server with API for control light:  http://noolite-server.herokuapp.com

    npm install
    heroku create <name of your noolite-server>
    git push heroku master
    heroku logs -t
    
SUPPORT
=======
[![tip for next commit](https://tip4commit.com/projects/952.svg)](https://tip4commit.com/github/Ignat99/noolite-server)

API
====

    node routes/app.js
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

bush script nool1
==================

    #!/bin/bash
    noolite -api -on_ch 1


bash script nool2
==================

    #!/bin/bash
    noolite -api -off_ch 1


Run on localhost
=================

    foreman start

Server on herokuapp
====================

    http://noolite-server.herokuapp.com/
    http://noolite-server.herokuapp.com/switches/0
    http://noolite-server.herokuapp.com/switches/1


    http://shrouded-reef-4887.herokuapp.com/switches/0
    http://shrouded-reef-4887.herokuapp.com/switches/1

