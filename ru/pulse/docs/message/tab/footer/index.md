# Нижнее
Путь `message.yml > module.server.tab.footer`

## Пояснение
Модуль, отвечающий за текст в нижней части ТАБа
![footer](/footer.png)

## Редактирование
```yaml
<message.module.server.tab.footer>
```

### По умолчанию
```yaml
footer:
  enable: true
  random: true
  destination:
    type: TAB_HEADER
  ticker:
    enable: true
    period: 100
```

## Параметры

- [Локализация](/docs/localizations/ru_ru/message/tab/footer/)
- [Права](/docs/permission/message/tab/footer/)

<!--@include: @/parts/enable.md-->
<!--@include: @/parts/random.md-->
<!--@include: @/parts/destination.md-->
<!--@include: @/parts/ticker.md-->