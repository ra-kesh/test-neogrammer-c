import Layout from '../components/Layout';
import SignupComponent from '../components/auth/SignupComponent';



const Signup= () => {
    
    return (
        <Layout>
            <div className="container-fluid">
               
                <div className="row">
                    {/* <div className="col-md-6 offset-md-3">{showRedirectMessage()}</div> */}
                </div>

                <div className="row login-modals">
                   <div className="col-lg-5 login-modal">
                        <SignupComponent />
                        {/* <div className="link-signup">
                            <Link href='/signup' >
                            <h6>don't have an account ? SignUp Here</h6>
                            </Link>
                        </div> */}
                    </div>
                    <div className="col-lg-5 login-modal">
                       <h1 className="login-desc">Namaste , NeoGrammer :)</h1>
                    </div>
                   
                   
                </div>
              
                  
            </div>
        </Layout>
        
    )
};

export default Signup ;


