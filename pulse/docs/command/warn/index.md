# Комманда /warn
Путь `command.yml > warn`

## Пояснение
Комманда для того, чтобы дать предупреждение игроку
![command warn](/commandwarn.png)

## Редактирование
```yaml
<command.warn>
```

### По умолчанию
```yaml
warn:
  enable: true
  suggest-offline-players: true
  range: -2
  aliases:
    - "warn"
  actions:
    2: "mute <target> 1h"
    3: "ban <target> 1h"
    5: "ban <target>"
  destination:
    type: CHAT
  cooldown:
    enable: false
    duration: 60
  sound:
    enable: false
    type: "BLOCK_NOTE_BLOCK_BELL:1:1"
```

## Параметры

- [Локализация](/docs/localizations/ru_ru/command/warn/)
- [Права](/docs/permission/command/warn/)

<!--@include: @/parts/enable.md-->
<!--@include: @/parts/suggestOfflinePlayers.md-->
<!--@include: @/parts/range.md-->
<!--@include: @/parts/aliases.md-->

### `actions`

Список, где ключом является `количество` предупреждений и значением `действие`, которое должно выполниться

::: tip Например я хочу, чтобы при `10` варнов игрока банило
Тогда я должен вписать `10: ban <target> ohh`. Действие выполнится если у игрока будет `10` активных предупреждений
:::

<!--@include: @/parts/destination.md-->
<!--@include: @/parts/cooldown.md-->
<!--@include: @/parts/sound.md-->