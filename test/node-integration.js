const filePaths = require("../dist/node/index.js")
const { name, normalizeTrim, join } = filePaths

name("path/to/file.md")
normalizeTrim("/foo/../")
join("a", "b")
