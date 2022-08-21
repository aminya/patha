/* eslint-disable import/no-unresolved */

import { name, join } from "../dist/node/index.mjs"
import { normalizeTrim } from "../dist/node/normalize-trim.mjs"

name("path/to/file.md")
normalizeTrim("/foo/../")
join("a", "b")
