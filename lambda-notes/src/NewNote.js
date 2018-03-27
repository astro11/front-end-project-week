import React from 'react';
import { Button } from 'reactstrap';
import Buttons  from './Buttons';
import './NewNote.css';
import './Buttons.css';
import { Link } from 'react-router-dom';

class NewNote extends React.Component {
    render() {
      return (
        <div>
          <div className="">        
        <div className="row no-gutters">
          <div className="sideBar col-2">
          <span className="lambdaNotes">Lambda <br /> Notes</span>
          <span className="buttons"><Buttons /></span>
          </div>
            <div className="noteSection col-md-10">
            {/* <Link to="/">
            <button>Back Home</button>
              </Link> */}
            <span className="yourNotes">Create New Note:</span>            
                <form className="Form">
                  <input className="noteTitle" type="text" placeholder="Note Title" /><br />
                  <p><textarea className="noteContent" cols="60" rows="10" placeholder="Note Content"></textarea></p>
                  <Link to="/Save"><Button className="BTN btn btn-info" type="submit">Save</Button></Link>
              </form>  
            </div>  
        </div>
      </div>          
                
        </div>
      );
    }
  }
  
  export default NewNote;