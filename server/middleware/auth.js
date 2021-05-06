import jwt from 'jsonwebtoken';

const auth = async (req, res, next) => {
    console.log('xxxxxx', req.headers)
    try {
      
        const token = req.headers.authorization.split(' ')[1];

        const isCustomAuth = token.length < 500;

        let decodedData;

        if(token && isCustomAuth){
            decondedData = jwt.verify(token, 'secret');

            req.userId = decodedData?.id;

        } else {
            decondedData = jwt.decode(token);

            req.userId = decodedData?.sub

        }

        next();

    } catch (error) {
        console.log(error)
    }
}

export default auth;