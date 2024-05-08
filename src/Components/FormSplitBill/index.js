import Button from "../Button";
import {useState} from "react";

const FormSplitBill=({selectedFriend})=>{
    const [bill,setBill]=useState("")
    const[paidByUser,setPaidByUser]=useState("")
    const paidByFriend=bill?bill-paidByUser: ""
    const[whoIsPaying,setWhoIsPaying]=useState("user")

    return <form className="form-split-bill">
        <h2>Split a bill with {selectedFriend.name}</h2>
        <label>Bill value</label>
        <input type="text" value={bill} onChange={(e)=>setBill(Number(e.target.value)>bill?paidByUser:Number(e.target.value))}/>

        <label>your expense</label>
        <input type="text" value={paidByUser} onChange={(e)=>setPaidByUser(Number(e.target.value))}/>
        <label>x expense</label>
        <input type="text" disabled value={paidByFriend}/>

        <label>who is paying the bill?</label>
        <select value={whoIsPaying}>
            <option value="user" onChange={(e)=>setWhoIsPaying(e.target.value)}>You</option>
            <option value="friend" onChange={e=>setWhoIsPaying(e.target.value)}>X</option>
        </select>

        <Button>Split bill</Button>
    </form>
}
export default FormSplitBill