import { normalize, sep } from "path"
import escapeRegexp from "escape-string-regexp"

/**
 * Normalizes the path and removes the trailing slashes.
 *
 * @example
 *
 * ```js
 * import { normalize, normalizeTrim } from "file-paths"
 *
 * normalizeTrim("/foo/bar//baz/asdf/hello/../") // gives "/foo/bar/baz/asdf"
 *
 * normalize("/foo/bar//baz/asdf/hello/../") // gives "/foo/bar/baz/asdf/"
 * ```
 *
 * @param path The given file path
 * @returns The normalized and trimmed file path
 */
export function normalizeTrim(path: string) {
  return normalize(path).replace(new RegExp(`${escapeRegexp(sep)}$`), "")
}
