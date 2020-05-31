import { json_data } from './api_service.js';
import { createCharacters } from './charManager.js';

export const sortArr = () => {
    document.querySelector("#id_row").innerHTML = "";

    // console.log(json_data)
    let searchInput = document.querySelector("#id_user_input").value;
    let tempArr = _.filter(json_data, function (item) {

        if (item.name.toUpperCase().indexOf(searchInput.toUpperCase()) > -1) {
            return true
        }
        else {
            return false;
        }
    });
    //calling the create function but sending the new filtered array
    createCharacters(tempArr);
}

