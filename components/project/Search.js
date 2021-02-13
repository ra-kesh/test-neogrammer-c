import Link from 'next/link';
import renderHTML from 'react-render-html';
import { useState, useEffect } from 'react';
import { listSearch } from '../../actions/project';

const Search = () => {
    const [values, setValues] = useState({
        search: undefined,
        results: [],
        searched: false,
        message: ''
    });

    const { search, results, searched, message } = values;

    const searchSubmit = e => {
        e.preventDefault();
        listSearch({ search }).then(data => {
            setValues({ ...values, results: data, searched: true, message: `${data.length} projects found` });
        });
    };

    const handleChange = e => {
        // console.log(e.target.value);
        setValues({ ...values, search: e.target.value, searched: false, results: [] });
    };

    const searchedProjects = (results = []) => {
        return (
            <div className="jumbotron bg-white">
                {message && <p className="pt-4 text-muted font-italic">{message}</p>}

                {results.map((project, i) => {
                    return (
                        <div key={i}>
                            <Link href={`/projects/${project.slug}`}>
                                <a className="text-primary">{project.title}</a>
                            </Link>
                        </div>
                    );
                })}
            </div>
        );
    };

    const searchForm = () => (
        <form onSubmit={searchSubmit}>
            <div className="row">
                <div className="col-lg-6 pl-0 ">
                    <input type="search" className="form-control" placeholder="Search project" onChange={handleChange} />
                </div>

                <div className="col-lg-2">
                    <button className="btn btn-block btn-outline-primary" type="submit">
                        Search
                    </button>
                </div>
            </div>
        </form>
    );

    return (
        <div className="container-fluid">
            <div className="">{searchForm()}</div>
            {searched && <div style={{ marginTop: '-120px', marginBottom: '-80px' }}>{searchedProjects(results)}</div>}
        </div>
    );
};

export default Search;