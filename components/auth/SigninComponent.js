import { useState , useEffect} from 'react';
import { signin ,authenticate, isAuth } from '../../actions/auth';
import Router from 'next/router'

const SigninComponent = () => {
    const [values, setValues] = useState({
        email: '',
        password: '',
        error: '',
        loading: false,
        message: '',
        showForm: true
    });

    const {  email, password, error, loading, message, showForm } = values;

    useEffect (()=>{
        isAuth()&&Router.push('/')
    },[])

    const handleSubmit = e => {
        e.preventDefault();
        setValues({ ...values, loading: true, error: false });
        const user = { email, password };

        signin(user).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error, loading: false });
            } else {
               //   to be done saving use token to cookie and local storage and authenticate
               authenticate(data,()=>{

                    if (isAuth()&&isAuth().role ===1){
                        Router.push('/admin')
                    }else{
                        Router.push('/user')
                    }

               })
            }
        });
    };

    const handleChange = name => e => {
        setValues({ ...values, error: false, [name]: e.target.value });
    };

    const showLoading = () => (loading ? <div className="alert alert-info">Loading...</div> : '');
    const showError = () => (error ? <div className="alert alert-danger">{error}</div> : '');
    const showMessage = () => (message ? <div className="alert alert-info">{message}</div> : '');

    const signinForm = () => {
        return (
            <form onSubmit={handleSubmit} className="login-form">

                <h2 className="text-center pt-4 pb-4 " color="black">Build neoG</h2>     
              
                <div className="form-group-signin">
                    <input
                        value={email}
                        onChange={handleChange('email')}
                        type="email"
                        className="form-control"
                        placeholder="Email"
                    />
                </div>

                <div className="form-group-signin">
                    <input
                        value={password}
                        onChange={handleChange('password')}
                        type="password"
                        className="form-control"
                        placeholder="Password"
                    />
                </div>

                <div className="div-btn">
                    <button className="btn btn-primary">Signin</button>
                </div>
                
            </form>
        );
    };

    return (
        <React.Fragment>
            {showError()}
            {showLoading()}
            {showMessage()}
            {showForm && signinForm()}
        </React.Fragment>
    );
};

export default SigninComponent;
