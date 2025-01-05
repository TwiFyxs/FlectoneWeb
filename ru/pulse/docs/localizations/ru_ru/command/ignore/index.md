# Комманда /ignore
Путь `localizations > ru_ru.yml > command.ignore`

## Пояснение
Сообщения для комманды `/ignore`
![command ignore](/commandignore.png)

## Редактирование
```yaml
<ru_ru.command.ignore>
```

### По умолчанию
```yaml
ignore:
  null-player: "<color:#ff7171><b>⁉</b> Игрок не найден"
  myself: "<color:#ff7171><b>⁉</b> Нельзя игнорировать самого себя"
  he: "<color:#ff7171><b>⁉</b> Он тебя игнорирует"
  you: "<color:#ff7171><b>⁉</b> Ты его игнорируешь"
  format-true: "<color:#ff7171>☹ Ты игнорируешь <display_name>"
  format-false: "<color:#98FB98>☺ Ты перестал игнорировать <display_name>"
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

