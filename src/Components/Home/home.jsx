import React from 'react'
import Header from '../../Components/Layout/Header/header'
import './home.scss'
import AddIcon from '../../Assets/icons/add-24px.svg'
import {Link} from 'react-router-dom'

export default function Home() {
  return (
    <>
    <Header />

    <div className="main-content">
    <div className="head-content">
        <div className="person-detail-text">
            Person Details
        </div>
        <Link to="/add-address" className="add-button">
            <img src={AddIcon} alt="" />Add Person </Link>
    </div>
    <div className="table-main">
        <table id="display" className="table">
        <tbody><tr><th>Full Name</th><th>Address</th><th>City</th><th>State</th><th>Zip Code</th><th>Phone Number</th><th>Actions</th></tr></tbody>
        </table>
    </div>
    </div>
    </>

  )
}
