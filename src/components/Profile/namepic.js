import React, { Component} from 'react';
import './profile.css';
import {
    Container,
    Form,
    Button,
    Row,
    Col,
} from 'react-bootstrap';
import Avatar from '@material-ui/core/Avatar';
import AddAPhoto from '@material-ui/icons/AddAPhoto';

export default class Namepic extends Component{
    constructor(props){
        super(props);
        this.state = {
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
            form: {
                firstname: '',
                lastname: '',
                location: 'default',
                description: '',
                image: null,
            },
            isInEditMode: false
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.profile !== prevProps.profile) {
          this.setState({
              form: this.props.profile
          })
        }
    }

    changeEditMode= () =>{
        this.setState({
            isInEditMode: !this.state.isInEditMode
        })
    }

    toBase64 = file => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });

    handleChange = async (event) => {
        const { name, value, type, files } = event.target;
        if(type === 'file') {
            const baseFile = await this.toBase64(files[0])
            this.setState(prevState => ({
                ...prevState,
                form: {
                    ...prevState.form,
                    [name]: baseFile,
                }
            }))
        }
        else {
            this.setState(prevState => ({
                ...prevState,
                form: {
                    ...prevState.form,
                    [name]: value
                }
            }))
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.changeEditMode();
        this.props.setProfile(this.state.form)
    }


    render() {
        const { firstname, lastname, location, description, image } = this.state.form;
        const { locations } = this.state;
        return (this.state.isInEditMode ?
            (
                <Container fluid
                    style={{
                        width: 'calc(100% - 250px)',
                        height: '100vh',
                        marginLeft:'250px',
                        backgroundColor: '#1e1e1e'
                    }}
                    className="p-5"
                >
                    <Row>
                        <Col xs="auto" className="d-flex flex-column align-items-center">
                            <Avatar
                                className="mb-4"
                                style={{
                                    width: '150px',
                                    height: '150px'
                                }}
                                src={image}
                            />
                            <label for="input-image">
                                <AddAPhoto className="upload-btn" />
                                <input type="file"
                                    name="image"
                                    onChange={this.handleChange}
                                    className="d-none"
                                    id="input-image"
                                />
                            </label>
                        </Col>
                        <Col xs="6">
                            <Form onSubmit={this.handleSubmit}>
                                <Form.Group as={Row} controlId="formFirstname">
                                    <Form.Label column xs="2" className="profile-label">
                                        First name
                                    </Form.Label>
                                    <Col>
                                        <Form.Control
                                            type="text"
                                            placeholder="Type firstname"
                                            className="profile-input"
                                            name="firstname"
                                            onChange={this.handleChange}
                                            value={firstname}
                                        />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} controlId="formLastname">
                                    <Form.Label column xs="2" className="profile-label">
                                        Last name
                                    </Form.Label>
                                    <Col>
                                        <Form.Control
                                            type="text"
                                            placeholder="Type lastname"
                                            className="profile-input"
                                            name="lastname"
                                            onChange={this.handleChange}
                                            value={lastname}
                                        />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} controlId="formLocation">
                                    <Form.Label column xs="2" className="profile-label">
                                        Location
                                    </Form.Label>
                                    <Col>
                                        <Form.Control
                                            as="select"
                                            className="profile-select"
                                            name="location"
                                            onChange={this.handleChange}
                                            value={location}
                                        >
                                            <option value="default">Choose...</option>
                                            { locations.map((loc, index) => (
                                                <option key={index} value={loc}>{loc}</option>) 
                                            )}
                                        </Form.Control>
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} controlId="formDescription">
                                    <Form.Label column xs="2" className="profile-label">
                                        Description
                                    </Form.Label>
                                    <Col>
                                        <Form.Control
                                            placeholder="Type description"
                                            className="profile-input"
                                            as="textarea" rows="3"
                                            name="description"
                                            value={description}
                                            onChange={this.handleChange}
                                        />
                                    </Col>
                                </Form.Group>
                                <Form.Group className="text-right">
                                    <Button variant="danger" className="mr-2 px-3 profile-btn-cancel" onClick={this.changeEditMode}>Cancel</Button>
                                    <Button varian="primary" type="submit" className="profile-btn-save px-3">Save</Button>
                                </Form.Group>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            )
            : 
            (
                <Container fluid
                    style={{
                        width: 'calc(100% - 250px)',
                        marginLeft:'250px',
                        backgroundColor: 'black'
                    }}
                    className="p-5"
                >
                   <Row>
                        <Col xs="auto">
                            <Avatar
                                className="mb-4"
                                style={{
                                    width: '150px',
                                    height: '150px'
                                }}
                                src={image}
                            />
                        </Col>
                        <Col style={{color:"white"}}>
                            <Button variant="primary" onClick={this.changeEditMode}>Edit</Button>
                            <h1>
                                {firstname || lastname ? `${firstname} ${lastname}` : 'Enter your name' }
                            </h1>
                            <p>{location === 'default' ? 'No location added' : location}</p>
                            <p>{description || 'Description (in your word)'}</p>
                        </Col>
                    </Row>
                </Container>
            )
        )
     }
}