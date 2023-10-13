const clickHandler = (event) => {
  event.preventDefault();

  const clickedCard = event.currentTarget;
  const showSelected = document.querySelector(".show--selected");
  if (showSelected) {
    showSelected.classList.remove("show--selected");
  }
  clickedCard.classList.add("show--selected");
};

const showsContainer = document.querySelector(".shows__wrap");

const displayShowCard = (show) => {
  const showsListing = document.createElement("article");
  showsListing.classList.add("show");
  showsListing.addEventListener("click", clickHandler);

  const dateLabel = document.createElement("p");
  dateLabel.classList.add("show__label");
  dateLabel.innerText = "DATE";
  showsListing.appendChild(dateLabel);

  const showDate = document.createElement("p");
  showDate.classList.add("show__date");
  const timestampDateFormat = new Date(show.date);
  const showDateString = timestampDateFormat.toDateString();
  showDate.innerText = showDateString;
  showsListing.appendChild(showDate);

  const venueLabel = document.createElement("p");
  venueLabel.classList.add("show__label");
  venueLabel.innerText = "VENUE";
  showsListing.appendChild(venueLabel);

  const showVenue = document.createElement("p");
  showVenue.classList.add("show__venue");
  showVenue.innerText = show.place;
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

  for (let i = 0; i < showsList.length; i++) {
    const show = showsList[i];

    displayShowCard(show);
  }
};

const main = async () => {
  await bandSiteAPI.getShows();
  displayShows();
};

main();
