# Правое нажатие
Путь `permission.yml > message.contact.rightclick`

## Пояснение
Категория, отвечающая за настройку прав у взаимодействия Правое нажатие

## Редактирование
```yaml
<permission.message.contact.rightclick>
```

### По умолчанию
```yaml
rightclick:
  name: "flectonepulse.module.message.contact.rightclick"
  type: TRUE
  cooldown-bypass:
    name: "flectonepulse.module.message.contact.rightclick.cooldown.bypass"
    type: OP
  sound:
    name: "flectonepulse.module.message.contact.rightclick.sound"
    type: TRUE
```

## Параметры

- [Сообщения](/docs/message/contact/rightclick/)
- [Локализация](/docs/localizations/ru_ru/message/contact/rightclick/)

<!--@include: @/parts/permission/permissionTier3.md-->
<!--@include: @/parts/permission/cooldown.md-->
<!--@include: @/parts/permission/sound.md-->

