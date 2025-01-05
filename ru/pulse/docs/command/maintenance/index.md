# Комманда /maintenance
Путь `command.yml > maintenance`

## Пояснение
Комманда для включения технических работ
![command maintenance](/commandmaintenance.png)
![command maintenance server](/commandmaintenanceserver.png)

## Редактирование
```yaml
<command.maintenance>
```

### По умолчанию
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

## Параметры

- [Локализация](/docs/localizations/ru_ru/command/maintenance/)
- [Права](/docs/permission/command/maintenance/)

<!--@include: @/parts/enable.md-->

### `turned-on`

Включает или выключает технические работы на сервере

<!--@include: @/parts/aliases.md-->
<!--@include: @/parts/destination.md-->
<!--@include: @/parts/cooldown.md-->
<!--@include: @/parts/sound.md-->
