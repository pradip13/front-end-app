import axios from "axios";

const proxyServer = 'socialMediaServerHost';

const postService = {
    getUserPosts() {
        const encodedURI = window.encodeURI('/get-post');

        return axios({
            method: "GET",
            url: encodedURI,
            "headers": {
                'Content-Type': 'application/json',
                'server': proxyServer
            }
        }).then(res => {
            return res.data;
        }).catch(err => {
            return err;
        })
    }
}

export default postService;
