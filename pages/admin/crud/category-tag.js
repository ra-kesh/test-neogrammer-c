import Layout from '../../../components/Layout';
import Admin from '../../../components/auth/Admin';
import Category from '../../../components/crud/Category';
import Tag from '../../../components/crud/Tag';


const CategoryTag = () => {
    return (
        <Layout>
            <Admin>
                <div className="container-fluid">
                    <div className="row ">
                        <div className="col-lg-12 list-manage-tags mt-5 mb-5 ">
                            <h2>Manage Categories and Tags</h2>
                        </div>
                        <div className="col-lg-6">
                            <Category />
                        </div>
                        <div className="col-lg-6">
                            <Tag />
                        </div>
                    </div>
                </div>
            </Admin>
        </Layout>
    );
};

export default CategoryTag;