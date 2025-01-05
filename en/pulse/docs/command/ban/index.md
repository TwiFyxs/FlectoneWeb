# Комманда /ban
Путь `command.yml > ban`

## Пояснение
Комманда для того, чтобы заблокировать игрока
![command ban](/commandban.png)

От лица игрока
![command ban player](/commandbanplayer.png)

## Редактирование
```yaml
<command.ban>
```

### По умолчанию
```yaml
ban:
  enable: true
  suggest-offline-players: true
  show-connection-attempts: true
  range: -2
  aliases:
    - "ban"
    - "tempban"
  destination:
    type: CHAT
  cooldown:
    enable: false
  sound:
    enable: false
```

## Параметры

- [Локализация](/docs/localizations/ru_ru/command/ban/)
- [Права](/docs/permission/command/ban/)

<!--@include: @/parts/enable.md-->
<!--@include: @/parts/suggestOfflinePlayers.md-->

### `show-connection-attempts`

Если включено, то будет показывать сообщение, что заблокированный игрок пытался подключиться
![command ban connect](/commandbanconnect.png)

<!--@include: @/parts/range.md-->
<!--@include: @/parts/aliases.md-->
<!--@include: @/parts/destination.md-->
<!--@include: @/parts/cooldown.md-->
<!--@include: @/parts/sound.md-->