# Комманда /ban
Путь `permission.yml > command.ban`

## Пояснение
Категория, отвечающая за настройку прав `/ban`

## Редактирование
```yaml
<permission.command.ban>
```

### По умолчанию
```yaml
ban:
  name: "flectonepulse.module.command.ban"
  type: OP
  cooldown-bypass:
    name: "flectonepulse.module.command.ban.cooldown.bypass"
    type: OP
  sound:
    name: "flectonepulse.module.command.ban.sound"
    type: TRUE
```

## Параметры

- [Конфиг](/docs/command/ban/)
- [Локализация](/docs/localizations/ru_ru/command/ban/)

<!--@include: @/parts/permission/permissionTier3.md-->
<!--@include: @/parts/permission/cooldown.md-->
<!--@include: @/parts/permission/sound.md-->

