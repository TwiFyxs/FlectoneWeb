# Комманда /rockpaperscissors
Путь `command.yml > rockpaperscissors`

## Пояснение
Комманда для того, чтобы предложить поиграть в камень-ножницы-бумага
![command rockpaperscissors](/commandrockpaperscissors.png)

## Редактирование
```yaml
<command.rockpaperscissors>
```

### По умолчанию
```yaml
rockpaperscissors:
  enable: true
  aliases:
    - "rockpaperscissors"
    - "rps"
  strategies:
    rock:
      - "scissors"
    paper:
      - "rock"
    scissors:
      - "paper"
  cooldown:
    enable: false
  sound:
    enable: false
```

## Параметры

- [Локализация](/docs/localizations/ru_ru/command/rockpaperscissors/)
- [Права](/docs/permission/command/rockpaperscissors/)

<!--@include: @/parts/enable.md-->
<!--@include: @/parts/aliases.md-->

### `strategy`

Стратегии, где `ключом` является тот, кто побеждает `значение`

::: tip Например я хочу, чтобы `ножницы` побеждали `paper`
Значит я должен написать
```yaml
scissors:
  - "paper"
```

Значений может быть несколько т.е.
```yaml
scissors:
  - "paper"
  - "newitem"
```

Можно сделать свои ключи и значения
```yaml
customvalue:
  - "customobject"
```
:::

<!--@include: @/parts/cooldown.md-->
<!--@include: @/parts/sound.md-->