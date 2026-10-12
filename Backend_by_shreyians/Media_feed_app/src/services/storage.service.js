const { default: ImageKit, toFile } = require("@imagekit/nodejs");

async function uploadFile(buffer, fileName, mimeType) {
    const privateKey = process.env.IMAGEKIT_PRIVATE_KEY;
    if (!privateKey) {
        throw new Error("IMAGEKIT_PRIVATE_KEY environment variable is required");
    }
    if (!fileName) {
        throw new Error("A file name is required to upload an image");
    }

    const imagekit = new ImageKit({ privateKey });
    const file = await toFile(buffer, fileName, { type: mimeType });
    return imagekit.files.upload({ file, fileName });
}

module.exports = uploadFile;
