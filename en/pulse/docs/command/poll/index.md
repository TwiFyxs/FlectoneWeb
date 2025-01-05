# Комманда /poll
Путь `command.yml > poll`

## Пояснение
Комманда для проведения голосований
![command poll](/commandpoll.png)

Когда голосование закончилось
![command poll end](/commandpollend.png)

## Редактирование
```yaml
<command.poll>
```

### По умолчанию
```yaml
poll:
  enable: true
  range: -2
  last-id: 1
  max-time: 60000
  aliases:
    - "poll"
  cooldown:
    enable: false
  sound:
    enable: false
```

## Параметры

- [Локализация](/docs/localizations/ru_ru/command/poll/)
- [Права](/docs/permission/command/poll/)

<!--@include: @/parts/enable.md-->
<!--@include: @/parts/range.md-->

### `last-id`

Последний номер созданного голосования

### `max-time`

Максимальное время голосования в секундах

<!--@include: @/parts/aliases.md-->
<!--@include: @/parts/cooldown.md-->
<!--@include: @/parts/sound.md-->