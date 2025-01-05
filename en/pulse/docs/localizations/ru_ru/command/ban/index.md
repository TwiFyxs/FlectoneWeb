# Комманда /ban
Путь `localizations > ru_ru.yml > command.ban`

## Пояснение
Сообщения для комманды `/ban`
![command ban](/commandban.png)

## Редактирование
```yaml
<ru_ru.command.ban>
```

### По умолчанию
```yaml
ban:
  null-player: "<color:#ff7171><b>⁉</b> Игрок не найден"
  null-time: "<color:#ff7171><b>⁉</b> Невозможное время"
  temporarily:
    connection-attempt: "<color:#ff7171>☠ Заблокированный <target> пытался подключиться, ему осталось <time>"
    global: "<color:#ff7171><br>⏵ Игрок <target> заблокирован на <time> <br>⏵ Причина: <message> <br>⏵ Модератор: <display_name><br>"
    player: "<color:#ff7171>☠ Ты заблокирован, осталось <time> <br>Причина: <message>"
    reasons:
      default: "Ты временно заблокирован на этом сервере"
  permanent:
    connection-attempt: "<color:#ff7171>☠ Навсегда заблокированный <target> пытался подключиться"
    global: "<color:#ff7171><br>⏵ Игрок <target> заблокирован навсегда <br>⏵ Причина: <message> <br>⏵ Модератор: <display_name><br>"
    player: "<color:#ff7171>☠ Ты заблокирован навсегда, <br>Причина: <message>"
    reasons:
      default: "Ты заблокирован на этом сервере"
```

## Параметры

- [Комманда](/docs/command/ban/)
- [Права](/docs/permission/command/ban/)

### `null-player`

Сообщение, если введённый игрок не найден

### `null-time`

Сообщение, если введено невозможное время

### `temporarily`

::: details Сообщения для временной блокировки

#### `connection-attempt`

Сообщение, если заблокированный игрок пытался подключиться

#### `global`

Сообщение для всех

#### `player`

Сообщение для игрока

#### `reasons`

Список с ключами и значениями, где ключом является слово, а значением конкретная причина

::: tip Можно вписывать свои причины, например
```yaml
random_kek: "Random reason"
```
Тогда если я напишу `/ban player 1d random_kek`, то причиной будет `Random reason`

Если причина не указана, будет использоваться `default`

:::

### `permanent`

::: details Сообщения для блокировки навсегда

#### `connection-attempt`

Сообщение, если заблокированный игрок пытался подключиться

#### `global`

Сообщение для всех

#### `player`

Сообщение для игрока

#### `reasons`

Список с ключами и значениями, где ключом является слово, а значением конкретная причина

::: tip Можно вписывать свои причины, например
```yaml
random_kek: "Random reason"
```
Тогда если я напишу `/ban player random_kek`, то причиной будет `Random reason`

Если причина не указана, будет использоваться `default`
:::

