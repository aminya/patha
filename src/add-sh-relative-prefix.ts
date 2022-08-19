/**
 * Prefix a `./` for unix shell and nothing for `cmd`.
 *
 * @example
 *
 * ```js
 * import { addShRelativePrefix } from "patha"
 *
 * addShRelativePrefix("some/file-name") // gives "some/file-name" on Windows and "./some/file-name" on others.
 * ```
 *
 * @param path The given path
 * @returns The path with `./` added on Unix
 */
export function addShRelativePrefix(path: string) {
  if (process.platform === "win32") {
    return path
  }
  return `./${path}`
}
