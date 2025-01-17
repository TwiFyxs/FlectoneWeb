# Комманда /geolocate
Путь `localizations > en_us.yml > command.geolocate`

## Пояснение
Сообщения для комманды `/geolocate`
![command geolocate](/commandgeolocate.png)

## Редактирование
```yaml
<en_us.command.geolocate>
```

### По умолчанию
```yaml
geolocate:
  null-player: "<color:#ff7171><b>⁉</b> This player does not exist"
  null-or-error: "<color:#ff7171><b>⁉</b> Problem receiving information, try again"
  format: "<fcolor:1>Geolocation for <display_name><br>Country: <fcolor:2><country><br><fcolor:1>Region: <fcolor:2><region_name><br><fcolor:1>City: <fcolor:2><city><br><fcolor:1>Timezone: <fcolor:2><timezone><br><fcolor:1>Mobile connection: <fcolor:2><mobile><br><fcolor:1>VPN: <fcolor:2><proxy><br><fcolor:1>Hosting: <fcolor:2><hosting><br><fcolor:1>IP: <fcolor:2><query>"
```

## Параметры

- [Комманда](/docs/command/geolocate/)
- [Права](/docs/permission/command/geolocate/)

### `null-player`

Сообщение, если введённый игрок не найден

### `null-or-error`

Сообщение, если произошла ошибка при получении информации

### `format`

Формат сообщения, которое будет отправлено

