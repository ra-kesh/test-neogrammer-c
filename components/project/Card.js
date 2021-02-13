import Link from 'next/link';
import renderHTML from 'react-render-html';
import Moment from 'moment';
import { API } from '../../config';

const Card = ({ project }) => {
    const showProjectCategories = project =>
        project.categories.map((c, i) => (
            <Link key={i} href={`/categories/${c.slug}`}>
                <a className="btn btn-primary mr-1 ml-1 mt-3">{c.name}</a>
            </Link>
        ));

    const showProjectTags = project =>
        project.tags.map((t, i) => (
            <Link key={i} href={`/tags/${t.slug}`}>
                <a className="btn btn-outline-primary mr-1 ml-1 mt-3">{t.name}</a>
            </Link>
        ));

    return (
        <div className=" pro-index-card">

            <div className="row index-card-container ">
                <div className="col-lg-4 ">
                    <div className="div-img">
                            <img
                                className=" pro-img"
                                // style={{ maxHeight: '200px', maxWidth: '300px' }}
                                src={`${API}/project/photo/${project.slug}`}
                                alt={project.title}
                            />

                    </div>

                </div>
                <div className="col-lg-8">
                <Link href={`/projects/${project.slug}`}>
                    <a>
                        <h2 className="pt-3 pb-3 font-weight-bold">{project.title}</h2>
                    </a>
                </Link>
                {/* <div className="pb-3">{renderHTML(project.excerpt)}</div> */}
                
                <p className=" ml-1 pt-2 pb-2">
                    Devloped by  <Link href={`/profile/${project.postedBy.username}`}>
                                            <a>{project.postedBy.username}</a>
                                        </Link> | Added {Moment(project.updatedAt).fromNow()}
                </p>
                <div>
                        {showProjectTags(project)}
                </div>
                
            </div>
           

            </div>

           
            {/* <header>
                <Link href={`/projects/${project.slug}`}>
                    <a>
                        <h2 className="pt-3 pb-3 font-weight-bold">{project.title}</h2>
                    </a>
                </Link>
            </header>
            <section>
                <p className="mark ml-1 pt-2 pb-2">
                    Devloped by  <Link href={`/profile/${project.postedBy.username}`}>
                                            <a>{project.postedBy.username}</a>
                                        </Link> | Added {Moment(project.updatedAt).fromNow()}
                </p>
            </section>
            <section>
                {showProjectCategories(project)}
                <br />
                <br />
            </section>

            <div className="row">
                <div className="col-md-4">
                    <section>
                        <img
                            className="img img-fluid"
                            style={{ maxHeight: '150px', width: 'auto' }}
                            src={`${API}/project/photo/${project.slug}`}
                            alt={project.title}
                        />
                        
                    </section>
                </div>
                <div className="col-md-8">
                    <section>
                        <div className="pb-3">{renderHTML(project.excerpt)}</div>
                        <Link href={`/projects/${project.slug}`}>
                            <a className="btn btn-primary pt-2">Read more</a>
                        </Link>
                        <div>

                        {showProjectTags(project)}
                        </div>
                    </section>
                </div>
            </div> */}
        </div>
    );
};

export default Card;