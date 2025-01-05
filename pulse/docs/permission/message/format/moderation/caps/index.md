# Капс
Путь `permission.yml > message.format.moderation.caps`

## Пояснение
Категория, отвечающая за настройку прав у форматирования капса в сообщениях игрока

## Редактирование
```yaml
<permission.message.format.moderation.caps>
```

### По умолчанию
```yaml
caps:
  name: "flectonepulse.module.message.format.moderation.caps"
  type: TRUE
  bypass:
    name: "flectonepulse.module.message.format.moderation.caps.bypass"
    type: OP
  sound:
    name: "flectonepulse.module.message.format.moderation.caps.sound"
    type: TRUE
```

## Параметры

- [Сообщения](/docs/message/format/moderation/caps/)

<!--@include: @/parts/permission/permissionTier3.md-->

### `bypass`

Право для игнорирования форматирования

::: details Настройка
<!--@include: @/parts/permission/permissionTier4.md-->
:::

<!--@include: @/parts/permission/sound.md-->


