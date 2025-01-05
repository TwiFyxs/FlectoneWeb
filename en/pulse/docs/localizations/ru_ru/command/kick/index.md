# Комманда /kick
Путь `localizations > ru_ru.yml > command.kick`

## Пояснение
Сообщения для комманды `/kick`
![command kick](/commandkick.png)

## Редактирование
```yaml
<ru_ru.command.kick>
```

### По умолчанию
```yaml
kick:
  null-player: "<color:#ff7171><b>⁉</b> Игрок не найден"
  reasons:
    default: "Исключён модератором"
  global: "<color:#ff7171><br>⏵ Игрок <target> был исключён <br>⏵ Причина: <message> <br>⏵ Модератор: <display_name><br>"
  player: "<color:#ff7171>☠ Ты исключён модератором <moderator> <br>Причина: <message>"
```

## Параметры

- [Комманда](/docs/command/kick/)
- [Права](/docs/permission/command/kick/)

### `null-player`

Сообщение, если введённый игрок не найден

#### `reasons`

Список с ключами и значениями, где ключом является слово, а значением конкретная причина

::: tip Можно вписывать свои причины, например
```yaml
random_kek: "Random reason"
```
Тогда если я напишу `/kick player random_kek`, то причиной будет `Random reason`

Если причина не указана, будет использоваться `default`

:::

### `global`

Сообщение для всех

### `player`

Сообщение для игрока

