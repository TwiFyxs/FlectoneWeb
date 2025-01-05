# Комманда /mutelist
Путь `command.yml > mutelist`

## Пояснение
Комманда для того, чтобы посмотреть список мутов

![command mutelist](/commandmutelist.png)

## Редактирование
```yaml
<command.mutelist>
```

### По умолчанию
```yaml
mutelist:
  enable: true
  per-page: 4
  aliases:
    - "mutelist"
  cooldown:
    enable: false
  sound:
    enable: false
```

## Параметры

- [Локализация](/docs/localizations/ru_ru/command/mutelist/)
- [Права](/docs/permission/command/mutelist/)

<!--@include: @/parts/enable.md-->
<!--@include: @/parts/perPage.md-->
<!--@include: @/parts/aliases.md-->
<!--@include: @/parts/cooldown.md-->
<!--@include: @/parts/sound.md-->