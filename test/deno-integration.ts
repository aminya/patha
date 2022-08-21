/* eslint-disable import/no-unresolved */

import { name, normalizeTrim, join } from "../dist/deno/index.mjs"

name("path/to/file.md")
normalizeTrim("/foo/../")
join("a", "b")
