# Комманда /me
Путь `command.yml > me`

## Пояснение
Комманда для отображения действия
![command me](/commandme.png)

## Редактирование
```yaml
<command.me>
```

### По умолчанию
```yaml
me:
  enable: true
  range: -2
  aliases:
    - "me"
  destination:
    type: CHAT
  cooldown:
    enable: false
  sound:
    enable: false
```

## Параметры

- [Локализация](/docs/localizations/ru_ru/command/me/)
- [Права](/docs/permission/command/me/)

<!--@include: @/parts/enable.md-->
<!--@include: @/parts/range.md-->
<!--@include: @/parts/aliases.md-->
<!--@include: @/parts/destination.md-->
<!--@include: @/parts/cooldown.md-->
<!--@include: @/parts/sound.md-->