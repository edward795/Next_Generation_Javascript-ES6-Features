const posts=[
    {title:'Post One',body:'This is Post One'},
    {title:'Post Two',body:'This is Post Two'}
]

function getPosts(){
    let output='';
    setTimeout(()=>{
       posts.forEach((post,index)=>{
           output+=`<li>${post.title}</li>`;
       })
       document.body.innerHTML=output;
    },2000)
}

function createPost(post){
    setTimeout(()=>{
        posts.push(post);
    },2000);
}

async function init(){
    await createPost({title:'Post Three',body:'This is post Three'});
    getPosts()
}

init();


//using fetch() api 
async function fetchUsers(){
    const res=await fetch('https://jsonplaceholder.typicode.com/users');
    const data=await res.json() 
    console.log(data)
}

fetchUsers();