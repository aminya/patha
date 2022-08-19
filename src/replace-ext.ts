import replaceExtOrig from "replace-ext"

/**
 * Replaces the extension from path with extension and returns the updated path string.
 *
 * Does not replace the extension if path is not a string or is empty.
 *
 * @example
 *
 * ```js
 * import { replaceExt } from "patha"
 *
 * replaceExt("path/to/file.md", ".html") // gives "path/to/file.html"
 * ```
 *
 * @param path The given path
 * @param extension The extension to replace
 */

export const replaceExt = replaceExtOrig

// TODO replaceExt should not change `/` to `\\` on Windows
