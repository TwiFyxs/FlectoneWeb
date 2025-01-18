# Command /kick
Path `command.yml > kick`

## Explanation
Command to expel a player from the server
![command kick](/commandkick.png)

On behalf of the player
![command kick player](/commandkickplayer.png)

## Editing
```yaml
<command.kick>
```

### Default setting
```yaml
kick:
  enable: true
  range: -2
  aliases:
    - "kick"
  destination:
    type: CHAT
  cooldown:
    enable: false
  sound:
    enable: false
```

## Parameters

- [Localisation](/docs/localizations/ru_ru/command/kick/)
- [Permissions](/docs/permission/command/kick/)

<!--@include: @/parts/enable.md-->
<!--@include: @/parts/range.md-->
<!--@include: @/parts/aliases.md-->
<!--@include: @/parts/destination.md-->
<!--@include: @/parts/cooldown.md-->
<!--@include: @/parts/sound.md-->
