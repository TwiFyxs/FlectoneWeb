# Комманда /ignorelist
Путь `localizations > ru_ru.yml > command.ignorelist`

## Пояснение
Сообщения для комманды `/ignorelist`
![command ignorelist](/commandignorelist.png)

## Редактирование
```yaml
<ru_ru.command.ignorelist>
```

### По умолчанию
```yaml
ignorelist:
  empty: "<color:#98FB98>☺ Игнорируемых игроков нет"
  null-page: "<color:#ff7171><b>⁉</b> Страница не найдена"
  header: "<fcolor:2>▋ Игнорирования: <count> <br>"
  line: "<hover:show_text:\"<fcolor:1>Перестать игнорировать <display_name>\"><click:run_command:\"<command>\"><color:#ff7171>☒ <display_name></click></hover> <fcolor:1>Дата: <date>"
  footer: "<br>▋ <fcolor:2><click:run_command:\"<command> <prev_page>\">←</click> <fcolor:1>Страница: <current_page>/<last_page> <fcolor:2><click:run_command:\"<command> <next_page>\">→"
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

