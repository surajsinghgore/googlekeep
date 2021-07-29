import react, { useState } from 'react';
import './css/mainbody.css';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';

const MainBody=(props)=>{
const [display,newdisplay]=useState(false);
const [curdata,newdata]=useState({
    title:'',
    content:''
});

const inputEvent=(e)=>{
const {name,value}=e.target;

newdata((olddata)=>{
    return{
        ...olddata,
        [name]:value,
    };
});

};
const eventsfire=()=>{
    props.passNote(curdata);
    newdata({
        title:"",
        content:""
    });
}

const show=()=>{
    newdisplay(true);
}
const hide=()=>{
    newdisplay(false);
}
    return(
        <>
        <div className="main_body">
      <form>
     {display?
<input type="text" value={curdata.title} name="title"onChange={inputEvent}placeholder="Title" autoComplete="off"/> :null}
<textarea value={curdata.content} onDoubleClick={hide} onClick={show}name="content" onChange={inputEvent} placeholder="Write a note... " />
{ display?<Button onClick={eventsfire}>
    <AddIcon className="addbtn" />
</Button>:null}
      </form>

      </div>
        </>
    )
}

export default MainBody;