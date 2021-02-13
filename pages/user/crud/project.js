import Layout from '../../../components/Layout';
import Private from '../../../components/auth/Private';
import ProjectCreate from '../../../components/crud/ProjectCreate';
import Link from 'next/link';

const CreateProject = () => {
    return (
        <Layout>
            <Private>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12 div-add-project">
                            <h2>Add a new interesting Project</h2>
                        </div>
                        <div className="col-md-12">
                            <ProjectCreate />
                        </div>
                    </div>
                </div>
            </Private>
        </Layout>
    );
};

export default CreateProject;