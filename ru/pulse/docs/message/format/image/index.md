# Изображение
Путь `message.yml > format.image`

## Пояснение
Тег `image` используется для отображения изображений

Использование: `<image:ссылка> сообщение </image>`

![image](https://i.imgur.com/hX8U4T7.png)
![image message](/imagemessage.png)
![image minecraft](/imageminecraft.png)


## Редактирование
```yaml
<message.format.image>
```

### По умолчанию
```yaml
image:
  enable: true
  color: "<fcolor:2>"
```

## Параметры

- [Права](/docs/permission/message/format/image/)

<!--@include: @/parts/enable.md-->

### `color`

Определяет цвет сообщения, содержащее ссылку

::: tip Пример
`<image:ссылка> дом </image>`

Здесь `дом` будет иметь цвет `<fcolor:2>`

:::