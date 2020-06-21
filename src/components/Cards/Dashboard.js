import React, { Component} from 'react';
import Sidebar from '../sidebar';

export default class Dashboard extends Component{
    
    render(){
        return(
            <div>
                <Sidebar/>
                Dashboard tab
            </div>
        )
    }    

}