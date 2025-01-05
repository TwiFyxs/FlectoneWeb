# Комманда /online
Путь `command.yml > online`

## Пояснение
Комманда для того, чтобы узнать информацию об онлайне игрока
![command online](/commandonline.png)

## Редактирование
```yaml
<command.online>
```

### По умолчанию
```yaml
online:
  enable: true
  suggest-offline-players: true
  range: -2
  aliases:
    - "online"
  destination:
    type: CHAT
  cooldown:
    enable: false
  sound:
    enable: false
```

## Параметры

- [Локализация](/docs/localizations/ru_ru/command/online/)
- [Права](/docs/permission/command/online/)

<!--@include: @/parts/enable.md-->
<!--@include: @/parts/suggestOfflinePlayers.md-->
<!--@include: @/parts/range.md-->
<!--@include: @/parts/aliases.md-->
<!--@include: @/parts/destination.md-->
<!--@include: @/parts/cooldown.md-->
<!--@include: @/parts/sound.md-->