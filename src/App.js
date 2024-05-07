import FriendsList from "./Components/FriendsList";
import FornAddFriend from "./Components/FornAddFriend";
import Button from "./Components/Button";
import FormSplitBill from "./Components/FormSplitBill";
import {useState} from "react";


const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

const App=()=>{
  const [showAddFriend,setShowAddFriend]=useState(false)
  const [friends,setFriends]=useState(initialFriends)

  const handleAddFriend=()=>{
    setShowAddFriend(()=>!showAddFriend)
  }

const handleFrined=(friend)=>{
setFriends(friend=>[...friends,friend])
  setShowAddFriend(false)
  }
  return <div className="app">
    <div className="sidebar">
    <FriendsList friends={friends}/>
      {showAddFriend ?  <FornAddFriend onAddFriend={handleFrined}/>:""}
      <Button onAddFriend={handleAddFriend}>{showAddFriend ? 'Close': "Add friend" }</Button >
    </div>
    <FormSplitBill/>
  </div>
}

export default
App