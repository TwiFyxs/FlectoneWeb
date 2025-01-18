# Command /maintenance
Path `command.yml > maintenance`

## Explanation
Command to switch on technical work
![command maintenance](/commandmaintenance.png)
![command maintenance server](/commandmaintenanceserver.png)

## Editing
```yaml
<command.maintenance>
```

### Default setting
```yaml
maintenance:
  enable: true
  turned-on: false
  aliases:
    - "maintenance"
  destination:
    type: CHAT
  cooldown:
    enable: false
  sound:
    enable: false
```

## Parameters

- [Localisation](/docs/localizations/ru_ru/command/maintenance/)
- [Permissions](/docs/permission/command/maintenance/)

<!--@include: @/parts/enable.md-->

### `turned-on`

Enables or disables technical work on the server

<!--@include: @/parts/aliases.md-->
<!--@include: @/parts/destination.md-->
<!--@include: @/parts/cooldown.md-->
<!--@include: @/parts/sound.md-->
