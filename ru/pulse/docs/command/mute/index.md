# Комманда /mute
Путь `command.yml > mute`

## Пояснение
Комманда для того, чтобы замутить игрока
![command mute](/commandmute.png)

## Редактирование
```yaml
<command.mute>
```

### По умолчанию
```yaml
mute:
  enable: true
  suggest-offline-players: true
  range: -2
  aliases:
    - "mute"
  destination:
    type: CHAT
  cooldown:
    enable: false
  sound:
    enable: false
```

## Параметры

- [Локализация](/docs/localizations/ru_ru/command/mute/)
- [Права](/docs/permission/command/mute/)

<!--@include: @/parts/enable.md-->
<!--@include: @/parts/suggestOfflinePlayers.md-->
<!--@include: @/parts/range.md-->
<!--@include: @/parts/aliases.md-->
<!--@include: @/parts/destination.md-->
<!--@include: @/parts/cooldown.md-->
<!--@include: @/parts/sound.md-->