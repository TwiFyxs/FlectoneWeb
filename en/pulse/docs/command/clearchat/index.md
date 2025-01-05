# Комманда /clearchat
Путь `command.yml > clearchat`

## Пояснение
Комманда для очищения чата
![command clearchat](/commandclearchat.png)

## Редактирование
```yaml
<command.clearchat>
```

### По умолчанию
```yaml
clearchat:
  enable: true
  aliases:
    - "clearchat"
  destination:
    type: CHAT
  cooldown:
    enable: false
  sound:
    enable: false
```

## Параметры

- [Локализация](/docs/localizations/ru_ru/command/clearchat/)
- [Права](/docs/permission/command/clearchat/)

<!--@include: @/parts/enable.md-->
<!--@include: @/parts/aliases.md-->
<!--@include: @/parts/destination.md-->
<!--@include: @/parts/cooldown.md-->
<!--@include: @/parts/sound.md-->