import { homeDirectory } from "./home-directory"

const tildePrefixRegex = /^~(?=$|\/|\\)/

/**
 * Convert a tilde path to an absolute path by expanding the home directory path.
 *
 * @example
 *
 * ```js
 * import { untildify } from "patha"
 *
 * untildify("~/some_path") // gives '/home/your_name/some_path' on Linux, `/Users/your_name/some_path` on MacOS, and `C:\\Users\\your_name\\some_path` on Windows
 * ```
 *
 * @note It uses the `SUDO_USER` name to find the home directory, if the code is running as `sudo`.
 */
export function untildify(path: string) {
  return path.replace(tildePrefixRegex, homeDirectory())
}
