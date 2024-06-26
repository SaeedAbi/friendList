import FriendsList from "./Components/FriendsList";
import Button from "./Components/Button";
import FormSplitBill from "./Components/FormSplitBill";
import {useState} from "react";
import FormAddFriend from "./Components/FornAddFriend";


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
  const [selectedFriend,setSelectedFriend]=useState(null)


  const handleAddFriend=()=>{
    setShowAddFriend(()=>!showAddFriend)
  }

const handleFriend=(friend)=>{
setFriends(friends=>[...friends,friend])
  setShowAddFriend(false)
  }

  const handleSelection=(friend)=>{
    setSelectedFriend(friend)
  }

  const handleSplitBill=(value)=>{
setFriends(friends=> friends.map(friend=>friend.id===selectedFriend.id ? {...friend,balance: friend.balance+value} : friend))
    setSelectedFriend(null)

  }

  return <div className="app">
    <div className="sidebar">
    <FriendsList friends={friends} onSelection={handleSelection}/>
      {showAddFriend ?  <FormAddFriend onFriend={handleFriend}/>:""}
      <Button onAddFriend={handleAddFriend}>{showAddFriend ? 'Close': "Add friend" }</Button >
    </div>
    {selectedFriend && <FormSplitBill selectedFriend={selectedFriend} onSplitBill={handleSplitBill}/>}
  </div>
}

export default
App