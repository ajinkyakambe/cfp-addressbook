import React,{ useState,useEffect } from 'react'
import CancelButton from '../../Assets/icons/cancel.png';
import Header from '../../Components/Layout/Header/header';
import './addressBookForm.scss';
import {Link,useParams,useNavigate} from 'react-router-dom';
import AddressBookService from '../../Components/Services/AddressBookService'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const AddressBookForm = (props) =>{


  let navigate = useNavigate();
   // Get the addressEntityId param from the URL.
   let { addressEntityId } = useParams();

  const [contact, setContact] = useState({
    allState :[ "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jammu and Kashmir", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttarakhand", "Uttar Pradesh", "West Bengal", "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli", "Daman and Diu", "Delhi", "Lakshadweep", "Puducherry"],
    allCity: ["Visakhapatnam","Vijayawada","Guntur","Nellore","Kurnool","Rajahmundry","Kakinada","Tirupati","Anantapur","Kadapa","Vizianagaram","Eluru","Ongole","Nandyal","Machilipatnam","Adoni","Tenali","Siwan","Kishanganj","Jamalpur","Buxar","Jehanabad","Aurangabad","Lakhisarai","Nawada","Jamui", "Mangrol","Viramgam","Modasa","Palitana","Petlad","Kapadvanj","Sihor","Bharatpur","Pali","Barmer","Sikar","Tonk","Sadulpur","Sawai Madhopur","Nagaur","Makrana","Sujangarh" ,"Kolkata","Siliguri","Asansol","Raghunathganj","Kharagpur","Naihati","English Bazar","Baharampur"],
    personId:"",
    fullName: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    isUpdate: false
    
  });

  const handleInput = (event) =>{
    const name = event.target.name;
    const value = event.target.value;
    setContact({...contact,[name]:value})
   
  }

  useEffect(()=>{
    if(addressEntityId){
      getContactDataById(addressEntityId);
    }
  },[addressEntityId])

  const getContactDataById = (addressEntityId) =>{   
    AddressBookService.getAddressById(addressEntityId).then((response)=>{
      console.log(response)
      setContact({...contact,...response,
        personId:response.data.data.personId,
        fullName:response.data.data.name,
        phone:response.data.data.phoneNumber,
        address:response.data.data.address,
        city:response.data.data.city,
        state:response.data.data.state,
        zip:response.data.data.zipCode,
        isUpdate:true
      })
    })
  }


  function saveData(event) {
    event.preventDefault();
    console.log("Save method is getting called");
      let addressEntry = {
      name: contact.fullName,
      phoneNumber: contact.phone,
      address: contact.address,
      city: contact.city,
      state: contact.state,
      zipCode: contact.zip,
      }

    /**
     * Here will check if the isUpdate property of contact object is set.
     * If set we will call update method or else we will call create method.
     */  
    if(contact.isUpdate){
      AddressBookService
      .updateAddressBookEntity(addressEntityId,addressEntry)
      .then((response)=>{
        toast.success("Updated successfully")
        navigate("/abhome");
      })
      .catch((error)=>{
        toast.error("Error updating address",error)
      })
    } else {
      AddressBookService
      .createAddressBookEntity(addressEntry)
      .then((response)=>{
        toast.success(" Entry added successfully")
        console.log(response);
        navigate("/abhome");
      })
      .catch((error)=>{
        toast.error("Error creating address",error)
      })
    }
    
   }

   const resetForm = (event) =>{
    event.preventDefault()
    setContact({
      ...contact,personId:"",
      fullName: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      zip: "", 
      
    })
  }

  
    return (
      <>
      <Header/>      
    
    <div className="form-content">
        <div className="form-head">
            <span> PERSON ADDRESS FORM </span>
            <span id="img"><Link to="/abhome"><img src={CancelButton} height="20" width="20" alt="" /></Link>
            </span>
        </div>
        
         <form action="#" className="form" onSubmit={saveData} onReset={resetForm}>
          <div className="form-head-content">
            <label className="label text" htmlFor="fullName">Full Name</label>
            <div className="row-content">
                <input className="input" type="text" id="fullName" name="fullName" placeholder="Enter Name" value={contact.fullName}
                onChange={handleInput}
                required />                
            </div>

            <label className="label text" htmlFor="phone">Phone Number</label>
            <div className="row-content">
                <input className="input" type="tel" id="phone" name="phone" placeholder="Enter Phone Number" value={contact.phone}
              onChange={handleInput}
              required />
               
            </div>

            <label className="label text" htmlFor="address">Address</label>
            <div className="row-content">
                <textarea className="input" name="address" id="address" rows="4" placeholder="Enter Address" defaultValue={contact.address}
              onChange={handleInput}
              required></textarea>
               
            </div>

            <div className="row-content">
                <div className="input-content">
                    <label className="label text" htmlFor="city">City</label>
                    <div className="row-content">
                        <select className="input" name="city" id="city" value={contact.city}
                onChange={handleInput}
                required>
                            <option value="">City</option>
                            {
                              contact.allCity.map((city) => {
                                return  <option value={city}>{city}</option> 
                               })
                            }
                           
                            
                        </select>
                    </div>
                </div>
                <div className="input-content">
                    <label className="label text" htmlFor="state">State</label>
                    <div className="row-content">
                        <select className="input" name="state" id="state" value={contact.state}
                onChange={handleInput}
                required>
                            <option value="">State</option>
                            {
                            contact.allState.map((state) => { 
                              /* ...Calling the state var */
                             return <option value={state}>{state}</option>
                             //Array.map should return the value.                            
                            })
                            }                           
                        </select>
                    </div>
                </div>
                <div className="input-content">
                    <label className="label text" htmlFor="zip">ZipCode</label>
                    <div className="row-content">
                        <input className="input" type="number" id="zip" name="zip" placeholder="Enter Zip Code" value={contact.zip}
                onChange={handleInput}
                required />
                    </div>
                </div>
            </div>
            <div className="buttonParent">
                <div className="add-reset">
                    <button type="submit" className="button addButton" id="addButton"> {contact.isUpdate?"Update":"Add"}</button>
                    <button type="reset" className="resetButton button" id="resetButton">Reset</button>
                </div>
            </div>
            </div>
        </form>
    </div>
   
      </>
    )
 
}

export default AddressBookForm;
