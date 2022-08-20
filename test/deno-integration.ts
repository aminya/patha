/* eslint-disable import/no-unresolved */

import { name, normalizeTrim } from "../dist/deno/index.mjs"

name("path/to/file.md")
normalizeTrim("/foo/../")
