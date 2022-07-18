import axios from 'axios';

class UserRegistrationService {
    constructor(){
        this.axios_instance = axios.create({
            baseURL:`${process.env.REACT_APP_API_URL}/api/userregistration`,
            timeout:5000
        });
    }

    /**
     * 
     * req: userRegistration DTO
     * res: UserRegistration Response Object
     */
    registerUser(userRegistrationDTO){
        return this.axios_instance({
            method:'post',
            url:'/register',
            data:userRegistrationDTO
        })
    }
}

export default new UserRegistrationService();