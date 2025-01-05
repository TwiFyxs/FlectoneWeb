# Подключение
Путь `message.yml > join`

## Пояснение
Сообщение от сервера, когда игрок подключился
![join](/join.png)

## Редактирование
```yaml
<message.join>
```

### По умолчанию
```yaml
join:
  enable: true
  first: true
  range: -1
  destination:
    type: CHAT
  sound:
    enable: false
```

## Параметры

- [Локализация](/docs/localizations/ru_ru/message/join/)
- [Права](/docs/permission/message/join/)

<!--@include: @/parts/enable.md-->

### `first`

Включает сообщение о самом первом подключении игрока на сервер

<!--@include: @/parts/range.md-->
<!--@include: @/parts/destination.md-->
<!--@include: @/parts/sound.md-->
