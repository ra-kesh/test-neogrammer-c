import Layout from '../../../components/Layout';
import Private from '../../../components/auth/Private';
import ProjectDetail from '../../../components/crud/ProjectDetail';
import { isAuth } from '../../../actions/auth';

const Project = () => {
    const username = isAuth() && isAuth().username;
    return (
        <Layout>
            <Private>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 div-add-project">
                            <h2>Manage your projects</h2>
                        </div>
                        <div className="col-md-12">
                            <ProjectDetail username={username} />
                        </div>
                    </div>
                </div>
            </Private>
        </Layout>
    );
};

export default Project;