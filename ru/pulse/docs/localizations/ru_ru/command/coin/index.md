# Комманда /coin
Путь `localizations > ru_ru.yml > command.coin`

## Пояснение
Сообщения для комманды `/coin`
![command coin](/commandcoin.png)

## Редактирование
```yaml
<ru_ru.command.coin>
```

### По умолчанию
```yaml
coin:
  head: "орёл"
  tail: "решка"
  format: "<fcolor:1>✎ <display_name> подбросил монетку - <result>"
  format-draw: "<fcolor:1>✎ <display_name> неудачно подбросил монетку ребром :)"
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

