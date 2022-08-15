function downloadFile(url,cb){
    if(!url.startsWith('http')){
        throw new Error("Invalid url");
    }
    console.log('...downloading starts at '+url);
    setTimeout(()=>{
        let file = url.split('/').pop();
        console.log('..downloading completes of file: '+file);
        cb(file);
    },3000);
}

function compressFile(downloadedFile,cb){ // movie.mp4
    console.log('...starting compression of '+downloadedFile);
    setTimeout(()=>{
        let zippedFile = downloadedFile.split('.')[0] + '.zip';
        console.log('...compression completed: '+zippedFile);
        cb(zippedFile);
    },3000);
}

function uploadeFile(zippedFile,cb){
    console.log('...uploading starts of '+zippedFile);
    setTimeout(()=>{
        let newurl = 'https://newsite.com/'+zippedFile+'/sehaj';
        console.log('..uploading done at '+newurl);
        cb(newurl)
    },3000);
}

downloadFile('http://example.com/movie.mp4',function(downloadedFile){
    // console.log('Downloading done');
    compressFile(downloadedFile,function(zippedFile){
        // console.log('Compression done');
        uploadeFile(zippedFile,function(newurl){
            console.log('Everything Done');
        })
    })
});

/*
function uploadKaCallBack(newurl){
    console.log('Everything Done');
}

function compressionKaCallBack(zippedFile){
// console.log('Compression done');
uploadeFile(zippedFile,uploadKaCallBack);
}

function downloadKaCallBack(downloadedFile){
// console.log('Downloading done');
compressFile(downloadedFile,compressionKaCallBack);
}

downloadFile('http://example.com/movie.mp4',downloadKaCallBack);
*/