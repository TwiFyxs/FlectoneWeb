# Комманда /helper
Путь `command.yml > helper`

## Пояснение
Комманда для того, чтобы попросить помощь
![command helper](/commandhelper.png)

От лица помощника
![command helper player](/commandhelperadmin.png)

## Редактирование
```yaml
<command.helper>
```

### По умолчанию
```yaml
helper:
  enable: true
  range: -2
  aliases:
    - "helper"
  destination:
    type: CHAT
  cooldown:
    enable: false
  sound:
    enable: false
```

## Параметры

- [Локализация](/docs/localizations/ru_ru/command/helper/)
- [Права](/docs/permission/command/helper/)

<!--@include: @/parts/enable.md-->
<!--@include: @/parts/range.md-->
<!--@include: @/parts/aliases.md-->
<!--@include: @/parts/destination.md-->
<!--@include: @/parts/cooldown.md-->
<!--@include: @/parts/sound.md-->