# Приветствие
Путь `message.yml > greeting`

## Пояснение
Сообщение от сервера лично игроку, когда он подключился
![greeting](/greeting.png)

## Редактирование
```yaml
<message.greeting>
```

### По умолчанию
```yaml
greeting:
  enable: false
  destination:
    type: CHAT
  sound:
    enable: false
```

## Параметры

- [Локализация](/docs/localizations/ru_ru/message/greeting/)
- [Права](/docs/permission/message/greeting/)

<!--@include: @/parts/enable.md-->
<!--@include: @/parts/destination.md-->
<!--@include: @/parts/sound.md-->
