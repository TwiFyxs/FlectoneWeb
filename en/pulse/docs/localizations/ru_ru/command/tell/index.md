# Комманда /tell
Путь `localizations > ru_ru.yml > command.tell`

## Пояснение
Сообщения для комманды `/tell`
![command tell](/commandtell.png)

## Редактирование
```yaml
<ru_ru.command.tell>
```

### По умолчанию
```yaml
tell:
  null-player: "<color:#ff7171><b>⁉</b> Игрок не найден"
  sender: "<fcolor:2>✉ Ты → <display_name> » <fcolor:1><message>"
  receiver: "<fcolor:2>✉ <display_name> → Тебе » <fcolor:1><message>"
  myself: "<fcolor:2>✉ [Заметка] <fcolor:1><message>"
```

## Параметры

- [Комманда](/docs/command/tell/)
- [Права](/docs/permission/command/tell/)

### `null-player`

Сообщение, если введённый игрок не найден

### `sender`

Сообщение для отправителя

### `receiver`

Сообщение для получателя

### `myself`

Сообщение для отправителя, если он и есть получатель т.е. для себя


