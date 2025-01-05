# Комманда /geolocate
Путь `permission.yml > command.geolocate`

## Пояснение
Категория, отвечающая за настройку прав `/geolocate`

## Редактирование
```yaml
<permission.command.geolocate>
```

### По умолчанию
```yaml
geolocate:
  name: "flectonepulse.module.command.geolocate"
  type: OP
  cooldown-bypass:
    name: "flectonepulse.module.command.geolocate.cooldown.bypass"
    type: OP
  sound:
    name: "flectonepulse.module.command.geolocate.sound"
    type: TRUE
```

## Параметры

- [Конфиг](/docs/command/geolocate/)
- [Локализация](/docs/localizations/ru_ru/command/geolocate/)

<!--@include: @/parts/permission/permissionTier3.md-->
<!--@include: @/parts/permission/cooldown.md-->
<!--@include: @/parts/permission/sound.md-->

