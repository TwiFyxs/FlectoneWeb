# Комманда /ball
Путь `command.yml > ball`

## Пояснение
Комманда для того, чтобы задать вопрос Магическому Шару
![command ball](/commandball.png)

## Редактирование
```yaml
<command.ball>
```

### По умолчанию
```yaml
ball:
  enable: true
  range: -2
  aliases:
    - "ball"
  destination:
    type: CHAT
  cooldown:
    enable: false
  sound:
    enable: false
```

## Параметры

- [Локализация](/docs/localizations/ru_ru/command/ball/)
- [Права](/docs/permission/command/ball/)

<!--@include: @/parts/range.md-->
<!--@include: @/parts/aliases.md-->
<!--@include: @/parts/destination.md-->
<!--@include: @/parts/cooldown.md-->
<!--@include: @/parts/sound.md-->