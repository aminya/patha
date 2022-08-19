const filePaths = require("../dist/index.js")
const { name, normalizeTrim } = filePaths

name("path/to/file.md")
normalizeTrim("/foo/../")
