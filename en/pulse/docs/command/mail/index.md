# Комманда /mail
Путь `command.yml > mail`

## Пояснение
Комманда для того, чтобы написать оффлайн игроку письмо
![command mail](/commandmail.png)

Когда игрок, которому написали письмо, зайдёт на сервер, он увидит эти письма
![command mail player](/commandmailplayer.png)

Если игрок уже на сервере и модуль [Tell](/docs/command/tell/) включен, то он будет использован
![command tell](/commandtell.png)

## Редактирование
```yaml
<command.mail>
```

### По умолчанию
```yaml
mail:
  enable: true
  aliases:
    - "mail"
  destination:
    type: CHAT
  cooldown:
    enable: false
  sound:
    enable: false
```

## Параметры

- [Локализация](/docs/localizations/ru_ru/command/mail/)
- [Права](/docs/permission/command/mail/)

<!--@include: @/parts/enable.md-->
<!--@include: @/parts/aliases.md-->
<!--@include: @/parts/destination.md-->
<!--@include: @/parts/cooldown.md-->
<!--@include: @/parts/sound.md-->