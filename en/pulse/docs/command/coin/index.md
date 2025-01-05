# Комманда /coin
Путь `command.yml > coin`

## Пояснение
Комманда для подбрасывания монетки
![command coin](/commandcoin.png)

## Редактирование
```yaml
<command.coin>
```

### По умолчанию
```yaml
coin:
  enable: true
  draw: true
  range: -2
  aliases:
    - "coin"
  destination:
    type: CHAT
  cooldown:
    enable: false
  sound:
    enable: false
```

## Параметры

- [Локализация](/docs/localizations/ru_ru/command/coin/)
- [Права](/docs/permission/command/coin/)

<!--@include: @/parts/enable.md-->

### `draw`

Включает маленький шанс (`1%` от `101%`) выпадения монетки на ребро

<!--@include: @/parts/range.md-->
<!--@include: @/parts/aliases.md-->
<!--@include: @/parts/destination.md-->
<!--@include: @/parts/cooldown.md-->
<!--@include: @/parts/sound.md-->