import Layout from '../../../components/Layout';
import Admin from '../../../components/auth/Admin';
import ProjectUpdate from '../../../components/crud/ProjectUpdate';


const Project = () => {
    return (
        <Layout>
            <Admin>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12 div-add-project">
                            <h2>Update an existing blog</h2>
                        </div>
                        <div className="col-lg-12">
                            <ProjectUpdate />
                        </div>
                    </div>
                </div>
            </Admin>
        </Layout>
    );
};

export default Project;