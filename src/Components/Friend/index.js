import react from "react";

const Friend=({friend})=>{
return <li>
    <img src={friend.img} alt={friend.name}/>
    <h3>{friend.name}</h3>
    {friend.balance<0 && <p className="red">You owes {friend.name} {Math.abs(friend.balance)} Euro</p>}
    {friend.balance>0 && <p className="green">{friend.name} owes you {Math.abs(friend.balance)} Euro</p>}
    {friend.balance=== 0 && <p >You and {friend.name} are even </p>}
    <button className="button">Select</button>
</li>
}

export default Friend