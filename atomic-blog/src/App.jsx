import {faker} from "@faker-js/faker"
import { useEffect } from "react";
import { useState } from "react";
import {PostProvider, useProvider} from "./PostProvider";

function createRandomPost() {
    return {
      title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
      body: faker.hacker.phrase(),
    };
  }




export default function App(){

    const [isFakeDark, setIsFakeDark] = useState(false);
    
    useEffect(()=>{
        document.documentElement.classList.toggle("fake-dark-mode");
    },[isFakeDark])
    
    return(
        <PostProvider>
        <section>
            <button onClick={() => setIsFakeDark(!isFakeDark)} className = "btn-fake-dark-mode">
                {isFakeDark ? "🌙" : "🔆"}
            </button>
            <Header/>
            <Main/>
            <Archive/>
        </section>
        </PostProvider>
    )
}

function Header(){
    const {clearPosts} = useProvider()
    return(
        <header>
            <h1>
                <span></span> The Atomic Blog
            </h1>
            <div>
            <Results />
            <SearchPosts/>
            <button onClick={clearPosts}>Clear Posts</button>
            </div>
        </header>

    )
}

function SearchPosts(){
    const {searchQuery, setSearchQuery} = useProvider()

    return(
        <input type = 'text' 
               value = {searchQuery}
               onChange={(e)=>setSearchQuery(e.target.value)}
               placeholder="Search Blogs"
               >
        </input>
    )
}

function Results(){
    const {posts} = useProvider()
    return(
        <p>🚀 {posts.length} Results found</p>
    )
}

function Main() {
    return (
      <main>
        <FormAddPost/>
        <Posts/>
      </main>
    );
}

function FormAddPost(){

const {handleFormData} = useProvider()

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

function Posts(){
    return(
        <section>
            <List/>
        </section>
    )
}

function List(){
const {posts} = useProvider()

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



function Archive(){
    const {handleFormData} = useProvider()
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