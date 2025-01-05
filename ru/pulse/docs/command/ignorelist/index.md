# Комманда /ignorelist
Путь `command.yml > ignorelist`

## Пояснение
Комманда для того, чтобы посмотреть список своих игнорирований
![command ignorelist](/commandignorelist.png)

## Редактирование
```yaml
<command.ignorelist>
```

### По умолчанию
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

## Параметры

- [Локализация](/docs/localizations/ru_ru/command/ignorelist/)
- [Права](/docs/permission/command/ignorelist/)

<!--@include: @/parts/enable.md-->
<!--@include: @/parts/perPage.md-->
<!--@include: @/parts/aliases.md-->
<!--@include: @/parts/cooldown.md-->
<!--@include: @/parts/sound.md-->