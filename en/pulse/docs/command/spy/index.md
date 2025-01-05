# Комманда /spy
Путь `command.yml > spy`

## Пояснение
Комманда для отслеживания за действиями игроков
![command spy](/commandspy.gif)

## Редактирование
```yaml
<command.spy>
```

### По умолчанию
```yaml
spy:
  enable: true
  range: -2
  aliases:
    - "spy"
  categories:
    command:
      - "tell"
    action:
      - "anvil"
      - "book"
      - "sign"
      - "chat"
  destination:
    type: CHAT
  cooldown:
    enable: false
  sound:
    enable: false
```

## Параметры

- [Локализация](/docs/localizations/ru_ru/command/spy/)
- [Права](/docs/permission/command/spy/)

<!--@include: @/parts/enable.md-->
<!--@include: @/parts/range.md-->
<!--@include: @/parts/aliases.md-->
<!--@include: @/parts/destination.md-->

### `categories`

Список категорий с действиями, за которыми происходит слежка

<!--@include: @/parts/cooldown.md-->
<!--@include: @/parts/sound.md-->