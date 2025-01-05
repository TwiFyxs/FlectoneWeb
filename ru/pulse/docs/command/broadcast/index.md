# Комманда /broadcast
Путь `command.yml > broadcast`

## Пояснение
Комманда для глобального оповещения
![command broadcast](/commandbroadcast.png)

## Редактирование
```yaml
<command.broadcast>
```

### По умолчанию
```yaml
broadcast:
  enable: true
  range: -2
  aliases:
    - "broadcast"
  destination:
    type: CHAT
  cooldown:
    enable: false
  sound:
    enable: false
```

## Параметры

- [Локализация](/docs/localizations/ru_ru/command/banlist/)
- [Права](/docs/permission/command/banlist/)

<!--@include: @/parts/enable.md-->
<!--@include: @/parts/range.md-->
<!--@include: @/parts/aliases.md-->
<!--@include: @/parts/destination.md-->
<!--@include: @/parts/cooldown.md-->
<!--@include: @/parts/sound.md-->