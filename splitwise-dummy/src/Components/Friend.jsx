import "../index.css"
import Button from "./Button";

function Friend({friend,onClickSplitForm,friendListSelected}){

const isSelected = friend?.id === friendListSelected?.id;

    return (<li className = {isSelected ? 'selected':''}>
        <img src = {friend.image} alt = "xyz"/>
        <h3>{friend.name}</h3>
        {/*Conditional rendering */}
        {friend.balance < 0 && <p className = "red">You owe {friend.name} {Math.abs(friend.balance)}$</p>}
        {friend.balance > 0 && <p className = "green">Your friend {friend.name} owns you {Math.abs(friend.balance)}$</p>}
        {friend.balance === 0 && <p>You and {friend.name} are even </p>}
        <Button handleClick = {()=>onClickSplitForm(friend)}>{isSelected ? `Close`:`Select`}</Button>
        </li>)
}
export default Friend;