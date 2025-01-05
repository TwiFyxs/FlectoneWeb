# Упоминание
Путь `permission.yml > message.format.moderation.swear`

## Пояснение
Категория, отвечающая за настройку прав у форматирования запреток в сообщениях игрока

## Редактирование
```yaml
<permission.message.format.moderation.swear>
```

### По умолчанию
```yaml
swear:
  name: "flectonepulse.module.message.format.moderation.swear"
  type: TRUE
  bypass:
    name: "flectonepulse.module.message.format.moderation.swear.bypass"
    type: OP
  see:
    name: "flectonepulse.module.message.format.moderation.swear.see"
    type: OP
  sound:
    name: "flectonepulse.module.message.format.moderation.swear.sound"
    type: TRUE
```

## Параметры

- [Сообщения](/docs/message/format/moderation/swear/)
- [Локализация](/docs/localizations/ru_ru/message/format/moderation/swear/)

<!--@include: @/parts/permission/permissionTier3.md-->

### `bypass`

Право для игнорирования форматирования

::: details Настройка
<!--@include: @/parts/permission/permissionTier4.md-->
:::

### `see`

Право для просмотра содержимого в запрещённом слове
::: details Настройка
<!--@include: @/parts/permission/permissionTier4.md-->
:::

<!--@include: @/parts/permission/sound.md-->

