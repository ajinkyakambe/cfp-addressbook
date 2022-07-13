import axios from 'axios'

class AddressBookService {

    SERVICE_BASE_URL = 'http://localhost:9000/api/addressbookservice'


    /**
     * 
     * req:
     * res: All AddressBook Object
     */
    getAllAddressBook(){
        return axios.get(`${this.SERVICE_BASE_URL}/get/`) 
    }

    /**
     * 
     * req: AddressBook Entity Id
     * res: AddressBook Entity Object
     */
    getAddressById(addressId){
        return axios.get(`${this.SERVICE_BASE_URL}/get/${addressId}`)
    }

    /**
     * 
     * req: AddressBook DTO
     * res: AddressBook Response Object
     */
    createAddressBookEntity(addressBookDTO){
        return axios.post(`${this.SERVICE_BASE_URL}/create`,addressBookDTO)
    }

    /**
     * 
     * req: AddressBook Entity Id, Updated DTO,
     * res: AddressBook Entity Updated Object
     */
    updateAddressBookEntity(addressId,updatedDTO){
        return axios.put(`${this.SERVICE_BASE_URL}/update/${addressId}`,updatedDTO)
    }

    /**
     * 
     * req: AddressBook Entity Id
     * res: 
     */
    deleteAddressBookEntity(addressId){
        return axios.delete(`${this.SERVICE_BASE_URL}/delete/${addressId}`)
    }
    

}

export default new AddressBookService();