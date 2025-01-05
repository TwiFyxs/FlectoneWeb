# Комманда /mute
Путь `permission.yml > command.mute`

## Пояснение
Категория, отвечающая за настройку прав `/mute`

## Редактирование
```yaml
<permission.command.mute>
```

### По умолчанию
```yaml
mute:
  name: "flectonepulse.module.command.mute"
  type: OP
  cooldown-bypass:
    name: "flectonepulse.module.command.mute.cooldown.bypass"
    type: OP
  sound:
    name: "flectonepulse.module.command.mute.sound"
    type: TRUE
```

## Параметры

- [Конфиг](/docs/command/mute/)
- [Локализация](/docs/localizations/ru_ru/command/mute/)

<!--@include: @/parts/permission/permissionTier3.md-->
<!--@include: @/parts/permission/cooldown.md-->
<!--@include: @/parts/permission/sound.md-->

