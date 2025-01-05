# Комманда /mark
Путь `command.yml > mark`

## Пояснение
Комманда для создания меток
![command mark](/commandmark.gif)

::: danger Внимательно
Комманда не будет работать, если модуль [`Mark`](/docs/message/contact/mark/) выключен
:::

## Редактирование
```yaml
<command.mark>
```

### По умолчанию
```yaml
mark:
  enable: false
  aliases:
    - "mark"
  cooldown:
    enable: false
  sound:
    enable: false
```

## Параметры

- [Локализация](/docs/localizations/ru_ru/command/mark/)
- [Права](/docs/permission/command/mark/)

<!--@include: @/parts/enable.md-->
<!--@include: @/parts/aliases.md-->
<!--@include: @/parts/cooldown.md-->
<!--@include: @/parts/sound.md-->