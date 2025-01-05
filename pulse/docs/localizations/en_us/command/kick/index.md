# Комманда /kick
Путь `localizations > en_us.yml > command.kick`

## Пояснение
Сообщения для комманды `/kick`
![command kick](/commandkick.png)

## Редактирование
```yaml
<en_us.command.kick>
```

### По умолчанию
```yaml
kick:
  null-player: "<color:#ff7171><b>⁉</b> This player does not exist"
  reasons:
    default: "Kicked by an operator"
  global: "<color:#ff7171><br>⏵ Player <target> was kicked <br>⏵ Reason: <message> <br>⏵ Moderator: <display_name><br>"
  player: "<color:#ff7171>☠ You were kicked by <moderator> <br>Reason: <message>"
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

