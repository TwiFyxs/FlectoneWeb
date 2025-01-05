# Комманда /broadcast
Путь `permission.yml > command.broadcast`

## Пояснение
Категория, отвечающая за настройку прав `/broadcast`

## Редактирование
```yaml
<permission.command.broadcast>
```

### По умолчанию
```yaml
broadcast:
  name: "flectonepulse.module.command.broadcast"
  type: OP
  cooldown-bypass:
    name: "flectonepulse.module.command.broadcast.cooldown.bypass"
    type: OP
  sound:
    name: "flectonepulse.module.command.broadcast.sound"
    type: TRUE
```

## Параметры

- [Конфиг](/docs/command/broadcast/)
- [Локализация](/docs/localizations/ru_ru/command/broadcast/)

<!--@include: @/parts/permission/permissionTier3.md-->
<!--@include: @/parts/permission/cooldown.md-->
<!--@include: @/parts/permission/sound.md-->

