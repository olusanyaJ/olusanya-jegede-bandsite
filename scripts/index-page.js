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

  comments.push(comment);

  displayComments();

  form.reset();
};

const formEl = document.querySelector(".form");
formEl.addEventListener("submit", sumbitHandler);

const commentsList = document.querySelector(".comments__wrapper");

const displayCommentCard = (comment) => {
  const commentFlex = document.createElement("div");
  commentFlex.classList.add("comments__flex");

  const commentImage = document.createElement("div");
  commentImage.classList.add("comments__user-img");

  const commentCard = document.createElement("div");
  commentCard.classList.add("comments__card");

  const commentDetails = document.createElement("div");
  commentDetails.classList.add("comments__comment");
  commentCard.appendChild(commentDetails);

  const commentAuthor = document.createElement("p");
  commentAuthor.classList.add("comments__user");
  commentAuthor.innerText = comment.name;
  commentDetails.appendChild(commentAuthor);

  const commentDate = document.createElement("p");
  commentDate.classList.add("comments__date");
  commentDate.innerText = comment.date.toLocaleDateString();
  commentDetails.appendChild(commentDate);

  const comments = document.createElement("p");
  comments.classList.add("comments__user-post");
  comments.innerText = comment.comment;
  commentCard.appendChild(comments);

  commentFlex.appendChild(commentImage);
  commentFlex.appendChild(commentCard);

  commentsList.appendChild(commentFlex);
};

const displayComments = () => {
  commentsList.innerHTML = "";

  for (let i = 0; i < comments.length; i++) {
    const comment = comments[i];

    displayCommentCard(comment);
  }
};

displayComments();
