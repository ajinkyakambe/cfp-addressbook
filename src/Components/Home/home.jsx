import React,{ Component } from 'react'
import Header from '../../Components/Layout/Header/header'
import './home.scss'
import AddIcon from '../../Assets/icons/add-24px.svg'
import {Link} from 'react-router-dom'
import AddressBookService from '../Services/AddressBookService'
import { ToastContainer,toast } from 'react-toastify';

import Displaydata from '../DisplayData/displayData'

  export default class Home extends Component {


  /**
   * Required constructor for class
   */
  constructor(props) {
    super(props)
    this.state = {
      allAddressBookArray:[]
    };
  }

  /**
  |--------------------------------------------------
  | After component is mounted we are calling the axios method to get data to display.
  |--------------------------------------------------
  */


  componentDidMount() { 
    this.getAddressBookAllData();
   }

 

   /** getAllAddressBooks
   |--------------------------------------------------
   | Here we are creating getAddressBookAllData() method which will be calling AddressBookService implementing axios.
   |--------------------------------------------------
   */
   
   getAddressBookAllData=()=>{
    AddressBookService.getAllAddressBooks()
    .then((response)=>{
      console.log("Got all employees")
      console.log(response)
      this.setState({allAddressBookArray : response.data.data});
    })
    .catch((error)=>{
      toast.error("Error with api service", error)
      console.log(error)
    })
   }



  render() {
    return (
      <>
      <Header />
      <ToastContainer />

      <div className="main-content">
      <div className="head-content">
          <div className="person-detail-text">
              Person Details
          </div>
          <Link to="/add-address" className="add-button">
              <img src={AddIcon} alt="" />Add Person </Link>
      </div>
      <div className="table-main">
            {/* calling the Displaydata Component */}        
          <Displaydata passedAddressBookData={this.state.allAddressBookArray} 
                        getAddressBookAllData={this.getAddressBookAllData}
          /> 
      </div>
      </div>
      </>

    )
  }
}

