import React, { Component} from 'react';
import './profile.css';
//import Avatar from '@material-ui/core/Avatar';
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { Dropdown } from 'semantic-ui-react';
import CameraAltOutlinedIcon from '@material-ui/icons/CameraAltOutlined';
import { DropzoneArea, DropzoneDialog } from 'material-ui-dropzone';
import { CardActions } from '@material-ui/core';

export default class Namepic extends Component{
    constructor(props){
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            location: '',
            locations: [
                'Boston',
                'Chicago',
                'Detroit',
                'Seattle',
                'San Francisco',
                'New York',
                'Miami',
                'Los Angeles',
            ],
            isInEditMode: false
        }
    }

    changeEditMode=()=>{
        this.setState({
            isInEditMode: !this.state.isInEditMode
        })
    }


    render(){  
        return (this.state.isInEditMode ?
            (
                <div className="container" style={{width:"100%", marginLeft:'250px'}}>
                    <div className="row">
                    <div >
                        <Avatar ref={this.uploadedImage } style={{marginLeft:"-200px", marginTop:"60px", marginRight:"100px", height:'100px',width:'100px'}}/> 
                        <input type="file" accept="image/*" onChange={this.handleImageUpload} multiple = {false} style={{marginLeft:'-250px', marginRight:'-15px'}}/>
                    </div>
                    <div className="col-md-12" >
                        <Form style={{marginLeft:'0px'}}>
                            <Form.Group as={Row}>
                                <Form.Label column sm={2}>
                                First name
                                </Form.Label>
                                <Col sm={5}>
                                <Form.Control ref ="textInput" type="text" id="outlined-basic" placeholder="First name" label="First Name" value={this.state.firstname} ref="theTextInput" variant="outlined" style={{'background-color':"#181818", color:"white"}} />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label column sm={2}>
                                Last name
                                </Form.Label>
                                <Col sm={5}>
                                <Form.Control type="text" id="outlined-basic" label="Last Name" placeholder="Last name"  value="" variant="outlined" style={{'background-color':"#181818", color:"white"}} />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label column sm={2}>Location</Form.Label>
                                <Col sm={5}>
                                <Form.Control as="select" defaultValue="Choose" id="outlined-basic" label="Location" value="" variant="outlined" style={{'background-color':"#181818", color:"white"}}>
                                <option>Choose</option>
                                <option>Boston</option>
                                <option>Chicago</option>
                                <option>Detroit</option>
                                <option>Seattle</option>
                                <option>San Francisco</option>
                                <option>New York</option>
                                <option>Miami</option>
                                <option>Los Angeles</option>
                                </Form.Control> 
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label column sm={2}>
                                Description
                                </Form.Label>
                                <Col sm={5}>
                                <Form.Control type="text" id="outlined-basic" label="Type description" placeholder="Type description" value="" variant="outlined" style={{'background-color':"#181818", color:"white"}} />
                                </Col>
                            </Form.Group>
                            <div className="buttons">
                                <Button variant="outline-danger" style={{marginLeft:'-100px'}} onClick={this.changeEditMode}>Cancel</Button>
                                <Button variant="primary" style={{marginTop:'-60px'}}>Save</Button>
                            </div>
                        </Form>
                    </div>
                   </div>
                </div>
            )
            : 
            (
                <div className="container" style= {{width:"100", marginLeft:'250px'}}>
                   <div className="row">
                       <div style={{color:"white"}}>
                        <Button variant="primary" onClick={this.changeEditMode}>Edit</Button>
                    <h1><p>{this.state.firstname} {this.state.firstname}</p></h1>
                    <p>{this.state.location}</p>
                    <p>{this.state.discription}</p>
                    </div>
                    </div>
                </div>
            )
        )
     }
}