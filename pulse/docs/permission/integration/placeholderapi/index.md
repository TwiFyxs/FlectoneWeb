# PlacehodelAPI
Путь `permission.yml > integration.placeholderapi`

## Пояснение
Категория, отвечающая за настройку прав у интеграции PlaceholderAPI

## Редактирование
```yaml
<permission.integration.placeholderapi>
```

### По умолчанию
```yaml
placeholderapi:
  name: "flectonepulse.module.integration.placeholderapi"
  type: TRUE
  use:
    name: "flectonepulse.module.integration.placeholderapi.use"
    type: OP
```

## Параметры

- [Интеграция](/docs/integration/placeholderapi/)

<!--@include: @/parts/permission/permissionTier3.md-->

### `use`

Право для использования плейсхолдеров из PlaceholderAPI

::: details Настройка
<!--@include: @/parts/permission/permissionTier4.md-->
:::


