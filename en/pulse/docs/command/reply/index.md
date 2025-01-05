# Комманда /reply
Путь `command.yml > reply`

## Пояснение
Комманда для того, чтобы написать личное сообщение последнему написавшему игроку
![command reply](/commandreply.png)

::: danger Внимательно
Комманда не будет работать, если модуль [`Tell`](/docs/command/tell/) выключен
:::

## Редактирование
```yaml
<command.reply>
```

### По умолчанию
```yaml
reply:
  enable: true
  aliases:
    - "reply"
    - "r"
  cooldown:
    enable: false
  sound:
    enable: false
```

## Параметры

- [Локализация](/docs/localizations/ru_ru/command/reply/)
- [Права](/docs/permission/command/reply/)

<!--@include: @/parts/enable.md-->
<!--@include: @/parts/aliases.md-->
<!--@include: @/parts/cooldown.md-->
<!--@include: @/parts/sound.md-->