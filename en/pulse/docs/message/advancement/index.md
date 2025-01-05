# Достижение
Путь `message.yml > advancement`

## Пояснение
Сообщение от сервера, когда игрок получает достижение
![task](/task.png)

## Редактирование
```yaml
<message.advancement>
```

### По умолчанию
```yaml
advancement:
  enable: true
  grant: true
  revoke: true
  range: -1
  destination:
    type: CHAT
  sound:
    enable: false
```

## Параметры

- [Локализация](/docs/localizations/ru_ru/message/advancement/)
- [Права](/docs/permission/message/advancement/)

<!--@include: @/parts/enable.md-->

### `revoke`

Включает изменение сообщения у комманды `/advancement revoke`

### `grant`

Включает изменение сообщения у комманды `/advancement grant`

<!--@include: @/parts/range.md-->
<!--@include: @/parts/destination.md-->
<!--@include: @/parts/sound.md-->

