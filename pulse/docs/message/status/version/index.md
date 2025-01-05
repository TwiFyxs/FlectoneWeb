# Версия
Путь `message.yml > status.protocol`

## Пояснение
Модуль отвечающий за версию сервера
![version](/version.png)

## Редактирование
```yaml
<message.status.players>
```

### По умолчанию
```yaml
version:
  enable: false
  protocol: -1
```

## Параметры

- [Локализация](/docs/localizations/ru_ru/message/status/version/)
- [Права](/docs/permission/message/status/version/)

<!--@include: @/parts/enable.md-->

### `protocol`

[Протокол](https://minecraft.wiki/w/Protocol_version) сервера

::: info ИНФОРМАЦИЯ

Число может быть любым, но `-1` указывает на текущий протокол

:::