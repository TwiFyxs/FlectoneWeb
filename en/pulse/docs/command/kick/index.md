# Комманда /kick
Путь `command.yml > kick`

## Пояснение
Комманда для исключения игрока с сервера
![command kick](/commandkick.png)

От лица игрока
![command kick player](/commandkickplayer.png)

## Редактирование
```yaml
<command.kick>
```

### По умолчанию
```yaml
kick:
  enable: true
  range: -2
  aliases:
    - "kick"
  destination:
    type: CHAT
  cooldown:
    enable: false
  sound:
    enable: false
```

## Параметры

- [Локализация](/docs/localizations/ru_ru/command/kick/)
- [Права](/docs/permission/command/kick/)

<!--@include: @/parts/enable.md-->
<!--@include: @/parts/range.md-->
<!--@include: @/parts/aliases.md-->
<!--@include: @/parts/destination.md-->
<!--@include: @/parts/cooldown.md-->
<!--@include: @/parts/sound.md-->