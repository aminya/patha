/* eslint-disable import/no-unresolved */

import { name, normalizeTrim, join } from "../dist/index.deno.mjs"

name("path/to/file.md")
normalizeTrim("/foo/../")
join("a", "b")
