const scheduleArray= [
      {
        date: "Mon Sept 06 2021",
        venue: "Ronald Lane",
        location: "San Francisco,CA",
      },
      {
        date: "Tues Sept 21 2021",
        venue: "Pier 3 east",
        location: "San Francisco,CA",
      },
      {
        date: "Fri Oct 15 2021",
        venue: "View Lounge",
        location: "San Francisco,CA",
      },
      {
        date: "Sat Nov 06 2021",
        venue: "Hyatt Agency",
        location: "San Francisco,CA",
      },
      {
        date: "Fri Nov 26 2021",
        venue: "Moscow Center",
        location: "San Francisco,CA",
      },
      {
        date: "Wed Dec 15 2021",
        venue: "Press Club",
        location: "San Francisco,CA",
      },
    ];


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
      date.innerText = scheduleArray[i].date;
      scheduleBlock.appendChild(date);

      const venueDescription = document.createElement("venuedescription");
      venueDescription.classList.add("shows__description");
      venueDescription.innerText = "VENUE";
      scheduleBlock.appendChild(venueDescription);

      const venue = document.createElement("venue");
      venue.classList.add("shows__venue");
      venue.innerText = scheduleArray[i].venue;
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

    }
  };
  
  console.log (createShows(scheduleArray));



