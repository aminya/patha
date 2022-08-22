/* eslint-disable import/no-unresolved */

import { name, join, delimiter } from "../dist/index.node.mjs"
import { normalizeTrim } from "../dist/normalize-trim.mjs"

name("path/to/file.md")
normalizeTrim("/foo/../")
join("a", "b")
console.log(delimiter)
