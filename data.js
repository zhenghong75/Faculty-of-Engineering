var APP_DATA = {
  "scenes": [
    {
      "id": "0-faculty-of-engineering",
      "name": "Faculty of Engineering",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.22632899088678826,
        "pitch": 0.24931046424522307,
        "fov": 1.1678810529903434
      },
      "linkHotspots": [
        {
          "yaw": 0.11120510681699791,
          "pitch": -0.2630654727935564,
          "rotation": 7.0685834705770345,
          "target": "1-engineering-auditorium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.6861179980106922,
          "pitch": -0.007018596873434646,
          "title": "Faculty of Engineering",
          "text": "This is where engineers are made!"
        }
      ]
    },
    {
      "id": "1-engineering-auditorium",
      "name": "Engineering Auditorium",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -1.1701294376414104,
        "pitch": -0.2592483028352799,
        "fov": 1.1678810529903434
      },
      "linkHotspots": [
        {
          "yaw": 0.02097545734442896,
          "pitch": -0.003841245486434275,
          "rotation": 0,
          "target": "2-engineering-auditorium-atrium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.1568339085260462,
          "pitch": -0.0489926139896788,
          "title": "Sculpture",
          "text": "This is where engineers meet!"
        }
      ]
    },
    {
      "id": "2-engineering-auditorium-atrium",
      "name": "Engineering Auditorium Atrium",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -0.016049777509959284,
        "pitch": -0.015284852790070858,
        "fov": 1.1678810529903434
      },
      "linkHotspots": [
        {
          "yaw": 3.002877361826938,
          "pitch": 0.0897546239264333,
          "rotation": 0,
          "target": "0-faculty-of-engineering"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.895365081144888,
          "pitch": -0.22267787507784575,
          "title": "Cafe",
          "text": "This is where engineers eat!"
        }
      ]
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
