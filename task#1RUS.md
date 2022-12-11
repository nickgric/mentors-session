# Поиск изображений

Напиши приложение поиска изображений по ключевому слову. Превью рабочего
приложению

[![Превью](https://i.gyazo.com/76384ee7d41664406ee52acb77351f07.jpg)](https://gyazo.com/76384ee7d41664406ee52acb77351f07)

Создай компоненты `<SearchForm>`, `<ImageCard>`, `<Button>` и `<Modal>`. Для
создание сетки используй styled-components `<Grid>` и `<GridItem>`

> Здесь сами файлы [Grid](./src/components/Grid/Grid.styled.jsx)

## Инструкция Pexels API

Для HTTP-запросов используй публичный сервис поиска изображений
[ Pexels](https://www.pexels.com/api/documentation/). Зарегистрируйся и получи
частный ключ доступа.

Пример HTTP запроса.

```js
import axios from 'axios';

const API_KEY = '';
axios.defaults.baseURL = 'https://api.pexels.com/v1/';
axios.defaults.headers.common['Authorization'] = API_KEY;
axios.defaults.params = {
   orientation: 'landscape',
   per_page: 15,
};
```

Pexels API поддерживает пагинацию, по умолчанию параметр `page` равен `1`.
Пусть в ответе поступает по 15 объектов, установленных в параметре `per_page`.
Не забудь, что при поиске по новому ключевому слову необходимо сбрасывать
значение `page` до `1`.

В ответ от API приходит массив объектов, в которых тебе интересны только следующие
свойства.

- `id` – уникальный идентификатор
- `avg_color` - цвет фотографии,
- `alt` - описание фото,
- `src` - объект с размерами картинок, нам интересен размер `large`

## Описание компонента `<SearchForm>`

Компонент принимает один проп `onSubmit` - функцию для передачи значения инпута
во время самбита формы. Он будет иметь следующую структуру.

``jsx
<SearchFormStyled>
   <FormBtn type="submit">
     <FiSearch size="16px" />
   </FormBtn>
   <InputSearch
     placeholder="What do you want to write?"
     name="search"
     required
     autoFocus
   />
</SearchFormStyled>
```

## Описание компонента галереи `<Grid/>`

Список карт изображений. Создает компонент следующей структуры.

``jsx
<Grid>
   {/*
     Набор <CardItem></CardItem> с изображениями
     */}
</Grid>
```

## Описание компонента `<GridItem>`

Компонент списка с изображением. Создает компонент следующей структуры.

``jsx
<GridItem>
   <CardItem>
     <img src="" alt="" />
   </CardItem>
</GridItem>
```

## Описание компонента `<Button>`

При нажатии на кнопку `Load more` должна подгружаться следующая порция
изображений и рендеров вместе с предыдущими. Кнопка должна рендериться только
тогда, когда есть какие-либо загруженные изображения. Если массив изображений пуст, кнопка
не рендерится.
