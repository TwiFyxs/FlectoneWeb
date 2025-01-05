# Комманда /helper
Путь `permission.yml > command.helper`

## Пояснение
Категория, отвечающая за настройку прав `/helper`

## Редактирование
```yaml
<permission.command.helper>
```

### По умолчанию
```yaml
helper:
  name: "flectonepulse.module.command.helper"
  type: TRUE
  see:
    name: "flectonepulse.module.command.helper.see"
    type: OP
  cooldown-bypass:
    name: "flectonepulse.module.command.helper.cooldown.bypass"
    type: OP
  sound:
    name: "flectonepulse.module.command.helper.sound"
    type: TRUE
```

## Параметры

- [Конфиг](/docs/command/helper/)
- [Локализация](/docs/localizations/ru_ru/command/helper/)

<!--@include: @/parts/permission/permissionTier3.md-->

### `see`

Право для просмотра запросов о помощи

::: details Настройка
<!--@include: @/parts/permission/permissionTier4.md-->
:::

<!--@include: @/parts/permission/cooldown.md-->
<!--@include: @/parts/permission/sound.md-->

