//@desc   Get All Bootcamps
//@route   GET /API/v1/bootcamps
//@access Public
exports.getBootcamps = (req, res, next) => {
    res.status(200).json({success: true, msg:'Show all bootcamps'})
};

//@desc   Get single Bootcamp
//@route   GET /API/v1/bootcamps/:id
//@access Public
exports.getBootcamp = (req, res, next) => {
    res.status(200).json({success: true, msg:`Show bootcamp ${req.params.id}`})
};

//@desc   create new Bootcamp
//@route   POST /API/v1/bootcamps
//@access  Private
exports.createBootcamp = (req, res, next) => {
    res
        .status(200)
        .json({success: true, msg:'Create new bootcamp'})
};

//@desc   Update new Bootcamp
//@route   POST /API/v1/bootcamps/:id
//@access  Private
exports.updateBootcamp = (req, res, next) => {
    res
        .status(200)
        .json( {success: true, msg: `Update bootcamp ${req.params.id} `})
};

//@desc   Delete Bootcamp
//@route   Delete /API/v1/bootcamps/:id
//@access  Private
exports.deleteBootcamp = (req, res, next) => {
    res
        .status(200)
        .json({success: true, msg: `Delete bootcamp ${req.params.id} `})
}

