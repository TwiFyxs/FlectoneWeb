# Комманда /ignore
Путь `localizations > en_us.yml > command.ignore`

## Пояснение
Сообщения для комманды `/ignore`
![command ignore](/commandignore.png)

## Редактирование
```yaml
<en_us.command.ignore>
```

### По умолчанию
```yaml
ignore:
  null-player: "<color:#ff7171><b>⁉</b> This player does not exist"
  myself: "<color:#ff7171><b>⁉</b> You can't ignore yourself"
  he: "<color:#ff7171><b>⁉</b> You can't write to him because he ignore you"
  you: "<color:#ff7171><b>⁉</b> You can't write to him because you ignore him"
  format-true: "<color:#ff7171>☹ You ignore <display_name>"
  format-false: "<color:#98FB98>☺ You unignore <display_name>"
```

## Параметры

- [Комманда](/docs/command/ignore/)
- [Права](/docs/permission/command/ignore/)

### `null-player`

Сообщение, если введённый игрок не найден

### `myself`

Сообщение, если игрок пытается игнорировать самого себя

### `he`

Сообщение, если получатель игнорирует отправителя

### `you`

Сообщение, если отправитель игнорирует получателя

### `format-true`

Сообщение при успешном игнорировании

### `format-false`

Сообщение при снятии игнорирования

