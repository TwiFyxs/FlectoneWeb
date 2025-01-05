# Автоматическое
Путь `message.yml > auto`

## Пояснение
Сообщение от сервера раз в какой-то промежуток времени
![auto](/auto.png)

## Редактирование
```yaml
<message.auto>
```

### По умолчанию
```yaml
auto:
  enable: false
  random: true
  destination:
    type: CHAT
  ticker:
    enable: true
    period: 9000
  sound:
    enable: false
```

## Параметры

- [Локализация](/docs/localizations/ru_ru/message/auto/)
- [Права](/docs/permission/message/auto/)

<!--@include: @/parts/enable.md-->
<!--@include: @/parts/random.md-->
<!--@include: @/parts/destination.md-->
<!--@include: @/parts/ticker.md-->
<!--@include: @/parts/sound.md-->
