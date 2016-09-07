const fs = require('fs-extra');

var src = process.argv[2];
var dest = process.argv[3];

try {
    fs.copySync(src, dest, {clobber: true});
    console.log('copyJavaScriptLibraries coped files to public/javascripts/lib')
} catch (err) {
    console.log("copying javaScriptLibraries failed" + err.message);
}

