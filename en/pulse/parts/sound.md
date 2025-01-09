### `sound`
Playing sound

| Field    | Type      | Explanation                       |
|----------|-----------|-----------------------------------|
| `enable` | `boolean` | Enables sound operation           |
| `volume` | `float`   | Sound volume from `0` to `1.0`    |
| `pitch`  | `float`   | Sound tonality from `0` to `1.0`  |
| `type`   | `String`  | Type of sound                     |


::: tip HOW TO USE SOUND?
Replace `false` with `true` and restart `FlectonePulse` with the `/flectonepulse reload` command, the additional parameters for sound customisation will appear AFTER RESTART
:::

Sound settings look like this
```yaml
sound:
  enable: true
  volume: 1.0
  pitch: 1.0
  type: "BLOCK_NOTE_BLOCK_BELL"
```
