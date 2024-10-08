import multer from "multer";

const storage = multer.diskStorage({

    destination: (request, file, callback) => {

        callback(null, 'uploads');

    },

    filename: (request, file, callback) => {

        callback(null, file.originalname);

    },

});

const uploads = multer({ storage: storage });

export { uploads };