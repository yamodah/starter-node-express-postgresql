const categoriesService = require("./categories.service");

async function list(req, res, next) {
  const data = await categoriesService.list()
  res.json({data})
}

module.exports = {
  list,
};

