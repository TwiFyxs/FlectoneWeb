# Комманда /online
Путь `permission.yml > command.online`

## Пояснение
Категория, отвечающая за настройку прав `/online`

## Редактирование
```yaml
<permission.command.online>
```

### По умолчанию
```yaml
online:
  name: "flectonepulse.module.command.online"
  type: TRUE
  cooldown-bypass:
    name: "flectonepulse.module.command.online.cooldown.bypass"
    type: OP
  sound:
    name: "flectonepulse.module.command.online.sound"
    type: TRUE
```

## Параметры

- [Конфиг](/docs/command/online/)
- [Локализация](/docs/localizations/ru_ru/command/online/)

<!--@include: @/parts/permission/permissionTier3.md-->
<!--@include: @/parts/permission/cooldown.md-->
<!--@include: @/parts/permission/sound.md-->

