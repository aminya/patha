import { extname } from "path"

/**
 * Remove a path's extension.
 *
 * @example
 *
 * ```js
 * import { removeExt } from "patha"
 * removeExt("some/dir/file.ext") // gives "some/dir/file"
 * ```
 *
 * @param path The given path
 * @returns The path without its file extension
 */
export function removeExt(path: string) {
  const extensionLength = extname(path).length
  return path.slice(0, -extensionLength)
}
