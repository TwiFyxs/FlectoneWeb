# Спойлер
Путь `message.yml > format.spoiler`

## Пояснение
Тег `spoiler` используется для скрытия сообщения, до наведения на него

Использование: `<spoiler:сообщение>`

![spoiler message](/spoilermessage.png)
![spoiler minecraft](/spoilerminecraft.png)


## Редактирование
```yaml
<message.format.spoiler>
```

### По умолчанию
```yaml
spoiler:
  enable: true
  color: "<fcolor:2>"
```

## Параметры

- [Локализация](/docs/localizations/ru_ru/message/format/spoiler/)
- [Права](/docs/permission/message/format/spoiler/)

<!--@include: @/parts/enable.md-->

### `color`

Определяет цвет сообщения, содержащее спойлер

::: tip Пример
`<spoiler:дом>`

Здесь `дом` будет иметь цвет `<fcolor:2>`

:::