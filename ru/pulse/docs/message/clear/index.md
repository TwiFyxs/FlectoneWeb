# Очищение
Путь `message.yml > clear`

## Пояснение
Сообщение от сервера при использовании `/clear`
![clear](/clear.png)

## Редактирование
```yaml
<message.clear>
```

### По умолчанию
```yaml
clear:
  enable: true
  sound:
    enable: false
  destination:
    type: CHAT
```

## Параметры

- [Локализация](/docs/localizations/ru_ru/message/clear/)
- [Права](/docs/permission/message/clear/)

<!--@include: @/parts/enable.md-->
<!--@include: @/parts/destination.md-->
<!--@include: @/parts/sound.md-->
