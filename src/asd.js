import React from 'react';
import "./prof.scss";
import axios from 'axios';
import { Icon } from 'semantic-ui-react'
import {
    Button, Checkbox, Form, Grid,
    Message,
    Segment,
    Label,
    Input,

    Header,
} from 'semantic-ui-react'
import Pikachu from './components/layout/pikachu';
import Logo from './components/layout/partials/Logo';
class Proflay extends React.Component {

    state = {
        parentuser: '',
        Age: '',
        sex: '',
        location: '',
        image1: null,
        image2: null,
        image3: null,
        datad: [],
    };

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    };

    handleImageChange = (e) => {
        this.setState({
            [e.target.id]: e.target.files[0]

        })
    };

    componentDidMount() {

        axios("https://3choices.in/profile/profile/")
            .then(res => {

                this.setState({ datad: res.data.filter(({ parent_user }) => parent_user === localStorage.getItem("username")) });

            })
            .catch(err => {
                this.setState({ error: err });
            });
    }

    handleSubmit = (e) => {
        e.preventDefault();

        let form_data = new FormData();
        form_data.append('parent_user', localStorage.getItem("username"));
        form_data.append('Age', this.state.Age);
        form_data.append('sex', this.state.sex);
        form_data.append('location', this.state.location);
        form_data.append('image1', this.state.image1, this.state.image1.name);
        form_data.append('image2', this.state.image2, this.state.image2.name);
        form_data.append('image3', this.state.image3, this.state.image3.name);

        let url = 'https://3choices.in/profile/profile/';
        axios.put(url + localStorage.getItem("df") + "/", form_data, {
            headers: {
                'content-type': 'multipart/form-data'
            }

        })


    }


    render() {
        const { datad } = this.state;
        datad.map((c) => {
            localStorage.setItem("df", c.id);

        })


        return (
            <>
                <Logo />
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>



                <Grid
                    textAlign="center"
                    style={{ height: "auto" }}
                    verticalAlign="middle"


                >
                    <Grid.Column style={{ maxWidth: 450 }}>
                        <Header as="h2" color="violet" textAlign="center"><h1>Edit Your Details</h1></Header>
                        <React.Fragment>

                            <Segment stacked style={{
                                backgroundColor: "#151719"
                            }} >
                                <Form onSubmit={this.handleSubmit}>

                                    <Form.Field>
                                        <Label color="violet" for="age">Age</Label>
                                        <Input className="form-control" type="number" name="age" id="Age" placeholder="" value={this.state.Age} onChange={this.handleChange} />
                                    </Form.Field>

                                    <Form.Field>
                                        <Label color="violet" for="sex">Sex</Label >
                                        <Input className="form-control" type="text" name="sex" id="sex" placeholder="" value={this.state.sex} onChange={this.handleChange} />
                                    </Form.Field>
                                    <Form.Field>
                                        <Label color="violet" for="location">Location</Label>
                                        <Input className="form-control" type="text" name="loc" id="location" placeholder="" value={this.state.location} onChange={this.handleChange} required />
                                    </Form.Field>


                                    <Form.Field>
                                    </Form.Field>
                                    <Form.Field>
                                        <Label color="violet" for="image1" >Profile </Label>
                                        <br></br>
                                        <br></br>
                                        <Input type="file" className="imag" id="image1" accept="image/png, image/jpeg" onChange={this.handleImageChange} />

                                    </Form.Field>
                                    <Form.Field>
                                        <Label color="violet" for="image2" > image </Label >
                                        <br></br>
                                        <br></br>
                                        <Input type="file" id="image2" className="imag" accept="image/png, image/jpeg" onChange={this.handleImageChange} />

                                    </Form.Field>
                                    <Form.Field>
                                        <Label color="violet" for="image3" >image </Label >
                                        <br></br>
                                        <br></br>

                                        <Input type="file" id="image3" className="imag" accept="image/png, image/jpeg" onChange={this.handleImageChange} />

                                    </Form.Field>



                                    <Button color="violet" type='submit'>Submit</Button>

                                </Form>
                            </Segment>



                        </React.Fragment>
                    </Grid.Column>
                </Grid>
            </>
        )
    }
}













export default Proflay