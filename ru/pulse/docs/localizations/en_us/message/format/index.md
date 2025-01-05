# Форматирование
Путь `localizations > en_us.yml > message.format`

## Пояснение
Сообщения, которые форматируются

## Редактирование
```yaml
<en_us.message.format>
```

### По умолчанию
```yaml
format:
  tags:
    PING: "<fcolor:2><ping></fcolor>"
    TPS: "<fcolor:2><tps></fcolor>"
    ONLINE: "<fcolor:2><online></fcolor>"
    COORDS: "<fcolor:2><x> <y> <z></fcolor>"
    STATS: "<color:#ff7171><hp>♥</color> <color:#3de0d8><armor>🛡 <color:#e33059><attack>🗡 <color:#4eff52><exp>⏺ <color:#f0a01f><food>🍖"
    SKIN: "<image:\"<message>\"><u>👨 Skin</u></image>"
    ITEM: "<fcolor:2>[<message>]</fcolor>"
    URL: "<click:open_url:\"<message>\"><hover:show_text:\"<fcolor:2>Open url <br><u><message>\"><fcolor:2><u>🗗 Url</u></fcolor:2></hover></click>"
    IMAGE: "<image:\"<message>\"><u>🖃 Image</u></image>"
```

## Параметры

- [Сообщения](/docs/message/format/)
- [Права](/docs/permission/message/format/)

### tags

::: details Настройка тегов
#### `url`

Сообщение, если это ссылка
![url](/url.png)

#### `IMAGE`

Сообщение, если это изображение
![image](/image.png)

#### `PING`

Сообщение, если это пинг
![ping](/ping.png)

#### `TPS`

Сообщение, если это ТПС
![tps](/tps.png)

#### `ONLINE`

Сообщение, если это онлайн
![online](/online.png)

#### `COORDS`

Сообщение, если это координаты
![coords](/coords.png)

#### `STATS`

Сообщение, если это статистика
![stats](/stats.png)

#### `SKIN`

Сообщение, если это скин
![skin](/skin.png)

#### `ITEM`

Сообщение, если это предмет
![item](/item.png)
:::