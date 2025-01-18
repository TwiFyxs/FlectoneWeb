# Command /ignorelist
Path `command.yml > ignorelist`

## Explanation
Command to see your ignore list
![command ignorelist](/commandignorelist.png)

## Editing
```yaml
<command.ignorelist>
```

### Default setting
```yaml
ignorelist:
  enable: true
  per-page: 4
  aliases:
    - "ignorelist"
  cooldown:
    enable: false
  sound:
    enable: false
```

## Parameters

- [Localisation](/docs/localizations/ru_ru/command/ignorelist/)
- [Permissions](/docs/permission/command/ignorelist/)

<!--@include: @/parts/enable.md-->
<!--@include: @/parts/perPage.md-->
<!--@include: @/parts/aliases.md-->
<!--@include: @/parts/cooldown.md-->
<!--@include: @/parts/sound.md-->
