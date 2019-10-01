# convert-color-cli

Convert HEX codes to RGB and vice-versa from the command line.

## Install

You can install the package globally to use it anywhere:

```sh
npm install -g convert-color-cli # or yarn global add convert-color-cli
```

## Usage

### Globally

Convert RGB to HEX. You can pass the three RGB values as separate arguments or you can pass the full `rgb(x,x,x)` string wrapped in quotes. If doing RGBA, you must wrap in quotes.

```sh
$ convert-color 255 154 253
> ff9afd

$ convert-color 'rgb(40, 42, 54)'
> 282a36

$ convert-color 'rgba(40, 42, 54, 75%)'
> 282a36bf
```

Convert HEX to RGB. The `#` is optional but if you include it you must wrap the input in quotes. It can also handle HEX codes with alpha values.

```sh
$ convert-color ff9afd
> rgb(255, 154, 253)
$ convert-color '#282a36'
> rgb(40, 42, 54)
$ convert-color 282a36bf
> rgba(40, 42, 54, 75%)
```

## Related

This CLI makes heavy use of these excellent modules under the hood:

- [hex-rgb](https://github.com/sindresorhus/hex-rgb) - Convert HEX to RGB
- [rgb-hex](https://github.com/sindresorhus/rgb-hex) - Convert RGB to HEX

## License

MIT © [Mike McBride](https://mikemcbride.me)