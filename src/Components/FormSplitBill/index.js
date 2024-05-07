import Button from "../Button";

const FormSplitBill=()=>{
    return <form className="form-split-bill">
        <h2>Split a bill with X</h2>
        <label>Bill value</label>
        <input type="text"/>

        <label>your expense</label>
        <input type="text"/>
        <label>x expense</label>
        <input type="text" disabled/>

        <label>who is paying the bill?</label>
        <select>
            <option value="user">You</option>
            <option value="friend">X</option>
        </select>

        <Button>Split bill</Button>
    </form>
}
export default FormSplitBill