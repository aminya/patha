import { basename, dirname, extname, join } from "path"

/**
 * Adds a suffix to the end of the name of the given path
 *
 * @example
 *
 * ```js
 * import { addNameSuffix } from "patha"
 *
 * addNameSuffix("path/to/file-name.ext", "-old") // gives "path/to/file-name-old.ext"
 *
 * addNameSuffix("path/to/file-name.ext", ".test") // gives "path/to/file-name.test.ext"
 * ```
 *
 * @param path The given file path
 * @param suffix The suffix to add to the end of the file name
 * @returns The path with a suffix added to its file name
 */
export function addNameSuffix(path: string, suffix: string) {
  // get the extension and the file name
  const ext = extname(path)
  const nameWithoutExt = basename(path, ext)

  // add the name suffix
  const NameWithSuffix = `${nameWithoutExt}${suffix}${ext}`

  // add the dirname back
  return join(dirname(path), NameWithSuffix)
}
