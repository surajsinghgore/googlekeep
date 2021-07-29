import react from 'react';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import './css/notes.css';


const Notes=(props)=>{
   
const eventfiress=()=>{
props.deleteItem(props.id);
}
 
    return(
        <>
        <div className="notes">
  <div className="note">
<h1>{props.title}</h1>
<br/>
<p>{props.content}</p>
<button onClick={eventfiress}>
<DeleteOutlineIcon className="delete" />
</button>
</div>
</div>
        </>
    )
}

export default Notes;