import React, {useState} from 'react'
import "./index.css"
import Button from './Components/Button'
import FriendList from './Components/FriendList';
import FormAddFriend from './Components/FormAddFriend';
import FormSplitButton from './Components/FormSplitButton';

const initialFriends = [
    {
      id: 118836,
      name: "Ritesh",
      image: "https://i.pravatar.cc/48?u=118836",
      balance: -7,
    },
    {
      id: 933372,
      name: "Arushi",
      image: "https://i.pravatar.cc/48?u=933372",
      balance: 20,
    },
    {
      id: 499476,
      name: "Priya",
      image: "https://i.pravatar.cc/48?u=118831",
      balance: 0,
    },
  ];
function App(){

    const [hide,setHide] = useState(false)
    const [friend,setFriend] = useState(initialFriends)
    const [selected,setSelected] = useState(null)
    
    function handleFormAddFriend(){
        setHide(test => !test)
    }

    function handleAddFriend(fri){
        setFriend(frien => [...frien,fri])
        setHide(false)
    }
    function handleSelectedFriends(frien){
        setSelected(preValue =>preValue?.id === frien.id ? null : frien)
        setHide(false)
    }
    
    function handleShowAddFriend(value){
        setFriend(friends => friend.map(friend => friend.id === selected.id ? {...friend,balance: friend.balance + value}:
                                                                                                friend))
        setSelected(null)
    }
        return(
            <div className = "app">
            <div className = "sidebar">
            <FriendList friends = {friend} 
                        onClickParentChild = {handleSelectedFriends}
                        selectedFriends = {selected}
            />
            {hide && <FormAddFriend addingFriendFunction = {handleAddFriend}/>}
            <Button handleClick = {handleFormAddFriend}> {hide ? `Close`:`Add Friend`}</Button>
            </div>
            { selected && <FormSplitButton friendData = {selected}
                                           onSubmitValueChange = {handleShowAddFriend}
            />}
            </div>
        )
    }
export default App
