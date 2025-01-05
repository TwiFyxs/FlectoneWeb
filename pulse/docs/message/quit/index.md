# Отключение
Путь `message.yml > quit`

## Пояснение
Сообщение от сервера, когда игрок отключился
![quit](/quit.png)

## Редактирование
```yaml
<message.quit>
```

### По умолчанию
```yaml
quit:
  enable: true
  range: -1
  destination:
    type: CHAT
  sound:
    enable: false
```

## Параметры

- [Локализация](/docs/localizations/ru_ru/message/quit/)
- [Права](/docs/permission/message/quit/)

<!--@include: @/parts/enable.md-->
<!--@include: @/parts/range.md-->
<!--@include: @/parts/destination.md-->
<!--@include: @/parts/sound.md-->
