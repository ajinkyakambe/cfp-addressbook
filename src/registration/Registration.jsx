import {useForm} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import {useNavigate, Link} from 'react-router-dom';
import UserRegistrationService from '../Components/Services/UserRegistrationService';
import {toast} from 'react-toastify'

export {Registration}



function Registration(){

    //Global vars
    let navigate = useNavigate();

    // Form validation rules
    const formValidationSchema = Yup.object().shape({
        userName: Yup.string().required('username is required'),
        userPassword: Yup.string().min(6,'Password must be at least 6 characters.').required('Password is required'),
        email: Yup.string().email('Email is invalid').required('Email is required')
    });
    const formOptions = {resolver: yupResolver(formValidationSchema)};

    // useForm() hooks functions to build the form object
    const {register,handleSubmit,reset,formState } = useForm(formOptions);
    const {errors} = formState;

    function onSubmit(data){
        // display form data on successfully
        // alert('SUCCESS' + JSON.stringify(data,null,4));
        UserRegistrationService.registerUser(data)
        .then((response) => {
            console.log(response);
            toast.success("User added Sucessfully")
            navigate("/login")
        })
        
    }

    return(
        <div className="col-md-6 offset-md-3 mt-5">
            <div className="alert alert-info">
               If you are already registered, <Link to="/login">Login Here</Link>
            </div>
          <div className="card ">
                <h5 className="card-header">Address Book User Registration</h5>
                <div className="card-body">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-row">                        
                            <div className="form-group col">
                                <label>userName</label>
                                <input name="userName" type="text" {...register('userName')} className={`form-control ${errors.userName ? 'is-invalid' : ''}`} />
                                <div className="invalid-feedback">{errors.userName?.message}</div>
                            </div>
                            <div className="form-group col">
                                <label>userPassword</label>
                                <input name="userPassword" type="text" {...register('userPassword')} className={`form-control ${errors.userPassword ? 'is-invalid' : ''}`} />
                                <div className="invalid-feedback">{errors.userPassword?.message}</div>
                            </div>
                        </div>                 
                        <div className="form-row">
                            <div className="form-group col">
                                <label>Email</label>
                                <input name="email" type="email" {...register('email')} className={`form-control ${errors.email ? 'is-invalid' : ''}`} />
                                <div className="invalid-feedback">{errors.email?.message}</div>
                            </div>                       
                        </div>  
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary mr-1">Register</button>
                            <button type="button" onClick={() => reset()} className="btn btn-secondary">Reset</button>
                        </div>                 
                    </form>
                </div>
            </div>
       
       
      </div>
    )


}