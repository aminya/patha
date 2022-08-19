import { basename, extname } from "./path"

/**
 * Get the base name of a path without the file extension
 *
 * @param path The given file path
 * @returns The base name without the extension
 *
 *   Example:
 *
 *   ```js
 *   import { base, basename } from "file-paths"
 *
 *   base("path/to/file.md") // gives "file"
 *
 *   basename("path/to/file.md") // gives "file.md"
 *   ```
 */
export function base(path: string) {
  return basename(path, extname(path))
}
