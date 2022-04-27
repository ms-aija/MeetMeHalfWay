/*eslint-disable*/

# MeetMeHalfWay
MeetMeHalfWay is a site that lets you input up to six origin airport cities and search for common destinations served by direct flights. The site currently runs only on localhost.

![Homepage!](/assets/MeetMeHalfWay-Screenshot.jpg "Homepage")


## Built With
* Node + Express
* React.js
* Leaflet.js
* Amadeus for Developers API

## Getting Started

### External data
Get a free account from [Amadeus for Developers](https://developers.amadeus.com/) and create a Self-Service app to get your API key and API secret.

### Installation
* Clone the repo
* Install npm packages with `npm install`
* Enter your API key and secret in /server/controllers/destinations.js  (pending to set up config.js file!!!)

### Run on localhost
* Install nodemon from root directory with `npm install nodemon`
* Change directory to `/server` and run `nodemon index.js` to start the server
* Change directory to `/client` and run `npm start` to launch the application in browser


## Roadmap
* [ ] Add airport search from API to ensure most recent data
* [ ] Update geo location search to ensure all common destination cities are shown on the map (currently full list in text format at the bottom of the page but not all show up on the map)
* [ ] Implement input validation
* [ ] Improve error handling

## Contributing
If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

* Fork the Project
* Create your Feature Branch (git checkout -b feature/AmazingFeature)
* Commit your Changes (git commit -m 'Add some AmazingFeature')
* Push to the Branch (git push origin feature/AmazingFeature)
* Open a Pull Request


## Acknowledgments

* [LottieFiles](https://lottiefiles.com/) for animations
* [airports.json](https://gist.github.com/tdreyno/4278655) as a starting point for airport search dropdown
* [NationsOnline](https://www.nationsonline.org/oneworld/IATA_Codes/airport_code_list.htm) for IATA city code references