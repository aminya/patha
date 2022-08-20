const filePaths = require("../dist/node/index.js")
const { name, normalizeTrim } = filePaths

name("path/to/file.md")
normalizeTrim("/foo/../")
