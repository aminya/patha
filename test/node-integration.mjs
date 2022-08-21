/* eslint-disable import/no-unresolved */

import { name, join } from "../dist/index.node.mjs"
import { normalizeTrim } from "../dist/normalize-trim.mjs"

name("path/to/file.md")
normalizeTrim("/foo/../")
join("a", "b")
