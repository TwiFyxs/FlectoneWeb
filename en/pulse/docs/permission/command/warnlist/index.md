# Комманда /warnlist
Путь `permission.yml > command.warnlist`

## Пояснение
Категория, отвечающая за настройку прав `/warnlist`

## Редактирование
```yaml
<permission.command.warnlist>
```

### По умолчанию
```yaml
warnlist:
  name: "flectonepulse.module.command.warnlist"
  type: OP
  cooldown-bypass:
    name: "flectonepulse.module.command.warnlist.cooldown.bypass"
    type: OP
  sound:
    name: "flectonepulse.module.command.warnlist.sound"
    type: TRUE
```

## Параметры

- [Конфиг](/docs/command/warnlist/)
- [Локализация](/docs/localizations/ru_ru/command/warnlist/)

<!--@include: @/parts/permission/permissionTier3.md-->
<!--@include: @/parts/permission/cooldown.md-->
<!--@include: @/parts/permission/sound.md-->

