# Комманда /dice
Путь `permission.yml > command.dice`

## Пояснение
Категория, отвечающая за настройку прав `/dice`

## Редактирование
```yaml
<permission.command.dice>
```

### По умолчанию
```yaml
dice:
  name: "flectonepulse.module.command.dice"
  type: TRUE
  cooldown-bypass:
    name: "flectonepulse.module.command.dice.cooldown.bypass"
    type: OP
  sound:
    name: "flectonepulse.module.command.dice.sound"
    type: TRUE
```

## Параметры

- [Конфиг](/docs/command/dice/)
- [Локализация](/docs/localizations/ru_ru/command/dice/)

<!--@include: @/parts/permission/permissionTier3.md-->
<!--@include: @/parts/permission/cooldown.md-->
<!--@include: @/parts/permission/sound.md-->

