
const PostHelper = {
    validatePostContent(postData) {
        if(!postData.content) {
            return true;
        }
        return false;
    }
}

const ProfileHelper = {
    validateProfileInputField(profileData) {

        const isEmailvalid = validateUserEmail(profileData.email);
        
        for(let input in profileData) {
            if(input !== 'image_url' && profileData[input] === '') return false;
        }

        if(profileData.mobile.length !== 10) return false;

        if(isEmailvalid) return true;

        return true;
    }
}

const validateUserEmail = (email) => {
    const regEx = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/;

    if(regEx.test(email)) return true;
    return false;
}

export {PostHelper, ProfileHelper};
