# Комманда /unmute
Путь `permission.yml > command.unmute`

## Пояснение
Категория, отвечающая за настройку прав `/unmute`

## Редактирование
```yaml
<permission.command.unmute>
```

### По умолчанию
```yaml
unmute:
  name: "flectonepulse.module.command.unmute"
  type: OP
  cooldown-bypass:
    name: "flectonepulse.module.command.unmute.cooldown.bypass"
    type: OP
  sound:
    name: "flectonepulse.module.command.unmute.sound"
    type: TRUE
```

## Параметры

- [Конфиг](/docs/command/unmute/)
- [Локализация](/docs/localizations/ru_ru/command/unmute/)

<!--@include: @/parts/permission/permissionTier3.md-->
<!--@include: @/parts/permission/cooldown.md-->
<!--@include: @/parts/permission/sound.md-->

