### `sound`
Проигрывание звука

| Поле       | Тип       | Пояснение                                                                                                        |
|------------|-----------|------------------------------------------------------------------------------------------------------------------|
| `enable`   | `boolean` | Включает работу звука                                                                                            |
| `volume`   | `float`   | Громкость звука от `0` до `1.0`                                                                                  |
| `pitch`    | `float`   | Тональность звука от `0` до `1.0`                                                                                |
| `category` | `String`  | Категория из `MASTER`, `MUSIC`, `RECORD`, `WEATHER`, `BLOCK`, `HOSTILE`, `NEUTRAL`, `PLAYER`, `AMBIENT`, `VOICE` |
| `name`     | `String`  | Название звука, например `minecraft:entity.llama.spit`                                                           |


::: tip КАК ИСПОЛЬЗОВАТЬ ЗВУК?
Замени `false` на `true` и перезапусти `FlectonePulse` с помощью комманды `/flectonepulse reload`, дополнительные параметры для настройки звука появятся ПОСЛЕ ПЕРЕЗАГРУЗКИ
:::

В итоге настройка звука выглядит так
```yaml
sound:
  enable: true
  volume: 1.0
  pitch: 1.0
  category: "HOSTILE"
  name: "minecraft:entity.llama.spit"
```
