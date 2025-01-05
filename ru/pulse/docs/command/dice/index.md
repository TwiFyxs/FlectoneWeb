# Комманда /dice
Путь `command.yml > dice`

## Пояснение
Комманда для броска кубиков на удачу
![command dice](/commanddice.png)

## Редактирование
```yaml
<command.dice>
```

### По умолчанию
```yaml
dice:
  enable: true
  range: -2
  min: 1
  max: 6
  aliases:
    - "dice"
  destination:
    type: CHAT
  cooldown:
    enable: false
  sound:
    enable: false
```

## Параметры

- [Локализация](/docs/localizations/ru_ru/command/dice/)
- [Права](/docs/permission/command/dice/)

<!--@include: @/parts/enable.md-->
<!--@include: @/parts/range.md-->

### `min`

Минимальное количество кубиков

### `max`

Максимальное количество кубиков

<!--@include: @/parts/aliases.md-->
<!--@include: @/parts/destination.md-->
<!--@include: @/parts/cooldown.md-->
<!--@include: @/parts/sound.md-->