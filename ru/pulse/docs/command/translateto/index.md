# Комманда /translateto
Путь `command.yml > translateto`

## Пояснение
Комманда для перевода сообщения с одного языка на другой
![command translateto](/commandtranslateto.png)

## Редактирование
```yaml
<command.translateto>
```

### По умолчанию
```yaml
translateto:
  enable: true
  range: -2
  aliases:
    - "translateto"
  destination:
    type: CHAT
  cooldown:
    enable: false
    duration: 60
  sound:
    enable: false
```

## Параметры

- [Локализация](/docs/localizations/ru_ru/command/translateto/)
- [Права](/docs/permission/command/translateto/)

<!--@include: @/parts/enable.md-->
<!--@include: @/parts/range.md-->
<!--@include: @/parts/aliases.md-->
<!--@include: @/parts/destination.md-->
<!--@include: @/parts/cooldown.md-->
<!--@include: @/parts/sound.md-->