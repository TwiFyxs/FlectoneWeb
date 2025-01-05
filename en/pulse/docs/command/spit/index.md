# Комманда /spit
Путь `command.yml > spit`

## Пояснение
Комманда для создания плевков
![command spit](/commandspit.gif)

::: danger Внимательно
Комманда не будет работать, если модуль [`Spit`](/docs/message/contact/spit/) выключен
:::

## Редактирование
```yaml
<command.spit>
```

### По умолчанию
```yaml
spit:
  enable: false
  aliases:
    - "spit"
  cooldown:
    enable: false
  sound:
    enable: false
```

## Параметры

- [Локализация](/docs/localizations/ru_ru/command/spit/)
- [Права](/docs/permission/command/spit/)

<!--@include: @/parts/enable.md-->
<!--@include: @/parts/aliases.md-->
<!--@include: @/parts/cooldown.md-->
<!--@include: @/parts/sound.md-->