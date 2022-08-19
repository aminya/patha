import { basename, dirname, extname, join } from "path"

/**
 * Adds a prefix to the start of the name of the given path
 *
 * @example
 *
 * ```js
 * import { addNamePrefix } from "patha"
 *
 * addNamePrefix("path/to/file-name.ext", "new-") // gives "path/to/new-file-name.ext"
 * ```
 *
 * @param path The given file path
 * @param prefix The prefix to add to the start of the file name
 * @returns The path with a prefix added to its file name
 */
export function addNamePrefix(path: string, prefix: string) {
  // get the extension and the file name
  const ext = extname(path)
  const nameWithoutExt = basename(path, ext)

  // add the name prefix
  const NameWithPrefix = `${prefix}${nameWithoutExt}${ext}`

  // add the dirname back
  return join(dirname(path), NameWithPrefix)
}
