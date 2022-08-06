const comments= [
      {
        name: "Connor Walton",
        date: "02/17/2021",
        content:
          "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
      },
      {
        name: "Emilie Beach",
        date: "01/09/2021",
        content:
          "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
      },
      {
        name: "Miles Acostan",
        date: "12/20/2020",
        content:
          "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
      },
    ];

  const conversation = document.querySelector(".comment");
  
  function createComments() {
    conversation.innerHTML = null;
  
    for (let i = 0; i < comments.length; i++) {
      const commentBlock = document.createElement("div");
      commentBlock.classList.add("comment__block");
      conversation.appendChild(commentBlock);

      const commentBlockLeft = document.createElement("divleft");
      commentBlockLeft.classList.add("comment__block-left");
      commentBlock.appendChild(commentBlockLeft);

      const image = document.createElement("img");
      image.classList.add("comment__avatar");
      commentBlockLeft.appendChild(image);
    
      const commentBlockRight = document.createElement("divright");
      commentBlockRight.classList.add("comment__block-right");
      commentBlock.appendChild(commentBlockRight);

      const commentBlockRightTop = document.createElement("divrighttop");
      commentBlockRightTop.classList.add("comment__block-righttop");
      commentBlockRight.appendChild(commentBlockRightTop);

      const name = document.createElement("name");
      name.classList.add("comment__name");
      name.innerText = comments[i].name;
      commentBlockRightTop.appendChild(name);

      const date = document.createElement("date");
      date.classList.add("comment__date");
      date.innerText = comments[i].date;
      commentBlockRightTop.appendChild(date);
    
      const paragraph = document.createElement("p");
      paragraph.classList.add("comment__paragraph");
      paragraph.innerText = comments[i].content;
      commentBlockRight.appendChild(paragraph);
    }
  }
  
  createComments(comments);
