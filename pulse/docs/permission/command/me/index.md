# Комманда /me
Путь `permission.yml > command.me`

## Пояснение
Категория, отвечающая за настройку прав `/me`

## Редактирование
```yaml
<permission.command.me>
```

### По умолчанию
```yaml
me:
  name: "flectonepulse.module.command.me"
  type: TRUE
  cooldown-bypass:
    name: "flectonepulse.module.command.me.cooldown.bypass"
    type: OP
  sound:
    name: "flectonepulse.module.command.me.sound"
    type: TRUE
```

## Параметры

- [Конфиг](/docs/command/me/)
- [Локализация](/docs/localizations/ru_ru/command/me/)

<!--@include: @/parts/permission/permissionTier3.md-->
<!--@include: @/parts/permission/cooldown.md-->
<!--@include: @/parts/permission/sound.md-->

