# Комманда /online
Путь `localizations > ru_ru.yml > command.online`

## Пояснение
Сообщения для комманды `/online`
![command online](/commandonline.png)

## Редактирование
```yaml
<ru_ru.command.online>
```

### По умолчанию
```yaml
online:
  null-player: "<color:#ff7171><b>⁉</b> Игрок не найден"
  format-current: "<fcolor:1>⌛ <display_name> сейчас на сервере"
  format-first: "<fcolor:1>⌛ <display_name> впервые зашёл на сервер <time> назад"
  format-last: "<fcolor:1>⌛ <display_name> <fcolor:1>последний раз был на сервере <time> назад"
  format-total: "<fcolor:1>⌛ <display_name> <fcolor:1>всего провёл на сервере <time>"
```

## Параметры

- [Комманда](/docs/command/online/)
- [Права](/docs/permission/command/online/)

### `null-player`

Сообщение, если введённый игрок не найден

### `format-current`

Сообщение, если введённый игрок на сервере

### `format-first`

Формат сообщения `/online first`, которое будет отправлено

### `format-last`

Формат сообщения `/online last`, которое будет отправлено

### `format-total`

Формат сообщения `/online total`, которое будет отправлено


