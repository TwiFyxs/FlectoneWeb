# Комманда /maintenance
Путь `permission.yml > command.maintenance`

## Пояснение
Категория, отвечающая за настройку прав `/maintenance`

## Редактирование
```yaml
<permission.command.maintenance>
```

### По умолчанию
```yaml
maintenance:
  name: "flectonepulse.module.command.maintenance"
  type: OP
  join:
    name: "flectonepulse.module.command.maintenance.join"
    type: OP
  cooldown-bypass:
    name: "flectonepulse.module.command.maintenance.cooldown.bypass"
    type: OP
  sound:
    name: "flectonepulse.module.command.maintenance.sound"
    type: TRUE
```

## Параметры

- [Конфиг](/docs/command/maintenance/)
- [Локализация](/docs/localizations/ru_ru/command/maintenance/)

<!--@include: @/parts/permission/permissionTier3.md-->

### `join`

Право для подключения к серверу во время технических работ

::: details Настройка
<!--@include: @/parts/permission/permissionTier4.md-->
:::

<!--@include: @/parts/permission/cooldown.md-->
<!--@include: @/parts/permission/sound.md-->

