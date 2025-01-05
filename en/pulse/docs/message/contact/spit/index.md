# Плевок
Путь `message.yml > contact.spit`

## Пояснение
Чтобы плюнуть, нужно держать в руке **белый краситель** и нажать **ПКМ**
![spit](/spit.gif)

Если плевок попал в игрока, ему напишется об этом
![spit message](/spit.png)

## Редактирование
```yaml
<message.contact.spit>
```

### По умолчанию
```yaml
spit:
  enable: false
  message: true
  item: "WHITE_DYE"
  destination:
    type: ACTION_BAR
  cooldown:
    enable: true
    duration: 60
  sound:
    enable: true
    type: "ENTITY_LLAMA_SPIT:0.3:1"
```

## Параметры

- [Локализация](/docs/localizations/ru_ru/message/contact/spit/)
- [Права](/docs/permission/message/contact/spit/)

<!--@include: @/parts/enable.md-->

### `message`

Включает сообщение попадания плевка в игрока
![spit message](/spit.png)

### `item`
- По умолчанию `WHITE_DYE`

Предмет, который используется для создания плевка

<!--@include: @/parts/destination.md-->
<!--@include: @/parts/cooldown.md-->
<!--@include: @/parts/sound.md-->