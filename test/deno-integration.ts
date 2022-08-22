/* eslint-disable import/no-unresolved */

import { name, normalizeTrim, join, delimiter } from "../dist/index.deno.mjs"

name("path/to/file.md")
normalizeTrim("/foo/../")
join("a", "b")
console.log(delimiter)
