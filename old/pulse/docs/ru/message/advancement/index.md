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

- [Локализация](/ru/localizations/ru_ru/message/advancement/)
- [Права](/ru/permission/message/advancement/)

### `enable`
- По умолчанию `true`

Включает или выключает работоспособность модуля

### `revoke`
- `enbale: true`

Включает изменение сообщения у комманды `/advancement revoke`

### `grant`
- `enbale: true`

Включает изменение сообщения у комманды `/advancement grant`

### `range`
- По умолчанию `-1`

[Диапазон](#виды-диапазонов), насколько далеко в блоках отобразится сообщение

<!--@include: @/ru/parts/sound.md-->

<!--@include: @/ru/parts/range.md-->
