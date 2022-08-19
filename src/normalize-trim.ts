import { normalize, sep } from "./path"
import escapeRegexp from "escape-string-regexp"

/**
 * Similar to `normalize` function, but it also trims trailing slashes. This is useful for comparing file paths.
 *
 * @param path The given file path
 * @returns The normalized and trimmed file path
 */
export function normalizeTrim(path: string) {
  return normalize(path).replace(new RegExp(`${escapeRegexp(sep)}$`), "")
}
