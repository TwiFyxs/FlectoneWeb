# Снятие подписи
Путь `message.yml > contact.unsign`

## Пояснение
Снятие подписи происходит с помощью **ЛКМ** на точиле, если игрок держит в **главной** руке предмет с подписью
![unsign](/unsign.gif)

::: info Условие
Игрок может снять только свою подпись
:::

## Редактирование
```yaml
<message.contact.unsign>
```

### По умолчанию
```yaml
unsign:
  enable: false
  drop-dye: true
  block: "GRINDSTONE"
  cooldown:
    enable: false
  sound:
    enable: false
```

## Параметры

- [Права](/docs/permission/message/contact/unsign/)

<!--@include: @/parts/enable.md-->

### `drop-dye`

Включает выкидывание красителя, который использовался при подписи
![unsign](/unsign.gif)

### `block`

Блок, на который нужно нажать, для снятия подписи

<!--@include: @/parts/cooldown.md-->
<!--@include: @/parts/sound.md-->