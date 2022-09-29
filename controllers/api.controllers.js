const apisGet = (req, res) => {
	const body = req.body;

	res.json({
		message: 'API GET',
		body,
	});
};

const apisPost = (req, res) => {
	res.json({
		message: 'API POST',
	});
};

const apisPut = (req, res) => {
	res.json({
		message: 'API PUT',
	});
};
const apisPatch = (req, res) => {
	res.json({
		message: 'API PATCH',
	});
};

const apisDelete = (req, res) => {
	res.json({
		message: 'API DELETE',
	});
};

module.exports = {
	apisGet,
	apisPost,
	apisPut,
	apisPatch,
	apisDelete,
};
