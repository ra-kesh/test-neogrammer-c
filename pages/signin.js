import Layout from '../components/Layout';
import { withRouter } from 'next/router';
import SigninComponent from '../components/auth/SigninComponent';
import Link from 'next/link';



const Signin = ({ router }) => {
    const showRedirectMessage = () => {
        if (router.query.message) {
            return <div className="alert alert-danger">{router.query.message}</div>;
        } else {
            return;
        }
    };
    return (
        <Layout>
            

            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6 ">{showRedirectMessage()}</div>
                </div>
               
                
                <div className="row login-modals">
                    <div className="col-lg-5 login-modal">
                        <SigninComponent />
                        <div className="link-signup">
                            <Link href='/signup' >
                            <h6>don't have an account ? SignUp Here</h6>
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-5 login-modal">
                       <h1 className="login-desc">Namaste , NeoGrammer :)</h1>
                    </div>
                </div>
              
                  
            </div>
        </Layout>
        
    )
};

export default withRouter(Signin);


