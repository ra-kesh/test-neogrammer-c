import Layout from '../../components/Layout';
import Admin from '../../components/auth/Admin';
import Link from 'next/link';
import { isAuth } from '../../actions/auth';

const AdminIndex = () => {
    return (
        <Layout>
            <Admin>
            <div className="container-fluid">
                    <div className="row">                 
                        <div className="col-lg-12 div-dashboard">
                             {isAuth() && isAuth().role === 1 && (
                                 <>
                            <h2>{`welcome to your dashboard , ${isAuth().name}`}</h2>
                            <h4 className="mt-5 mb-5">choose whatever you want to do..</h4>
                            </>
                            )}
                           
                        </div>
                        <div className="col-lg-12 mt-5">
                            <ul class="list-group-card">
                               <a href="/admin/crud/project">
                                    <li className="list-card">
                                            Add New Projects
                                    </li>
                                </a>
                                <Link href="/admin/crud/projects">
                                    <li className="list-card">   
                                       Manage All the Projects
                                    </li>
                                </Link>
                                <Link href="/admin/crud/category-tag">
                                    <li className="list-card">
                                        <a>Manage Categories and Tags</a>
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
            </Admin>
        </Layout>
    );
};

export default AdminIndex;