# Комманда /stream
Путь `permission.yml > command.stream`

## Пояснение
Категория, отвечающая за настройку прав `/stream`

## Редактирование
```yaml
<permission.command.stream>
```

### По умолчанию
```yaml
stream:
  name: "flectonepulse.module.command.stream"
  type: OP
  cooldown-bypass:
    name: "flectonepulse.module.command.stream.cooldown.bypass"
    type: OP
  sound:
    name: "flectonepulse.module.command.stream.sound"
    type: TRUE
```

## Параметры

- [Конфиг](/docs/command/stream/)
- [Локализация](/docs/localizations/ru_ru/command/stream/)

<!--@include: @/parts/permission/permissionTier3.md-->
<!--@include: @/parts/permission/cooldown.md-->
<!--@include: @/parts/permission/sound.md-->

