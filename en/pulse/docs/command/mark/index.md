# Command /mark
Path `command.yml > mark`

## Explanation
Command for creating labels
![command mark](/commandmark.gif)

::: Danger Внимательно
The command will not work if the [`Mark`](/docs/message/contact/mark/) module is disabled
:::

## Editing
```yaml
<command.mark>
```

### Default setting
```yaml
mark:
  enable: false
  aliases:
    - "mark"
  cooldown:
    enable: false
  sound:
    enable: false
```

## Parameters

- [Localisation](/docs/localizations/ru_ru/command/mark/)
- [Permissions](/docs/permission/command/mark/)

<!--@include: @/parts/enable.md-->
<!--@include: @/parts/aliases.md-->
<!--@include: @/parts/cooldown.md-->
<!--@include: @/parts/sound.md-->
