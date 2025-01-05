# Комманда /chatcolor
Путь `command.yml > chatcolor`

## Пояснение
Комманда для смены [цветов](/docs/config/tag/color/)
![command chatcolor](/commandchatcolor.png)


## Редактирование
```yaml
<command.chatcolor>
```

### По умолчанию
```yaml
chatcolor:
  enable: true
  aliases:
    - "chatcolor"
  destination:
    type: CHAT
  cooldown:
    enable: false
  sound:
    enable: false
```

## Параметры

- [Локализация](/docs/localizations/ru_ru/command/chatcolor/)
- [Права](/docs/permission/command/chatcolor/)

<!--@include: @/parts/enable.md-->
<!--@include: @/parts/aliases.md-->
<!--@include: @/parts/destination.md-->
<!--@include: @/parts/cooldown.md-->
<!--@include: @/parts/sound.md-->