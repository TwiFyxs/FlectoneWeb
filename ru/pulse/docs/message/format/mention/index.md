# Упоминание
Путь `message.yml > format.mention`

## Пояснение
Это форматирование позволяет упоминать (пинговать) человека в сообщении
![mention](/mention.png)

## Редактирование
```yaml
<message.format.mention>
```

### По умолчанию
```yaml
mention:
  enable: true
  trigger: "@"
  sound:
    enable: true
```

## Параметры

- [Локализация](/docs/localizations/ru_ru/message/format/mention/)
- [Права](/docs/permission/message/format/mention/)

<!--@include: @/parts/enable.md-->

### `trigger`

Символ, с которого должно начинаться сообщение упоминания
::: tip Например
Если я хочу упомянуть `Flectone`, то я должен написать `@Flectone`
![mention](/mention.png)
:::

<!--@include: @/parts/sound.md-->