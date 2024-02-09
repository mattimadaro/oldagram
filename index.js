import { posts } from './data.js'

//render posts
let container = document.getElementById("container")

function getPostHtml(){
    let post = ""
    for (let i = 0; i < posts.length; i++){
      
        post += `
                <section class="user-info">
                    <div class="user-info-content">
                        <img class="avatars" src="${posts[i].avatar}">
                        <div>
                            <p class="size highlight">${posts[i].name}</p>
                            <p class="location-text">${posts[i].location}</p>
                        </div>
                    </div>
                </section>
                
                <section>
                    <img class="post-img" id="post-el" src="${posts[i].post}">
                </section>
                
                <section class="body">
                    <div>
                        <div class="icons">
                            <img class="icon" src="images/icon-heart.png">
                            <img class="icon" src="images/icon-comment.png">
                            <img class="icon" src="images/icon-dm.png">
                        </div>
                        <p class="size highlight"><span class="likes-count"> ${posts[i].likes}</span> likes</p>
                        <p class="size"><span class="highlight">${posts[i].username}</span> ${posts[i].comment}</p>  
                    </div>
                </section>`
    }
    
    return post
}

function renderPost(){
    document.getElementById("container").innerHTML = getPostHtml()
}

renderPost()

//increase like count

const postImg = document.querySelectorAll(".post-img")
let likesCount = document.querySelectorAll(".likes-count")
console.log(postImg)

postImg.forEach(function(image){
    image.addEventListener("dblclick", function(){
        addLike()
    })
})

function addLike(){
    likesCount.forEach(function(like){
        like.innerText = +like.innerText + 1    
    })    
}

