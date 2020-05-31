import { createCharacters } from './charManager.js'


var page_counter = 1;
export var json_data = [];
export const callApi = async () => {

    let apiURL = `https://rickandmortyapi.com/api/character/?page=${page_counter}`;
    let resp = await fetch(apiURL);
    let data = await resp.json();
    //add the new 20 characters to the json and don't override 
    json_data.push(...data.results);
    //sending only the new 20 characters to be rendered on the page 
    createCharacters(data.results)
    page_counter = page_counter + 1;

}



