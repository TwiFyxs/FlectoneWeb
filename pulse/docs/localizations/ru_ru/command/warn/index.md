# Комманда /warn
Путь `localizations > ru_ru.yml > command.warn`

## Пояснение
Сообщения для комманды `/warn`
![command warn](/commandwarn.png)

## Редактирование
```yaml
<ru_ru.command.warn>
```

### По умолчанию
```yaml
warn:
  null-player: "<color:#ff7171><b>⁉</b> Игрок не найден"
  null-time: "<color:#ff7171><b>⁉</b> Невозможное время"
  reasons:
    default: "Ты получил предупреждение"
  global: "<color:#ff7171><br>⏵ Игрок <target> получил предупреждение на <time> <br>⏵ Причина: <message> <br>⏵ Модератор: <display_name><br>"
  player: "<color:#ff7171>☠ Ты получил предупреждение на <time>. Причина: <message>"
```

## Параметры

- [Комманда](/docs/command/warn/)
- [Права](/docs/permission/command/warn/)

### `null-player`

Сообщение, если введённый игрок не найден

### `null-time`

Сообщение, если введено невозможное время

### `reasons`

Список с ключами и значениями, где ключом является слово, а значением конкретная причина

::: tip Можно вписывать свои причины, например
```yaml
random_kek: "Random reason"
```
Тогда если я напишу `/warn player 1d random_kek`, то причиной будет `Random reason`

Если причина не указана, будет использоваться `default`
:::

### `global`

Сообщение для всех

### `player`

Сообщение для игрока

