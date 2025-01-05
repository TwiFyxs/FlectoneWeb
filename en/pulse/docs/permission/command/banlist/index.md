# Комманда /banlist
Путь `permission.yml > command.banlist`

## Пояснение
Категория, отвечающая за настройку прав `/banlist`

## Редактирование
```yaml
<permission.command.banlist>
```

### По умолчанию
```yaml
banlist:
  name: "flectonepulse.module.command.banlist"
  type: OP
  cooldown-bypass:
    name: "flectonepulse.module.command.banlist.cooldown.bypass"
    type: OP
  sound:
    name: "flectonepulse.module.command.banlist.sound"
    type: TRUE
```

## Параметры

- [Конфиг](/docs/command/banlist/)
- [Локализация](/docs/localizations/ru_ru/command/banlist/)

<!--@include: @/parts/permission/permissionTier3.md-->
<!--@include: @/parts/permission/cooldown.md-->
<!--@include: @/parts/permission/sound.md-->

