# Комманда /afk
Путь `command.yml > afk`

## Пояснение
Комманда для смены режима AFK
![afk](/afkglobalmessage.png)

::: danger ВНИМАТЕЛЬНО
Комманда не будет работать, если модуль [`AFK`](/ru/message/contact/afk/) выключен
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

- [Локализация](/ru/localizations/ru_ru/command/afk/)
- [Права](/ru/permission/command/afk/)

### `enable`
- По умолчанию `true`

Включает или выключает работоспособность модуля

### `aliases`
- По умолчанию `afk`

Список псевдонимов для использования комманды

::: tip Псевдонимы могут быть любыми
Например `newafk`, `афк` и т.д.
:::


<!--@include: @/ru/parts/cooldown.md-->
<!--@include: @/ru/parts/sound.md-->