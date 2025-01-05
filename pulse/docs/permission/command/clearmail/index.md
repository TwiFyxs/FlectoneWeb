# Комманда /clearmail
Путь `permission.yml > command.clearmail`

## Пояснение
Категория, отвечающая за настройку прав `/clearmail`

## Редактирование
```yaml
<permission.command.clearmail>
```

### По умолчанию
```yaml
clearmail:
  name: "flectonepulse.module.command.clearmail"
  type: TRUE
  cooldown-bypass:
    name: "flectonepulse.module.command.clearmail.cooldown.bypass"
    type: OP
  sound:
    name: "flectonepulse.module.command.clearmail.sound"
    type: TRUE
```

## Параметры

- [Конфиг](/docs/command/clearmail/)
- [Локализация](/docs/localizations/ru_ru/command/clearmail/)

<!--@include: @/parts/permission/permissionTier3.md-->
<!--@include: @/parts/permission/cooldown.md-->
<!--@include: @/parts/permission/sound.md-->

