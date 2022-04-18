import enums from '../enums';
import axios from 'axios';

const config = process.env;

const verifyToken = (req, res, next) => {
	if (!req.headers.authorization) {
		return res.status(enums.STATUS_CODES.UNAUTHORIZED).send({ error: enums.REASON_PHRASES.UNAUTHORIZED });
	}
	const token = req.headers.authorization.split(' ')[1];
	axios
		.post(`http://${config.IDENTITY_HOST}/user/auth`, {
			token: token
		})
		.then((res) => {
			const authorized = res.data['data']['authorized'];
			return next();
		})
		.catch((err) => {
			console.error(err);
			return res.status(enums.STATUS_CODES.UNAUTHORIZED).send({ error: enums.REASON_PHRASES.UNAUTHORIZED });
		});
};

export default verifyToken;
