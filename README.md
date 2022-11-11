

### Free CDN image urls
1. https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227_1280.jpg
2. https://media.istockphoto.com/id/1355569095/vector/digital-eye-data-network-cyber-security-technology.jpg?s=612x612&w=0&k=20&c=b5moC17mfe_--IMWUnv1ez6sZpXcuWRFw3HwCp5n4Q4=

### Deploying react application to gh-pages

1. npm install gh-pages --save-dev
2. add the detail inside inside package.json file. Below "version"
    - "homepage": "https://github_username.github.io/repo_name"
3. Add following command under scripts
    - "predeploy": "npm run build",
    - "deploy": "gh-pages -d build",
4. Run below predeploy command follwed by deploy
5. After 1 min, gh-pages will be deployed and published.

### Note

Wip on edit post.
Need to find out the way on how to bind the input field of post content to fetched item data anf then again pass it to new state.
