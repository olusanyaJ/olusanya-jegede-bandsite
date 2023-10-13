const sumbitHandler = async (event) => {
  event.preventDefault();
  const form = event.target;

  const comment = {
    name: form.name.value,
    comment: form.comment.value,
  };

  const formName = document.querySelector(".form__input");
  const formComment = document.querySelector(".form__area");

  if (formName.value == "" || formComment.value == "") {
    if (formName.value == "") {
      formName.classList.add("form__input-active");
      formName.placeholder = "Ensure you input a name here!";
      formName.classList.add("form__invalid-input");
    } else if (formComment.value == "") {
      formComment.placeholder = "Ensure you comment here!";
      formComment.classList.add("form__invalid-input");
      return;
    }
  }

  await bandSiteAPI.postComment(comment);

  await bandSiteAPI.getComments();

  displayComments();

  form.reset();
};

const formEl = document.querySelector(".form");
formEl.addEventListener("submit", sumbitHandler);

const commentsListEL = document.querySelector(".comments__wrapper");

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
  const realCommentTime = () => {
    const currentDate = new Date();
    const timestampDate = new Date(comment.timestamp);
    const timeDifference = currentDate - timestampDate;
    const millisecondInOneHour = 1000 * 60 * 60;
    const millisecondInOneMinute = 1000 * 60;
    const hoursAgo = Math.floor(timeDifference / millisecondInOneHour);
    if (hoursAgo === 0) {
      const minutesAgo = Math.floor(timeDifference / millisecondInOneMinute);
      if (minutesAgo < 1) {
        return "Just now";
      } else if (minutesAgo === 1) {
        return "1 minute ago";
      } else {
        return `${minutesAgo} minutes ago`;
      }
    } else if (hoursAgo === 1) {
      return "1 hour ago";
    } else if (hoursAgo <= 24) {
      return `${hoursAgo} hours ago`;
    } else {
      return timestampDate.toLocaleDateString();
    }
  };
  commentDate.innerText = realCommentTime(comment.timestamp);
  commentDetails.appendChild(commentDate);

  const comments = document.createElement("p");
  comments.classList.add("comments__user-post");
  comments.innerText = comment.comment;
  commentCard.appendChild(comments);

  commentFlex.appendChild(commentImage);
  commentFlex.appendChild(commentCard);

  commentsListEL.appendChild(commentFlex);
};

const displayComments = () => {
  commentsListEL.innerHTML = "";

  for (let i = 0; i < commentsList.length; i++) {
    const sortedComments = commentsList.sort(function (a, b) {
      return b.timestamp - a.timestamp;
    });
    const comment = sortedComments[i];

    displayCommentCard(comment);
  }
};

const main = async () => {
  await bandSiteAPI.getComments();

  displayComments();
};

main();
