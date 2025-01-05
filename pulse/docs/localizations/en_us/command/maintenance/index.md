# Комманда /maintenance
Путь `localizations > en_us.yml > command.maintenace`

## Пояснение
Сообщения для комманды `/maintenance`
![command maintenance](/commandmaintenance.png)

## Редактирование
```yaml
<en_us.command.maintenance>
```

### По умолчанию
```yaml
maintenance:
  not: "<color:#ff7171><b>⁉</b> You have not maintenance"
  already: "<color:#ff7171><b>⁉</b> You have already maintenance"
  server-description: "<color:#ff7171>The server is under maintenance"
  server-version: "Maintenance"
  kick: "<color:#ff7171>★ The server is under maintenance"
  format-true: "<fcolor:1>★ You have <fcolor:2>enabled</fcolor:2> maintenance on the server"
  format-false: "<fcolor:1>★ You have <fcolor:2>disabled</fcolor:2> maintenance on the server"
```

## Параметры

- [Комманда](/docs/command/maintenance/)
- [Права](/docs/permission/command/maintenance/)

### `not`

Сообщение при попытке отключения технических работ, если они не включены

### `already`

Сообщение при попытке включения технических работ, если они включены

### `server-description`

Сообщения при просмотре сервера, если включены технические работы

### `server-version`

Название версии сервера, если включены технические работы

### `kick`

Причина исключения с сервера при включении технических работ

### `format-true`

Сообщение при включении технических работ

### `format-false`

Сообщение при отключении технических работ