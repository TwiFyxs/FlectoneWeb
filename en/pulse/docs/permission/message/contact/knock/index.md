# Стуки
Путь `permission.yml > message.contact.knock`

## Пояснение
Категория, отвечающая за настройку прав у взаимодействия Стуки

## Редактирование
```yaml
<permission.message.contact.knock>
```

### По умолчанию
```yaml
knock:
  name: "flectonepulse.module.message.contact.knock"
  type: TRUE
  types:
    GLASS:
      name: "flectonepulse.module.message.contact.knock.glass.sound"
      type: TRUE
    DOOR:
      name: "flectonepulse.module.message.contact.knock.door.sound"
      type: TRUE
  cooldown-bypass:
    name: "flectonepulse.module.message.contact.knock.cooldown.bypass"
    type: OP
```

## Параметры

- [Сообщения](/docs/message/contact/knock/)

<!--@include: @/parts/permission/permissionTier3.md-->

### `types`

Список названий звуков для стука и их права

<!--@include: @/parts/permission/cooldown.md-->

