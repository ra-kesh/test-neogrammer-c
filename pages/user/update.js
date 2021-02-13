import Layout from '../../components/Layout';
import Private from '../../components/auth/Private';
import ProfileUpdate from '../../components/auth/ProfileUpdate';


const UserProfileUpdate = () => {
    return (
        <Layout>
            <Private>
                <div className="container-fluid">
                    <div className="row ">
                        <div className="col-lg-12 div-add-project ">
                            <h2>Update your profile </h2>             
                        </div>
                        <ProfileUpdate />
                    </div>
                </div>
            </Private>
        </Layout>
    );
};

export default UserProfileUpdate;