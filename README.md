# convert-color-cli

Convert HEX codes to RGB and vice-versa from the command line.

## Install

```
npm install -g convert-color-cli
```

## Usage

```
$ convert-color --help

  Examples
  # rgb to hex
  $ convert-color 255 154 253
  ff9afd
  $ convert-color 'rgb(40, 42, 54)'
  282a36
  $ convert-color 'rgba(40, 42, 54, 75%)'
  282a36bf

  # hex to rgb
  $ convert-color ff9afd
  rgb(255, 154, 253)
  $ convert-color '#282a36'
  rgb(40, 42, 54)
  $ convert-color 282a36bf
  rgba(40, 42, 54, 75%)
```

## Related

- [hex-rgb](https://github.com/sindresorhus/hex-rgb) - Convert HEX to RGB
- [rgb-hex](https://github.com/sindresorhus/rgb-hex) - Convert RGB to HEX

## License

MIT © [Mike McBride](https://mikemcbride.me)