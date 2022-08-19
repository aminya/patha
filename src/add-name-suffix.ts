import { basename, dirname, extname, join } from "./path"

/**
 * Adds a suffix to the end of the name of the given path
 *
 * @example
 *
 * ```js
 * import { addNameSuffix } from "file-paths"
 *
 * addNameSuffix("path/to/file-name.ext", "-old") // gives "path/to/file-name-old.ext"
 * ```
 *
 * @param filePath The given file path
 * @param suffix The suffix to add to the end of the file name
 * @returns The file path with a suffix added to its file name
 */
export function addNameSuffix(filePath: string, suffix: string) {
  // get the extension and the file name
  const ext = extname(filePath)
  const nameWithoutExt = basename(filePath, ext)

  // add the name suffix
  const NameWithSuffix = `${nameWithoutExt}${suffix}${ext}`

  // add the dirname back
  return join(dirname(filePath), NameWithSuffix)
}
