import axios from "axios";

function searchUserLessApi(searchValue) {
    console.log(searchValue);
    // return axios.get(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(searchValue)}&type=less`)
    return axios.get(`https://tiktok.fullstack.edu.vn/api/users/search`, {
        params: {
            q: searchValue,
            type: "more"
        }
    })
        .then(response => {
            if (response.status === 200) {
                return response;
            } else {
                return '';
            }
        }).catch(error => {
            console.log(error);
        });
}

export default searchUserLessApi ;
