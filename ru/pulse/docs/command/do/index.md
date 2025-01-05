# Комманда /do
Путь `command.yml > do`

## Пояснение
Комманда для выполнения действия благодаря игроку
![command do](/commanddo.png)

## Редактирование
```yaml
<command.do>
```

### По умолчанию
```yaml
do:
  enable: true
  range: -2
  aliases:
    - "do"
  destination:
    type: CHAT
  cooldown:
    enable: false
  sound:
    enable: false
```

## Параметры

- [Локализация](/docs/localizations/ru_ru/command/do/)
- [Права](/docs/permission/command/do/)

<!--@include: @/parts/enable.md-->
<!--@include: @/parts/range.md-->
<!--@include: @/parts/aliases.md-->
<!--@include: @/parts/destination.md-->
<!--@include: @/parts/cooldown.md-->
<!--@include: @/parts/sound.md-->