# Подпись
Путь `message.yml > contact.sign`

## Пояснение
Подпись создаётся на предмете с помощью **ЛКМ** по наковальне, если игрок держит в **дополнительной** руке краситель и в **главной** предмет
![sign](/sign.gif)

## Редактирование
```yaml
<message.contact.sign>
```

### По умолчанию
```yaml
sign:
  enable: false
  drop-dye: true
  block: "ANVIL"
  cooldown:
    enable: false
  sound:
    enable: false
```

## Параметры

- [Локализация](/docs/localizations/ru_ru/message/contact/sign/)
- [Права](/docs/permission/message/contact/sign/)

<!--@include: @/parts/enable.md-->

### `drop-dye`

Включает выкидывание красителя прошлой подписи, если подпись переделывается
![resign](/resign.gif)

### `block`

Блок, на который нужно нажать, для подписи

<!--@include: @/parts/cooldown.md-->
<!--@include: @/parts/sound.md-->