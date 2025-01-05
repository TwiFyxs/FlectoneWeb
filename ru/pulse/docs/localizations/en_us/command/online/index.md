# Комманда /online
Путь `localizations > en_us.yml > command.online`

## Пояснение
Сообщения для комманды `/online`
![command online](/commandonline.png)

## Редактирование
```yaml
<en_us.command.online>
```

### По умолчанию
```yaml
online:
  null-player: "<color:#ff7171><b>⁉</b> This player does not exist"
  format-current: "<fcolor:1>⌛ <display_name> currently on server"
  format-first: "<fcolor:1>⌛ <display_name> was first on server <time> ago"
  format-last: "<fcolor:1>⌛ <display_name> <fcolor:1>was last on server <time> ago"
  format-total: "<fcolor:1>⌛ <display_name> <fcolor:1>has spent a total of <time> on server"
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


