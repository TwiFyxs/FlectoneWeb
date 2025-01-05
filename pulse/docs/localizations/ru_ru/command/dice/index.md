# Комманда /dice
Путь `localizations > ru_ru.yml > command.dice`

## Пояснение
Сообщения для комманды `/dice`
![command dice](/commanddice.png)

## Редактирование
```yaml
<ru_ru.command.dice>
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
  format: "<fcolor:1>✎ <display_name> кинул кубики <message> (<sum>)"
```

## Параметры

- [Комманда](/docs/command/dice/)
- [Права](/docs/permission/command/dice/)

### `symbols`

Список индексов (выпавшее число) и символов (кубики)

### `format`

Формат сообщения, которое будет отправлено

