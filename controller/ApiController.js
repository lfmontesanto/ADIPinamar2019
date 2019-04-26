import React from 'react';

const OMDB_API_KEY = "d0b64143"
const OMDB_SEARCH_KEY = "&s="
const OMDB_ENDPOINT = "http://www.omdbapi.com/?apikey="
const GET_MOVIES_ENDPOINT_HEROKU = "https://pelispedio.herokuapp.com/api/movies/"
const SEARCH_MOVIES_ENDPOINT_HEROKU = "https://pelispedio.herokuapp.com/api/getMovies"
const SEARCH_SHOWS_ENDPOINT_OMDB = `${OMDB_ENDPOINT}${OMDB_API_KEY}${OMDB_SEARCH_KEY}${"[searchPhrase]"}`
const GET_SERIES_HEROKU = "https://pelispedio.herokuapp.com/api/getSeries"
const GET_COMMENTS_BY_MOVIE= "https://pelispedio.herokuapp.com/api/movies/[movieID/comments"
const COMMENTS_ENDPOINT = "http://gustavomovies2.herokuapp.com/comments/create"
const SEARCH_SERIES_HEROKU = "https://pelispedio.herokuapp.com//api/series/"
const urlUsers = ""

class ApiController extends React.Component {
    async getMoviesHeroku()
    {
        try {
            const response = await fetch (GET_MOVIES_ENDPOINT_HEROKU); 
            const data = await response.json();
            return data
        } catch (err){
            console.log(err)
        }
    }
    async searchMoviesHeroku(searchPhrase) {                    
        let finalUrl = `${SEARCH_MOVIES_ENDPOINT_HEROKU}${searchPhrase}` 
        console.log(finalUrl);
        try {
            let response = await fetch (finalUrl);
            const data = await response.json();
            return data
        } catch (err){
            console.log(err)
        }
    }
    async searchOmdb(searchPhrase) {                    
        const finalUrl = SEARCH_SHOWS_ENDPOINT_OMDB.replace("[searchPhrase]", searchPhrase);
        console.log(finalUrl);
        try {
            let response = await fetch (finalUrl);
            const data = await response.json();
            return data
        } catch (err){
            console.log(err)
        }
    }
    async getCommentsByMovie(movieId) {
        const finalUrl = GET_COMMENTS_BY_MOVIE.replace("[movieID]", "movieId");
        try {
            let response = await fetch (finalUrl);
            const data = await response.json();
            console.log(response)
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
    async getSeriesHeroku() {
        try {
            let response = await fetch (GET_SERIES_HEROKU);
            const data = await response.json();
            return data
        } catch (err){
            console.log(err)
        }
    }
    async searchSeriesHeroku(name) {
        let finalUrl = `${SEARCH_SERIES_HEROKU}${name}` 
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
