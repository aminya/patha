/* eslint-disable import/no-unresolved */

import { name } from "../dist/index.mjs"
import { normalizeTrim } from "../dist/normalize-trim.mjs"

name("path/to/file.md")
normalizeTrim("/foo/../")
