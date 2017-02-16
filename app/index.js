// import 'whatwg-fetch';

const data = {
  "results": [
    {
      "gender": "female",
      "name": {
        "title": "ms",
        "first": "sedef",
        "last": "eliçin"
      },
      "location": {
        "street": "6262 fatih sultan mehmet cd",
        "city": "çanakkale",
        "state": "bursa",
        "postcode": 35107
      },
      "email": "sedef.eliçin@example.com",
      "login": {
        "username": "browncat637",
        "password": "55555555",
        "salt": "sKRbTpH0",
        "md5": "a1628852039478b49f5a04375d8ba2a3",
        "sha1": "a908570dd1a50a5767ca0b5b09ffdf1707ac0fcf",
        "sha256": "0d9b782624aa8e826c25161f9940550551e614f6262e4e712aff1fb71fa07e04"
      },
      "dob": "1983-01-04 16:03:31",
      "registered": "2004-09-29 23:35:28",
      "phone": "(809)-057-1637",
      "cell": "(915)-434-6687",
      "id": {
        "name": "",
        "value": null
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/51.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/51.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/51.jpg"
      },
      "nat": "TR"
    }
  ],
  "info": {
    "seed": "6a3360b2f041fde5",
    "results": 1,
    "page": 1,
    "version": "1.1"
  }
};

var userImage = document.querySelector('.user-image');
userImage.src = data.results[0].picture.large;

var userName = document.querySelector('.name');

const name = data.results[0].name;

userName.innerText = `${name.first}, ${name.last}`;

var userEmail = document.querySelector('.email');

userEmail.innerText = data.results[0].email;

var userPhone = document.querySelector('.phone');

userPhone.innerText = data.results[0].phone;

var userLocation = document.querySelector('.location');

const location = data.results[0].location

userLocation.innerText = `${location.city}, ${location.state}`;
