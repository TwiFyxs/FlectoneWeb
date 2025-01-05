# Игроки
Путь `localizations > en_us.yml > message.status.players`

## Пояснение
Сообщение об игроках сервера

## Редактирование
```yaml
<en_us.message.status.players>
```

### По умолчанию
```yaml
players:
  samples:
    - name: "<players>"
      id: null
  full: "<color:#ff7171>The server is full"
```

## Параметры

- [Сообщения](/docs/message/status/players/)
- [Права](/docs/permission/message/status/players/)

### `samples`

Список игроков сервера. Плейсхолдер `<players>` добавляет всех игроков сервера к списку

::: info ПРИМЕРЫ ИСПОЛЬЗОВАНИЯ

Можно добавлять любые сообщения
```yaml
samples:
  - name: "<red>Это сервер в майнкрафте!"
    id: null
  - name: "<players>"
    id: null
```
![sample1](/sample1.png)

или создавать фейковых игроков
```yaml
samples:
  - name: "Notch"
    id: null
  - name: "<players>"
    id: null
```
![sample2](/sample2.png)
:::

::: warning ПРЕДУПРЕЖДЕНИЕ

Можно использовать только доступные цвета
<!--@include: @/parts/color.md-->
:::

### `full`

Сообщение при подключении на полный сервер
