# Комманда /mail
Путь `permission.yml > command.mail`

## Пояснение
Категория, отвечающая за настройку прав `/mail`

## Редактирование
```yaml
<permission.command.mail>
```

### По умолчанию
```yaml
mail:
  name: "flectonepulse.module.command.mail"
  type: TRUE
  cooldown-bypass:
    name: "flectonepulse.module.command.mail.cooldown.bypass"
    type: OP
  sound:
    name: "flectonepulse.module.command.mail.sound"
    type: TRUE
```

## Параметры

- [Конфиг](/docs/command/mail/)
- [Локализация](/docs/localizations/ru_ru/command/mail/)

<!--@include: @/parts/permission/permissionTier3.md-->
<!--@include: @/parts/permission/cooldown.md-->
<!--@include: @/parts/permission/sound.md-->

