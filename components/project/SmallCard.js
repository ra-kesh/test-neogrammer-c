import Link from 'next/link';
// import renderHTML from 'react-render-html';
import moment from 'moment';
import { API } from '../../config';

const SmallCard = ({ project }) => {

    const showProjectCategories = project =>
    project.categories.map((c, i) => (
        <Link key={i} href={`/categories/${c.slug}`}>
            <a className="mark p-1 ">{c.name}</a>
        </Link>
    ));
    const showProjectTags = project =>
    project.tags.map((t, i) => (
        <Link key={i} href={`/tags/${t.slug}`}>
            <a className="pro-tag">{t.name}</a>
        </Link>
    ));
    return (
        <div className="card">
            
            <section>
                <Link href={`/projects/${project.slug}`}>
                    <a>
                        <img
                            className="img img-fluid"
                            style={{ height: '200px', width: '100%' }}
                            src={`${API}/project/photo/${project.slug}`}
                            alt={project.title}
                        />
                    </a>
                </Link>
            </section>

            <div className="card-body"> 
                <section className="mb-3">
                   {showProjectCategories(project)}
                </section>
                <section>
                    <Link href={`/projects/${project.slug}`}>
                        <a>
                            <h5 className="card-title">{project.title}</h5>
                        </a>
                    </Link>
                    {/* <p className="card-text">{renderHTML(project.excerpt)}</p> */}
                </section>
                <Link href={`/profile/${project.postedBy.username}`}>
                <h6> by <a>{project.postedBy.username}</a></h6>                                        
               </Link>
               <div className="mt-3">
                        {showProjectTags(project)}
                </div>
                <div className="float-right">
                {moment(project.updatedAt).fromNow()} 
                </div>
                
            </div>

           
        </div>
    );
};

export default SmallCard;