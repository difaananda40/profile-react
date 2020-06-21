import React, { Component} from 'react';
import Sidebar from '../sidebar';
import Namepic from './namepic';
import Business from '../Profile/businessexp';
import Preference from '../Profile/preference';
import Techskills from '../Profile/techskills';

export default class Profile extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <Sidebar/>
                <Namepic/>
                <Business/>
                <Preference/>
                <Techskills/>
            </div>
        )
    }

}