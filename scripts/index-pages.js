
    const conversation = document.querySelector(".comment");
    let comments = [];



    function createComments() {
      conversation.innerHTML = null;
    
      for (let i = 0; i < comments.length; i++) {
        const commentBlock = document.createElement("div");
        commentBlock.classList.add("comment__block");
        conversation.appendChild(commentBlock);
  
        const commentBlockLeft = document.createElement("div");
        commentBlockLeft.classList.add("comment__block-left");
        commentBlock.appendChild(commentBlockLeft);
  
        const image = document.createElement("img");
        image.classList.add("comment__avatar");
        commentBlockLeft.appendChild(image);
      
        const commentBlockRight = document.createElement("div");
        commentBlockRight.classList.add("comment__block-right");
        commentBlock.appendChild(commentBlockRight);
  
        const commentBlockRightTop = document.createElement("div");
        commentBlockRightTop.classList.add("comment__block-righttop");
        commentBlockRight.appendChild(commentBlockRightTop);
  
        const name = document.createElement("name");
        name.classList.add("comment__name");
        name.innerText = comments[i].name;
        commentBlockRightTop.appendChild(name);

        const date = document.createElement("date");
        date.classList.add("comment__date");
        let newDate = new Date(comments[i].timestamp);
        date.innerText = newDate.toLocaleDateString("en-US");
        commentBlockRightTop.appendChild(date);

        const comment = document.createElement("p");
        comment.classList.add("comment__paragraph");
        comment.innerText = comments[i].comment;
        commentBlockRight.appendChild(comment);
      }}

        axios.get("https://project-1-api.herokuapp.com/comments?api_key=d35264c7-f254-44b3-811c-6df95861ead6/").then((response) => {
        
          comments = response.data;
          comments.sort((a,b) => {return b.timestamp-a.timestamp});
          createComments();
        }); 

        let today = new Date();
        let day = today.getDate();
        let month = today.getMonth()+1;
        let year = today.getFullYear();
    
        if (day<10)day ="0"+ day;
        if (month <10)month ="0"+month;
        let dateFormated = month +"/" + day +"/" +year;



    const commentForm= document.querySelector(".jointheconversation__block");
    commentForm.addEventListener("submit", (event) => {
      event.preventDefault();

      let newName = event.target.name.value;
      let newComment = event.target.comment.value;

  
      comments.unshift(
            {
                name: newName,
                timestamp: dateFormated,
                comment: newComment
            }
        )
  
          comments.forEach(()=>{
            createComments();
          })
          event.target.reset();
        axios
        .post((url= "https://project-1-api.herokuapp.com/comments?api_key=d35264c7-f254-44b3-811c-6df95861ead6/"), {
          name: newName,
          comment: newComment})
        .then(() => {
          return axios.get(url);
        })
        .then((response) => {
          const comments = response.data.comments;
          }

        )})


     




 
    
  
  