# Комманда /coin
Путь `permission.yml > command.coin`

## Пояснение
Категория, отвечающая за настройку прав `/coin`

## Редактирование
```yaml
<permission.command.coin>
```

### По умолчанию
```yaml
coin:
  name: "flectonepulse.module.command.coin"
  type: TRUE
  cooldown-bypass:
    name: "flectonepulse.module.command.coin.cooldown.bypass"
    type: OP
  sound:
    name: "flectonepulse.module.command.coin.sound"
    type: TRUE
```

## Параметры

- [Конфиг](/docs/command/coin/)
- [Локализация](/docs/localizations/ru_ru/command/coin/)

<!--@include: @/parts/permission/permissionTier3.md-->
<!--@include: @/parts/permission/cooldown.md-->
<!--@include: @/parts/permission/sound.md-->

