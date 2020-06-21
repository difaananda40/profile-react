import React, { Component} from 'react' ;
import {Route} from 'react-router-dom';
import { Switch, BrowserRouter, Redirect } from 'react-router-dom';
import Sidebar from './components/sidebar';
import Profile from './components/Profile/Profile';
import Dashboard from './components/Cards/Dashboard';
import ResumeBuilder from './components/Cards/ResumeBuilder';
import Community from './components/Cards/Community';
import Resources from './components/Cards/Resources';
import FAQ from './components/Cards/FAQ';
import Contact from './components/Cards/Contact';
import Referral from './components/Cards/Referral';

class Main extends Component{
    render(){
        return(
            <BrowserRouter>
            <div>
                <Route exact path='/'><Profile/></Route>
                <Route path='/sidebar'><Sidebar/></Route>
                <Route path='/profile'> <Profile/></Route>
                <Route path='/dashboard'><Dashboard/></Route>
                <Route path='/resumebuilder'><ResumeBuilder/></Route> 
                <Route path='/community'><Community/></Route>
                <Route path='/resources'><Resources/></Route>
                <Route path='/faq'> <FAQ/></Route>
                <Route path='/contact'> <Contact/></Route>
                <Route path='/referral'><Referral/></Route>
            </div>
            </BrowserRouter>
        )
    }
}

export default Main; 