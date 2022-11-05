
const PostHelper = {
    validatePostContent(postData) {
        if(!postData.content) {
            return true;
        }
        return false;
    }
}

const ProfileHelper = {
    // to do 
}

export {PostHelper, ProfileHelper};
