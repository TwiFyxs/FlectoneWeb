# Чат
Путь `permission.yml > message.chat`

## Пояснение
Категория, отвечающая за настройку прав у сообщений игрока в чате

## Редактирование
```yaml
<permission.message.chat>
```

### По умолчанию
```yaml
chat:
  name: "flectonepulse.module.message.chat"
  type: TRUE
  types:
    local:
      name: "flectonepulse.module.message.chat.local"
      type: TRUE
      cooldown-bypass:
        name: "flectonepulse.module.message.chat.local.cooldown.bypass"
        type: OP
      sound:
        name: "flectonepulse.module.message.chat.local.sound"
        type: TRUE
    global:
      name: "flectonepulse.module.message.chat.global"
      type: TRUE
      cooldown-bypass:
        name: "flectonepulse.module.message.chat.global.cooldown.bypass"
        type: OP
      sound:
        name: "flectonepulse.module.message.chat.global.sound"
        type: TRUE
```

## Параметры

- [Сообщения](/docs/message/chat/)
- [Локализация](/docs/localizations/ru_ru/message/chat/)

<!--@include: @/parts/permission/permissionTier3.md-->

### `types`

Список чатов и их прав

<!--@include: @/parts/permission/cooldown.md-->
<!--@include: @/parts/permission/sound.md-->

