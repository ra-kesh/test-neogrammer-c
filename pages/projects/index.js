// import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/Layout';
import { useState } from 'react';
import { listProjectsWithCategoriesAndTags } from '../../actions/project';
import SmallCard from '../../components/project/SmallCard';
import Search from '../../components/project/Search';

const Projects = ({projects, categories, tags, totalProjects, projectsLimit,router,projectSkip}) => {

    const [limit, setLimit] = useState(projectsLimit);
    const [skip, setSkip] = useState(0);
    const [size, setSize] = useState(totalProjects);
    const [loadedProjects, setLoadedProjects] = useState([]);

    const loadMore = () => {
        let toSkip = skip + limit;
        listProjectsWithCategoriesAndTags(toSkip, limit).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setLoadedProjects([...loadedProjects, ...data.projects]);
                setSize(data.size);
                setSkip(toSkip);
            }
        });
    };

    const loadMoreButton = () => {
        return (
            size > 0 &&
            size >= limit && (
                <button onClick={loadMore} className="btn btn-outline-primary btn-lg">
                    Load more
                </button>
            )
        );
    };

    const showAllProjects = () => {
        return projects.map((project, i) => {
            return (
                <div className="pro-card col-lg-3" key={i}> 
                    <SmallCard project= {project} />
                    <hr />
                </div>
            );
        });
    };

    const showAllCategories = () => {
        return categories.map((c, i) => (
            <Link href={`/categories/${c.slug}`} key={i}>
                <a className="btn btn-primary mr-1 ml-1 mt-3">{c.name}</a>
            </Link>
        ));
    };

    const showAllTags = () => {
        return tags.map((t, i) => (
            <Link href={`/tags/${t.slug}`} key={i}>
                <a className="btn btn-outline-primary mr-1 ml-1 mt-3">{t.name}</a>
            </Link>
        ));
    };

    const showLoadedProjects = () => {
        return loadedProjects.map((project, i) => (
            <article key={i}>
                <Card project={project} />
            </article>
        ));
    };

    return (
        <Layout>
            <main>
                <div className="container-fluid ">
                    <header>
                        <div className=" div-project-header">
                            <h1 className="display-4 font-weight-bold text-center">Projects by NeoGrammers</h1>
                        </div>
                        <div className=" div-pro-cat-tag">

                            <div className="pro-cat mb-5">
                                <h4>browse by categories :-</h4>
                                 {showAllCategories()}
                            </div>

                            <div className="pro-tag-title mb-5">
                                 <h4>browse by tags :-</h4>
                                {showAllTags()}
                            </div>

                            <div className="pro-search mb-2">
                                 <h4 className="mb-3">or simply search here :-</h4>   
                            </div>
                            <Search />                    
                                   
                        </div>                    
                    </header>
                </div>
                
            </main>
                <div className="div-projects-lists ">
                     <h1>Recently added projects</h1>
                     <div className="pro-card-container row">{showAllProjects()}</div>
                    <div className="container-fluid">{showLoadedProjects()}</div>
                    <div className="text-center pt-5 pb-5">{loadMoreButton()}</div>
                </div>
                
        </Layout>
    );
};

Projects.getInitialProps = () => {
    let skip = 0;
    let limit = 10;

    return listProjectsWithCategoriesAndTags(skip,limit).then(data => {
        if (data.error) {
            console.log(data.error);
        } else {
            return {
               projects: data.projects,
                categories: data.categories,
                tags: data.tags,
                totalProjects: data.size,
                projectsLimit: limit,
                projectSkip: skip
            };
        }
    });
};

export default Projects;


