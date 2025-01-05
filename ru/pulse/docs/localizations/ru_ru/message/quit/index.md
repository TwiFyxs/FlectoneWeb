# Отключение
Путь `localizations > ru_ru.yml > message.quit`

## Пояснение
Сообщения о том, что игрок отключился
![quit](/quit.png)

## Редактирование
```yaml
<ru_ru.message.quit>
```

### По умолчанию
```yaml
quit:
  format: "<color:#ff4e4e>← <display_name>"
  format-first-time: "<color:#ff4e4e>← <display_name> <fcolor:1>впервые вышел!"
```

## Параметры

- [Сообщения](/docs/message/quit/)
- [Права](/docs/permission/message/quit/)

### `format`

Сообщение при отключении с сервера

### `format-first-time`
Сообщение при первом отключении с сервера   