import Friend from "../Friend";



const FriendsList=({friends,onSelection})=>{
    return <ul>
        {friends.map(friend=>(
            <Friend friend={friend} key={friend.id} onSelection={onSelection}/>
        ))}
    </ul>
}
export default FriendsList