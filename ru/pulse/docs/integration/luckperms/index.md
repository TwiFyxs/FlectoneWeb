# LuckPerms
Путь `integration.yml >luckperms`

## Пояснение
Интеграция с LuckPerms позволяет:
- Проверять права у **оффлайн игроков** 
- Сортировать игроков в ТАБе по [весу группы](https://luckperms.net/wiki/Weight)

## Редактирование
```yaml
<integration.luckperms>
```

### По умолчанию
```yaml
luckperms:
  enable: true
  tab-sort: false
```

## Параметры

- [Права](/docs/permission/integration/luckperms/)

<!--@include: @/parts/enable.md-->

### `tab-sort`

Включает или выключает сортировку в ТАБе по [весу группы](https://luckperms.net/wiki/Weight)

