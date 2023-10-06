// array of comments
const comments = [
  {
    name: "Connor Walton",
    date: new Date(2021, 2, 17),
    comment:
      "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
  },
  {
    name: "Emilie Beach",
    date: new Date(2021, 1, 9),
    comment:
      "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
  },
  {
    name: "Miles Acosta",
    date: new Date(2020, 12, 20),
    comment:
      "I can t stop listening. Every time I hear one of their songs the vocals it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can t get enough.",
  },
];

const sumbitHandler = (event) => {
  event.preventDefault();
  const form = event.target;

  // Create a new object (using the values from the form) which represents a comment
  const comment = {
    name: form.name.value,
    date: new Date(),
    comment: form.comment.value,
  };

  let formName = document.querySelector(".form__input");
  let formComment = document.querySelector(".form__area");

  if (formName.value == "" || formComment.value == "") {
    if (formName.value == "") {
      formName.placeholder = "Ensure you input a name here!";
      formName.classList.add("form__invalid-input");
    } else if (formComment.value == "") {
      formComment.placeholder = "Ensure you comment here!";
      formComment.classList.add("form__invalid-input");
      return;
    }
  } else {
    window.alert(
      `This form comment has been successfully submitted by ${formName.value}`
    );
  }

  // Push the new object to the comments array
  comments.push(comment);
  // After we've saved the booking, re-render the bookings list (to update the DOM)
  displayComments();
  // Clear all of the form values
  form.reset();
};

// Register a submit event handler for the form submit event
const formEl = document.querySelector(".form");
formEl.addEventListener("submit", sumbitHandler);

// Get the booking list element (we'll append new bookings to this later)
const commentsList = document.querySelector(".comments__wrapper");

// A function (to be used in a loop) which takes in a single comment object,
// builds various DOM elements and append to the DOM
const displayCommentCard = (comment) => {
  // The grandparent div for the img
  const commentFlex = document.createElement("div");
  commentFlex.classList.add("comments__flex");
  // The parent div for the img
  const commentImage = document.createElement("div");
  commentImage.classList.add("comments__user-img");
  // The parent div
  const commentCard = document.createElement("div");
  commentCard.classList.add("comments__card");
  // The child div
  const commentDetails = document.createElement("div");
  commentDetails.classList.add("comments__comment");
  commentCard.appendChild(commentDetails);
  // The grand child p
  const commentAuthor = document.createElement("p");
  commentAuthor.classList.add("comments__user");
  commentAuthor.innerText = comment.name;
  commentDetails.appendChild(commentAuthor);
  // The grand child p
  const commentDate = document.createElement("p");
  commentDate.classList.add("comments__date");
  commentDate.innerText = comment.date.toLocaleDateString();
  commentDetails.appendChild(commentDate);
  // The child paragraph
  const comments = document.createElement("p");
  comments.classList.add("comments__user-post");
  comments.innerText = comment.comment;
  commentCard.appendChild(comments);

  // Append the parent to the grandparent
  commentFlex.appendChild(commentImage);
  commentFlex.appendChild(commentCard);
  // Append the grandparent article to the comments list
  commentsList.appendChild(commentFlex);
};

// A function which clears the existing comments from the DOM, and loops over them again
const displayComments = () => {
  // Set the comments list element HTML to nothing (i.e. remove them all to avoid duplicates)
  commentsList.innerHTML = "";

  // Loop through the comments array
  for (let i = 0; i < comments.length; i++) {
    // A variable for the individual booking object inside the loop (to make the following code easier to read)
    const comment = comments[i];
    // Call the displayCommentCard() function, passing the booking object
    displayCommentCard(comment);
  }
};

// Invoke the displayComments() function on page load to show the comments
displayComments();
