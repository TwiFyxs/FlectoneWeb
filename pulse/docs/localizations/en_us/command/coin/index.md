# Комманда /coin
Путь `localizations > en_us.yml > command.coin`

## Пояснение
Сообщения для комманды `/coin`
![command coin](/commandcoin.png)

## Редактирование
```yaml
<en_us.command.coin>
```

### По умолчанию
```yaml
coin:
  head: "heads"
  tail: "tails"
  format: "<fcolor:1>✎ <display_name> player got <result>"
  format-draw: "<fcolor:1>✎ <display_name> player got edge :)"
```

## Параметры

- [Комманда](/docs/command/coin/)
- [Права](/docs/permission/command/coin/)

### `head`

Название стороны монетки

### `tail`

Название другой стороны монетки

### `format`

Формат сообщения, которое будет отправлено

### `format-draw`

Сообщение, если монетка упала на ребро

