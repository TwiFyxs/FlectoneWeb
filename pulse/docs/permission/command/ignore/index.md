# Комманда /ignore
Путь `permission.yml > command.ignore`

## Пояснение
Категория, отвечающая за настройку прав `/ignore`

## Редактирование
```yaml
<permission.command.ignore>
```

### По умолчанию
```yaml
ignore:
  name: "flectonepulse.module.command.ignore"
  type: TRUE
  cooldown-bypass:
    name: "flectonepulse.module.command.ignore.cooldown.bypass"
    type: OP
  sound:
    name: "flectonepulse.module.command.ignore.sound"
    type: TRUE
```

## Параметры

- [Конфиг](/docs/command/ignore/)
- [Локализация](/docs/localizations/ru_ru/command/ignore/)

<!--@include: @/parts/permission/permissionTier3.md-->
<!--@include: @/parts/permission/cooldown.md-->
<!--@include: @/parts/permission/sound.md-->

