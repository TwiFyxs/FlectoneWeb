# Комманда /unmute
Путь `command.yml > unmute`

## Пояснение
Комманда для того, чтобы размутить игрока
![command unmute](/commandunmute.png)

## Редактирование
```yaml
<command.unmute>
```

### По умолчанию
```yaml
unmute:
  enable: true
  aliases:
    - "unmute"
  destination:
    type: CHAT
  cooldown:
    enable: false
  sound:
    enable: false
```

## Параметры

- [Локализация](/docs/localizations/ru_ru/command/unmute/)
- [Права](/docs/permission/command/unmute/)

<!--@include: @/parts/enable.md-->
<!--@include: @/parts/aliases.md-->
<!--@include: @/parts/destination.md-->
<!--@include: @/parts/cooldown.md-->
<!--@include: @/parts/sound.md-->