import { sortArr } from './sort_Array.js'
import { callApi } from './api_service.js';
window.onload = () => {
    callApi();
    document.querySelector("#id_user_input").addEventListener("input", sortArr);
    document.querySelector("#id_load_more").addEventListener("click", callApi)


}