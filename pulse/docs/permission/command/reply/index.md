# Комманда /reply
Путь `permission.yml > command.reply`

## Пояснение
Категория, отвечающая за настройку прав `/reply`

## Редактирование
```yaml
<permission.command.reply>
```

### По умолчанию
```yaml
reply:
  name: "flectonepulse.module.command.reply"
  type: TRUE
  cooldown-bypass:
    name: "flectonepulse.module.command.reply.cooldown.bypass"
    type: OP
  sound:
    name: "flectonepulse.module.command.reply.sound"
    type: TRUE
```

## Параметры

- [Конфиг](/docs/command/reply/)
- [Локализация](/docs/localizations/ru_ru/command/reply/)

<!--@include: @/parts/permission/permissionTier3.md-->
<!--@include: @/parts/permission/cooldown.md-->
<!--@include: @/parts/permission/sound.md-->

