# Смерть
Путь `message.yml > death`

## Пояснение
Сообщение от сервера, когда игрок умирает
![death server](/deathserver.png)
![death player](/deathplayer.png)

## Редактирование
```yaml
<message.death>
```

### По умолчанию
```yaml
death:
  enable: true
  range: -1
  destination:
    type: CHAT
  sound:
    enable: false
```

## Параметры

- [Локализация](/docs/localizations/ru_ru/message/death/)
- [Права](/docs/permission/message/death/)

<!--@include: @/parts/enable.md-->
<!--@include: @/parts/range.md-->
<!--@include: @/parts/destination.md-->
<!--@include: @/parts/sound.md-->
