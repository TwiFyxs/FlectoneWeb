# Комманда /tell
Путь `permission.yml > command.tell`

## Пояснение
Категория, отвечающая за настройку прав `/tell`

## Редактирование
```yaml
<permission.command.tell>
```

### По умолчанию
```yaml
tell:
  name: "flectonepulse.module.command.tell"
  type: TRUE
  cooldown-bypass:
    name: "flectonepulse.module.command.tell.cooldown.bypass"
    type: OP
  sound:
    name: "flectonepulse.module.command.tell.sound"
    type: TRUE
```

## Параметры

- [Конфиг](/docs/command/tell/)
- [Локализация](/docs/localizations/ru_ru/command/tell/)

<!--@include: @/parts/permission/permissionTier3.md-->
<!--@include: @/parts/permission/cooldown.md-->
<!--@include: @/parts/permission/sound.md-->

