# Starter files for MP2

## Setup
Use the following commands in your vagrant development environment to get this up and running
```bash
git clone --bare https://github.com/uiuc-web-programming/mp2_starter.git
cd mp2_starter.git
git push --mirror https://github.com/your-github-username/mp2.git
# Mirror-push to your mp2 repository. Use your github username in the URL. Change the URL if you're using bitbucket.
cd ..
rm -rf mp2_starter.git

git clone https://github.com/your-github-username/mp2.git
cd mp2
npm install
bower install
grunt
```
## Development

You should edit the following:
- `public/index.html` - all files in the `public` folder will be served by the server
- `source_sass` folder's files - all sass files here will be compiled to `public/css/styles.css`
- `source_js` folder's files - all javascript files here will be uglified and put in `public/js/script.js`
- `sourse_sass/foundation/_foundation-components.scss` - Edit this file to make changes to the foundation components
- `sourse_sass/foundation/_settings.scss` - Edit to change the default Foundation settings

All of the Foundation scss will be compiled into `public/css/styles.css` along with all of the other scss that you have written.

You can leave this command running in the background while development for livereloading:

```bash
grunt
```

## Publishing & Submitting

When cloning to the server, run the setup commands again to ensure all the files are properly compiled.

Also, if you have problems debugging your JavaScript due to uglification, you can disable it by changing the boolean values on lines 16,17,19 of `gruntfile.js`. Your final submission should work with uglification though.
