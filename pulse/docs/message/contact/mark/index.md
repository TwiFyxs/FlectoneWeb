# Метка
Путь `message.yml > contact.mark`

## Пояснение
Марка создаётся c помощью **ПКМ** и деревянного меча в главной руке
![mark](/mark.gif)

::: info Условие
Меч можно переименовать в наковальне на [доступный цвет](#доступные-цвета), например `RED` и метка будет красной
:::

## Редактирование
```yaml
<message.contact.mark>
```

### По умолчанию
```yaml
mark:
  enable: false
  limit: true
  color: true
  range: 100
  duration: 60
  item: "WOODEN_SWORD"
  entity: "MAGMA_CUBE"
  cooldown:
    enable: false
  sound:
    enable: false
```

## Параметры

- [Права](/docs/permission/message/contact/mark/)

<!--@include: @/parts/enable.md-->

### `limit`

Не позволяет сделать больше одной метки, пока она существует

### `color`

Включает возможность цветных меток. Для этого меч нужно переименовать в один из
<!--@include: @/parts/color.md-->

### `range`
- По умолчанию `100`

Расстояние в блоках, насколько далеко можно разместить метку

### `duration`

Сколько времени в [тиках](https://ru.minecraft.wiki/w/%D0%A2%D0%B0%D0%BA%D1%82) будет [лимит](#limit)

### `item`

Предмет, с помощью которого ставится метка

### `entity`

Хитбокс моба, который используется для создания метки

<!--@include: @/parts/ticker.md-->
<!--@include: @/parts/sound.md-->