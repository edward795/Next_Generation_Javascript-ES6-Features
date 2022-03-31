<<<<<<< HEAD
const posts=[
    {title:'Post One',body:'This is Post One'},
    {title:'Post Two',body:'This is Post Two'}
]

function getPosts(){
    setTimeout(()=>{
        let output='';
        posts.forEach((post,index)=>{
            output+=`<li>${post.title}</li>`
        })
        document.body.innerHTML=output;
    },1000);
}

//Function which accepts a post and a callback function
function createPosts(post,callback){
  setTimeout(()=>{
      posts.push(post);
      callback()
  },2000);  
}

getPosts()
=======
const posts=[
    {title:'Post One',body:'This is Post One'},
    {title:'Post Two',body:'This is Post Two'}
]

function getPosts(){
    setTimeout(()=>{
        let output='';
        posts.forEach((post,index)=>{
            output+=`<li>${post.title}</li>`
        })
        document.body.innerHTML=output;
    },1000);
}

//Function which accepts a post and a callback function
function createPosts(post,callback){
  setTimeout(()=>{
      posts.push(post);
      callback()
  },2000);  
}

getPosts()
>>>>>>> 050748eb71941982df9a9b9dd3abaae2aec9579b
createPosts({title:'Post Three',body:'This is post Three'},getPosts)