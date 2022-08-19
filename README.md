<!-- Generated via running `pnpm run docs` -->

<h1 align="center">file-paths</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.1.0-blue.svg?cacheSeconds=2592000" />
  <img src="https://img.shields.io/badge/node-%3E%3D12.x-blue.svg" />
  <a href="#" target="_blank">
    <img alt="License: Apache--2.0" src="https://img.shields.io/badge/License-Apache--2.0-yellow.svg" />
  </a>
</p>

> File paths library. All you need to work with paths. Drop-in replacement for Nodejs 'path'.

## Install

```sh
npm install --save file-paths
```

## Usage

<!-- INSERT GENERATED DOCS START -->

### `addNamePrefix` (function)

Adds a prefix to the start of the name of the given path

**Parameters:**

- path (`string`) - The given file path
- prefix (`string`) - The prefix to add to the start of the file name

**returns:** string

```js
import { addNamePrefix } from "file-paths"

addNamePrefix("path/to/file-name.ext", "new-") // gives "path/to/new-file-name.ext"
```

### `addNameSuffix` (function)

Adds a suffix to the end of the name of the given path

**Parameters:**

- path (`string`) - The given file path
- suffix (`string`) - The suffix to add to the end of the file name

**returns:** string

```js
import { addNameSuffix } from "file-paths"

addNameSuffix("path/to/file-name.ext", "-old") // gives "path/to/file-name-old.ext"

addNameSuffix("path/to/file-name.ext", ".test") // gives "path/to/file-name.test.ext"
```

### `normalizeTrim` (function)

Normalizes the path and removes the trailing slashes.

**Parameters:**

- path (`string`) - The given file path

**returns:** string

```js
import { normalize, normalizeTrim } from "file-paths"

normalizeTrim("/foo/bar//baz/asdf/hello/../") // gives "/foo/bar/baz/asdf"

normalize("/foo/bar//baz/asdf/hello/../") // gives "/foo/bar/baz/asdf/"
```

### `name` (function)

Get the name of the given file path.

By default the file extension is included in the returned name. To remove the extension, set the second parameter to `false`.

**Parameters:**

- path (`string`) - The given file path
- includeExtension (`boolean`) - If the name should include the file extension as well

**returns:** string

```js
import { name } from "file-paths"

name("path/to/file.md") // gives "file.md"

name("path/to/file.md", false) // gives "file"
```

### `removeExt` (function)

Remove a path's extension.

**Parameters:**

- path (`string`) - The given path

**returns:** string

```js
import { removeExt } from "file-paths"
removeExt("some/dir/file.ext") // gives "some/dir/file"
```

<!-- INSERT GENERATED DOCS END -->

## 🤝 Contributing

You can sponsor my work here:

https://github.com/sponsors/aminya

Pull requests, issues and feature requests are welcome.
See the [Contributing guide](https://github.com/aminya/file-paths/blob/master/CONTRIBUTING.md).
