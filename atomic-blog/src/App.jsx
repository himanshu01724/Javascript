import {faker} from "@faker-js/faker"
import { useEffect } from "react";
import { useState } from "react";

function createRandomPost() {
    return {
      title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
      body: faker.hacker.phrase(),
    };
  }

export default function App(){

    const [posts, setPosts] = useState(() => Array.from({length:30}, () => createRandomPost()))
    const [searchQuery, setSearchQuery] = useState("");
    const [isFakeDark, setIsFakeDark] = useState(false);

    useEffect(()=>{
        document.documentElement.classList.toggle("fake-dark-mode");
    },[isFakeDark])

    const controlledSearchElement = searchQuery.length > 0 
                                    ? posts.filter((item)=>`${item.title} ${item.body}`.toLowerCase().includes(searchQuery.toLowerCase()))
                                    : posts;
    
    function handleFormData(value){
        console.log(value)
        setPosts((posts)=>[...posts, value])
    }

    function clearPosts(){
        setSearchQuery('')
    }
  
    return(
        <section>
            <button onClick={() => setIsFakeDark(!isFakeDark)} className = "btn-fake-dark-mode">
                {isFakeDark ? "🌙" : "🔆"}
            </button>
            <Header posts = {controlledSearchElement}
                    searchQuery = {searchQuery}
                    setSearchQuery = {setSearchQuery}
                    clearPosts = {clearPosts}
                    />

            <Main   posts = {controlledSearchElement}
                    handleFormData = {handleFormData}/>

            <Archive handleFormData = {handleFormData}/>
        </section>
    )
}

function Header({posts, searchQuery, setSearchQuery, clearPosts}){
    return(
        <header>
            <h1>
                <span></span> The Atomic Blog
            </h1>
            <div>
            <Results posts = {posts}/>
            <SearchPosts searchQuery = {searchQuery}
                         setSearchQuery = {setSearchQuery}/>
            <button onClick={clearPosts}>Clear Posts</button>
            </div>
        </header>

    )
}

function SearchPosts({searchQuery, setSearchQuery}){
    return(
        <input type = 'text' 
               value = {searchQuery}
               onChange={(e)=>setSearchQuery(e.target.value)}
               placeholder="Search Blogs"
               >
        </input>
    )
}

function Results({posts}){
    return(
        <p>🚀 {posts.length} Results found</p>
    )
}

function Main({ posts, handleFormData}) {
    return (
      <main>
        <FormAddPost handleFormData = {handleFormData}/>
        <Posts posts = {posts}
               />
      </main>
    );
}

function FormAddPost({handleFormData}){

const [title, setTitle] = useState('')
const [body, setBody] = useState('')

function handleFormSubmit(e){
    e.preventDefault()
    if(title === '' || body === '') return
    const newpost = {title, body}
    handleFormData(newpost)
}
    return(
        <form onSubmit={handleFormSubmit}>

            <input placeholder="Blog title" value = {title} onChange={(e)=>setTitle(e.target.value)}/>
            <textarea placeholder="Blog" value = {body} onChange={(e)=>setBody(e.target.value)}/>
            <button>Add Post</button>

        </form>
    )
}

function Posts({posts}){
    return(
        <section>
            <List posts = {posts}/>
        </section>
    )
}

function List({posts}){
const [test,setTest] = useState(null)

function handleModelState(item){
    setTest(item)
}
    return(
        <ul >
            {posts.map((item, i)=>(
                <li key = {i} style = {{cursor:'pointer'}} onClick={()=>handleModelState(item)}>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                </li>   
            ))}
            {test && <Model post = {test} setTest = {setTest}/>}
        </ul>
        
    )
}

function Model({post, setTest}){
    console.log(post)
    return(
       
        <div className="modal-container">
            
            <span className="modal-content">
            
             <h1>{post.title}</h1>
             <p>{post.body}</p>
             <button className="close-button" onClick={()=>setTest(null)}>X</button>

             </span>
        </div>
    )
}



function Archive({handleFormData}){
    const posts = Array.from({length:1000}, () => createRandomPost())
    
    const [show, setShow] = useState(false)
    return(
        <aside>
            <h2>Post archive</h2>
            <button onClick={()=>setShow(!show)}>{show ? `Hide archive posts`:`Show archive posts`}</button>
            {show && (
            <ul>
            {posts.map((post, i) => (
                <li key={i}>
                <p>
                    <strong>{post.title}:</strong> {post.body}
                </p>
                <button onClick={()=>handleFormData(post)} >Add as new post</button>
                </li>
            ))}
            </ul>
      )}
        </aside>
    )
}