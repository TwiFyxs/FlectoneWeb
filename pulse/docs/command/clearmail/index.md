# Комманда /clearmail
Путь `command.yml > clearmail`

## Пояснение
Комманда для удаления отправленных [писем](/docs/commands/mail/)
![command clearmail](/commandclearmail.png)

## Редактирование
```yaml
<command.clearmail>
```

### По умолчанию
```yaml
clearmail:
  enable: true
  aliases:
    - "clearmail"
  destination:
    type: CHAT
  cooldown:
    enable: false
  sound:
    enable: false
```

## Параметры

- [Локализация](/docs/localizations/ru_ru/command/clearmail/)
- [Права](/docs/permission/command/clearmail/)

<!--@include: @/parts/enable.md-->
<!--@include: @/parts/aliases.md-->
<!--@include: @/parts/destination.md-->
<!--@include: @/parts/cooldown.md-->
<!--@include: @/parts/sound.md-->