import React from 'react';

const OMDB_API_KEY = "d0b64143"
const OMDB_SEARCH_KEY = "&s="
const OMDB_GET_KEY = "&i="
const OMDB_TYPE_KEY = "&type="
const OMDB_TYPE_MOVIE="movie"
const OMDB_TYPE_SERIES="series"
const OMDB_ENDPOINT = "http://www.omdbapi.com/?apikey="
const GET_MOVIES_ENDPOINT_HEROKU = "https://pelispedio.herokuapp.com/api/getMovies/"
const SEARCH_MOVIES_ENDPOINT_HEROKU = "https://pelispedio.herokuapp.com/api/movies/"
const SEARCH_SHOWS_ENDPOINT_OMDB = `${OMDB_ENDPOINT}${OMDB_API_KEY}${OMDB_SEARCH_KEY}${"[searchPhrase]"}`
const GET_SHOWS_ENDPOINT_OMDB = `${OMDB_ENDPOINT}${OMDB_API_KEY}${OMDB_GET_KEY}${"[imdbID]"}`
const GET_SERIES_HEROKU = "https://pelispedio.herokuapp.com/api/getSeries"
const GET_COMMENTS_BY_MOVIE= "https://pelispedio.herokuapp.com/api/movies/[movieID]/comments"
const COMMENT_MOVIE_ENDPOINT = "https://pelispedio.herokuapp.com/api/movies/[movieID]/comment"
const GET_COMMENTS_BY_SERIE= "https://pelispedio.herokuapp.com/api/series/[seriesID]/comments"
const COMMENT_SERIES_ENDPOINT = "https://pelispedio.herokuapp.com/api/series/[seriesID]/comment"
const SEARCH_SERIES_HEROKU = "https://pelispedio.herokuapp.com//api/series/"
const UPDATE_USER_ENDPOINT = "https://pelispedio.herokuapp.com/api/profile/"
const LOG_IN_ENDPOINT = "https://pelispedio.herokuapp.com/api/login"
const GET_USER_ENDPOINT = "https://pelispedio.herokuapp.com/api/profile/"
const REGISTER_USER_ENDPOINT = "https://pelispedio.herokuapp.com/api/register"
const GET_USER_ACTIVITY_ENDPOINT = "http://localhost:8080/api/profile/activity"

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
        try {
            let response = await fetch (finalUrl);
            const data = await response.json();
            return data
        } catch (err){
            console.log(err)
        }
    }
    async searchOmdb(searchPhrase,type) { 
        let url = `${SEARCH_SHOWS_ENDPOINT_OMDB.replace("[searchPhrase]", searchPhrase)}`;
        let finalUrl = "";
        switch (type) {
            case OMDB_TYPE_MOVIE:
                 finalUrl = `${url}${OMDB_TYPE_KEY}${OMDB_TYPE_MOVIE}`;
                break;
            case OMDB_TYPE_SERIES:
                finalUrl = `${url}${OMDB_TYPE_KEY}${OMDB_TYPE_SERIES}`;
                break;
            default:
                break;
          }                 
        try {
            let response = await fetch (finalUrl);
            const data = await response.json();
            return data.Search
        } catch (err){
            console.log(err)
        }
    }

    async getShowOmdb(imdbID) {                    
        const finalUrl = GET_SHOWS_ENDPOINT_OMDB.replace("[imdbID]", "tt3896198");
        console.log(finalUrl)
        try {
            let response = await fetch (finalUrl);
            const data = JSON.parse(response._bodyInit)
            console.log(data.Title)
            return data
        } catch (err){
            console.log(err)
        }
    }
    
    async getCommentsByMovie(movieId) {
        const finalUrl = GET_COMMENTS_BY_MOVIE.replace("[movieID]", movieId);
        console.log(finalUrl)
        try {
            let response = await fetch (finalUrl);
            return response._bodyInit
        } catch (err){
            console.log(err)
        }
    }
    async getCommentsBySeries(user) {
        let finalUrl = `${GET_COMMENTS_BY_SERIE}${user}` 
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
        let finalUrl = `${urlUsers}${user}` 
        try {
            let response = await fetch (finalUrl);
            return response
        } catch (err){
            console.log(err)
        }
    }
    async updateUserPassword (userId, oldPassword, newPassword) {
        var user = {userid: userId, oldpassword: oldPassword, newpassword: newPassword}
        let finalUrl = `${UPDATE_USER_ENDPOINT}` 
        const config = {
            method: 'PUT',
            mode: "cors",
            headers:{ 'Content-Type': 'application/json'},
            body: JSON.stringify(user) // data can be `string` or {object}!
        }
        try {
            let response = await fetch (finalUrl,config);
            return response
        } catch (err) {
            console.log(err)
        }
    }
    async login (email,password) {
        const user = {email:email,password:password};
        console.log(user)
        let finalUrl = `${LOG_IN_ENDPOINT}` 
        const config = {
            method: 'POST',
            mode: "cors",
            headers:{ 'Content-Type': 'application/json'},
            body: JSON.stringify(user) // data can be `string` or {object}!
        }
        try {
            let response = await fetch (finalUrl,config);
            return response
        } catch (err) {
            console.log(err)
        }
    }
    async getUser (email) {
        let finalUrl = `${GET_USER_ENDPOINT}` 
        const config = {
            method: 'POST',
            mode: "cors",
            headers:{ 'Content-Type': 'application/json'},
            body: JSON.stringify(email) // data can be `string` or {object}!
        }
        console.log(config.body)
        try {
            let response = await fetch (finalUrl,config);
            return response
        } catch (err) {
            console.log(err)
        }
    }
    async commentMovie (movieId, comment) {
        const finalUrl = COMMENT_MOVIE_ENDPOINT.replace("[movieID]", movieId);
        const config = {
            method: 'POST', 
            mode: "cors",
            headers:{ 'Content-Type': 'application/json'},
            body: JSON.stringify(comment) // data can be `string` or {object}!
        }
        try {
            let response = await fetch (finalUrl,config);
            return response
        } catch (err) {
            console.log(err)
        }
    }
    async commentShow(showID, comment, score, user, type) {
        var review = {userid: user, score: score, comment: comment }
        let finalUrl = ""
        switch (type) {
            case OMDB_TYPE_MOVIE:
                finalUrl = COMMENT_MOVIE_ENDPOINT.replace("[movieID]", showID);
                break;
            case OMDB_TYPE_SERIES:
                finalUrl = COMMENT_SERIES_ENDPOINT.replace("[seriesID]", showID);
                break;
            default:
                break;
        }
        const config = {
            method: 'POST',
            mode: "cors",
            headers:{ 'Content-Type': 'application/json'},
            body: JSON.stringify(review) // data can be `string` or {object}!
        }
        try {
            let response = await fetch (finalUrl,config);
            return response
        } catch (err) {
            console.log(err)
        }
    }
    async getUserActivity (userID) {
        const finalUrl = GET_USER_ACTIVITY_ENDPOINT;
        const config = {
            method: 'POST', 
            mode: "cors",
            headers:{ 'Content-Type': 'application/json'},
            body: JSON.stringify(userID) // data can be `string` or {object}!
        }
        try {
            let response = await fetch (finalUrl,config);
            return response
        } catch (err) {
            console.log(err)
        }
    }
    async registerUser (email,password,name,lastname) {
        var user2 = {email: email,
        password: password,
        name: name,
        lastname: lastname
    }
        const finalUrl = REGISTER_USER_ENDPOINT
        const config = {
            method: 'POST',
            mode: "cors",
            headers:{ 'Content-Type': 'application/json'},
            body: JSON.stringify(user2) // data can be `string` or {object}!
        }
        try {
            let response = await fetch (finalUrl,config);
            return response
        } catch (err) {
            console.log(err)
        }
    }
}

export default new ApiController();
