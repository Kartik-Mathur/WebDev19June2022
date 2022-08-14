function downloadFile(url){
    return new Promise((resolve,reject)=>{
        if(!url.startsWith('http')) return reject(new Error('Invalid Url'));
        console.log('...downloading starts at ' + url);
        setTimeout(()=>{
            let file = url.split('/').pop();
            console.log('...downloading completes: '+ file);
            resolve(file);
        },3000);
    })
}
function compressFile(downloadedFile){
    return new Promise((resolve,reject)=>{
        if(['mp4','webp','mp3'].indexOf(downloadedFile) == -1) 
            return reject(new Error("We cannot compress this file"));

        console.log('...starting compression of file: '+downloadedFile);
        setTimeout(()=>{
            let zippedFile = downloadedFile.split('.')[0] + '.zip';
            console.log('...compression completes: '+ zippedFile);

            resolve(zippedFile);
        },3000);
    })
}
function uploadingFile(zippedFile){
    return new Promise((resolve,reject)=>{
        console.log('...starting uploading of file '+zippedFile);
        setTimeout(()=>{
            let newurl = 'http://newsite.com/'+zippedFile;
            resolve(newurl);
        },3000);
    })
}
downloadFile('http://example.com/movie.pdf')
.then(compressFile)
.then(uploadingFile)
.then((newurl)=>{
    console.log('All Done at: '+newurl);
})
.catch((err)=>{
    console.log(err.message);
})

// downloadFile('http://example.com/movie.mp4').then((file)=>{
//     console.log('..downloading done ' + file);
//     compressFile(file).then((zippedFile)=>{
//         console.log('...compression done '+zippedFile);
//         uploadingFile(zippedFile).then((newurl)=>{
//             console.log('...uploading done at '+newurl);
//             console.log('All done');
//         })
//     })
// }).catch((err)=>{
//     console.log(err.message);
// })