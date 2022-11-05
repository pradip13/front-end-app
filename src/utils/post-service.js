import axios from "axios";

const proxyServer = 'socialMediaServerHost';

const PostService = {
    createPost(postData) {
        const encodedURI = window.encodeURI('/create-post');

        return axios({
            method: "POST",
            url: encodedURI,
            data: postData,
            "headers": {
                'Content-Type': 'application/json',
                'server': proxyServer
            }
        }).then(res => {
            return res.data;
        }).catch(err => {
            return err
        })
    },

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

export default PostService;
