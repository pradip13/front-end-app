import axios from "axios";

const proxyServer = 'socialMediaServerHost';

const ProfileService = {
    createProfile(profileData) {
        const encodedURI = window.encodeURI('/create-profile');

        return axios({
            method: "POST",
            url: encodedURI,
            data: profileData,
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

    fetchAllProfile() {
        const encodedURI = window.encodeURI('/get-profile');

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

    updateProfile(profileData) {
        const encodedURI = window.encodeURI(`/update-profile/${profileData.id}`);

        return axios({
            method: "PUT",
            url: encodedURI,
            data: profileData,
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

    deleteProfile(id) {
        const encodedURI = window.encodeURI(`/delete-profile/${id}`);

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

export default ProfileService;
