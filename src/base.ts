import { basename, extname } from "./path"

/**
 * Get the base name of a path with or without the file extension.
 *
 * By default the file extension is included in the base name. To remove the extension, set the second parameter to `false`.
 *
 * @param path The given file path
 * @param includeExtension If the name should include the file extension as well
 * @returns The base name without the extension
 *
 *   Example:
 *
 *   ```js
 *   import { base } from "file-paths"
 *
 *   base("path/to/file.md") // gives "file.md"
 *
 *   base("path/to/file.md", false) // gives "file"
 *   ```
 */
export function base(path: string, includeExtension: boolean = true) {
  if (includeExtension) {
    return basename(path)
  } else {
    return basename(path, extname(path))
  }
}
