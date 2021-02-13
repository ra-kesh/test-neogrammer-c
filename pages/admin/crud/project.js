import Layout from '../../../components/Layout';
import Admin from '../../../components/auth/Admin';
import ProjectCreate from '../../../components/crud/ProjectCreate.js';

const Project = () => {
    return (
        <Layout>
            <Admin>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12 div-add-project">
                            <h2>Add a new interesting project</h2>
                            
                        </div>
                        <div className="col-lg-12">
                            <ProjectCreate />
                        </div>
                    </div>
                </div>
            </Admin>
        </Layout>
    );
};

export default Project;