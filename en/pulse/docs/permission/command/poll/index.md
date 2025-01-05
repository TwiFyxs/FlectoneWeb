# Комманда /poll
Путь `permission.yml > command.poll`

## Пояснение
Категория, отвечающая за настройку прав `/poll`

## Редактирование
```yaml
<permission.command.poll>
```

### По умолчанию
```yaml
poll:
  name: "flectonepulse.module.command.poll"
  type: TRUE
  create:
    name: "flectonepulse.module.command.poll.create"
    type: OP
  cooldown-bypass:
    name: "flectonepulse.module.command.poll.cooldown.bypass"
    type: OP
  sound:
    name: "flectonepulse.module.command.poll.sound"
    type: TRUE
```

## Параметры

- [Конфиг](/docs/command/poll/)
- [Локализация](/docs/localizations/ru_ru/command/poll/)

<!--@include: @/parts/permission/permissionTier3.md-->

### `create`

Право для создания голосований

::: details Настройка
<!--@include: @/parts/permission/permissionTier4.md-->
:::

<!--@include: @/parts/permission/cooldown.md-->
<!--@include: @/parts/permission/sound.md-->

