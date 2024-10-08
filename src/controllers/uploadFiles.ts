import multer from "multer";

const storage = multer.diskStorage({

    destination: (request, file, callback) => {

        callback(null, 'uploads');

    },

    filename: (request, file, callback) => {

        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        
        const extension = file.originalname;

        callback(null, uniqueSuffix + extension);

    },

});

const uploads = multer({ storage: storage });

export { uploads };