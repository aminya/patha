import { join } from "path"
import { isSudo } from "admina"
import { homedir } from "os"

/**
 * Get the path to the home directory
 *
 * @example
 *
 * ```js
 * import { homeDirectory } from "patha"
 *
 * homeDirectory() // gives '/home/your_name/' on Linux, `/Users/your_name/` on MacOS, and `C:\\Users\\your_name` on Windows
 * ```
 *
 * @note It uses the `SUDO_USER` name to find the home directory, if the code is running as `sudo`.
 */
export function homeDirectory() {
  if (isSudo() && typeof process.env.SUDO_USER === "string") {
    // use the user profile even if root
    if (process.platform === "darwin") {
      return join("/Users/", process.env.SUDO_USER)
    } else {
      return join("/home/", process.env.SUDO_USER)
    }
  } else {
    return homedir()
  }
}
