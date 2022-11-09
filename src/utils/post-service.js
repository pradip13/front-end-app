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

    getAllPost() {
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
    },
    updatePoste(postData) {
        const encodedURI = window.encodeURI(`/update-post/${postData.id}`);

        return axios({
            method: "PUT",
            url: encodedURI,
            data: postData,
            "headers": {
                'Content-Type': 'application/json',
                'server': proxyServer
            }
        }).then(res => {
            return res.data;
        }).catch(err => {
            return err;
        })
    },

    deletePost(id) {
        const encodedURI = window.encodeURI(`/delete-post/${id}`);

        return axios({
            method: "DELETE",
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
