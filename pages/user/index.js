import Layout from '../../components/Layout';
import Private from '../../components/auth/Private';
import Link from 'next/link';
import { isAuth } from '../../actions/auth';

const UserIndex = () => {
    return (
        <Layout>
            <Private>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12 div-dashboard">
                             {isAuth() && isAuth().role === 0 && (
                                 <>
                            <h2>{`welcome to your dashboard , ${isAuth().name}`}</h2>
                            <h4 className="mt-5 mb-5">choose whatever you want to do..</h4>
                            </>
                            )}
                           
                        </div>
                      
                        <div className="col-lg-12 mt-5">
                            <ul class="list-group-card">
                            <a href="/user/crud/project">
                                    <li className="list-card">
                                       Add New Projects
                                    </li>
                                </a>
                                <Link href="/user/crud/projects">
                                    <li className="list-card">   
                                       Manage your Projects
                                    </li>
                                </Link>
                               
                               
                                <Link href="/user/update">
                                    <li className="list-card">
                                        <a>Manage Your Profile</a>
                                    </li>
                                </Link>


                               
                            </ul>
                        </div>
                       
                    </div>
                </div>
            </Private>
        </Layout>
    );
};

export default UserIndex;