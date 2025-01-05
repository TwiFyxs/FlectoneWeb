# Комманда /unban
Путь `command.yml > unban`

## Пояснение
Комманда для того, чтобы разблокировать игрока
![command unban](/commandunban.png)

## Редактирование
```yaml
<command.unban>
```

### По умолчанию
```yaml
unban:
  enable: true
  aliases:
    - "unban"
    - "pardon"
  destination:
    type: CHAT
  cooldown:
    enable: false
  sound:
    enable: false
```

## Параметры

- [Локализация](/docs/localizations/ru_ru/command/unban/)
- [Права](/docs/permission/command/unban/)

<!--@include: @/parts/enable.md-->
<!--@include: @/parts/aliases.md-->
<!--@include: @/parts/destination.md-->
<!--@include: @/parts/cooldown.md-->
<!--@include: @/parts/sound.md-->