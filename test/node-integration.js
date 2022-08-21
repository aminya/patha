const filePaths = require("../dist/index.node.cjs")
const { name, normalizeTrim, join } = filePaths

name("path/to/file.md")
normalizeTrim("/foo/../")
join("a", "b")
