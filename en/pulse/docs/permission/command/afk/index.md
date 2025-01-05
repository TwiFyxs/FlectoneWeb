# Комманда /afk
Путь `permission.yml > command.afk`

## Пояснение
Категория, отвечающая за настройку прав `/afk`

## Редактирование
```yaml
<permission.command.afk>
```

### По умолчанию
```yaml
afk:
  name: "flectonepulse.module.command.afk"
  type: TRUE
  cooldown-bypass:
    name: "flectonepulse.module.command.afk.cooldown.bypass"
    type: OP
  sound:
    name: "flectonepulse.module.command.afk.sound"
    type: TRUE
```

## Параметры

- [Конфиг](/docs/command/afk/)

<!--@include: @/parts/permission/permissionTier3.md-->
<!--@include: @/parts/permission/cooldown.md-->
<!--@include: @/parts/permission/sound.md-->
