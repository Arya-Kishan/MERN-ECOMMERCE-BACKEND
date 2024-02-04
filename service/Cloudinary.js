const cloudinary = require("cloudinary").v2;
const multer = require("multer")
const streamifier = require("streamifier")

const storage = multer.memoryStorage();
exports.SingleUpload = multer({ storage }).single("photo")
exports.multiUploads = multer({ storage }).fields([{ name: "thumbnail" }, { name: "image1" }, { name: "image2" }, { name: "image3" }])

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_KEY,
    api_secret: process.env.CLOUD_SECRET
});

exports.getUrl = async (file) => {

    try {
        if (file) {
            console.log("inside geturl");
            let streamUpload = (file) => {
                return new Promise((resolve, reject) => {
                    let stream = cloudinary.uploader.upload_stream(
                        (error, result) => {
                            if (result) {
                                resolve(result);
                            } else {
                                reject(error);
                            }
                        }
                    );

                    streamifier.createReadStream(file.buffer).pipe(stream);
                });
            };

            async function upload(file) {
                let result = await streamUpload(file);
                return result.secure_url;
            }

            return upload(file);
        }
    } catch (error) {
        console.log(error);
        console.log("inside getEroor of getUrl");
        return ("CANT GET THE IMAGE URL")
    }

}