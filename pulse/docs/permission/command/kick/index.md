# Комманда /kick
Путь `permission.yml > command.kick`

## Пояснение
Категория, отвечающая за настройку прав `/kick`

## Редактирование
```yaml
<permission.command.kick>
```

### По умолчанию
```yaml
kick:
  name: "flectonepulse.module.command.kick"
  type: OP
  cooldown-bypass:
    name: "flectonepulse.module.command.kick.cooldown.bypass"
    type: OP
  sound:
    name: "flectonepulse.module.command.kick.sound"
    type: TRUE
```

## Параметры

- [Конфиг](/docs/command/kick/)
- [Локализация](/docs/localizations/ru_ru/command/kick/)

<!--@include: @/parts/permission/permissionTier3.md-->
<!--@include: @/parts/permission/cooldown.md-->
<!--@include: @/parts/permission/sound.md-->

