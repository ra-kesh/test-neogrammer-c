import Layout from '../../../components/Layout';
import Admin from '../../../components/auth/Admin';
import ProjectDetail from '../../../components/crud/ProjectDetail';

const Project = () => {
   
    return (
        <Layout>
            <Admin>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12  div-manage-project mt-5 mb-5">
                            <h2>Manage All the Projects</h2>
                        </div>
                        <div className="col-md-12">
                            <ProjectDetail />
                        </div>
                    </div>
                </div>
            </Admin>
        </Layout>
    );
};

export default Project;