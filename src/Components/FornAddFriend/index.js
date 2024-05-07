import Button from "../Button";
import {useState} from "react";

const FormAddFriend=()=>{
    const [name,setName]=useState("")
    const [image,setImage]=useState("")
    return <form className="form-add-friend">
        <label>friend name</label>
        <input type="text" value='name' onChange={(e)=>setName(e.target.value)}/>
        <label >Image URL</label>
        <input type="text" value='image' onChange={(e)=>{setImage(e.target.value)}}/>
        <Button>Add</Button>
    </form>
}
export default FormAddFriend