# Сетблок
Путь `message.yml > setblock`

## Пояснение
Сообщение от сервера при использовании `/setblock`
![setblock](/setblock.png)

## Редактирование
```yaml
<message.setblock>
```

### По умолчанию
```yaml
setblock:
  enable: true
  destination:
    type: CHAT
  sound:
    enable: false
```

## Параметры

- [Локализация](/docs/localizations/ru_ru/message/setblock/)
- [Права](/docs/permission/message/setblock/)

<!--@include: @/parts/enable.md-->
<!--@include: @/parts/destination.md-->
<!--@include: @/parts/sound.md-->
