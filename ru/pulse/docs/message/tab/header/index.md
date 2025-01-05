# Верхнее
Путь `message.yml > module.server.tab.header`

## Пояснение
Модуль, отвечающий за текст в верхней части ТАБа
![header](/header.png)

## Редактирование
```yaml
<message.module.server.tab.header>
```

### По умолчанию
```yaml
header:
  enable: true
  random: true
  destination:
    type: TAB_HEADER
  ticker:
    enable: true
    period: 100
```

## Параметры

- [Локализация](/docs/localizations/ru_ru/message/tab/header/)
- [Права](/docs/permission/message/tab/header/)

<!--@include: @/parts/enable.md-->
<!--@include: @/parts/random.md-->
<!--@include: @/parts/destination.md-->
<!--@include: @/parts/ticker.md-->