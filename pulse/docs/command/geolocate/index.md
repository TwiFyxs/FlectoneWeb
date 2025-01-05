# Комманда /geolocate
Путь `command.yml > geolocate`

## Пояснение
Комманда для отслеживания IP-адреса и получения информации об игроке
![command geolocate](/commandgeolocate.png)

## Редактирование
```yaml
<command.geolocate>
```

### По умолчанию
```yaml
geolocate:
  enable: true
  suggest-offline-players: true
  aliases:
    - "geolocate"
  destination:
    type: CHAT
  cooldown:
    enable: false
  sound:
    enable: false
```

## Параметры

- [Локализация](/docs/localizations/ru_ru/command/geolocate/)
- [Права](/docs/permission/command/geolocate/)

<!--@include: @/parts/enable.md-->
<!--@include: @/parts/suggestOfflinePlayers.md-->
<!--@include: @/parts/aliases.md-->
<!--@include: @/parts/destination.md-->
<!--@include: @/parts/cooldown.md-->
<!--@include: @/parts/sound.md-->