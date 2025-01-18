# Command /helper
Path `command.yml > helper`

## Explanation
Command to ask for help
![command helper](/commandhelper.png)

On behalf of the assistant
![command helper player](/commandhelperadmin.png)

## Editing
```yaml
<command.helper>
```

### Default setting
```yaml
helper:
  enable: true
  range: -2
  aliases:
    - "helper"
  destination:
    type: CHAT
  cooldown:
    enable: false
  sound:
    enable: false
```

## Parameters

- [Localisation](/docs/localizations/ru_ru/command/helper/)
- [Permissions](/docs/permission/command/helper/)

<!--@include: @/parts/enable.md-->
<!--@include: @/parts/range.md-->
<!--@include: @/parts/aliases.md-->
<!--@include: @/parts/destination.md-->
<!--@include: @/parts/cooldown.md-->
<!--@include: @/parts/sound.md-->
