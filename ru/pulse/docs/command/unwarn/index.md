# Комманда /unwarn
Путь `command.yml > unwarn`

## Пояснение
Комманда для того, чтобы снять предупреждение с игрока
![command unwarn](/commandunwarn.png)

## Редактирование
```yaml
<command.unwarn>
```

### По умолчанию
```yaml
unwarn:
  enable: true
  aliases:
    - "unwarn"
  destination:
    type: CHAT
  cooldown:
    enable: false
  sound:
    enable: false
```

## Параметры

- [Локализация](/docs/localizations/ru_ru/command/unwarn/)
- [Права](/docs/permission/command/unwarn/)

<!--@include: @/parts/enable.md-->
<!--@include: @/parts/aliases.md-->
<!--@include: @/parts/destination.md-->
<!--@include: @/parts/cooldown.md-->
<!--@include: @/parts/sound.md-->