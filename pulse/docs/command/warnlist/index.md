# Комманда /warnlist
Путь `command.yml > warnlist`

## Пояснение
Комманда для того, чтобы посмотреть список варнов

![command warnlist](/commandwarnlist.png)

## Редактирование
```yaml
<command.warnlist>
```

### По умолчанию
```yaml
warnlist:
  enable: true
  per-page: 4
  aliases:
    - "warnlist"
  cooldown:
    enable: false
  sound:
    enable: false
```

## Параметры

- [Локализация](/docs/localizations/ru_ru/command/warnlist/)
- [Права](/docs/permission/command/warnlist/)

<!--@include: @/parts/enable.md-->
<!--@include: @/parts/perPage.md-->
<!--@include: @/parts/aliases.md-->
<!--@include: @/parts/cooldown.md-->
<!--@include: @/parts/sound.md-->