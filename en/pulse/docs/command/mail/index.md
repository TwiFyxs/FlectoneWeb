# Command /mail
Path `command.yml > mail`

## Пояснение
The command to write a letter to an offline player
![command mail](/commandmail.png)

When the player to whom the letter was written logs into the server, he will see these letters
![command mail player](/commandmailplayer.png)

If the player is already on the server and the module [Tell](/docs/command/tell/) is switched on, it will be used
![command tell](/commandtell.png)

## Editing
```yaml
<command.mail>
```

### Default setting
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

## Parameters

- [Localisation](/docs/localizations/ru_ru/command/mail/)
- [Permissions](/docs/permission/command/mail/)

<!--@include: @/parts/enable.md-->
<!--@include: @/parts/aliases.md-->
<!--@include: @/parts/destination.md-->
<!--@include: @/parts/cooldown.md-->
<!--@include: @/parts/sound.md-->
