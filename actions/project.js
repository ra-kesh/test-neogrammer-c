import fetch from 'isomorphic-fetch';
import { API } from '../config';
import queryString from 'query-string';
import { isAuth , handleResponse } from './auth';

export const createProject = (project, token) => {

    let createProjectEndpoint;

    if (isAuth() && isAuth().role === 1) {
        createProjectEndpoint = `${API}/project`;
    } else if (isAuth() && isAuth().role === 0) {
        createProjectEndpoint = `${API}/user/project`;
    }

    return fetch(`${createProjectEndpoint}`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: project
    })
        .then(response => {
            handleResponse(response);
            return response.json();
        })
        .catch(err => console.log(err));
};


export const listProjectsWithCategoriesAndTags = (skip,limit) => {
    const data = {
        limit,
        skip
    };
    return fetch(`${API}/projects-categories-tags`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const singleProject = slug => {
    return fetch(`${API}/project/${slug}`, {
        method: 'GET'
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const listRelated = project => {
    return fetch(`${API}/projects/related`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(project)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const list = (username) => {

    let listProjectsEndpoint;

    if (username) {
        listProjectsEndpoint = `${API}/${username}/projects`;
    } else {
        listProjectsEndpoint = `${API}/projects`;
    }
    return fetch(`${listProjectsEndpoint}`, {
        method: 'GET'
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const removeProject = (slug, token) => {
    let deleteProjectEndpoint;

    if (isAuth() && isAuth().role === 1) {
        deleteProjectEndpoint = `${API}/project/${slug}`;
    } else if (isAuth() && isAuth().role === 0) {
        deleteProjectEndpoint = `${API}/user/project/${slug}`;
    }
    return fetch(`${deleteProjectEndpoint}`, {
        method: 'DELETE',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        }
    })
        .then(response => {
            handleResponse(response);
            return response.json();
        })
        .catch(err => console.log(err));
};

export const updateProject = (project, token, slug) => {

    let updateProjectEndpoint;

    if (isAuth() && isAuth().role === 1) {
        updateProjectEndpoint = `${API}/project/${slug}`;
    } else if (isAuth() && isAuth().role === 0) {
        updateProjectEndpoint = `${API}/user/project/${slug}`;
    }
    return fetch(`${updateProjectEndpoint}`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: project
    })
        .then(response => {
            handleResponse(response);
            return response.json();
        })
        .catch(err => console.log(err));
};

export const listSearch = params => {
    console.log('search params', params);
    let query = queryString.stringify(params);
    console.log('query params', query);
    return fetch(`${API}/projects/search?${query}`, {
        method: 'GET'
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};