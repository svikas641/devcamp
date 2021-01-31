// @desc Get All bootcamps
// @route GET /api/v1/bootcamps
// access Public
exports.getBootcamps = (req, res, next) => {
  res.status(200).json({ success: true, msg: '' });
};

// @desc Get single bootcamp
// @route GET /api/v1/bootcamp/:id
// access Public
exports.getBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, msg: '' });
};

// @desc Create new bootcamp
// @route POST /api/v1/bootcamps
// access Private
exports.createBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, msg: '' });
};

// @desc Update bootcamp
// @route GET /api/v1/bootcamp/:id
// access Private
exports.updateBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, msg: '' });
};

// @desc Delete single bootcamp
// @route DELETE /api/v1/bootcamp/:id
// access Private
exports.deleteBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, msg: '' });
};
