# Комманда /warn
Путь `permission.yml > command.warn`

## Пояснение
Категория, отвечающая за настройку прав `/warn`

## Редактирование
```yaml
<permission.command.warn>
```

### По умолчанию
```yaml
warn:
  name: "flectonepulse.module.command.warn"
  type: OP
  cooldown-bypass:
    name: "flectonepulse.module.command.warn.cooldown.bypass"
    type: OP
  sound:
    name: "flectonepulse.module.command.warn.sound"
    type: TRUE
```

## Параметры

- [Конфиг](/docs/command/warn/)
- [Локализация](/docs/localizations/ru_ru/command/warn/)

<!--@include: @/parts/permission/permissionTier3.md-->
<!--@include: @/parts/permission/cooldown.md-->
<!--@include: @/parts/permission/sound.md-->

