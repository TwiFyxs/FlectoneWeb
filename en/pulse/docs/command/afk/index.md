# Комманда /afk
Путь `command.yml > afk`

## Пояснение
Комманда для смены режима AFK
![afk](/afkglobalmessage.png)

::: danger ВНИМАТЕЛЬНО
Комманда не будет работать, если модуль [`AFK`](/docs/message/contact/afk/) выключен
:::

## Редактирование
```yaml
<command.afk>
```

### По умолчанию
```yaml
afk:
  enable: true
  aliases:
    - "afk"
  cooldown:
    enable: false
  sound:
    enable: false
```

## Параметры

- [Права](/docs/permission/command/afk/)

<!--@include: @/parts/enable.md-->
<!--@include: @/parts/aliases.md-->
<!--@include: @/parts/cooldown.md-->
<!--@include: @/parts/sound.md-->