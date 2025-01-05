# Бренд
Путь `message.yml > module.server.brand`

## Пояснение
Модуль, отвечающий за сообщение бренда в F3
![brand](/brand.png)

## Редактирование
```yaml
<message.module.server.brand>
```

### По умолчанию
```yaml
brand:
  enable: true
  random: true
  destination:
    type: BRAND
  ticker:
    enable: true
    period: 100
```

## Параметры

- [Локализация](/docs/localizations/ru_ru/message/brand/)
- [Права](/docs/permission/message/brand/)

<!--@include: @/parts/enable.md-->
<!--@include: @/parts/random.md-->
<!--@include: @/parts/destination.md-->
<!--@include: @/parts/ticker.md-->