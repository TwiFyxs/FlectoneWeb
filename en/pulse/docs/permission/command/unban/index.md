# Комманда /unban
Путь `permission.yml > command.unban`

## Пояснение
Категория, отвечающая за настройку прав `/unban`

## Редактирование
```yaml
<permission.command.unban>
```

### По умолчанию
```yaml
unban:
  name: "flectonepulse.module.command.unban"
  type: OP
  cooldown-bypass:
    name: "flectonepulse.module.command.unban.cooldown.bypass"
    type: OP
  sound:
    name: "flectonepulse.module.command.unban.sound"
    type: TRUE
```

## Параметры

- [Конфиг](/docs/command/unban/)
- [Локализация](/docs/localizations/ru_ru/command/unban/)

<!--@include: @/parts/permission/permissionTier3.md-->
<!--@include: @/parts/permission/cooldown.md-->
<!--@include: @/parts/permission/sound.md-->

