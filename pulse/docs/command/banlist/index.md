# Комманда /banlist
Путь `command.yml > banlist`

## Пояснение
Комманда для того, чтобы посмотреть список блокировок
![command banlist](/commandbanlist.png)

## Редактирование
```yaml
<command.banlist>
```

### По умолчанию
```yaml
banlist:
  enable: true
  per-page: 4
  aliases:
    - "banlist"
  cooldown:
    enable: false
  sound:
    enable: false
```

## Параметры

- [Локализация](/docs/localizations/ru_ru/command/banlist/)
- [Права](/docs/permission/command/banlist/)

<!--@include: @/parts/enable.md-->
<!--@include: @/parts/perPage.md-->
<!--@include: @/parts/aliases.md-->
<!--@include: @/parts/cooldown.md-->
<!--@include: @/parts/sound.md-->