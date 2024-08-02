import {fileTypeFromFile, fileTypeFromBuffer} from 'file-type';
import {readChunk} from 'read-chunk';

const usage = `Usage: node file-type.js (-f|-b) filename
    -f: file mode
    -b: buffer mode`;

if (process.argv.length != 4) {
    console.log(usage);
    process.exit();
}

switch (process.argv[2]) {
    case '-f':
        console.log(await fileTypeFromFile(process.argv[3]));
        break;
    case '-b':
        const buffer = await readChunk(process.argv[3], {length: 4100});
        console.log(await fileTypeFromBuffer(buffer));
        break;
    default:
        console.log(usage);
}



