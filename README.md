# VSCode support for the Oxlip API Language

## Installation

1. Follow instructions on how to install [OAL](https://www.oxlip-lang.org/doc/installation.html).

2. Install the [VSCode extension](https://marketplace.visualstudio.com/items?itemName=e7bastien.oxlip-lang).

3. Point the `oal.serverPath` setting to the `oal-lsp` binary.

4. The extension looks for an `oal.toml` [configuration file](https://www.oxlip-lang.org/doc/usage.html#configuration) at the root of your VSCode project folder.

Disclaimer: This extension is still experimental. The user experience might feel rough.

## Capabilities

- Syntax highlighting
- Interactive compilation error reporting
- Identifier definition lookup
- Identifier references lookup
- Identifier rename

## Development
[Visual Studio Code](https://code.visualstudio.com/) and [Visual Studio Code Extensions](https://github.com/microsoft/vscode-vsce) must be installed first.
```
npm install
make install
```
