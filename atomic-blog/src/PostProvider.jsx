import { createContext, useState } from "react";
import {faker} from "@faker-js/faker"
import { useContext } from "react";

function createRandomPost() {
    return {
      title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
      body: faker.hacker.phrase(),
    };
}


const PostContext = createContext()

function PostProvider({children})
{
    const [posts, setPosts] = useState(() => Array.from({length:30}, () => createRandomPost()))
    const [searchQuery, setSearchQuery] = useState("");
    
   

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
    <PostContext.Provider 
        value = {{posts:controlledSearchElement,
                  searchQuery,
                  setSearchQuery,
                  clearPosts,
                  handleFormData}}
    >{children}
    </PostContext.Provider>)
}

function useProvider(){
    const context = useContext(PostContext)
    if(context === undefined) throw new Error(`Context used outside of the children component`)
    return context
}

export {PostProvider,useProvider}