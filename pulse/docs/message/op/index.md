# Оп
Путь `message.yml > op`

## Пояснение
Сообщение от сервера при использовании `/op`
![op](/op.png)

## Редактирование
```yaml
<message.op>
```

### По умолчанию
```yaml
op:
  enable: true
  destination:
    type: CHAT
  sound:
    enable: false
```

## Параметры

- [Локализация](/docs/localizations/ru_ru/message/op/)
- [Права](/docs/permission/message/op/)

<!--@include: @/parts/enable.md-->
<!--@include: @/parts/destination.md-->
<!--@include: @/parts/sound.md-->
