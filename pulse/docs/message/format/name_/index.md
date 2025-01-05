# Имя
Путь `message.yml > module.player.name-`

## Пояснение
Модуль, отвечающий за имя игрока
![name tab](/nametab.png)
![name display](/namedisplay.png)

## Редактирование
```yaml
<message.module.player.name->
```

### По умолчанию
```yaml
name-:
  enable: true
  visible: false
  color: "<white>"
```

## Параметры

- [Локализация](/docs/localizations/ru_ru/message/format/name/)
- [Права](/docs/permission/message/format/name/)

<!--@include: @/parts/enable.md-->

### `visible`

Включает или выключает ник над игроком

### `color`

Цвет команды игрока из доступных

<!--@include: @/parts/color.md-->