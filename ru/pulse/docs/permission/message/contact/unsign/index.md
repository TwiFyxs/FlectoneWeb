# Снятие подписи
Путь `permission.yml > message.contact.unsign`

## Пояснение
Категория, отвечающая за настройку прав у взаимодействия Снятие подписи

## Редактирование
```yaml
<permission.message.contact.unsign>
```

### По умолчанию
```yaml
unsign:
  name: "flectonepulse.module.message.contact.unsign"
  type: TRUE
  cooldown-bypass:
    name: "flectonepulse.module.message.contact.unsign.cooldown.bypass"
    type: OP
  sound:
    name: "flectonepulse.module.message.contact.unsign.sound"
    type: TRUE
```

## Параметры

- [Сообщения](/docs/message/contact/unsign/)

<!--@include: @/parts/permission/permissionTier3.md-->
<!--@include: @/parts/permission/cooldown.md-->
<!--@include: @/parts/permission/sound.md-->

