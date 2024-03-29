import axios from 'axios'
import { tokenHelper } from '_helpers';

class AddressBookService {
    /**
    |--------------------------------------------------
    | Constructor with axios instance
    |--------------------------------------------------
    */
    constructor(){            
        this.new_instance = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/api/addressbookservice`,
            timeout: 5000,
            headers: {'token': tokenHelper.token}
          });        
    }

      
    /**
     * 
     * req:
     * res: All AddressBook Object
     */
    getAllAddressBooks(){
        // Returning the base instance of axios with method and url data.       
        return this.new_instance({
            method: 'get',
            url: '/get/'
          })
    }

    /**
     * 
     * req: AddressBook Entity Id
     * res: AddressBook Entity Object
     */
    getAddressById(addressId){
        return this.new_instance({
            method: 'get',
            url: `/get/${addressId}`
          })
      
    }

    /**
     * 
     * req: AddressBook DTO
     * res: AddressBook Response Object
     */
    createAddressBookEntity(addressBookDTO){
        return this.new_instance({
            method: 'post',
            url: `/create`,
            data:addressBookDTO
          })
       
    }

    /**
     * 
     * req: AddressBook Entity Id, Updated DTO,
     * res: AddressBook Entity Updated Object
     */
    updateAddressBookEntity(addressId,updatedDTO){
        return this.new_instance({
            method: 'put',
            url: `/update/${addressId}`,
            data:updatedDTO
          })
       
    }

    /**
     * 
     * req: AddressBook Entity Id
     * res: 
     */
    deleteAddressBookEntity(addressId){
        return this.new_instance({
            method: 'delete',
            url: `/delete/${addressId}`
          })
        
    }
    

}

export default new AddressBookService();