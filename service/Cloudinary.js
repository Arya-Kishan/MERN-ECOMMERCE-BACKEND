const cloudinary = require("cloudinary").v2;
const multer = require("multer")
const streamifier = require("streamifier")

const storage = multer.memoryStorage();
exports.SingleUpload = multer({ storage }).single("photo")

cloudinary.config({
    cloud_name: 'dwvuqahw2',
    api_key: '563441375781984',
    api_secret: 'x2dEVPTIwie3i9dBNG2-wyCMz1Y'
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