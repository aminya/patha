<!-- Generated via running `pnpm run docs` -->

<h1 align="center">patha</h1>
<p>
  <a href="https://github.com/aminya/patha/actions/workflows/CI.yml" target="_blank">
    <img alt="CI" src="https://github.com/aminya/patha/actions/workflows/CI.yml/badge.svg">
  </a>
  <a href="https://www.npmjs.com/package/patha" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/patha.svg">
  </a>
  <img src="https://img.shields.io/badge/node-%3E%3D12.x-blue.svg" />
  <a href="#" target="_blank">
    <img alt="License: Apache--2.0" src="https://img.shields.io/badge/License-Apache--2.0-yellow.svg" />
  </a>
</p>

> File paths library. All you need to work with paths. drop-in replacement for Nodejs 'path'. Tiny and tree-shakable.

<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [Install](#install)
- [Usage](#usage)
  - [`addExeExt` (function)](#addexeext-function)
  - [`addNamePrefix` (function)](#addnameprefix-function)
  - [`addNameSuffix` (function)](#addnamesuffix-function)
  - [`addShExt` (function)](#addshext-function)
  - [`addShRelativePrefix` (function)](#addshrelativeprefix-function)
  - [`name` (function)](#name-function)
  - [`normalizeTrim` (function)](#normalizetrim-function)
  - [`removeExt` (function)](#removeext-function)
  - [`replaceExt` (variable)](#replaceext-variable)
- [🤝 Contributing](#contributing)

<!-- /code_chunk_output -->

## Install

```sh
npm install --save patha
```

`patha` is tiny and treeshakable.

## Usage

`patha` is a drop-replacement for `path`, which is explained in [the Nodejs documentation](https://nodejs.org/api/path.html).

```js
import {
  basename,
  delimiter,
  dirname,
  extname,
  format,
  isAbsolute,
  join,
  normalize,
  parse,
  posix,
  relative,
  resolve,
  sep,
  toNamespacedPath,
  win32,
} from "patha"
```

Additionally, `patha` supports the following functions:

```js
import {
  name,
  normalizeTrim,
  addExeExt,
  addShExt,
  addNamePrefix,
  addNameSuffix,
  addShRelativePrefix,
  removeExt,
} from "patha"
```

<!-- INSERT GENERATED DOCS START -->

### `addExeExt` (function)

Add bin extension to the given binary name.

**Parameters:**

- name (`string`) - The name you want to add the shell extension to
- win_ext (`string`) - Defaults to `.exe` on Windows
- other_ext (`string`) - Defaults to `""` On other platforms.

**returns:** string

```js
import { addExeExt } from "patha"

addExeExt("path/to/file-name") // gives "path/to/file-name.exe" on Windows and "path/to/file-name" on others
```

### `addNamePrefix` (function)

Adds a prefix to the start of the name of the given path

**Parameters:**

- path (`string`) - The given file path
- prefix (`string`) - The prefix to add to the start of the file name

**returns:** string

```js
import { addNamePrefix } from "patha"

addNamePrefix("path/to/file-name.ext", "new-") // gives "path/to/new-file-name.ext"
```

### `addNameSuffix` (function)

Adds a suffix to the end of the name of the given path

**Parameters:**

- path (`string`) - The given file path
- suffix (`string`) - The suffix to add to the end of the file name

**returns:** string

```js
import { addNameSuffix } from "patha"

addNameSuffix("path/to/file-name.ext", "-old") // gives "path/to/file-name-old.ext"

addNameSuffix("path/to/file-name.ext", ".test") // gives "path/to/file-name.test.ext"
```

### `addShExt` (function)

Add a native shell extension to the given name.

**Parameters:**

- name (`string`) - The name you want to add the shell extension to
- win_ext (`string`) - `.cmd` on Windows
- other_ext (`string`) - `.sh` On others.

**returns:** string

```js
import { addShExt } from "patha"

addShExt("path/to/file-name") // gives "path/to/file-name.cmd" on Windows and "path/to/file-name.sh" on others

addShExt("path/to/file-name", ".bat") // gives "path/to/file-name.bat" on Windows and "path/to/file-name.sh" on others
```

### `addShRelativePrefix` (function)

Prefix a `./` for unix shell and nothing for `cmd`.

**Parameters:**

- path (`string`) - The given path

**returns:** string

### `name` (function)

Get the name of the given file path.

By default the file extension is included in the returned name. To remove the extension, set the second parameter to `false`.

**Parameters:**

- path (`string`) - The given file path
- includeExtension (`boolean`) - If the name should include the file extension as well

**returns:** string

```js
import { name } from "patha"

name("path/to/file.md") // gives "file.md"

name("path/to/file.md", false) // gives "file"
```

### `normalizeTrim` (function)

Normalizes the path and removes the trailing slashes.

**Parameters:**

- path (`string`) - The given file path

**returns:** string

```js
import { normalize, normalizeTrim } from "patha"

normalizeTrim("/foo/bar//baz/asdf/hello/../") // gives "/foo/bar/baz/asdf"

normalize("/foo/bar//baz/asdf/hello/../") // gives "/foo/bar/baz/asdf/"
```

### `removeExt` (function)

Remove a path's extension.

**Parameters:**

- path (`string`) - The given path

**returns:** string

```js
import { removeExt } from "patha"
removeExt("some/dir/file.ext") // gives "some/dir/file"
```

### `replaceExt` (variable)

Replaces the extension from path with extension and returns the updated path string.

Does not replace the extension if path is not a string or is empty.

**Parameters:**

- path - The given path
- extension - The extension to replace

```js
import { replaceExt } from "patha"

replaceExt("path/to/file.md", ".html") // gives "path/to/file.html"
```

<!-- INSERT GENERATED DOCS END -->

## 🤝 Contributing

You can sponsor my work here:

https://github.com/sponsors/aminya

Pull requests, issues and feature requests are welcome.
See the [Contributing guide](https://github.com/aminya/patha/blob/master/CONTRIBUTING.md).
