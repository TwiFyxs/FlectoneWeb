# Command /me
Path `command.yml > me`

## Explanation
Command for displaying an action
![command me](/commandme.png)

## Editing
```yaml
<command.me>
```

### Default setting
```yaml
me:
  enable: true
  range: -2
  aliases:
    - "me"
  destination:
    type: CHAT
  cooldown:
    enable: false
  sound:
    enable: false
```

## Parameters

- [Localisation](/docs/localizations/ru_ru/command/me/)
- [Permissions](/docs/permission/command/me/)

<!--@include: @/parts/enable.md-->
<!--@include: @/parts/range.md-->
<!--@include: @/parts/aliases.md-->
<!--@include: @/parts/destination.md-->
<!--@include: @/parts/cooldown.md-->
<!--@include: @/parts/sound.md-->
