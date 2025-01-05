# Афк
Путь `message.yml > contact.afk`

## Пояснение
Игрок становится АФК, если ничего не делает какой-то промежуток времени
![afk global message](/afkglobalmessage.png)

Если человек АФК, то ему выдаётся определённый суффикс
![afk suffix](/afksuffix.png)


## Редактирование
```yaml
<message.contact.afk>
```

### По умолчанию
```yaml
afk:
  enable: true
  range: -1
  delay: 3000
  ignore:
    - "afk"
  destination:
    type: CHAT
  ticker:
    enable: true
    period: 20
```

## Параметры

- [Локализация](/docs/localizations/ru_ru/message/contact/afk/)
- [Права](/docs/permission/message/contact/afk/)

<!--@include: @/parts/enable.md-->
<!--@include: @/parts/range.md-->

### `delay`

Сколько времени в [тиках](https://ru.minecraft.wiki/w/%D0%A2%D0%B0%D0%BA%D1%82) игрок ничего не должен делать, чтобы встать в АФК

### `ignore`

Список действий, которые игнорируются и не влияют на режим АФК

| Действия, которые можно игнорировать |
|--------------------------------------|
| Любые названия комманд               |
| `chat` - когда игрок пишет в чат     |
| `quit` - когда игрок выходит         |

::: tip Например
Если я впишу в список комманду `tell` и игрок будет в режиме АФК, то он сможет использовать комманду `tell` и его не выкинет с режима АФК
:::

<!--@include: @/parts/destination.md-->
<!--@include: @/parts/ticker.md-->