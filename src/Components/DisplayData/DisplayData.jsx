import React, {useState} from 'react';
import deleteIcon from "../../Assets/icons/delete-black-18dp.svg";
import editIcon from "../../Assets/icons/create-black-18dp.svg";
import './displayData.scss';
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import AddressBookService from '../Services/AddressBookService'

export default function DisplayData(props) {

   
    /**
    |--------------------------------------------------
    | Update function with new Router V6
    |--------------------------------------------------
    */
    let navigate = useNavigate();
    const updateAddressEntry =(addressBookId)=>{
        navigate(`/add-address/${addressBookId}`)
    }

    /**
    |--------------------------------------------------
    | Delete function for the dispaly component
    |--------------------------------------------------
    */
    const deleteAddressEntry =(addressBookId)=>{
        AddressBookService.deleteAddressBookEntity(addressBookId)
        .then(response=>{
            let answer = window.confirm("Do you wish to continue ?",response);
            if(answer === true){
                toast("Sucessfully deleted the address book entry.",addressBookId)
                setTimeout(function() {
                window.location.reload();
                props.getAddressBookAllData();
                }, 2000);
                
                
            }
            else{
                window.location.reload();
            }
        })
        .catch((error)=>{
            toast("Failed to delete the address book entry")
        })
    }



  return (
    <>

  
    <table id="table-display" className="table">
          <thead>
            <tr>
              <th>SL No</th>             
              <th>Full Name</th>
              <th>Address</th>
              <th>City</th>
              <th>State</th>             
              <th>Phone Number</th>
              <th>Zip Code</th>
              <th> {/* <th>Actions</th> */}</th>
              
            </tr>
          </thead>
          <tbody>

         { 
         props.passedAddressBookData.map((addressBookEntry,i) => ( 
             <tr key={addressBookEntry.personId}>
             <td>{i+1}</td>
             <td>{addressBookEntry.name}</td>
             <td>{addressBookEntry.address}</td>
             <td>{addressBookEntry.city}</td>             
             <td>{addressBookEntry.state}</td>
             <td>{addressBookEntry.phoneNumber}</td>
             <td>{addressBookEntry.zipCode}</td>
             
             <td>
             <img
               name={addressBookEntry.personId}
               src={deleteIcon}
               alt="delete"
               onClick={() => deleteAddressEntry(addressBookEntry.personId)}
             />
             <img
               name={addressBookEntry.personId}
               src={editIcon}
               alt="edit"
               onClick={() => updateAddressEntry(addressBookEntry.personId)}
             />
           </td>
           </tr>
         ))
        }
          
          </tbody>
        </table>
          
    </>
  )
}
