# Комманда /ignorelist
Путь `permission.yml > command.ignorelist`

## Пояснение
Категория, отвечающая за настройку прав `/ignorelist`

## Редактирование
```yaml
<permission.command.ignorelist>
```

### По умолчанию
```yaml
ignorelist:
  name: "flectonepulse.module.command.ignorelist"
  type: TRUE
  cooldown-bypass:
    name: "flectonepulse.module.command.ignorelist.cooldown.bypass"
    type: OP
  sound:
    name: "flectonepulse.module.command.ignorelist.sound"
    type: TRUE
```

## Параметры

- [Конфиг](/docs/command/ignorelist/)
- [Локализация](/docs/localizations/ru_ru/command/ignorelist/)

<!--@include: @/parts/permission/permissionTier3.md-->
<!--@include: @/parts/permission/cooldown.md-->
<!--@include: @/parts/permission/sound.md-->

