import { lookup } from 'mime-types';

if (process.argv[2]) {
    const mimeType = lookup(process.argv[2]);
    console.log(mimeType); 
} else {
    console.log("Usage: node mime-types.js filename");
}

