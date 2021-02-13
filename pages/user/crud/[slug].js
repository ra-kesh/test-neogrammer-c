import Layout from '../../../components/Layout';
import Private from '../../../components/auth/Private';
import ProjectUpdate from '../../../components/crud/ProjectUpdate';

const Project = () => {
    return (
        <Layout>
            <Private>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12 div-add-project">
                            <h2>Update blog</h2>
                        </div>
                        <div className="col-md-12">
                            <ProjectUpdate />
                        </div>
                    </div>
                </div>
            </Private>
        </Layout>
    );
};

export default Project;