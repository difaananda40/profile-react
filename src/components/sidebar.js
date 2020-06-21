import React, { Component} from 'react';
import {Link} from 'react-router-dom';
import './sidebar.css';
import styled from 'styled-components';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PersonOutlineRoundedIcon from '@material-ui/icons/PersonOutlineRounded';
import { TiThLargeOutline } from "react-icons/ti";
import InsertDriveFileOutlinedIcon from '@material-ui/icons/InsertDriveFileOutlined';
import FilterNoneOutlinedIcon from '@material-ui/icons/FilterNoneOutlined';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import AccountBalanceWalletOutlinedIcon from '@material-ui/icons/AccountBalanceWalletOutlined';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import Avatar from '@material-ui/core/Avatar';

    export default class Siderbar extends Component{
        constructor(){
            super();
            this.state={
                displayMenu:true
            };

            this.showDropdown=this.showDropdown.bind(this);
            this.hideDropdown=this.hideDropdown.bind(this);
    };
    showDropdown(e){
        e.preventDefault();
        this.setState({
            displayMenu: true
        },()=>{
            document.addEventListener('click',this.hideDropdown);
        })
    }
    hideDropdown(){
        this.setState({
            displayMenu:false},()=>{
                document.removeEventListener('click',this.hideDropdown); 
        });
    }
        render(){
            return(
            <div className="sidebar">
                <div className="dropdown" onClick={this.showDropdown}>
                    <Avatar alt="{this.state.firstname} {this.state.lastname}" variant="circle" />
                    <div className="Icons">
                        <ArrowDropDownIcon style={{color:'white'}}/>
                        <MailOutlineIcon style={{color:'white'}}/>
                    </div>
                </div>
                {this.state.displayMenu?(
                <div>
                    <Link to='/profile'><PersonOutlineRoundedIcon/><i/>Profile</Link>
                    <Link to='/dashboard'><TiThLargeOutline/><i/> Dashboard</Link>
                    <Link to='/resumebuilder'><InsertDriveFileOutlinedIcon /><i/>ResumeBuilder</Link>
                    <Link to='/community'><PeopleAltOutlinedIcon /><i/>Community</Link>
                    <Link to='/resources'><FilterNoneOutlinedIcon /><i/>Resources</Link>
                    <Link to='/faq'><HelpOutlineOutlinedIcon /><i/>FAQ</Link>
                    <Link to='/contact'><ChatBubbleOutlineIcon /><i/>Contact</Link>
                    <Link to='/referral'><AccountBalanceWalletOutlinedIcon /><i/>Referral program</Link>
                </div>
                ):
                (
                    null
                )
        }
            </div>
        )
    }
}