# Стуки
Путь `message.yml > contact.knock`

## Пояснение
Стуки создаются с помощью **ШИФТ** и **ЛКМ** по конкретному блоку, производя звук

## Редактирование
```yaml
<message.contact.knock>
```

### По умолчанию
```yaml
knock:
  enable: false
  cooldown:
    enable: false
  types:
    GLASS:
      enable: true
      type: "BLOCK_GLASS_PLACE:1:1"
    DOOR:
      enable: true
      type: "BLOCK_WOOD_PLACE:1:1"
```

## Параметры

- [Права](/docs/permission/message/contact/knock/)

<!--@include: @/parts/enable.md-->
<!--@include: @/parts/cooldown.md-->

### `type`

Список названий блоков и звуков стука

Можно создавать свои стуки и название блока может быть неполным, а лишь содержать ключевое слово

::: tip Например я хочу сделать стук для всех видов стекла
Тогда я напишу название `GLASS`, потому что оно встречается во всех названиях стёкл

```yaml
GLASS:
  enable: true
  type: "BLOCK_GLASS_PLACE:1:1"
```

<!--@include: @/parts/sound.md-->