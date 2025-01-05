# Комманда /chatcolor
Путь `permission.yml > command.chatcolor`

## Пояснение
Категория, отвечающая за настройку прав `/chatcolor`

## Редактирование
```yaml
<permission.command.chatcolor>
```

### По умолчанию
```yaml
chatcolor:
  name: "flectonepulse.module.command.chatcolor"
  type: TRUE
  other:
    name: "flectonepulse.module.command.chatcolor.other"
    type: OP
  cooldown-bypass:
    name: "flectonepulse.module.command.chatcolor.cooldown.bypass"
    type: OP
  sound:
    name: "flectonepulse.module.command.chatcolor.sound"
    type: TRUE
```

## Параметры

- [Конфиг](/docs/command/chatcolor/)
- [Локализация](/docs/localizations/ru_ru/command/chatcolor/)

<!--@include: @/parts/permission/permissionTier3.md-->
<!--@include: @/parts/permission/other.md-->
<!--@include: @/parts/permission/cooldown.md-->
<!--@include: @/parts/permission/sound.md-->

