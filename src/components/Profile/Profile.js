import React, { Component} from 'react';
import Sidebar from '../sidebar';
import Namepic from './namepic';
import Business from '../Profile/businessexp';
import Preference from '../Profile/preference';
import Techskills from '../Profile/techskills';

export default class Profile extends Component{
    constructor(props){
        super(props);
        this.state = {
            profile: {
                firstname: '',
                lastname: '',
                location: 'default',
                description: '',
                image: null,
            },
        };
    }

    componentDidMount() {
        this.fetchProfile();
    }

    fetchProfile = () => {
        const profile = JSON.parse(localStorage.getItem('profile'))
        if(profile) {
            this.setState({
                profile
            })
        }
    }

    setProfile = async (data) => {
        localStorage.setItem('profile', JSON.stringify(data));
        this.setState({
            profile: data
        })
    }

    render() {
        const { profile } = this.state;
        return(
            <div>
                <Sidebar
                    profile={profile}
                    setProfile={(data) => this.setProfile(data)}
                />
                <Namepic
                    profile={profile}
                    setProfile={(data) => this.setProfile(data)}
                />
                <Business/>
                <Preference/>
                <Techskills/>
            </div>
        )
    }

}