# Чат
Путь `message.yml > chat`

## Пояснение
Модуль, отвечающий за отправленные сообщения игроком в чат

## Редактирование
```yaml
<message.chat>
```

### По умолчанию
```yaml
chat:
  enable: true
  types:
    local:
      enable: true
      null-recipient: true
      cancel: true
      range: 100
      priority: 0
      trigger: ""
      cooldown:
        enable: false
        duration: 60
      sound:
        enable: false
        type: "BLOCK_NOTE_BLOCK_BELL:1:1"
    global:
      enable: true
      null-recipient: true
      cancel: false
      range: -2
      priority: 5
      trigger: "!"
      cooldown:
        enable: false
        duration: 60
      sound:
        enable: false
        type: "BLOCK_NOTE_BLOCK_BELL:1:1"
```

## Параметры

- [Локализация](/docs/localizations/ru_ru/message/chat/)
- [Права](/docs/permission/message/chat/)

<!--@include: @/parts/enable.md-->

### `type`

Список всех чатов с их [настройкой](#настройка-чата), можно добавлять свои

## Настройка чата

Любой чат по умолчанию выглядит так

```yaml
название_чата:
  enable: true
  null-recipient: true
  cancel: true
  range: число
  priority: число
  trigger: ""
  destination:
    type: CHAT
  cooldown:
    enable: false
  sound:
    enable: false
```

### `enable`

Включает работоспособность чата

### `null-recipient`

- Сообщение изменяется тут [Чат](/docs/localizations/ru_ru/message/chat/)

Включает сообщение о том, что отправленное сообщение никто не увидел
![null recipient](/nullrecipient.png)

### `cancel`

- Если `true`, то ивент сообщения чата отменяется для других плагинов

- Если необходимо, чтобы другой плагин, связанный с чатом - работал, то нужно ставить `false`
::: tip Например по умолчанию чат `global` имеет `cancel: false`
Чтобы глобальные сообщения также обрабатывались другими плагинами (по типу DiscordSRV, InteractiveChat и т.д.)
:::
::: warning Если `false`, то это вызывает дублирование сообщения в консоль
![chat console](/chatconsole.png)
:::

<!--@include: @/parts/range.md-->

### `priority`

Приоритет чата, который используется для выбора, когда у нескольких чатов одинаковый `trigger`. Выбирается тот, у кого приоритет больше

::: tip Например есть чаты
```yaml
admin:
  priority: 20
  trigger: "!" // [!code highlight]
helper:
  priority: 10
  trigger: "!" // [!code highlight]
```

Если игрок имеет право на оба чата, то плагином выбран будет `admin` т.к. у него больше `priority`
:::

### `trigger`

Сообщение, с которого должно начинаться отправленное сообщение для [типа](#type) чата

::: tip Значение `trigger` может быть каким угодно:
- `!`, `admin`, `.f` и т.д.
- пустым т.е. `trigger: ""`, тогда для этого [типа](#type) чата подходит любое сообщение
:::

В итоговом сообщении `trigger` удаляется, т.е. если игрок отправил `!привет`, в итоге будет `привет` без `!`

<!--@include: @/parts/destination.md-->
<!--@include: @/parts/cooldown.md-->
<!--@include: @/parts/sound.md-->
