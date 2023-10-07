const shows = [
  {
    date: "Mon Sept 06 2021",
    venue: "Ronald Lane",
    location: "San Francisco, CA",
  },
  {
    date: "Tue Sept 21 2021",
    venue: "Pier 3 East",
    location: "San Francisco, CA",
  },
  {
    date: "Fri Oct 15 2021 ",
    venue: "View Lounge",
    location: "San Francisco, CA",
  },
  {
    date: "Sat Nov 06 2021",
    venue: "Hyatt Agency",
    location: "San Francisco, CA",
  },
  {
    date: "Fri Nov 26 2021",
    venue: "Moscow Center",
    location: "San Francisco, CA",
  },
  {
    date: "Wed Dec 15 2021",
    venue: "Press Club",
    location: "San Francisco, CA",
  },
];

const showsContainer = document.querySelector(".shows__wrap");

const displayShowCard = (show) => {
  const showsListing = document.createElement("article");
  showsListing.classList.add("show");

  const dateLabel = document.createElement("p");
  dateLabel.classList.add("show__label");
  dateLabel.innerText = "DATE";
  showsListing.appendChild(dateLabel);

  const showDate = document.createElement("p");
  showDate.classList.add("show__date");
  showDate.innerText = show.date;
  showsListing.appendChild(showDate);

  const venueLabel = document.createElement("p");
  venueLabel.classList.add("show__label");
  venueLabel.innerText = "VENUE";
  showsListing.appendChild(venueLabel);

  const showVenue = document.createElement("p");
  showVenue.classList.add("show__venue");
  showVenue.innerText = show.venue;
  showsListing.appendChild(showVenue);

  const locationLabel = document.createElement("p");
  locationLabel.classList.add("show__label");
  locationLabel.innerText = "LOCATION";
  showsListing.appendChild(locationLabel);

  const showLocation = document.createElement("p");
  showLocation.classList.add("show__location");
  showLocation.innerText = show.location;
  showsListing.appendChild(showLocation);

  const buyTicketButton = document.createElement("button");
  buyTicketButton.classList.add("show__button");
  buyTicketButton.innerText = "BUY TICKETS";
  showsListing.appendChild(buyTicketButton);

  showsContainer.appendChild(showsListing);
};

const displayShows = () => {
  showsContainer.innerHTML = "";

  const showsTabletHeading = document.createElement("div");
  showsTabletHeading.classList.add("shows__labels");

  const dateTabLabel = document.createElement("p");
  dateTabLabel.classList.add("shows__label");
  dateTabLabel.innerText = "DATE";
  showsTabletHeading.appendChild(dateTabLabel);

  const venueTabLabel = document.createElement("p");
  venueTabLabel.classList.add("shows__label");
  venueTabLabel.classList.add("shows__label--left");
  venueTabLabel.innerText = "VENUE";
  showsTabletHeading.appendChild(venueTabLabel);

  const locationTabLabel = document.createElement("p");
  locationTabLabel.classList.add("shows__label");
  locationTabLabel.classList.add("shows__label--right");
  locationTabLabel.innerText = "LOCATION";
  showsTabletHeading.appendChild(locationTabLabel);

  showsContainer.appendChild(showsTabletHeading);

  for (let i = 0; i < shows.length; i++) {
    const show = shows[i];

    displayShowCard(show);
  }
};

displayShows();
