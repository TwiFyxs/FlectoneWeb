# Комманда /ignorelist
Путь `localizations > en_us.yml > command.ignorelist`

## Пояснение
Сообщения для комманды `/ignorelist`
![command ignorelist](/commandignorelist.png)

## Редактирование
```yaml
<en_us.command.ignorelist>
```

### По умолчанию
```yaml
ignorelist:
  empty: "<color:#98FB98>☺ You don't ignore anyone"
  null-page: "<color:#ff7171><b>⁉</b> This page doesn't exist"
  header: "<fcolor:2>▋ Ignores: <count><br>"
  line: "<hover:show_text:\"<fcolor:1>Click to unignore <display_name>\"><click:run_command:\"<command>\"><color:#ff7171>☒ <display_name></click></hover> <fcolor:1>Date: <date>"
  footer: "<br>▋ <fcolor:2><click:run_command:\"<command> <prev_page>\">←</click> <fcolor:1>Page: <current_page>/<last_page> <fcolor:2><click:run_command:\"<command> <next_page>\">→"
```

## Параметры

- [Комманда](/docs/command/ignorelist/)
- [Права](/docs/permission/command/ignorelist/)

### `empty`

Сообщение, если список игнорируемых игроков пуст

### `null-page`

Сообщение, если введённая страница не существует

### `header`

Верхняя часть сообщения списка

### `line`

Формат каждого игнорирования из списка

### `footer`

Нижняя часть сообщения списка

