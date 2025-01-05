# Игроки
Путь `message.yml > status.players`

## Пояснение
Модуль отвечающий за количество игроков на сервере
![player count](/playercount.png)

## Редактирование
```yaml
<message.status.players>
```

### По умолчанию
```yaml
players:
  enable: false
  control: true
  max: 69
  online: -69
```

## Параметры

- [Локализация](/docs/localizations/ru_ru/message/status/players/)
- [Права](/docs/permission/message/status/players/)

<!--@include: @/parts/enable.md-->

### `control`

Если включено, то игрока не будет впускать на сервер при большем количестве игроков, чем [указано](#max)

### `max`

Максимальное количество игроков на сервере

### `online`

Число, которое позволяет указать любой онлайн на сервере

::: info ИНФОРМАЦИЯ

Число может быть любым, но `-69` указывает на текущий онлайн

:::