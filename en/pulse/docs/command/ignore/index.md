# Command /ignore
Path `command.yml > ignore`

## Explanation
Command to ignore all messages from a player
![command ignore](/commandignore.png)

Removes ignore with reuse
![command unignore](/commandunignore.png)

## Editing
```yaml
<command.ignore>
```

### Default setting
```yaml
ignore:
  enable: true
  suggest-offline-players: true
  aliases:
    - "ignore"
  destination:
    type: CHAT
  cooldown:
    enable: false
  sound:
    enable: false
```

## Parameters

- [Localisation](/docs/localizations/ru_ru/command/ignore/)
- [Permission](/docs/permission/command/ignore/)

<!--@include: @/parts/enable.md-->
<!--@include: @/parts/suggestOfflinePlayers.md-->
<!--@include: @/parts/aliases.md-->
<!--@include: @/parts/destination.md-->
<!--@include: @/parts/cooldown.md-->
<!--@include: @/parts/sound.md-->
