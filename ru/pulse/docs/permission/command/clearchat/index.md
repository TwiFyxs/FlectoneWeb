# Комманда /clearchat
Путь `permission.yml > command.clearchat`

## Пояснение
Категория, отвечающая за настройку прав `/clearchat`

## Редактирование
```yaml
<permission.command.clearchat>
```

### По умолчанию
```yaml
clearchat:
  name: "flectonepulse.module.command.clearchat"
  type: TRUE
  other:
    name: "flectonepulse.module.command.clearchat.other"
    type: OP
  cooldown-bypass:
    name: "flectonepulse.module.command.clearchat.cooldown.bypass"
    type: OP
  sound:
    name: "flectonepulse.module.command.clearchat.sound"
    type: TRUE
```

## Параметры

- [Конфиг](/docs/command/clearchat/)
- [Локализация](/docs/localizations/ru_ru/command/clearchat/)

<!--@include: @/parts/permission/permissionTier3.md-->
<!--@include: @/parts/permission/other.md-->
<!--@include: @/parts/permission/cooldown.md-->
<!--@include: @/parts/permission/sound.md-->

