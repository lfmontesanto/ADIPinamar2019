import React from 'react';

const urlGetMovies = "https://jsonplaceholder.typicode.com/todos/"
const urlGetMovieByName = "https://jsonplaceholder.typicode.com/todos/"
const urlGetSeries = "https://jsonplaceholder.typicode.com/todos/"
const urlCommentsByMovie = "https://jsonplaceholder.typicode.com/todos/"
const urlCommentsByUser = "https://jsonplaceholder.typicode.com/todos/"
const urlGetSeriesByName = "https://jsonplaceholder.typicode.com/todos/"
const urlUser = ""

class ApiController extends React.Component {
    async getEquipos(okBusquedaEquipos)
    {
        try {
            const response = await fetch (urlGetMovies);
            const data = await response.json();
            return response.status
        } catch (err){
            console.log(err)
        }
    }
    async getMovieByName(name) {
        let finalUrl = `${urlGetMovieByName}${name}`
        console.log(finalUrl);
        try {
            let response = await fetch (finalUrl);
            return response.json()
        } catch (err){
            console.log(err)
        }
    }
    async getCommentsByMovie(movie) {
        let finalUrl = `${urlCommentsByMovie}${movie}`
        try {
            let response = await fetch (finalUrl);
            return response.json()
        } catch (err){
            console.log(err)
        }
    }
    async getCommentsByUser(user) {
        let finalUrl = `${urlCommentsByUser}${user}`
        try {
            let response = await fetch (finalUrl);
            return response.json()
        } catch (err){
            console.log(err)
        }
    }
    async getSeries() {
        try {
            let response = await fetch (urlGetSeries);
            return response.json()
        } catch (err){
            console.log(err)
        }
    }
    async getSeriesByName(name) {
        let finalUrl = `${urlGetSeriesByName}${name}`
        try {
            let response = await fetch (finalUrl);
            return response.json()
        } catch (err){
            console.log(err)
        }
    }
    async getUser(user) {
        let finalUrl = `${urlUser}${user}`
        try {
            let response = await fetch (finalUrl);
            return response.json()
        } catch (err){
            console.log(err)
        }
    }
    async updateUser (user) {
        let finalUrl = `${urlUser}${user}`
        try {
            const config = {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            }
            let response = await fetch(finalUrl, config);
            return response.json()
        } catch (err) {
            console.log(err)
        }
    }
    async commentMovie (movie, comment) {
        let finalUrl = `${urlMovieComments}${movie}`
        try {
            const config = {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(comment)
            }
            let response = await fetch(finalUrl, config);
            return response.json()
        } catch (err) {
            console.log(err)
        }
    }
}

export default new ApiController();