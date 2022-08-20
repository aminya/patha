/* eslint-disable import/no-unresolved */

import { name } from "../dist/node/index.mjs"
import { normalizeTrim } from "../dist/node/normalize-trim.mjs"

name("path/to/file.md")
normalizeTrim("/foo/../")
