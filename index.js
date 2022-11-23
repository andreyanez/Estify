require('dotenv').config();
const express = require('express');
const app = express();
const queryString = require('query-string');
const axios = require('axios');
const path = require('path');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const fetch = require('node-fetch');

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI;
const FRONTEND_URI = process.env.FRONTEND_URI;
const PORT = 8080;

app.use(express.static(path.resolve(__dirname, './client/dist')));

app
	.use(express.static(path.resolve(__dirname, '../client/dist')))
	.use(cors())
	.use(cookieParser())
	.use(express.static(path.resolve(__dirname, '../client/dist')));

app.get('/', function (req, res) {
	res.render(path.resolve(__dirname, '../client/dist/index.html'));
});

app.listen(PORT, () => {
	console.log(`listening on http://localhost:${PORT}`);
});

const generateRandomString = length => {
	var text = '';
	var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

	for (var i = 0; i < length; i++)
		text += possible.charAt(Math.floor(Math.random() * possible.length));

	return text;
};

const stateKey = 'spotify_auth_state';

app.get('/login', (req, res) => {
	const state = generateRandomString(16);
	res.cookie(stateKey, state);
	const scope =
		'user-read-private user-read-email user-read-recently-played user-top-read user-follow-read user-follow-modify playlist-read-private playlist-read-collaborative playlist-modify-public';
	const queryParams = queryString.stringify({
		client_id: CLIENT_ID,
		response_type: 'code',
		redirect_uri: REDIRECT_URI,
		state: state,
		scope: scope,
	});
	// console.log(queryParams);
	res.redirect(`https://accounts.spotify.com/authorize?${queryParams}`);
});

app.get('/callback', (req, res) => {
	const code = req.query.code || null;
	const queryParams = queryString.stringify({
		grant_type: 'authorization_code',
		code: code,
		redirect_uri: REDIRECT_URI,
	});

	const options = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
			Authorization:
				'Basic MzM2YTU1ZjE5YjVjNDE4YWE3ZjE3MDU5YjgxNDU1ODI6ZGVmYjBiYmNjZjk5NDdlM2EzMTIzMzA5Mzk2M2I3N2Q=',
		},
		body: new URLSearchParams({
			code: code,
			redirect_uri: 'http://localhost:8080/callback',
			grant_type: 'authorization_code',
		}),
	};

	fetch('https://accounts.spotify.com/api/token', options)
		.then(response => response.json())
		.then(response => {
			const { access_token, refresh_token, expires_in } = response;
			const queryParams = queryString.stringify({
				access_token,
				refresh_token,
				expires_in,
			});
			res.redirect(`${FRONTEND_URI}/?${queryParams}`);
		})
		.catch(err => res.send(error));

	// if (response.status === 200) {
	// 	// const { access_token, refresh_token, expires_in } = response.data;
	// 	// const queryParams = queryString.stringify({
	// 	// 	access_token,
	// 	// 	refresh_token,
	// 	// 	expires_in,
	// 	// });
	// 	// res.redirect(`${FRONTEND_URI}/?${queryParams}`);
	// } else {
	// 	res.send(
	// 		`/?${queryString.stringify({
	// 			error: 'invalid_token',
	// 		})}`
	// 	);
	// }
});

app.get('/refresh_token', async (req, res) => {
	const { refresh_token } = req.query;

	try {
		const response = await axios({
			method: 'post',
			url: 'https://accounts.spotify.com/api/token',
			headers: {
				'content-type': 'application/x-www-form-urlencoded',
				Authorization: `Basic ${new Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString(
					'base64'
				)}`,
			},
			data: queryString.stringify({
				grant_type: 'refresh_token',
				refresh_token: refresh_token,
			}),
		});

		res.send(response.data);
	} catch (error) {
		res.send(error);
	}
});

app.get('*', (req, res) => {
	res.sendFile(path.resolve(__dirname, './client/dist', 'index.html'));
});
