import Friend from "./Friend";
import "../index.css"

function FriendList({friends,onClickParentChild,selectedFriends}){
    return(friends.map((value)=>(
        <Friend friend={value} key = {value.id} onClickSplitForm = {onClickParentChild} friendListSelected = {selectedFriends}/>
    )))
}
export default FriendList;