# Комманда /try
Путь `command.yml > try`

## Пояснение
Комманда для отображения выполнения действия с шансом
![command try](/commandtry.png)

## Редактирование
```yaml
<command.try>
```

### По умолчанию
```yaml
try:
  enable: true
  range: -2
  min: 0
  max: 100
  good: 50
  aliases:
    - "try"
  destination:
    type: CHAT
  cooldown:
    enable: false
  sound:
    enable: false
```

## Параметры

- [Локализация](/docs/localizations/ru_ru/command/try/)
- [Права](/docs/permission/command/try/)

<!--@include: @/parts/enable.md-->
<!--@include: @/parts/range.md-->

### `min`

Минимальный шанс выполнения действия

### `max`

Максимальный шанс выполнения действия

### `good`

Шанс выполнения действия, с которого считается, что оно выполнено успешно

<!--@include: @/parts/aliases.md-->
<!--@include: @/parts/destination.md-->
<!--@include: @/parts/cooldown.md-->
<!--@include: @/parts/sound.md-->