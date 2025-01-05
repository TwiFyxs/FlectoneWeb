# Правое нажатие
Путь `message.yml > contact.right_click`

## Пояснение
Модуль, при котором **ПКМ** по игроку создаёт сообщение над инвентарём игрока
![right click](/rightclick.png)

## Редактирование
```yaml
<message.contact.right_click>
```

### По умолчанию
```yaml
rightclick:
  enable: true
  destination:
    type: ACTION_BAR
  cooldown:
    enable: false
  sound:
    enable: false
```

## Параметры

- [Локализация](/docs/localizations/ru_ru/message/contact/right-click/)
- [Права](/docs/permission/message/contact/right-click/)

<!--@include: @/parts/enable.md-->
<!--@include: @/parts/destination.md-->
<!--@include: @/parts/cooldown.md-->
<!--@include: @/parts/sound.md-->