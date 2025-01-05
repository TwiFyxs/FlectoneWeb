# Скорборд
Путь `message.yml > scoreboard`

## Пояснение
Сообщения в правой части экрана
![scoreboard](/scoreboard.png)

## Редактирование
```yaml
<message.scoreboard>
```

### По умолчанию
```yaml
scoreboard:
  enable: false
  random: true
  ticker:
    enable: true
    period: 100
```

## Параметры

- [Локализация](/ru/localizations/ru_ru/message/scoreboard/)
- [Права](/ru/permission/message/scoreboard/)

### `enable`
- По умолчанию `false`

Включает или выключает работоспособность модуля

### `ticker`
- `enable: true`

Если включено, то изменяет сообщения каждый промежуток времени

- `period: 100`

Как часто в [тиках](https://ru.minecraft.wiki/w/%D0%A2%D0%B0%D0%BA%D1%82) нужно изменять значение
