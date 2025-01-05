# Режим игры
Путь `message.yml > gamemode`

## Пояснение
Сообщение от сервера, когда игрок изменил режим игры
![gamemode](/gamemode.png)

## Редактирование
```yaml
<message.gamemode>
```

### По умолчанию
```yaml
gamemode:
  enable: true
  destination:
    type: CHAT
  sound:
    enable: false
```

## Параметры

- [Локализация](/docs/localizations/ru_ru/message/gamemode/)
- [Права](/docs/permission/message/gamemode/)

<!--@include: @/parts/enable.md-->
<!--@include: @/parts/destination.md-->
<!--@include: @/parts/sound.md-->

