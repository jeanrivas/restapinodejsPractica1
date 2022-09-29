const userGet = (req, res) => {
	const body = req.body;

	res.json({
		message: 'API GET',
		body,
	});
};

const userPost = (req, res) => {
	res.json({
		message: 'API POST',
	});
};

const userPut = (req, res) => {
	res.json({
		message: 'API PUT',
	});
};
const userPatch = (req, res) => {
	res.json({
		message: 'API PATCH',
	});
};

const userDelete = (req, res) => {
	res.json({
		message: 'API DELETE',
	});
};

module.exports = {
	userGet,
	userPost,
	userPut,
	userPatch,
	userDelete,
};
