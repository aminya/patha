import { basename, extname } from "path"

/**
 * Get the name of the given file path.
 *
 * By default the file extension is included in the returned name. To remove the extension, set the second parameter to `false`.
 *
 * @example
 *
 * ```js
 * import { name } from "file-paths"
 *
 * name("path/to/file.md") // gives "file.md"
 *
 * name("path/to/file.md", false) // gives "file"
 * ```
 *
 * @param path The given file path
 * @param includeExtension If the name should include the file extension as well
 * @returns The base name without the extension
 */
export function name(path: string, includeExtension: boolean = true) {
  if (includeExtension) {
    return basename(path)
  } else {
    return basename(path, extname(path))
  }
}
