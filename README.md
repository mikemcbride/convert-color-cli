# convert-color-cli

Convert HEX, RGB, and HSL colors to other formats from the command line.

<img src="screenshot.gif" width="688">

## Install

You can install the package globally to use it anywhere:

```sh
npm install -g convert-color-cli # or yarn global add convert-color-cli
```

## Usage

### Globally

Convert RGB, HEX, or HSL, including alpha values for all three. You can pass any color code in as the optional first parameter:

```sh
$ convert-color 'rgb(40, 42, 54)'
$ convert-color 'rgba(40, 42, 54, 75%)'
$ convert-color ff9afd
$ convert-color '#282a36'
$ convert-color 282a36bf
$ convert-color 'hsl(336, 100%, 50%)'
$ convert-color 'hsla(336, 100%, 50%, 0.75)'
```

The CLI app will detect the format of the color you input and ask which type you'd like to convert it to:

```sh
$ convert-color 'hsl(336, 100%, 50%)'

Convert hsl(336, 100%, 50%) to which format:

❯ HEX
  RGB
```

Upon selecting a format, the converted value will be displayed and the result is copied to your clipboard:

```sh
$ convert-color 'hsl(336, 100%, 50%)'

hsl(336, 100%, 50%) converted to RGB is rgb(255, 0, 102).

It has been copied to your clipboard.
```

## Related

- [convert-color-js](https://github.com/mikemcbride/convert-color) - the Node module the powers this CLI. You can also use it in the browser.

## License

MIT © [Mike McBride](https://mikemcbride.me)
