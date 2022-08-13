let scheduleArray= [];


axios.get("https://project-1-api.herokuapp.com/showdates?api_key=d35264c7-f254-44b3-811c-6df95861ead6").then((response) => {

  scheduleArray = response.data;
  createShows();
}); 

const schedule = document.querySelector(".shows__schedule");

function createShows() {
schedule.innerHTML = null;

for (let i = 0; i < scheduleArray.length; i++) {

  const scheduleBlock = document.createElement("div");
  scheduleBlock.classList.add("shows__block");
  schedule.appendChild(scheduleBlock);

  const dateDescription = document.createElement("datedescription");
  dateDescription.classList.add("shows__description");
  dateDescription.innerText = "DATE";
  scheduleBlock.appendChild(dateDescription);

  const date = document.createElement("date");
  date.classList.add("shows__date");
  let newDate = new Date(scheduleArray[i].date);
  date.innerText = newDate.toLocaleDateString("en-US");
  scheduleBlock.appendChild(date);

  const venueDescription = document.createElement("venuedescription");
  venueDescription.classList.add("shows__description");
  venueDescription.innerText = "VENUE";
  scheduleBlock.appendChild(venueDescription);

  const venue = document.createElement("venue");
  venue.classList.add("shows__venue");
  venue.innerText = scheduleArray[i].place;
  scheduleBlock.appendChild(venue);

  const locationDescription = document.createElement("locationdescription");
  locationDescription.classList.add("shows__description");
  locationDescription.innerText = "LOCATION";
  scheduleBlock.appendChild(locationDescription);

  const location = document.createElement("location");
  location.classList.add("shows__location");
  location.innerText = scheduleArray[i].location;
  scheduleBlock.appendChild(location);

  const button = document.createElement("button");
  button.classList.add("shows__button");
  button.innerText = "BUY TICKETS";
  button.type = "submit";
  scheduleBlock.appendChild(button);
  button.addEventListener('click', function onClick(event) {
    for (let i = 0; i < scheduleArray.length; i++) {

    scheduleBlock.style.backgroundColor = "#E1E1E1";

  }});
  }
};





