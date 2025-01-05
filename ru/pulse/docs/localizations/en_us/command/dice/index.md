# Комманда /dice
Путь `localizations > en_us.yml > command.dice`

## Пояснение
Сообщения для комманды `/dice`
![command dice](/commanddice.png)

## Редактирование
```yaml
<en_us.command.dice>
```

### По умолчанию
```yaml
dice:
  symbols:
    1: "⚀"
    2: "⚁"
    3: "⚂"
    4: "⚃"
    5: "⚄"
    6: "⚅"
  format: "<fcolor:1>✎ <display_name> roll <message> (<sum>)"
```

## Параметры

- [Комманда](/docs/command/dice/)
- [Права](/docs/permission/command/dice/)

### `symbols`

Список индексов (выпавшее число) и символов (кубики)

### `format`

Формат сообщения, которое будет отправлено

