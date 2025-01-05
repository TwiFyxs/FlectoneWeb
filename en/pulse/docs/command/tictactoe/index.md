# Комманда /tictactoe
Путь `command.yml > tictactoe`

## Пояснение
Комманда для того, чтобы предложить поиграть в крестики-нолики
![command tictactoe](/commandtictactoe.png)

По умолчанию кидается запрос в [китайские крестики-нолики](#правила-китайских-крестиков-ноликов), если хочешь в обычные, то используй `/tictactoe ник false`
![command tictactoe default](/commandtictactoedefault.png)

## Редактирование
```yaml
<command.tictactoe>
```

### По умолчанию
```yaml
tictactoe:
  enable: true
  aliases:
    - "tictactoe"
    - "ttt"
  cooldown:
    enable: false
  sound:
    enable: false
```

## Параметры

- [Локализация](/docs/localizations/ru_ru/command/tictactoe/)
- [Права](/docs/permission/command/tictactoe/)

<!--@include: @/parts/enable.md-->
<!--@include: @/parts/aliases.md-->
<!--@include: @/parts/cooldown.md-->
<!--@include: @/parts/sound.md-->

### Правила китайских крестиков-ноликов

1. Каждый игрок может поставить только `3` своих метки
2. Если игра не закончилась, то первая метка, которая была поставлена игроком убирается и ставится новая
3. И так по кругу, пока игра не закончится

В итоге игра становится непредсказуемой, со стратегией и сложной!