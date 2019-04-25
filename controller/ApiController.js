import React from 'react';

const urlGetMovies = "https://jsonplaceholder.typicode.com/todos/"
const urlGetMovieByName = "https://jsonplaceholder.typicode.com/todos/"
const urlGetSeries = "https://jsonplaceholder.typicode.com/todos/"
const urlCommentsByMovie = "http://gustavomovies2.herokuapp.com/comments/create"
const urlCommentsByUser = "https://jsonplaceholder.typicode.com/todos/"
const urlGetSeriesByName = "https://jsonplaceholder.typicode.com/todos/"
const urlUsers = ""

class ApiController extends React.Component {
    async getEquipos(okBusquedaEquipos)
    {
        try {
            const response = await fetch (urlGetMovies);  //TODO UPDATE NEDPOINT
            const data = await response.json();
            return data
        } catch (err){
            console.log(err)
        }
    }

    async getMovieByName(name) {                    
        let finalUrl = `${urlGetMovieByName}${name}`    //TODO UPDATE ENDPOINT
        console.log(finalUrl);
        try {
            let response = await fetch (finalUrl);
            const data = await response.json();
            return data
        } catch (err){
            console.log(err)
        }
    }
    async getCommentsByMovie(movie) {
        let finalUrl = `${urlCommentsByMovie}${movie}` //TODO UPDATE ENDPOINT
        try {
            let response = await fetch (finalUrl);
            const data = await response.json();
            return data
        } catch (err){
            console.log(err)
        }
    }
    async getCommentsByUser(user) {
        let finalUrl = `${urlCommentsByUser}${user}` //TODO UPDATE ENDPOINT
        try {
            let response = await fetch (finalUrl);
            const data = await response.json();
            return data
        } catch (err){
            console.log(err)
        }
    }
    async getSeries() {
        try {
            let response = await fetch (finalUrl); //TODO UPDATE ENDPOINT
            const data = await response.json();
            return data
        } catch (err){
            console.log(err)
        }
    }
    async getSeriesByName(name) {
        let finalUrl = `${urlGetSeriesByName}${name}` //TODO CHANGE ENDPOINT
        try {
            let response = await fetch (finalUrl);
            const data = await response.json();
            return data
        } catch (err){
            console.log(err)
        }
    }
    async getUser(user) {
        let finalUrl = `${urlUsers}${user}` //TODO UPDATE ENDPOINT
        try {
            let response = await fetch (finalUrl);
            const data = await response.json();
            return data
        } catch (err){
            console.log(err)
        }
    }
    async updateUser (user) {
        let finalUrl = `${urlCommentsByMovie}` //TODO CHANGE ENDPOINT
        const config = {
            method: 'POST', // or 'PUT'
            mode: "cors",
            headers:{ 'Content-Type': 'application/json'},
            body: JSON.stringify(user) // data can be `string` or {object}!
        }
        try {
            
            let response = await fetch (urlCommentsByMovie,config);
            const data = await response.json();
            console.log("Usuario Actualizado")
            return data
        } catch (err) {
            console.log(err)
        }
    }
    async commentMovie (comment) {
        let finalUrl = `${urlCommentsByMovie}` //TODO UPDATE ENDPOINT 
        const config = {
            method: 'POST', // or 'PUT'
            mode: "cors",
            headers:{ 'Content-Type': 'application/json'},
            body: JSON.stringify(comment) // data can be `string` or {object}!
        }
        try {
            
            let response = await fetch (urlCommentsByMovie,config);
            const data = await response.json();
            console.log("Comentario guardado")
            return data
        } catch (err) {
            console.log(err)
        }
    }
}

export default new ApiController();
