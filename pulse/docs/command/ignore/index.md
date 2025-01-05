# Комманда /ignore
Путь `command.yml > ignore`

## Пояснение
Комманда для игнорирования всех сообщений от игрока
![command ignore](/commandignore.png)

Убирается игнорирование с помощью повторного использования
![command unignore](/commandunignore.png)

## Редактирование
```yaml
<command.ignore>
```

### По умолчанию
```yaml
ignore:
  enable: true
  suggest-offline-players: true
  aliases:
    - "ignore"
  destination:
    type: CHAT
  cooldown:
    enable: false
  sound:
    enable: false
```

## Параметры

- [Локализация](/docs/localizations/ru_ru/command/ignore/)
- [Права](/docs/permission/command/ignore/)

<!--@include: @/parts/enable.md-->
<!--@include: @/parts/suggestOfflinePlayers.md-->
<!--@include: @/parts/aliases.md-->
<!--@include: @/parts/destination.md-->
<!--@include: @/parts/cooldown.md-->
<!--@include: @/parts/sound.md-->