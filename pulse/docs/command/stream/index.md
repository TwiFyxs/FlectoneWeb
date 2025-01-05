# Комманда /stream
Путь `command.yml > stream`

## Пояснение
Комманда для оповещения о запуске трансляции
![command stream](/commandstream.png)

Если стрим включен, то игроку выдаётся префикс
![command stream prefix](/commandstreamprefix.png)

## Редактирование
```yaml
<command.stream>
```

### По умолчанию
```yaml
stream:
  enable: true
  range: -2
  aliases:
    - "stream"
  destination:
    type: CHAT
  cooldown:
    enable: false
  sound:
    enable: true
    type: "BLOCK_NOTE_BLOCK_BELL:1:1"
```

## Параметры

- [Локализация](/docs/localizations/ru_ru/command/stream/)
- [Права](/docs/permission/command/stream/)

<!--@include: @/parts/enable.md-->
<!--@include: @/parts/range.md-->
<!--@include: @/parts/aliases.md-->
<!--@include: @/parts/destination.md-->
<!--@include: @/parts/cooldown.md-->
<!--@include: @/parts/sound.md-->