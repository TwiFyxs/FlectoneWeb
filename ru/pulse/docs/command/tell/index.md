# Комманда /tell
Путь `command.yml > tell`

## Пояснение
Комманда для того, чтобы написать личное сообщение игроку
![command tell](/commandtell.png)

Можно использовать для заметок, если вписать свой же ник
![command tell myself](/commandtellmyself.png)

## Редактирование
```yaml
<command.tell>
```

### По умолчанию
```yaml
tell:
  enable: true
  suggest-offline-players: false
  aliases:
    - "tell"
    - "msg"
    - "w"
    - "message"
    - "send"
    - "m"
  destination:
    type: CHAT
  cooldown:
    enable: false
  sound:
    enable: false
```

## Параметры

- [Локализация](/docs/localizations/ru_ru/command/tell/)
- [Права](/docs/permission/command/tell/)

<!--@include: @/parts/enable.md-->
<!--@include: @/parts/suggestOfflinePlayers.md-->
<!--@include: @/parts/aliases.md-->
<!--@include: @/parts/destination.md-->
<!--@include: @/parts/cooldown.md-->
<!--@include: @/parts/sound.md-->